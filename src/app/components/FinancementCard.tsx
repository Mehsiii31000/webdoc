interface FinancementCardProps {
  title: string;
  amount: string;
  description: string;
  link?: string;
}

export function FinancementCard({ title, amount, description, link }: FinancementCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-l-4 border-[#1A7A8A]">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h4
            className="text-[#1B2A3B]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '16px' }}
          >
            {title}
          </h4>
          <span className="text-[#1A7A8A] font-bold" style={{ fontSize: '18px' }}>
            {amount}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed" style={{ fontSize: '13px' }}>
          {description}
        </p>
        {link ? (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-[#1A7A8A] font-semibold hover:underline transition-all flex items-center gap-1" 
            style={{ fontSize: '13px' }}
          >
            En savoir plus
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        ) : (
          <button className="self-start text-[#1A7A8A] font-semibold hover:text-[#1d8a9c] transition-colors flex items-center gap-1" style={{ fontSize: '13px' }}>
            En savoir plus
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}