import { useState } from "react";
import { Header } from "./components/Header";
import { MetricCard } from "./components/MetricCard";
import { PeriodSelector } from "./components/PeriodSelector";
import {dashboardMetrics} from './mocks/dashboard';
import type { TimePeriod } from "./types/dashboard";
function App() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('30d');
  return(
    <main>
      <Header/>
      <section>
        <h2>Cloud Overview</h2>
        <p>Your AWS infrastructure at a glance</p>
        <PeriodSelector
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
        />
        <div>
          {dashboardMetrics[selectedPeriod].map((metric)=>(
            <MetricCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              trend={metric.trend}
            />
          )) }
        </div>
      </section>
      
    </main>
  )



}

export default App
