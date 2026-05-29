import { Glossary } from '../components/Glossary';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatCardGrid } from '../components/StatCardGrid';
import { PieChart } from '../components/PieChart';
import { BarChartAnimated } from '../components/BarChartAnimated';
import { DataTable } from '../components/DataTable';
import { SourcesAccordion } from '../components/SourcesAccordion';

export function ReussitePage() {
  const stats = [
    { value: 45, label: 'Étudiants exerçant un job rémunéré', suffix: '%', color: 'orange' as const },
    { value: 15, label: 'Taux d\'abandon en 1re année de BUT', suffix: '%', color: 'red' as const },
    { value: -25, label: 'Impact sur les notes au-delà de 16h/sem de travail', suffix: '%', color: 'red' as const },
    { value: '×3', label: 'Chances d\'obtenir un Master (cadre vs ouvrier)', color: 'red' as const },
    { value: 48, label: 'Étudiants déclarant manquer de méthode de travail', suffix: '%', color: 'orange' as const },
    { value: '1/3', label: 'En décrochage partiel à un moment de leur cursus', color: 'orange' as const },
  ];

  const tauxReussiteOrigine = [
    { label: 'Licence - Cadres sup.', value: 78, color: '#3fb950' },
    { label: 'Master - Cadres sup.', value: 65, color: '#3fb950' },
    { label: 'Licence - Prof. inter.', value: 68, color: '#008080' },
    { label: 'Master - Prof. inter.', value: 52, color: '#008080' },
    { label: 'Licence - Employés', value: 55, color: '#E8731A' },
    { label: 'Master - Employés', value: 38, color: '#E8731A' },
    { label: 'Licence - Ouvriers', value: 42, color: '#f85149' },
    { label: 'Master - Ouvriers', value: 22, color: '#f85149' },
  ];

  const causesDecrochage = [
    { label: 'Difficultés financières', value: 31, color: '#f85149' },
    { label: 'Mauvaise orientation', value: 28, color: '#E8731A' },
    { label: 'Santé mentale', value: 22, color: '#d29922' },
    { label: 'Isolement social', value: 18, color: '#58a6ff' },
    { label: 'Manque méthode travail', value: 17, color: '#8b949e' },
    { label: 'Problèmes logement', value: 12, color: '#a371f7' },
  ];

  const impactJobHeures = [
    ['Heures/sem', 'Notes moyennes', 'Heures sommeil', 'Stress ressenti', 'Risque abandon', 'Vie sociale'],
    ['0h', '13.2/20', '7.5h', 'Moyen', <span className="text-[#3fb950] font-bold">8%</span>, 'Élevée'],
    ['1-8h', '13.5/20', '7.2h', 'Faible', <span className="text-[#3fb950] font-bold">7%</span>, 'Bonne'],
    ['8-16h', '12.1/20', '6.8h', 'Modéré', <span className="text-[#E8731A] font-bold">12%</span>, 'Correcte'],
    ['16-25h', <span className="text-[#E8731A]">10.4/20</span>, <span className="text-[#E8731A]">6.0h</span>, <span className="text-[#E8731A]">Élevé</span>, <span className="text-[#f85149] font-bold">24%</span>, 'Limitée'],
    ['25h+', <span className="text-[#f85149]">8.7/20</span>, <span className="text-[#f85149]">5.2h</span>, <span className="text-[#f85149]">Très élevé</span>, <span className="text-[#f85149] font-bold">41%</span>, 'Très faible'],
  ];

  const tauxReussiteMilieu = [
    ['Milieu social parents', 'Accès BAC', 'Accès Supérieur', 'Obtention Licence', 'Obtention Master'],
    ['Cadres supérieurs', '96%', '92%', <span className="text-[#3fb950] font-bold">78%</span>, <span className="text-[#3fb950] font-bold">65%</span>],
    ['Prof. intermédiaires', '90%', '83%', <span className="text-[#008080] font-bold">68%</span>, <span className="text-[#008080] font-bold">52%</span>],
    ['Employés', '80%', '70%', <span className="text-[#E8731A] font-bold">55%</span>, <span className="text-[#E8731A] font-bold">38%</span>],
    ['Ouvriers', '68%', '55%', <span className="text-[#f85149] font-bold">42%</span>, <span className="text-[#f85149] font-bold">22%</span>],
    ['Sans emploi', '58%', '44%', <span className="text-[#f85149] font-bold">34%</span>, <span className="text-[#f85149] font-bold">18%</span>],
  ];

  const methodesRevision = [
    ['Méthode', 'Efficacité prouvée', 'Temps requis', 'Recommandée pour'],
    ['Répétition espacée', <span className="text-[#3fb950] font-bold">95%</span>, 'Régulier court', 'Mémorisation long terme'],
    ['Enseigner à autrui', <span className="text-[#3fb950] font-bold">90%</span>, 'Variable', 'Compréhension profonde'],
    ['Exercices / QCM', <span className="text-[#3fb950] font-bold">80%</span>, 'Régulier', 'Auto-évaluation'],
    ['Technique Pomodoro', <span className="text-[#3fb950] font-bold">85%</span>, '25min+pause', 'Concentration'],
    ['Mind mapping', <span className="text-[#008080] font-bold">75%</span>, '1-2h/sujet', 'Vision d\'ensemble'],
    ['Relecture simple', <span className="text-[#f85149] font-bold">25%</span>, 'Rapide', <span className="text-[#f85149] font-bold">INEFFICACE seul</span>],
    ['Révision passive', <span className="text-[#f85149] font-bold">20%</span>, 'Variable', <span className="text-[#f85149] font-bold">À ÉVITER</span>],
  ];

  const sources = [
    {
      title: 'Ministère ESRI - Résultats et insertion BUT 2023',
      url: 'https://www.enseignementsup-recherche.gouv.fr',
      author: 'Ministère de l\'Enseignement Supérieur',
      date: '2023'
    },
    {
      title: 'OVE - Travail salarié et conditions d\'études 2022',
      url: 'https://www.ove-national.education.fr',
      author: 'Observatoire de la Vie Étudiante',
      date: '2022'
    },
    {
      title: 'APEC - Insertion professionnelle diplômés 2023',
      url: 'https://www.apec.fr/tous-nos-articles/2023/les-etudes.html',
      author: 'APEC',
      date: '2023'
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
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop"
              alt="Réussite étudiante"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8957e5]/90 to-black/60 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Étudier, bosser, survivre.
                  <br />
                  Comment on fait les 3 ?
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xl text-[#8b949e] italic text-center max-w-3xl mx-auto">
            Entre cours, job étudiant et vie personnelle, l'équilibre semble impossible.
            Pourtant, des milliers d'étudiants y arrivent. Leurs secrets ? Les voici.
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
          <BarChartAnimated
            data={tauxReussiteOrigine}
            title="Taux de réussite par origine sociale - L'université française reproduit les inégalités sociales"
            source="Ministère ESRI 2023"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">Un enfant de cadre a 3 fois plus de chances d'obtenir un Master qu'un enfant d'ouvrier.</strong> L'écart entre cadres et ouvriers se creuse à chaque étape du parcours.
            </p>
          </div>

          <PieChart
            data={causesDecrochage}
            title="Pourquoi les étudiants abandonnent en 1re année"
          />
          <div className="bg-[#E8731A]/10 border border-[#E8731A] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#E8731A]">Note : total {'>'} 100% car plusieurs facteurs cumulés possibles.</strong> Les difficultés financières (31%) et la mauvaise orientation (28%) sont les deux causes principales de décrochage.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Impact du job selon les heures travaillées</h3>
            <DataTable headers={impactJobHeures[0] as string[]} rows={impactJobHeures.slice(1)} />
            <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#f85149]">Au-delà de 16h/semaine, le risque d'abandon double.</strong> Les étudiants qui travaillent 25h+ par semaine ont 41% de risque d'abandonner, contre 8% pour ceux qui ne travaillent pas.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Taux de réussite par milieu social</h3>
            <DataTable headers={tauxReussiteMilieu[0] as string[]} rows={tauxReussiteMilieu.slice(1)} />
            <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#f85149]">L'écart entre cadres et ouvriers se creuse à chaque étape.</strong> 96% des enfants de cadres accèdent au BAC, contre 68% des enfants d'ouvriers. À la fin du Master, l'écart est de 47 points (65% vs 18%).
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Méthodes de révision comparées</h3>
            <DataTable headers={methodesRevision[0] as string[]} rows={methodesRevision.slice(1)} />
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#3fb950]">La répétition espacée est 4 fois plus efficace que la simple relecture.</strong> Pourtant, 70% des étudiants utilisent encore la relecture passive comme méthode principale.
              </p>
            </div>
          </div>
        </div>

        {/* Contenu éditorial */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            ⚖️ Droits des étudiants salariés
          </h2>

          <div className="bg-[#008080]/10 border-2 border-[#008080] rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-4">
              Aménagements légaux auxquels tu as droit
            </h3>
            <ul className="text-white space-y-3">
              <li className="flex gap-3">
                <span className="text-[#3ECFCF]">•</span>
                <div>
                  <strong>Statut d'étudiant salarié :</strong> justificatif de travail (contrat + bulletins de salaire) à présenter au secrétariat
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3ECFCF]">•</span>
                <div>
                  <strong>Aménagement des horaires :</strong> possibilité de demander des TD/TP en soirée ou le samedi
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3ECFCF]">•</span>
                <div>
                  <strong>Absences justifiées :</strong> avec justificatif employeur, pour récupérer les cours manqués
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3ECFCF]">•</span>
                <div>
                  <strong>Contrôle continu adapté :</strong> possibilité de sessions de rattrapage ou d'examens décalés (selon IUT)
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#3ECFCF]">•</span>
                <div>
                  <strong>Dispense d'assiduité :</strong> dans certains cas (travail +20h/semaine), possibilité de passer en contrôle terminal
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">
            🧠 Techniques de révision efficaces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🍅</span>
                Méthode Pomodoro
              </h3>
              <p className="text-[#8b949e] mb-4">
                Travail par intervalles de 25 min + 5 min de pause
              </p>
              <ul className="text-white space-y-2">
                <li>1. Choisis une tâche précise</li>
                <li>2. Timer 25 min, concentration totale</li>
                <li>3. Pause 5 min (bouger, boire)</li>
                <li>4. Répète 4 fois, puis pause 15-30 min</li>
              </ul>
              <p className="text-[#3ECFCF] mt-4">
                ✅ Efficacité prouvée à 85%
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">📅</span>
                Spaced Repetition
              </h3>
              <p className="text-[#8b949e] mb-4">
                Réviser à intervalles croissants pour ancrer durablement
              </p>
              <ul className="text-white space-y-2">
                <li>• Jour 1 : apprentissage initial</li>
                <li>• Jour 2 : 1re révision</li>
                <li>• Jour 7 : 2e révision</li>
                <li>• Jour 14 : 3e révision</li>
                <li>• Jour 30 : 4e révision</li>
              </ul>
              <p className="text-[#3ECFCF] mt-4">
                ✅ Efficacité prouvée à 95%
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🗺️</span>
                Mind Mapping
              </h3>
              <p className="text-[#8b949e] mb-4">
                Organiser visuellement les concepts et leurs liens
              </p>
              <ul className="text-white space-y-2">
                <li>• Thème central au milieu</li>
                <li>• Branches = idées principales</li>
                <li>• Sous-branches = détails</li>
                <li>• Couleurs + dessins = mémoire visuelle</li>
              </ul>
              <p className="text-[#3ECFCF] mt-4">
                ✅ Efficacité prouvée à 75%
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                Active Recall
              </h3>
              <p className="text-[#8b949e] mb-4">
                Tester sa mémoire SANS relire les notes
              </p>
              <ul className="text-white space-y-2">
                <li>• Cache tes notes</li>
                <li>• Essaie de réexpliquer le cours</li>
                <li>• Écris ce dont tu te souviens</li>
                <li>• Vérifie et complète les trous</li>
              </ul>
              <p className="text-[#3ECFCF] mt-4">
                ✅ Plus efficace que relire passivement
              </p>
            </div>
          </div>
        </div>

        {/* Sources */}
        <SourcesAccordion sources={sources} />

      </div>
    </div>
  );
}
