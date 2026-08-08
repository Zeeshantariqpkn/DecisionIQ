interface HealthScoreGaugeProps {
  score: number;
  size?: number;
}

export function HealthScoreGauge({ score, size = 160 }: HealthScoreGaugeProps) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const strokeWidth = 10;

  const getColor = (s: number) => {
    if (s >= 80) return '#10B981';
    if (s >= 60) return '#F59E0B';
    return '#EF4444';
  };

  const getLabel = (s: number) => {
    if (s >= 80) return 'Excellent';
    if (s >= 60) return 'Good';
    if (s >= 40) return 'Fair';
    return 'At Risk';
  };

  const color = getColor(score);
  const center = size / 2;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-100 dark:text-slate-700"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform={`rotate(-90 ${center} ${center})`}
          className="transition-all duration-1000 ease-out"
        />
        <text
          x={center}
          y={center - 6}
          textAnchor="middle"
          className="text-3xl font-bold"
          fill="currentColor"
        >
          {score}
        </text>
        <text
          x={center}
          y={center + 18}
          textAnchor="middle"
          className="text-xs"
          fill="currentColor"
          style={{ fill: color }}
        >
          {getLabel(score)}
        </text>
      </svg>
    </div>
  );
}
