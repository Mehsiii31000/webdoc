import { ReactNode } from 'react';

interface ThematicSectionProps {
  number: number;
  title: string;
  accroche: string;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
  children: ReactNode;
}

export function ThematicSection({
  number,
  title,
  accroche,
  subtitle,
  ctaText,
  ctaAction,
  children
}: ThematicSectionProps) {
  return (
    <section className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#008080]/20 border-2 border-[#008080] flex items-center justify-center">
              <span className="text-xl font-bold text-[#3ECFCF]">{number}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          </div>

          <p className="text-2xl md:text-3xl font-bold mb-4 text-[#3ECFCF]">
            {accroche}
          </p>

          <p className="text-xl text-[#8b949e] mb-8 max-w-3xl">
            {subtitle}
          </p>

          {children}
        </div>
      </div>
    </section>
  );
}
