import { Link, useNavigate } from 'react-router';
import { useProgress, chapters } from '../context/ProgressContext';

interface PageLink {
  title: string;
  href: string;
}

interface PageNavigationProps {
  previousPage?: PageLink;
  nextPage?: PageLink;
  hideHomeButton?: boolean;
}

export function PageNavigation({ previousPage, nextPage, hideHomeButton = false }: PageNavigationProps) {
  const { unlockChapter } = useProgress();
  const navigate = useNavigate();

  const handleNextClick = (e: React.MouseEvent) => {
    if (nextPage) {
      e.preventDefault();
      const nextIndex = chapters.findIndex(ch => ch.path === nextPage.href);
      if (nextIndex !== -1) {
        unlockChapter(nextIndex);
        // Utiliser setTimeout pour s'assurer que l'état est mis à jour avant la navigation
        setTimeout(() => navigate(nextPage.href), 0);
      }
    }
  };

  const gridCols = hideHomeButton ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3';

  return (
    <>
      {/* Navigation en bas de page (inline) */}
      <div className={`grid ${gridCols} gap-6 mt-20 mb-8`}>
        {previousPage && (
          <Link to={previousPage.href}>
            <div className="flex items-center gap-4 p-6 bg-[#161b22] border border-[#30363d] hover:border-[#008080] rounded-lg transition-all group">
              <div className="w-10 h-10 bg-[#008080]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-[#008080]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#8b949e] mb-1">Précédent</p>
                <p className="text-white font-semibold text-sm">
                  {previousPage.title}
                </p>
              </div>
            </div>
          </Link>
        )}

        {!hideHomeButton && (
          <Link to="/" className={!previousPage && !nextPage ? 'md:col-start-2' : ''}>
            <div className="flex items-center justify-center gap-3 p-6 bg-[#161b22] border border-[#30363d] hover:border-[#008080] rounded-lg transition-all group">
              <div className="w-10 h-10 bg-[#008080]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-[#008080]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">
                  Accueil
                </p>
              </div>
            </div>
          </Link>
        )}

        {nextPage && (
          <Link to={nextPage.href} onClick={handleNextClick}>
            <div className="flex items-center justify-end gap-4 p-6 bg-[#161b22] border border-[#30363d] hover:border-[#008080] rounded-lg transition-all group">
              <div className="text-right">
                <p className="text-xs text-[#8b949e] mb-1">Suivant</p>
                <p className="text-white font-semibold text-sm">
                  {nextPage.title}
                </p>
              </div>
              <div className="w-10 h-10 bg-[#008080]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-[#008080]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Navigation fixe en bas (mobile friendly) */}
      {nextPage && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d1117] border-t border-[#30363d] md:hidden">
          <div className="px-4 py-3">
            <Link to={nextPage.href} onClick={handleNextClick}>
              <div className="flex items-center justify-between gap-3 p-4 bg-gradient-to-r from-[#008080] to-[#00a0a0] rounded-lg shadow-lg active:scale-[0.98] transition-transform">
                <div className="flex-1">
                  <p className="text-xs text-white/80 uppercase tracking-wider mb-1">Suivant</p>
                  <p className="text-white font-bold">
                    {nextPage.title}
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-white flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
