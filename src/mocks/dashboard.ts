import type {
  DashboardMetric,
  TimePeriod,
} from '../types/dashboard';

export const dashboardMetrics: Record<
  TimePeriod,
  DashboardMetric[]
> = {
  '7d': [
    {
      id: 1,
      title: 'Weekly Spend',
      value: '$10,240',
      change: '4.2%',
      trend: 'up',
    },
    {
      id: 2,
      title: 'Potential Savings',
      value: '$2,180',
      change: '2.1%',
      trend: 'down',
    },
    {
      id: 3,
      title: 'Active Resources',
      value: '1,276',
      change: '1.3%',
      trend: 'up',
    },
    {
      id: 4,
      title: 'Optimization Opportunities',
      value: '19',
    },
  ],

  '30d': [
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
  ],

  '90d': [
    {
      id: 1,
      title: 'Quarterly Spend',
      value: '$121,540',
      change: '12.7%',
      trend: 'up',
    },
    {
      id: 2,
      title: 'Potential Savings',
      value: '$27,890',
      change: '5.4%',
      trend: 'down',
    },
    {
      id: 3,
      title: 'Active Resources',
      value: '1,301',
      change: '4.8%',
      trend: 'up',
    },
    {
      id: 4,
      title: 'Optimization Opportunities',
      value: '31',
    },
  ],

  '12m': [
    {
      id: 1,
      title: 'Annual Spend',
      value: '$487,260',
      change: '16.2%',
      trend: 'up',
    },
    {
      id: 2,
      title: 'Potential Savings',
      value: '$103,750',
      change: '7.8%',
      trend: 'down',
    },
    {
      id: 3,
      title: 'Active Resources',
      value: '1,342',
      change: '9.2%',
      trend: 'up',
    },
    {
      id: 4,
      title: 'Optimization Opportunities',
      value: '47',
    },
  ],
};