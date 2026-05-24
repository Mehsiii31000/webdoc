interface TestimonialCardLongProps {
  quote: string;
  name: string;
  age: number;
  field: string;
  city: string;
  initials: string;
  color?: string;
}

export function TestimonialCardLong({
  quote,
  name,
  age,
  field,
  city,
  initials,
  color = '#008080'
}: TestimonialCardLongProps) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
      <div className="flex items-start gap-6">
        <div
          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div className="flex-1">
          <p className="text-lg text-white italic leading-relaxed mb-6">
            "{quote}"
          </p>
          <div className="flex items-center gap-2">
            <p className="font-bold" style={{ color }}>
              - {name}, {age} ans
            </p>
            <span className="text-[#8b949e]">•</span>
            <p className="text-[#8b949e]">{field}, {city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
