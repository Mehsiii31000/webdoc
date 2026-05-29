import { useLocation, Link } from 'react-router';
import { chapters, useProgress } from '../context/ProgressContext';

export function LinearProgressBar() {
  const location = useLocation();
  const { maxUnlockedIndex, isUnlocked } = useProgress();

  const currentChapterIndex = chapters.findIndex(ch => ch.path === location.pathname);
  const currentChapter = chapters[currentChapterIndex] || chapters[0];
  const progress = ((currentChapterIndex + 1) / chapters.length) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117] border-b border-[#30363d]">
      {/* Progress Bar */}
      <div className="h-1 bg-[#21262d] w-full">
        <div
          className="h-full bg-gradient-to-r from-[#008080] to-[#3ECFCF] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Chapter Info */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link to="/" className="w-8 h-8 bg-gradient-to-br from-[#008080] to-[#00a0a0] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
              <span className="text-white font-bold text-sm">VE</span>
            </Link>
            <span className="text-white font-bold text-sm hidden sm:inline">Vie Étudiante</span>
          </div>

          <div className="h-4 w-px bg-[#30363d] hidden sm:block" />

          <div className="text-sm">
            <span className="text-[#8b949e]">Chapitre {currentChapter.number}</span>
            <span className="text-white font-semibold ml-2">{currentChapter.title}</span>
          </div>
        </div>

        <div className="text-sm text-[#8b949e]">
          {currentChapterIndex + 1} / {chapters.length}
        </div>
      </div>

      {/* Chapter Dots (desktop only) */}
      <div className="hidden md:flex items-center justify-center gap-2 pb-3 px-6">
        {chapters.map((chapter, index) => {
          const unlocked = isUnlocked(chapter.path);
          
          return (
            <div
              key={chapter.path}
              className="flex items-center"
            >
              {unlocked ? (
                <Link to={chapter.path}>
                  <div
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer hover:scale-150 ${
                      index === currentChapterIndex
                        ? 'bg-[#3ECFCF] scale-150'
                        : 'bg-[#008080]'
                    }`}
                    title={chapter.title}
                  />
                </Link>
              ) : (
                <div
                  className="w-2 h-2 rounded-full transition-all bg-[#30363d] cursor-not-allowed opacity-50"
                  title={`Chapitre verrouillé: ${chapter.title}`}
                />
              )}
              
              {index < chapters.length - 1 && (
                <div
                  className={`w-8 h-0.5 ${
                    index < maxUnlockedIndex ? 'bg-[#008080]' : 'bg-[#30363d]'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
