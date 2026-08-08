import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are DecisionIQ, an AI decision-intelligence assistant embedded in a business analytics platform.
You help executives and analysts understand their business data, spot trends, and make data-driven decisions.
Be concise, concrete, and structured. Use short paragraphs, bullet points, and markdown tables when they add clarity.
When the user asks about their company's data (revenue, churn, regions, products, expenses, growth), ground your answer in
the metrics they reference and always end with 1-3 actionable recommendations. If asked something outside business
analytics, politely steer the conversation back to their business data.`;

interface MLResponse {
  choices?: Array<{ message?: { content?: string } }>;
  error?: { message?: string };
}

Deno.serve(async (req: Request) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Verify JWT when a token is present (real Supabase auth sessions).
    // Publishable keys (sb_publishable_...) are NOT user JWTs — the Supabase
    // client sends them automatically when no user session exists, so they are
    // allowed through and the ML call still runs for anonymous/demo clients.
    // If no Authorization header is sent at all, the request is also allowed.
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      if (!token.startsWith("sb_publishable_")) {
        const supabase = createClient(
          Deno.env.get("SUPABASE_URL")!,
          Deno.env.get("SUPABASE_ANON_KEY")!,
          { global: { headers: { Authorization: authHeader } } },
        );
        const { data: userData, error: userError } = await supabase.auth.getUser(token);
        if (userError || !userData?.user) {
          return new Response(
            JSON.stringify({ error: "Unauthorized", message: "Invalid or expired session." }),
            { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } },
          );
        }
      }
    }

    // ML provider secret — never exposed to the browser.
    const mlApiKey = Deno.env.get("OPENAI_API_KEY");
    if (!mlApiKey) {
      return new Response(
        JSON.stringify({
          error: "ML_API_NOT_CONFIGURED",
          message: "The ML provider API key is not configured. Add OPENAI_API_KEY in Supabase Edge Function secrets.",
        }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Bad request", message: "A non-empty 'messages' array is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const model = Deno.env.get("ML_MODEL") ?? "gpt-4o-mini";
    const mlResponse = await fetch("https://api.aimlapi.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mlApiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 900,
        temperature: 0.7,
      }),
    });

    const data: MLResponse = await mlResponse.json();

    if (!mlResponse.ok) {
      return new Response(
        JSON.stringify({
          error: "ML_PROVIDER_ERROR",
          message: data?.error?.message ?? "The ML provider rejected the request.",
        }),
        { status: mlResponse.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const reply = data?.choices?.[0]?.message?.content?.trim() ?? "";
    if (!reply) {
      return new Response(
        JSON.stringify({ error: "EMPTY_REPLY", message: "The ML provider returned an empty response." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "INTERNAL",
        message: err instanceof Error ? err.message : "Unknown error",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
