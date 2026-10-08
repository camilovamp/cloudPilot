import type { TimePeriod } from "../types/dashboard";

type PeriodSelectorProps = {
    selectedPeriod: TimePeriod;
    onPeriodChange: (period:TimePeriod) => void;
};

const periods = [
    {value:'7d',label:'7 Days'},
    {value:'30d',label:'30 Days'},
    {value:'90d',label:'90 Days'},
    {value:'12m',label:'12 Months'},
] as const;

export function PeriodSelector({
    selectedPeriod,
    onPeriodChange,
}:PeriodSelectorProps){
    return (
        <div>
            {periods.map((period)=>(
                <button 
                key={period.value}
                type="button"
                onClick={() => onPeriodChange(period.value)} 
                disabled={selectedPeriod===period.value}
                >
                {period.label}
            </button>
            ))}
            <p>Selected Period: {selectedPeriod}</p>
        </div>
    )
}
