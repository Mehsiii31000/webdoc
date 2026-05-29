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

  const colorHex = {
    teal: '#008080',
    orange: '#E8731A',
    red: '#f85149',
    green: '#3fb950'
  };

  return (
    <div className={`grid grid-cols-2 ${gridCols[columns]} gap-6 place-items-center`}>
      {stats.map((stat, index) => {
        const color = stat.color ? colorHex[stat.color] : '#30363d';
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className="w-32 h-32 rounded-full bg-[#161b22] border-2 flex items-center justify-center"
              style={{ borderColor: color }}
            >
              {typeof stat.value === 'number' ? (
                <StatsCounter value={stat.value} label="" suffix={stat.suffix || ''} />
              ) : (
                <div className="text-2xl font-bold" style={{ color }}>
                  {stat.value}
                </div>
              )}
            </div>
            <p className="text-white font-semibold mt-3 px-2">{stat.label}</p>
            {stat.description && (
              <p className="text-xs text-[#8b949e] mt-1 px-2">{stat.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
