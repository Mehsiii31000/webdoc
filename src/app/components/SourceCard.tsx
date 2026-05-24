interface SourceCardProps {
  title: string;
  type: string;
  description: string;
  label: string;
}

export function SourceCard({ title, type, description, label }: SourceCardProps) {
  return (
    <div className="bg-[#1B2A3B] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 self-start">
          <span
            className="px-3 py-1 bg-[#3ECFCF]/20 text-[#3ECFCF] rounded uppercase tracking-wider"
            style={{ fontSize: '12px', fontWeight: 700 }}
          >
            {label}
          </span>
        </div>
        <h3
          className="text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '20px' }}
        >
          {title}
        </h3>
        <p className="text-[#E0E0E0] leading-relaxed" style={{ fontSize: '14px' }}>
          {description}
        </p>
        <p className="text-white/60 italic" style={{ fontSize: '13px' }}>
          {type}
        </p>
        <button className="self-start border-2 border-[#3ECFCF] text-[#3ECFCF] px-6 py-2 rounded uppercase tracking-wider hover:bg-[#3ECFCF] hover:text-[#1B2A3B] transition-all duration-300" style={{ fontSize: '13px', fontWeight: 700 }}>
          Voir la source
        </button>
      </div>
    </div>
  );
}
