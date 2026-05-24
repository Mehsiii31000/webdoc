import { motion } from 'motion/react';

interface InteractiveThemeCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  duration?: string;
  episodeCount?: number;
  onClick?: () => void;
}

export function InteractiveThemeCard({
  title,
  description,
  icon,
  gradient,
  duration,
  episodeCount,
  onClick
}: InteractiveThemeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
      className="group relative bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden hover:border-[#008080] transition-all duration-500 cursor-pointer"
    >
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

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#008080] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
