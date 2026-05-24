import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

interface NavBarProps {
  variant?: 'transparent' | 'scrolled' | 'solid';
}

export function NavBar({ variant = 'transparent' }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = variant === 'solid'
    ? 'bg-[#0d1117] shadow-lg'
    : (variant === 'scrolled' || isScrolled)
      ? 'bg-[#0d1117]/90 shadow-lg backdrop-blur-lg'
      : 'bg-transparent backdrop-blur-sm';

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#008080] to-[#00a0a0] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">VE</span>
            </div>
            <h1 className="text-white font-bold tracking-wider text-lg">
              Vie Étudiante
            </h1>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-white uppercase tracking-wider hover:text-[#3ECFCF] transition-colors relative group text-sm font-semibold"
              >
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3ECFCF] group-hover:w-full transition-all"></span>
              </Link>
              <button
                onClick={() => scrollToSection('themes')}
                className="text-white uppercase tracking-wider hover:text-[#3ECFCF] transition-colors relative group text-sm font-semibold"
              >
                Thématiques
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3ECFCF] group-hover:w-full transition-all"></span>
              </button>
              <Link
                to="/aides"
                className="text-white uppercase tracking-wider hover:text-[#3ECFCF] transition-colors relative group text-sm font-semibold"
              >
                Aides
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3ECFCF] group-hover:w-full transition-all"></span>
              </Link>
              <Link
                to="/sources"
                className="text-white uppercase tracking-wider hover:text-[#3ECFCF] transition-colors relative group text-sm font-semibold"
              >
                Sources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3ECFCF] group-hover:w-full transition-all"></span>
              </Link>
              <button
                onClick={() => scrollToSection('newsletter')}
                className="text-white uppercase tracking-wider hover:text-[#3ECFCF] transition-colors relative group text-sm font-semibold"
              >
                Newsletter
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3ECFCF] group-hover:w-full transition-all"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#3ECFCF] transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-[#161b22] border-l border-[#30363d] z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-white font-bold text-lg">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-[#8b949e] hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left px-4 py-3 text-white hover:bg-[#008080]/20 hover:text-[#3ECFCF] rounded-lg transition-colors font-semibold"
                  >
                    Accueil
                  </Link>
                  <button
                    onClick={() => scrollToSection('themes')}
                    className="text-left px-4 py-3 text-white hover:bg-[#008080]/20 hover:text-[#3ECFCF] rounded-lg transition-colors font-semibold"
                  >
                    Thématiques
                  </button>
                  <Link
                    to="/aides"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left px-4 py-3 text-white hover:bg-[#008080]/20 hover:text-[#3ECFCF] rounded-lg transition-colors font-semibold"
                  >
                    Aides
                  </Link>
                  <Link
                    to="/sources"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left px-4 py-3 text-white hover:bg-[#008080]/20 hover:text-[#3ECFCF] rounded-lg transition-colors font-semibold"
                  >
                    Sources
                  </Link>
                  <button
                    onClick={() => scrollToSection('newsletter')}
                    className="text-left px-4 py-3 text-white hover:bg-[#008080]/20 hover:text-[#3ECFCF] rounded-lg transition-colors font-semibold"
                  >
                    Newsletter
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
