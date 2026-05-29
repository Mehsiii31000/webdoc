import { useEffect, useRef, useState } from 'react';

interface PieData {
  label: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieData[];
  title: string;
  source?: string;
}

export function PieChart({ data, title, source }: PieChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const circumference = 2 * Math.PI * 80;

  let accumulatedOffset = 0;

  return (
    <div ref={chartRef} className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
      <h3 className="text-xl font-bold text-[#3ECFCF] mb-6">{title}</h3>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* SVG Circle */}
        <div className="flex-shrink-0">
          <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-56 md:h-56 transform -rotate-90">
            {data.map((item, index) => {
              const segmentLength = (item.value / total) * circumference;
              const segment = (
                <circle
                  key={index}
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="40"
                  strokeDasharray={`${segmentLength} ${circumference}`}
                  strokeDashoffset={-accumulatedOffset}
                  style={{
                    transition: 'stroke-dashoffset 1.2s ease-out',
                    strokeDashoffset: isVisible ? -accumulatedOffset : -circumference
                  }}
                />
              );
              accumulatedOffset += segmentLength;
              return segment;
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-white text-sm flex-1">{item.label}</span>
              <span className="text-white font-bold text-sm">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {source && (
        <p className="text-xs text-[#8b949e] mt-6">Source : {source}</p>
      )}
    </div>
  );
}
