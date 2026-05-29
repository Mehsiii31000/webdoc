import { Link } from 'react-router';

export function Footer() {
  return (
    <footer id="about" className="bg-[#161b22] border-t border-[#30363d] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* À propos */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#006666] rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-white">VE</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Vie Étudiante</h3>
                <p className="text-[#8b949e]">IUT Paul Sabatier</p>
              </div>
            </div>

            <p className="text-[#8b949e] mb-6">
              Ce webdocumentaire a été créé par des étudiants, pour des étudiants. Pas de pub. Pas de
              compte. Tout est gratuit et accessible à tous.
            </p>

            <a
              href="https://www.iut-tlse3.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white rounded-lg font-semibold transition-colors"
            >
              IUT Paul Sabatier ↗
            </a>
          </div>

          {/* Thématiques */}
          <div>
            <h4 className="text-white font-bold mb-4">Thématiques</h4>
            <ul className="space-y-2">
              {[
                { path: '/budget', label: 'Budget' },
                { path: '/logement', label: 'Logement' },
                { path: '/sante-mentale', label: 'Santé mentale' },
                { path: '/alimentation', label: 'Alimentation' },
                { path: '/reussite', label: 'Réussite' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aides financières */}
          <div>
            <h4 className="text-white font-bold mb-4">Aides & Ressources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/aides" className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors">
                  Aides financières
                </Link>
              </li>
              <li>
                <Link to="/sources" className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors">
                  Sources
                </Link>
              </li>
              <li>
                <a
                  href="https://www.etudiant.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors"
                >
                  Étudiant.gouv.fr ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.crous-toulouse.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors"
                >
                  CROUS Toulouse ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#30363d]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8b949e] text-sm text-center md:text-left">
              © 2026 Vie Étudiante - IUT Paul Sabatier · Module R2.13
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/sources" className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors">
                Crédits
              </Link>
              <Link to="/sources" className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors">
                Sources
              </Link>
              <a href="#" className="text-[#8b949e] hover:text-[#3ECFCF] transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
