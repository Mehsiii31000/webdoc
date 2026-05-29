interface BarData {
  label: string;
  value: number;
  color: string;
}

interface HorizontalBarChartProps {
  data: BarData[];
  maxValue?: number;
}

export function HorizontalBarChart({ data, maxValue }: HorizontalBarChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">{item.label}</span>
            <span className="text-[#8b949e] font-bold">{item.value}%</span>
          </div>
          <div className="w-full bg-[#0d1117] rounded-full h-6 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-3"
              style={{
                width: `${(item.value / max) * 100}%`,
                backgroundColor: item.color
              }}
            >
              <span className="text-white text-xs font-bold">{item.value}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
