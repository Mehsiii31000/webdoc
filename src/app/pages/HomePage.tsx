import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoIUT from '../../imports/PASTILLE_PROJ_ETUDIANT_TOULOUSE_BLEUE.png';

export function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      {/* Logo IUT en bas à gauche */}
      <a
        href="https://www.univ-tlse3.fr/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-[9999] group"
        title="Université Toulouse III - Paul Sabatier"
      >
        <ImageWithFallback
          src={logoIUT}
          alt="Logo IUT Toulouse - Projet Étudiant"
          className="w-24 h-24 transition-all duration-300 group-hover:scale-110 drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(0,128,128,0.6)]"
        />
      </a>

      {/* Background image */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjYW1wdXMlMjBncm91cCUyMGhhcHB5fGVufDF8fHx8MTc3NjQyMTA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Étudiants heureux sur le campus"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0d1117]/90 to-[#008080]/30" />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-8 px-6 py-3 bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] rounded-lg">
          <p className="text-[#8b949e] text-sm font-semibold">
            Webdocumentaire - BUT Informatique - IUT Paul Sabatier Toulouse
          </p>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-[#3ECFCF] to-[#E8731A] bg-clip-text text-transparent leading-tight">
          Vie Étudiante
        </h1>

        <p className="text-xl md:text-2xl text-[#8b949e] mb-16 max-w-3xl mx-auto leading-relaxed">
          Budget, logement, santé mentale, alimentation, réussite, aides financières.
          <br />
          Découvrez la réalité de la vie étudiante en 2024.
        </p>

        {/* Bouton CTA */}
        <Link to="/budget">
          <button className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#008080] to-[#00a0a0] hover:from-[#006666] hover:to-[#008080] text-white font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-2xl">
            <span>Commencer l'exploration</span>
            <svg
              className="w-6 h-6 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>

        {/* Stats rapides - cercles */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto place-items-center">
          {[
            { value: '6', label: 'Thématiques', color: '#008080' },
            { value: '919€', label: 'Budget mensuel moyen', color: '#E8731A' },
            { value: '37%', label: 'Boursiers CROUS', color: '#3fb950' },
            { value: '26%', label: 'En difficulté financière', color: '#d29922' }
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div
                className="w-28 h-28 rounded-full bg-[#161b22]/70 backdrop-blur-sm border-2 flex items-center justify-center"
                style={{ borderColor: stat.color }}
              >
                <p className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
              </div>
              <p className="text-[#8b949e] text-sm mt-3 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
