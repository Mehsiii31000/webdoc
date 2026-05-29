import { createContext, useContext, useEffect, useState } from 'react';

export const chapters = [
  { path: '/', title: 'Accueil', number: 0 },
  { path: '/budget', title: 'Budget', number: 1 },
  { path: '/logement', title: 'Logement', number: 2 },
  { path: '/sante-mentale', title: 'Santé Mentale', number: 3 },
  { path: '/alimentation', title: 'Alimentation', number: 4 },
  { path: '/reussite', title: 'Réussite', number: 5 },
  { path: '/aides', title: 'Aides', number: 6 },
  { path: '/sources', title: 'Sources', number: 7 },
];

interface ProgressContextType {
  maxUnlockedIndex: number;
  unlockChapter: (index: number) => void;
  isUnlocked: (path: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [maxUnlockedIndex, setMaxUnlockedIndex] = useState(() => {
    const saved = localStorage.getItem('unlocked_chapter_index');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('unlocked_chapter_index', maxUnlockedIndex.toString());
  }, [maxUnlockedIndex]);

  const unlockChapter = (index: number) => {
    setMaxUnlockedIndex((prev) => Math.max(prev, index));
  };

  const isUnlocked = (path: string) => {
    const index = chapters.findIndex((ch) => ch.path === path);
    return index <= maxUnlockedIndex;
  };

  return (
    <ProgressContext.Provider value={{ maxUnlockedIndex, unlockChapter, isUnlocked }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
