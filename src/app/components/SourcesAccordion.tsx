import { useState } from 'react';

interface Source {
  title: string;
  url: string;
  author: string;
  date: string;
}

interface SourcesAccordionProps {
  sources: Source[];
}

export function SourcesAccordion({ sources }: SourcesAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-16">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[#161b22] border border-[#30363d] hover:border-[#008080] rounded-xl transition-all"
      >
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-[#3ECFCF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-xl font-bold text-white">Sources citées</span>
        </div>
        <svg
          className={`w-6 h-6 text-[#8b949e] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="overflow-hidden transition-all duration-300">
          <div className="p-6 bg-[#161b22]/50 border border-[#30363d] border-t-0 rounded-b-xl">
            <div className="space-y-4">
              {sources.map((source, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-[#30363d] last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-[#008080]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#3ECFCF] font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{source.title}</h4>
                    <p className="text-sm text-[#8b949e] mb-2">
                      {source.author} • {source.date}
                    </p>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#3ECFCF] hover:text-[#008080] underline inline-flex items-center gap-1"
                    >
                      Accéder à la source
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
