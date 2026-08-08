import { createClient } from '@supabase/supabase-js';

// Publishable keys are safe to embed in client code — they are designed for browser use.
// The actual ML/OpenAI secret lives in the Supabase Edge Function environment.
const supabaseUrl = 'https://hfihncbzhqluaubjlhpr.supabase.co';
const supabasePublishableKey = 'sb_publishable_9XmWGeXQl0EVUWpdgklP4A_iGcHRYjy';

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
