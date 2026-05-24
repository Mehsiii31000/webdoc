import { StatsCounter } from './StatsCounter';

interface StatData {
  value: number | string;
  label: string;
  suffix?: string;
  description?: string;
  color?: 'teal' | 'orange' | 'red' | 'green';
}

interface StatCardGridProps {
  stats: StatData[];
  columns?: 2 | 3 | 4;
}

export function StatCardGrid({ stats, columns = 3 }: StatCardGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  const colorClasses = {
    teal: 'border-[#008080]',
    orange: 'border-[#E8731A]',
    red: 'border-[#f85149]',
    green: 'border-[#3fb950]'
  };

  return (
    <div className={`grid grid-cols-2 ${gridCols[columns]} gap-4`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center p-6 bg-[#161b22] border rounded-xl ${
            stat.color ? colorClasses[stat.color] : 'border-[#30363d]'
          }`}
        >
          {typeof stat.value === 'number' ? (
            <StatsCounter value={stat.value} label={stat.label} suffix={stat.suffix || ''} />
          ) : (
            <>
              <div className="text-4xl font-bold text-[#3ECFCF] mb-2">{stat.value}</div>
              <p className="text-white font-semibold">{stat.label}</p>
            </>
          )}
          {stat.description && (
            <p className="text-xs text-[#8b949e] mt-2">{stat.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
