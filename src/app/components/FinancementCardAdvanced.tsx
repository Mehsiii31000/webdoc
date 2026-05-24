import { useState } from 'react';
import { motion } from 'motion/react';

interface FinancementCardAdvancedProps {
  title: string;
  amount: string;
  description: string;
  link?: string;
  howToApply?: string[];
}

export function FinancementCardAdvanced({
  title,
  amount,
  description,
  link,
  howToApply
}: FinancementCardAdvancedProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-[#161b22] rounded-2xl overflow-hidden border border-[#30363d] hover:border-[#008080] transition-all duration-500"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="text-white text-xl font-bold mb-2">
              {title}
            </h4>
          </div>
          <div className="bg-gradient-to-br from-[#008080] to-[#3ECFCF] text-white px-4 py-2 rounded-xl font-bold text-center min-w-[100px]">
            <div className="text-xs opacity-80">Jusqu'à</div>
            <div className="text-lg">{amount}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#8b949e] leading-relaxed mb-4">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#008080] hover:bg-[#00a0a0] text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
              style={{ fontSize: '14px' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Accéder au site officiel
            </a>
          )}

          {howToApply && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full border-2 border-[#008080] text-[#008080] hover:bg-[#008080] hover:text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
              style={{ fontSize: '14px' }}
            >
              <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Comment en bénéficier ?
            </button>
          )}
        </div>

        {/* Expandable Section */}
        {isExpanded && howToApply && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-[#30363d]"
          >
            <h5 className="font-bold text-white mb-3">
              📋 Étapes à suivre :
            </h5>
            <ol className="space-y-2">
              {howToApply.map((step, index) => (
                <li key={index} className="flex gap-3 text-[#8b949e]">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#008080] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="flex-1">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
