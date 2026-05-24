interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  videoUrl?: string;
  imageUrl: string;
}

export function TestimonialCard({ name, role, quote, videoUrl, imageUrl }: TestimonialCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-[#1B2A3B] to-[#0F1419] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="relative p-8">
        {/* Quote */}
        <div className="mb-6">
          <svg className="w-12 h-12 text-[#008080] mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <p className="text-white text-lg leading-relaxed italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            "{quote}"
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#008080] to-[#3ECFCF] flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-bold" style={{ fontSize: '16px' }}>{name}</h4>
            <p className="text-[#E0E0E0] text-sm">{role}</p>
          </div>
        </div>

        {/* Video Button */}
        {videoUrl && (
          <button className="mt-6 w-full bg-[#008080] hover:bg-[#00a0a0] text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="font-semibold text-sm uppercase tracking-wide">Voir le témoignage</span>
          </button>
        )}
      </div>
    </div>
  );
}
