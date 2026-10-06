import { Header } from "./components/Header"
import { MetricCard } from "./components/MetricCard"
import {dasboardMetrics} from './mocks/dashboard'
function App() {
  return(
    <main>
      <Header/>
      <section>
        <h2>Cloud Overview</h2>
        <p>Your AWS infrastructure at a glance</p>
        <div>
          {dasboardMetrics.map((metric)=>(
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
