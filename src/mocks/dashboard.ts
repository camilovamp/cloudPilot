export type DasboardMetric = {
    id: number;
    title:string;
    value:string;
    change?:string;
    trend?:'up' | 'down' | 'neutral';
}

export const dasboardMetrics: DasboardMetric[] = [
  {
    id: 1,
    title: 'Monthly Spend',
    value: '$42,817',
    change: '8.4%',
    trend: 'up',
  },
  {
    id: 2,
    title: 'Potential Savings',
    value: '$9,420',
    change: '3.2%',
    trend: 'down',
  },
  {
    id: 3,
    title: 'Active Resources',
    value: '1,284',
    change: '2.1%',
    trend: 'up',
  },
  {
    id: 4,
    title: 'Optimization Opportunities',
    value: '23',
  },
];