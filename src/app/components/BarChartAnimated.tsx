import { useEffect, useRef, useState } from 'react';

interface BarData {
  label: string;
  value: number;
  color: string;
  secondValue?: number;
  secondColor?: string;
}

interface BarChartAnimatedProps {
  data: BarData[];
  title: string;
  source?: string;
  showPercentage?: boolean;
  maxValue?: number;
}

export function BarChartAnimated({ data, title, source, showPercentage = true, maxValue }: BarChartAnimatedProps) {
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

  const max = maxValue || Math.max(...data.map(d => Math.max(d.value, d.secondValue || 0)));

  return (
    <div ref={chartRef} className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
      <h3 className="text-xl font-bold text-[#3ECFCF] mb-6">{title}</h3>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center text-sm">
              <span className="text-white font-medium">{item.label}</span>
              {showPercentage && (
                <span className="text-[#8b949e] font-bold">{item.value}%</span>
              )}
            </div>

            {/* Primary bar */}
            <div className="w-full bg-[#30363d] rounded-full h-8 overflow-hidden relative">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-3"
                style={{
                  width: isVisible ? `${(item.value / max) * 100}%` : '0%',
                  backgroundColor: item.color
                }}
              >
                {!showPercentage && (
                  <span className="text-white text-xs font-bold whitespace-nowrap">
                    {item.value}{item.label.includes('€') ? '€' : ''}
                  </span>
                )}
              </div>

              {/* Secondary bar (for double bars) */}
              {item.secondValue !== undefined && (
                <div
                  className="absolute top-0 h-full rounded-full transition-all duration-1000 ease-out opacity-60"
                  style={{
                    width: isVisible ? `${(item.secondValue / max) * 100}%` : '0%',
                    backgroundColor: item.secondColor || '#8b949e',
                    left: 0
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {source && (
        <p className="text-xs text-[#8b949e] mt-6">Source : {source}</p>
      )}
    </div>
  );
}
