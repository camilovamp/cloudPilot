
import type { Trend } from '../../types/dashboard';

type MetricCardProps = {
  title: string;
  value: string;
  change?: string;
  trend?: Trend;
};

export function MetricCard({
  title,
  value,
  change,
  trend = 'neutral',
}: MetricCardProps) {
  return (
    <article className="metric-card">
      <h3 className="metric-title">{title}</h3>

      <p className="metric-value">{value}</p>

      {change && (
        <span className={`metric-change trend-${trend}`}>
          {trend === 'up' && '↑ '}
          {trend === 'down' && '↓ '}
          {change}
        </span>
      )}
    </article>
  );
}
