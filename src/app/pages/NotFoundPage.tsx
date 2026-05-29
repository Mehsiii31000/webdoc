import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div
        className="text-center max-w-2xl"
      >
        <div className="text-9xl font-bold text-[#008080] mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-xl text-[#8b949e] mb-8">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-xl transition-all hover:scale-105"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
