export type TimePeriod = '7d' | '30d' | '90d' | '12m';
export type Trend = 
    | 'up'
    | 'down'
    | 'neutral';

export type DashboardMetric ={
    id: number;
    title: string;
    value: string;
    change?: string;
    trend?: Trend
}