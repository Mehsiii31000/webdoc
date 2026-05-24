import { ReactNode } from 'react';

interface ThemeCardProps {
  title: string;
  description: string;
  color: string;
  variant?: 'default' | 'prioritaire';
  onClick?: () => void;
  badge?: boolean;
}

export function ThemeCard({ title, description, color, variant = 'default', onClick, badge }: ThemeCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer rounded-xl p-6 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105 group"
      style={{ backgroundColor: color }}
    >
      {badge && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#E8731A] rounded-full animate-pulse"></div>
      )}
      <div className="flex flex-col gap-3">
        <h3
          className="text-white uppercase tracking-wide"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '18px' }}
        >
          {title}
        </h3>
        <p
          className="text-white/90 leading-relaxed"
          style={{ fontSize: '14px', lineHeight: '1.6' }}
        >
          {description}
        </p>
        <div className="mt-2 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
          <span style={{ fontSize: '14px' }}>Explorer</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
