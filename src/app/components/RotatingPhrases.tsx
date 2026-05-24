import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function RotatingPhrases() {
  const phrases = [
    "Tu n'es pas seul·e face au loyer qui explose",
    "Découvre ce que personne ne t'a jamais expliqué",
    "Reprends le contrôle de ton budget étudiant",
    "Toutes les aides auxquelles tu as droit"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-[#8b949e] max-w-3xl"
        >
          {phrases[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
