import { useEffect, useState } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatsCounter({ value, suffix = '', label }: StatsCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-[#3ECFCF] font-bold" style={{ fontSize: '36px', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      {label && <p className="text-white/80 text-sm uppercase tracking-wide mt-2">{label}</p>}
    </div>
  );
}
