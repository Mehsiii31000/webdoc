import { Glossary } from '../components/Glossary';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatCardGrid } from '../components/StatCardGrid';
import { PieChart } from '../components/PieChart';
import { BarChartAnimated } from '../components/BarChartAnimated';
import { DataTable } from '../components/DataTable';
import { SourcesAccordion } from '../components/SourcesAccordion';
import { StressQuiz } from '../components/StressQuiz';

export function SanteMentalePage() {
  const stats = [
    { value: '1/3', label: 'Présentent des signes de détresse psychologique', description: 'OVE BSE 2024', color: 'red' as const },
    { value: 16, label: 'Ont eu des pensées suicidaires dans l\'année', suffix: '%', description: 'OVE BSE 2024', color: 'red' as const },
    { value: '1/3', label: 'Ont consulté un professionnel de santé mentale', description: 'OVE BSE 2024', color: 'teal' as const },
    { value: 74, label: 'Estiment leur état de santé bon ou très bon', suffix: '%', description: 'OVE BSE 2024', color: 'orange' as const },
    { value: 68, label: 'Se trouvent en situation de mal-être', suffix: '%', description: 'CSA 2023', color: 'orange' as const },
    { value: '1/30K', label: '1 psy pour 30 000 étudiants dans les universités', color: 'red' as const },
  ];

  const etatSanteMentale = [
    { label: 'Bien-être global', value: 31, color: '#3fb950' },
    { label: 'Stress ponctuel', value: 29, color: '#E8731A' },
    { label: 'Anxiété persistante', value: 21, color: '#d29922' },
    { label: 'Symptômes dépressifs', value: 12, color: '#f85149' },
    { label: 'Burn-out / épuisement', value: 7, color: '#b91c1c' },
  ];

  const evolutionTroubles = [
    { label: 'Signes détresse psy', value: 33, color: '#f85149' },
    { label: 'Pensées suicidaires', value: 16, color: '#E8731A' },
    { label: 'Mal-être général', value: 68, color: '#d29922' },
    { label: 'Ont consulté psy', value: 33, color: '#008080' },
  ];

  const troublesParProfil = [
    ['Profil', 'Risque santé mentale dégradée', 'Facteur multiplicateur'],
    ['Étudiant en précarité financière', <span className="text-[#f85149] font-bold">Très élevé</span>, '×2.5'],
    ['Étudiant travaillant {'>'} 20h/sem', <span className="text-[#f85149] font-bold">Élevé</span>, '×2.1'],
    ['Étudiant en mobilité internationale', <span className="text-[#E8731A] font-bold">Élevé</span>, '×2.0'],
    ['Étudiant isolé géographiquement', <span className="text-[#E8731A] font-bold">Élevé</span>, '×1.8'],
    ['Logement instable ou précaire', <span className="text-[#E8731A] font-bold">Élevé</span>, '×1.9'],
    ['Orientation subie (non choisie)', <span className="text-[#d29922] font-bold">Modéré-élevé</span>, '×1.7'],
    ['1re génération à l\'université', <span className="text-[#d29922] font-bold">Modéré</span>, '×1.6'],
  ];

  const pourquoiPasConsulter = [
    ['Raison évoquée', '% étudiants'],
    ['"Je ne savais pas que c\'était gratuit"', <strong className="text-white">41%</strong>],
    ['"J\'avais peur d\'être jugé·e"', <strong className="text-white">38%</strong>],
    ['"Je pensais que ça passerait tout seul"', <strong className="text-white">35%</strong>],
    ['"Les délais d\'attente étaient trop longs"', <strong className="text-white">29%</strong>],
    ['"Je n\'avais pas le temps"', <strong className="text-white">27%</strong>],
    ['"J\'avais honte"', <strong className="text-white">24%</strong>],
    ['"Je ne savais pas vers qui aller"', <strong className="text-white">22%</strong>],
  ];

  const ressourcesDisponibles = [
    ['Ressource', 'Tarif', 'Disponibilité', 'Contact'],
    ['PSY-Étudiant', <strong className="text-[#3fb950]">GRATUIT</strong>, '8 séances/an', 'santepsy.etudiant.gouv.fr'],
    ['Nightline France', <strong className="text-[#3fb950]">GRATUIT</strong>, '21h-2h30 (semaine)', 'nightline.fr / 01 88 32 12 32'],
    ['Fil Santé Jeunes', <strong className="text-[#3fb950]">GRATUIT</strong>, '8h-minuit', '0800 235 236'],
    ['SOS Amitié', <strong className="text-[#3fb950]">GRATUIT</strong>, '24h/24', '09 72 39 40 50'],
    ['Croix-Rouge Écoute', <strong className="text-[#3fb950]">GRATUIT</strong>, '8h-20h', '0800 858 858'],
    ['SUMPPS Univ.Toulouse', <strong className="text-[#3fb950]">GRATUIT</strong>, 'sur RDV', 'via ENT université'],
    ['Stop-Blues', <strong className="text-[#3fb950]">GRATUIT</strong>, '24h/24 (site)', 'stop-blues.fr'],
  ];

  const accesSoins = [
    { label: 'Signes détresse psychologique', value: 33, color: '#f85149' },
    { label: 'Ont consulté un professionnel', value: 33, color: '#3fb950' },
    { label: 'Restent sans aide (estimation)', value: 15, color: '#E8731A' },
  ];

  const sources = [
    {
      title: 'LMDE - Baromètre santé étudiante 2024',
      url: 'https://www.lmde.fr/actualite/barometre-sante-2024',
      author: 'La Mutuelle Des Étudiants',
      date: '2024'
    },
    {
      title: 'INSERM - Santé mentale en population générale 2022',
      url: 'https://www.inserm.fr/dossier/depression-et-troubles-depressifs/',
      author: 'Institut National de la Santé et de la Recherche Médicale',
      date: '2022'
    },
    {
      title: 'Observatoire national du suicide 2023',
      url: 'https://solidarites-sante.gouv.fr',
      author: 'Ministère de la Santé',
      date: '2023'
    },
    {
      title: 'PSY-Étudiant - Dispositif officiel',
      url: 'https://santepsy.etudiant.gouv.fr',
      author: 'Ministère de l\'Enseignement Supérieur',
      date: '2024'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <div
          className="mt-8 mb-16"
        >
          <div className="relative h-[40vh] rounded-2xl overflow-hidden mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop"
              alt="Santé mentale étudiante"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3fb950]/90 to-black/60 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Tu n'as pas à faire semblant
                  <br />
                  que tout va bien
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xl text-[#8b949e] italic text-center max-w-3xl mx-auto">
            Stress, anxiété, solitude, burn-out... La santé mentale des étudiants est un sujet sérieux.
            Parler, demander de l'aide, ce n'est pas une faiblesse. C'est du courage.
          </p>
        </div>

        {/* Stats */}
        <div
          className="mb-16"
        >
          <StatCardGrid stats={stats} columns={3} />
        </div>

        {/* Graphiques et données */}
        <div
          className="space-y-12 mb-16"
        >
          <PieChart
            data={etatSanteMentale}
            title="État de santé mentale des étudiants français en 2024"
            source="Estimation indicative - données à nuancer"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">Selon OVE BSE 2024 :</strong> 74% des étudiants estiment leur état de santé bon ou très bon, tandis qu'1/3 présente des signes de détresse psychologique. La situation est nuancée.
            </p>
          </div>

          <BarChartAnimated
            data={evolutionTroubles}
            title="Indicateurs de santé mentale étudiante - Données OVE BSE 2024"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">1 étudiant sur 3 présente des signes de détresse psychologique,</strong> et heureusement, 1 sur 3 a consulté un professionnel de santé mentale (OVE BSE 2024).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Troubles par profil étudiant</h3>
            <DataTable headers={troublesParProfil[0] as string[]} rows={troublesParProfil.slice(1)} />
            <div className="bg-[#E8731A]/10 border border-[#E8731A] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#E8731A]">La précarité financière multiplie par 2,5 le risque de santé mentale dégradée.</strong> Les difficultés matérielles ont un impact direct et mesurable sur le bien-être psychologique.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Pourquoi les étudiants ne consultent pas</h3>
            <DataTable headers={pourquoiPasConsulter[0] as string[]} rows={pourquoiPasConsulter.slice(1)} />
            <div className="bg-[#E8731A]/10 border border-[#E8731A] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#E8731A]">41% ne savaient pas que c'était gratuit.</strong> Le principal frein à l'accès aux soins n'est pas la stigmatisation - c'est l'ignorance de l'existence des dispositifs.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Ressources disponibles avec contacts</h3>
            <DataTable headers={ressourcesDisponibles[0] as string[]} rows={ressourcesDisponibles.slice(1)} />
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#3fb950]">Toutes ces ressources sont 100% gratuites.</strong> PSY-Étudiant offre 8 séances par an sans avance de frais, sans condition de ressources. Il suffit de se connecter sur santepsy.etudiant.gouv.fr.
              </p>
            </div>
          </div>

          <BarChartAnimated
            data={accesSoins}
            title="Détresse psychologique et accès aux soins (OVE BSE 2024)"
          />
          <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#3fb950]">Bonne nouvelle : 1 étudiant sur 3 a consulté un professionnel de santé mentale.</strong> Les dispositifs comme PSY-Étudiant contribuent à améliorer l'accès aux soins (OVE BSE 2024).
            </p>
          </div>
        </div>

        {/* Signes d'alerte */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            🚨 Reconnaître les signes d'alerte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#d29922] mb-4">😰 Anxiété</h3>
              <ul className="text-[#8b949e] space-y-2">
                <li>• Inquiétude constante</li>
                <li>• Difficultés concentration</li>
                <li>• Troubles du sommeil</li>
                <li>• Tensions physiques</li>
                <li>• Crises de panique</li>
              </ul>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#f85149] mb-4">😔 Dépression</h3>
              <ul className="text-[#8b949e] space-y-2">
                <li>• Tristesse persistante</li>
                <li>• Perte d'intérêt</li>
                <li>• Fatigue extrême</li>
                <li>• Isolement social</li>
                <li>• Pensées négatives</li>
              </ul>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#E8731A] mb-4">🔥 Burn-out</h3>
              <ul className="text-[#8b949e] space-y-2">
                <li>• Épuisement total</li>
                <li>• Démotivation profonde</li>
                <li>• Cynisme, irritabilité</li>
                <li>• Décrochage scolaire</li>
                <li>• Sentiment d'échec</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-6 mb-8">
            <p className="text-white text-lg mb-2">
              <strong>Si tu ressens plusieurs de ces symptômes depuis plus de 2 semaines :</strong>
            </p>
            <p className="text-[#8b949e]">
              Il est temps de parler à quelqu'un. Tu n'es pas seul·e, et des solutions existent.
            </p>
          </div>
        </div>

        {/* Quiz stress */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Évalue ton niveau de stress
          </h2>
          <StressQuiz />
        </div>

        {/* Ressources détaillées */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            🆘 Ressources gratuites et accessibles
          </h2>

          <div className="space-y-6">
            <div className="bg-[#008080]/10 border-2 border-[#008080] rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#3ECFCF] mb-3 flex items-center gap-3">
                <span>🩺</span>
                PSY-Étudiant : 8 séances gratuites
              </h3>
              <p className="text-white mb-4">
                Dispositif du gouvernement pour tous les étudiants, sans condition. Psychologues et psychiatres partenaires dans toute la France.
              </p>
              <ul className="text-white space-y-2 mb-4">
                <li>• <strong>100% gratuit</strong> : pas d'avance de frais</li>
                <li>• <strong>8 séances</strong> par année universitaire</li>
                <li>• <strong>Sans ordonnance</strong> : tu choisis directement ton praticien</li>
                <li>• <strong>Anonyme</strong> : tes parents ne sont pas informés</li>
              </ul>
              <a
                href="https://santepsy.etudiant.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors"
              >
                Prendre RDV maintenant →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-3">📞 Nightline France</h3>
                <p className="text-[#8b949e] mb-3">
                  Service d'écoute par et pour les étudiants. 21h-2h30 du dimanche au jeudi.
                </p>
                <p className="text-white font-bold">01 88 32 12 32</p>
                <a
                  href="https://www.nightline.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#3ECFCF] hover:underline"
                >
                  nightline.fr ↗
                </a>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-3">💬 Fil Santé Jeunes</h3>
                <p className="text-[#8b949e] mb-3">
                  Écoute, information, orientation pour les 12-25 ans. 9h-23h tous les jours.
                </p>
                <p className="text-white font-bold">0800 235 236</p>
                <a
                  href="https://www.filsantejeunes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#3ECFCF] hover:underline"
                >
                  filsantejeunes.com ↗
                </a>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-3">🆘 SOS Amitié</h3>
                <p className="text-[#8b949e] mb-3">
                  Écoute anonyme 24h/24, 7j/7 pour toute détresse psychologique.
                </p>
                <p className="text-white font-bold">09 72 39 40 50</p>
                <a
                  href="https://www.sos-amitie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[#3ECFCF] hover:underline"
                >
                  sos-amitie.com ↗
                </a>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-3">💻 Stop-Blues</h3>
                <p className="text-[#8b949e] mb-3">
                  Programme en ligne pour prévenir et gérer les symptômes dépressifs.
                </p>
                <a
                  href="https://www.stop-blues.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors"
                >
                  Accéder à Stop-Blues ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sources */}
        <SourcesAccordion sources={sources} />

      </div>
    </div>
  );
}
