
import { useState } from 'react';

import { MetricCard } from '../../components/ui/MetricCard';
import { PeriodSelector } from '../../components/ui/PeriodSelector';

import { dashboardMetrics } from '../../mocks/dashboard';

import type { TimePeriod } from '../../types/dashboard';

export function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] =
    useState<TimePeriod>('30d');

  const metrics = dashboardMetrics[selectedPeriod];

  return (
    <section className="dashboard-page">
      <div className="dashboard-heading">
        <div>
          <h1>Cloud Overview</h1>
          <p>
            Monitor your AWS infrastructure spending
            and optimization opportunities.
          </p>
        </div>

        <PeriodSelector
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
        />
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
          />
        ))}
      </div>

      <section className="dashboard-panel">
        <h2>Cost Trend</h2>
        <p>
          Your AWS spending over the selected period.
          Interactive charts are coming in the next step.
        </p>
      </section>
    </section>
  );
}
