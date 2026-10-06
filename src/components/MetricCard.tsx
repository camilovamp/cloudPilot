type Trend = 'up' | 'down' | 'neutral';

type MetricCardProps ={
    title: string;
    value: string;
    change?: string;
    trend?:Trend
}

export function MetricCard({
    title,
    value,
    change,
    trend='neutral',
}: MetricCardProps){
    return(
        <article>
            <h3>{title}</h3>
            <p>{value}</p>
            {change && (
                <span>
                    {trend === 'up' && '↑ '}
                    {trend === 'down' && '↓ '}
                </span>
            )}
        </article>
    )

}