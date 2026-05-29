// Navigation linéaire simple - la barre de progression LinearProgressBar remplace la NavBar complexe
// Ce fichier est conservé pour compatibilité mais n'est plus utilisé dans le mode linéaire simple

import { Link } from 'react-router';

interface NavBarProps {
  variant?: 'transparent' | 'scrolled' | 'solid';
}

export function NavBar({ variant = 'transparent' }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d1117]/95 backdrop-blur-sm border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
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
      </div>
    </nav>
  );
}
