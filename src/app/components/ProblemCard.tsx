interface ProblemCardProps {
  number: number;
  title: string;
  description: string;
  borderColor?: string;
}

export function ProblemCard({ number, title, description, borderColor = '#f85149' }: ProblemCardProps) {
  return (
    <div
      className="bg-[#161b22] rounded-xl p-6 border-l-4 transition-all duration-300 hover:scale-[1.02]"
      style={{ borderLeftColor: borderColor }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
          style={{ backgroundColor: borderColor }}
        >
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-[#8b949e] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
