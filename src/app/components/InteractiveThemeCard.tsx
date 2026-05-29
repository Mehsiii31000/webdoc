interface InteractiveThemeCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  duration?: string;
  episodeCount?: number;
  chapterNumber?: number;
  onClick?: () => void;
  isLocked?: boolean;
}

export function InteractiveThemeCard({
  title,
  description,
  icon,
  gradient,
  duration,
  episodeCount,
  chapterNumber,
  onClick,
  isLocked = false
}: InteractiveThemeCardProps) {
  return (
    <div
      onClick={isLocked ? undefined : onClick}
      className={`group relative bg-[#161b22] border rounded-2xl overflow-hidden transition-all duration-300 ${isLocked ? 'border-[#30363d]/50 opacity-60 cursor-not-allowed' : 'border-[#30363d] hover:border-[#008080] cursor-pointer hover:scale-[1.02]'}`}
    >
      {/* Chapter Number Badge */}
      {chapterNumber !== undefined && (
        <div className="absolute top-4 right-4 z-10">
          <div className="w-10 h-10 rounded-full bg-[#008080] flex items-center justify-center">
            <span className="text-white font-bold text-sm">{chapterNumber}</span>
          </div>
        </div>
      )}

      {/* Gradient Overlay on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Icon Circle */}
      <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />

      <div className="relative p-8">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${gradient} shadow-md group-hover:shadow-lg transition-all duration-500`}
        >
          <span className="text-4xl">{icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-[#3ECFCF] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#8b949e] leading-relaxed mb-4">
          {description}
        </p>

        {/* Duration and Episodes */}
        {(duration || episodeCount) && (
          <div className="flex items-center gap-4 text-sm text-[#8b949e] mb-4">
            {duration && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{duration}</span>
              </div>
            )}
            {episodeCount && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{episodeCount} épisodes</span>
              </div>
            )}
          </div>
        )}

        {/* Arrow or Lock */}
        {isLocked ? (
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#30363d] flex items-center justify-center">
            <svg className="w-5 h-5 text-[#8b949e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        ) : (
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#008080] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
