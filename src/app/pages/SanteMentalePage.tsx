import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatCardGrid } from '../components/StatCardGrid';
import { PieChart } from '../components/PieChart';
import { BarChartAnimated } from '../components/BarChartAnimated';
import { DataTable } from '../components/DataTable';
import { TestimonialCardLong } from '../components/TestimonialCardLong';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageNavigation } from '../components/PageNavigation';
import { SourcesAccordion } from '../components/SourcesAccordion';
import { StressQuiz } from '../components/StressQuiz';

export function SanteMentalePage() {
  const stats = [
    { value: '1/3', label: 'Étudiants avec symptômes d\'anxiété', description: 'LMDE 2024', color: 'red' as const },
    { value: '1/5', label: 'Étudiants avec pensées dépressives régulières', color: 'red' as const },
    { value: 43, label: 'Augmentation du burn-out depuis 2020', suffix: '%', color: 'orange' as const },
    { value: 5, label: 'Étudiants avec suivi psychologique régulier', suffix: '%', color: 'teal' as const },
    { value: '1/30K', label: '1 psy pour 30 000 étudiants dans les universités', color: 'red' as const },
    { value: 69, label: 'Étudiants déclarant que les études impactent leur santé mentale', suffix: '%', color: 'orange' as const },
  ];

  const etatSanteMentale = [
    { label: 'Bien-être global', value: 31, color: '#3fb950' },
    { label: 'Stress ponctuel', value: 29, color: '#E8731A' },
    { label: 'Anxiété persistante', value: 21, color: '#d29922' },
    { label: 'Symptômes dépressifs', value: 12, color: '#f85149' },
    { label: 'Burn-out / épuisement', value: 7, color: '#b91c1c' },
  ];

  const evolutionTroubles = [
    { label: 'Anxiété', value: 40, color: '#f85149' },
    { label: 'Dépression', value: 29, color: '#E8731A' },
    { label: 'Burn-out', value: 28, color: '#d29922' },
    { label: 'Consulte psy', value: 14, color: '#008080' },
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
    { label: 'Ont besoin d\'aide psy', value: 48, color: '#f85149' },
    { label: 'En ont fait la demande', value: 14, color: '#E8731A' },
    { label: 'Ont obtenu un suivi régulier', value: 5, color: '#3fb950' },
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
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Thématiques', href: '/#themes' }, { label: 'Santé Mentale' }]} />

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <StatCardGrid stats={stats} columns={3} />
        </motion.div>

        {/* Graphiques et données */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 mb-16"
        >
          <PieChart
            data={etatSanteMentale}
            title="État de santé mentale des étudiants français en 2024"
            source="LMDE Baromètre 2024"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">Seulement 31% des étudiants déclarent un bien-être global.</strong> 40% présentent des symptômes d'anxiété, de dépression ou de burn-out.
            </p>
          </div>

          <BarChartAnimated
            data={evolutionTroubles}
            title="Évolution des troubles depuis 2020 - La crise progresse. L'offre de soins stagne."
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">Depuis la COVID, l'anxiété a augmenté de +8 points, la dépression de +6 points, le burn-out de +9 points.</strong> Pendant ce temps, l'accès aux psychologues n'a augmenté que de +3 points.
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
            title="Taux d'accès aux soins - 1 étudiant sur 10 qui en a besoin reçoit de l'aide"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">L'écart entre le besoin (48%) et l'accès effectif (5%) révèle un système qui n'arrive pas à répondre à la demande.</strong> 9 étudiants sur 10 qui ont besoin d'aide n'en reçoivent pas.
            </p>
          </div>
        </motion.div>

        {/* Signes d'alerte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
        </motion.div>

        {/* Quiz stress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            📋 Évalue ton niveau de stress
          </h2>
          <StressQuiz />
        </motion.div>

        {/* Ressources détaillées */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
        </motion.div>

        {/* Témoignage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Témoignage : le déclic qui sauve</h2>
          <TestimonialCardLong
            quote="En décembre de ma 1re année de BUT, je ne me levais plus. Pas 'j'avais du mal à me lever' - je ne me levais littéralement plus. Je fixais le plafond pendant des heures. Je ratais tous mes cours. Je répondais aux messages de ma mère 'ça va, je bosse dur'. En réalité je faisais rien. J'étais vide - de motivation, d'énergie, de tout. J'ai mis des semaines à comprendre que ce que je vivais avait un nom : un burn-out. J'ai trouvé PSY-Étudiant par hasard sur Instagram. 8 séances gratuites. Je n'y croyais pas vraiment. Mais dès le premier rendez-vous, la psychologue m'a dit : 'ce que tu vis est réel, ça a un nom, et on peut t'aider.' Ces trois phrases. C'est tout ce qu'il me fallait pour recommencer à avancer. Si tu lis ça et que tu te reconnais - appelle, maintenant."
            name="Théo"
            age={20}
            field="BUT Informatique"
            city="Toulouse"
            initials="T"
            color="#3fb950"
          />
        </motion.div>

        {/* Sources */}
        <SourcesAccordion sources={sources} />

        {/* Navigation */}
        <PageNavigation
          previousPage={{ title: 'Logement', href: '/logement' }}
          nextPage={{ title: 'Alimentation', href: '/alimentation' }}
        />
      </div>
    </div>
  );
}
