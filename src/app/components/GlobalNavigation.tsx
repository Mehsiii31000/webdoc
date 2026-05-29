import { Link, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

interface Page {
  path: string;
  title: string;
}

const pages: Page[] = [
  { path: '/', title: 'Accueil' },
  { path: '/budget', title: 'Budget' },
  { path: '/logement', title: 'Logement' },
  { path: '/sante-mentale', title: 'Santé Mentale' },
  { path: '/alimentation', title: 'Alimentation' },
  { path: '/reussite', title: 'Réussite' },
  { path: '/aides', title: 'Aides Financières' },
  { path: '/temoignages', title: 'Témoignages' },
  { path: '/glossaire', title: 'Glossaire' },
  { path: '/carte-crous', title: 'Carte CROUS' },
  { path: '/sources', title: 'Sources' }
];

export function GlobalNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const currentPage = pages[currentIndex];

  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && previousPage) {
        navigate(previousPage.path);
      } else if (e.key === 'ArrowRight' && nextPage) {
        navigate(nextPage.path);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previousPage, nextPage, navigate]);

  if (currentIndex === -1) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d1117] border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-6 py-2">
        {/* Infos page */}
        <div className="text-center mb-3">
          <p className="text-white font-semibold text-sm">
            {currentPage.title}
          </p>
          <p className="text-[#8b949e] text-xs">
            {currentIndex + 1} / {pages.length}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {/* Bouton précédent */}
          {previousPage ? (
            <Link to={previousPage.path}>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border border-[#30363d] hover:border-[#008080] text-white rounded-lg transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden md:inline">Précédent</span>
              </button>
            </Link>
          ) : (
            <div className="w-24"></div>
          )}

          {/* Indicateurs de progression */}
          <div className="flex items-center gap-2">
            {pages.map((page, index) => (
              <Link key={page.path} to={page.path}>
                <button
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#008080] w-8'
                      : index < currentIndex
                      ? 'bg-[#3fb950]'
                      : 'bg-[#30363d] hover:bg-[#8b949e]'
                  }`}
                  title={page.title}
                />
              </Link>
            ))}
          </div>

          {/* Bouton suivant */}
          {nextPage ? (
            <Link to={nextPage.path}>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#008080] hover:bg-[#006666] text-white rounded-lg transition-all font-semibold">
                <span className="hidden md:inline">Suivant</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#008080] hover:bg-[#006666] text-white rounded-lg transition-all font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="hidden md:inline">Accueil</span>
              </button>
            </Link>
          )}
        </div>

        {/* Indication clavier */}
        {currentIndex === 0 && (
          <div className="text-center mt-3">
            <p className="text-[#8b949e] text-xs">
              Utilisez les flèches ← → pour naviguer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
