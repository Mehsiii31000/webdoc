import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatsCounter } from '../components/StatsCounter';
import { BudgetSimulator } from '../components/BudgetSimulator';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageNavigation } from '../components/PageNavigation';
import { SourcesAccordion } from '../components/SourcesAccordion';
import { DataTable } from '../components/DataTable';
import { HorizontalBarChart } from '../components/HorizontalBarChart';
import { ProblemCard } from '../components/ProblemCard';
import { TestimonialCardLong } from '../components/TestimonialCardLong';

export function BudgetPage() {
  const sources = [
    {
      title: 'OVE - Enquête nationale conditions de vie 2023',
      url: 'https://www.ove-national.education.fr',
      author: 'Observatoire de la Vie Étudiante',
      date: '2023'
    },
    {
      title: 'LMDE - Baromètre santé étudiante 2023',
      url: 'https://www.lmde.fr',
      author: 'La Mutuelle Des Étudiants',
      date: '2023'
    },
    {
      title: 'INSEE - Niveau de vie étudiants France 2022',
      url: 'https://www.insee.fr',
      author: 'Institut National de la Statistique',
      date: '2022'
    }
  ];

  const budgetByCity = [
    ['Poste de dépense', 'Toulouse', 'Paris', 'Lyon', 'Bordeaux'],
    ['Loyer (studio)', '450€', '850€', '550€', '500€'],
    ['Courses alimentaires', '180€', '200€', '185€', '175€'],
    ['Transport', '30€', '75€', '45€', '35€'],
    ['Santé / mutuelle', '50€', '50€', '50€', '50€'],
    ['Téléphone', '15€', '15€', '15€', '15€'],
    ['Loisirs / sorties', '80€', '100€', '90€', '85€'],
    ['Livres / fournitures', '30€', '35€', '30€', '30€'],
    [<strong key="total">TOTAL ESTIMÉ</strong>, <strong key="tl">835€</strong>, <strong key="pr">1325€</strong>, <strong key="ly">965€</strong>, <strong key="bd">890€</strong>],
    ['Budget moyen dispo', '914€', '914€', '914€', '914€'],
    [
      'Solde restant',
      <span key="s1" className="text-[#3fb950] font-bold">+79€</span>,
      <span key="s2" className="text-[#f85149] font-bold">-411€</span>,
      <span key="s3" className="text-[#f85149] font-bold">-51€</span>,
      <span key="s4" className="text-[#3fb950] font-bold">+24€</span>
    ]
  ];

  const revenuesTable = [
    ['Source de revenus', '% d\'étudiants concernés', 'Montant moyen'],
    ['Aide famille / parents', '71%', '450€/mois'],
    ['Job étudiant', '45%', '380€/mois'],
    ['Bourse CROUS', '37%', '280€/mois'],
    ['APL logement', '44%', '190€/mois'],
    ['Alternance / apprentissage', '12%', '680€/mois'],
    ['Prêt étudiant', '8%', '350€/mois']
  ];

  const budgetRepartition = [
    { label: 'Logement', value: 55, color: '#008080' },
    { label: 'Alimentation', value: 20, color: '#E8731A' },
    { label: 'Loisirs', value: 9, color: '#3ECFCF' },
    { label: 'Transport', value: 7, color: '#d29922' },
    { label: 'Santé', value: 5, color: '#3fb950' },
    { label: 'Autres', value: 4, color: '#8b949e' }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Thématiques', href: '/#themes' }, { label: 'Budget' }]} />

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 mb-16"
        >
          <div className="relative h-[40vh] rounded-2xl overflow-hidden mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop"
              alt="Budget étudiant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#008080]/90 to-black/60 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  914€ par mois.
                  <br />
                  Comment font-ils ?
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xl text-[#8b949e] italic text-center max-w-3xl mx-auto">
            Entre le loyer qui explose, les courses qui s'envolent et les sorties qu'on s'interdit,
            gérer son budget étudiant relève souvent du casse-tête. Voici la réalité en chiffres.
          </p>
        </motion.div>

        {/* Stats Animées - 6 au lieu de 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
        >
          <div className="text-center p-6 bg-[#161b22] border border-[#30363d] rounded-xl">
            <StatsCounter value={914} label="€ budget moyen/mois" suffix="€" />
            <p className="text-xs text-[#8b949e] mt-2">OVE 2023</p>
          </div>
          <div className="text-center p-6 bg-[#161b22] border border-[#30363d] rounded-xl">
            <StatsCounter value={55} label="% part du logement" suffix="%" />
            <p className="text-xs text-[#8b949e] mt-2">Poste principal</p>
          </div>
          <div className="text-center p-6 bg-[#161b22] border border-[#30363d] rounded-xl">
            <StatsCounter value={39} label="% en précarité" suffix="%" />
            <p className="text-xs text-[#8b949e] mt-2">Situation critique</p>
          </div>
          <div className="text-center p-6 bg-[#161b22] border border-[#30363d] rounded-xl">
            <div className="text-4xl font-bold text-[#E8731A] mb-2">1/2</div>
            <p className="text-white font-semibold">travaillent pour financer</p>
            <p className="text-xs text-[#8b949e] mt-2">45% des étudiants</p>
          </div>
          <div className="text-center p-6 bg-[#161b22] border border-[#30363d] rounded-xl">
            <StatsCounter value={23} label="% sautent des repas" suffix="%" />
            <p className="text-xs text-[#8b949e] mt-2">Faute d'argent</p>
          </div>
          <div className="text-center p-6 bg-[#161b22] border border-[#30363d] rounded-xl">
            <StatsCounter value={480} label="€ bourse échelon 3" suffix="€" />
            <p className="text-xs text-[#8b949e] mt-2">Montant moyen</p>
          </div>
        </motion.div>

        {/* Tableau Budget par Ville */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            💰 Budget type par ville universitaire
          </h2>
          <p className="text-[#8b949e] mb-6">
            Les écarts de coût de la vie entre les villes françaises sont considérables.
            Voici une comparaison réaliste pour un étudiant vivant seul.
          </p>
          <DataTable headers={budgetByCity[0] as string[]} rows={budgetByCity.slice(1)} />
          <p className="text-sm text-[#8b949e] mt-4">
            Source : OVE 2023, INSEE 2022 - Montants moyens observés
          </p>
        </motion.div>

        {/* Tableau Sources de Revenus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            💸 D'où vient l'argent des étudiants ?
          </h2>
          <DataTable headers={revenuesTable[0] as string[]} rows={revenuesTable.slice(1)} />
          <div className="mt-6 bg-[#d29922]/10 border border-[#d29922] rounded-xl p-6">
            <p className="text-white">
              <strong>À noter :</strong> 71% des étudiants dépendent de leurs parents.
              Quand la famille ne peut pas aider, c'est toute la scolarité qui vacille.
            </p>
          </div>
        </motion.div>

        {/* Graphique Répartition Budget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            📊 Répartition du budget étudiant moyen
          </h2>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
            <HorizontalBarChart data={budgetRepartition} />
          </div>
          <p className="text-sm text-[#8b949e] mt-4">
            Le logement représente plus de la moitié du budget - une proportion insoutenable pour beaucoup.
          </p>
        </motion.div>

        {/* Section "LES VRAIS PROBLÈMES" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ce que vivent{' '}
              <span className="bg-gradient-to-r from-[#f85149] to-[#E8731A] bg-clip-text text-transparent">
                vraiment
              </span>
              {' '}les étudiants
            </h2>
            <p className="text-xl text-[#8b949e]">
              Derrière les moyennes, des situations qui font mal
            </p>
          </div>

          <div className="space-y-6">
            <ProblemCard
              number={1}
              title="La dépendance aux parents"
              description="71% des étudiants dépendent financièrement de leurs parents. Quand la famille n'a pas les moyens, c'est toute la scolarité qui vacille. Certains abandonnent leurs études, d'autres s'endettent pour survivre."
            />
            <ProblemCard
              number={2}
              title="Le job étudiant qui sabote les études"
              description="45% des étudiants travaillent. Au-delà de 16h par semaine, les recherches montrent une chute significative des résultats. Pourtant, 30% dépassent ce seuil par nécessité, pas par choix."
            />
            <ProblemCard
              number={3}
              title="Les découverts à répétition"
              description="1 étudiant sur 4 est à découvert au moins une fois par mois. Les frais bancaires s'accumulent, créant un cercle vicieux difficile à briser sans aide extérieure."
            />
            <ProblemCard
              number={4}
              title="La honte de demander de l'aide"
              description="De nombreux étudiants n'osent pas demander les aides auxquelles ils ont droit, par manque d'information ou par honte. Des milliers d'euros restent non réclamés chaque année."
            />
            <ProblemCard
              number={5}
              title="Les dépenses invisibles"
              description="Frais de scolarité, mutuelle, logiciels, tenue professionnelle pour les stages - des dizaines de dépenses imprévues que personne ne liste dans le 'budget type'."
            />
          </div>
        </motion.div>

        {/* CE QUE PERSONNE NE TE DIT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-[#008080]/10 border-2 border-[#008080] rounded-xl p-8">
            <h2 className="text-3xl font-bold text-[#3ECFCF] mb-6">
              💡 Ce que personne ne te dit
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-[#3ECFCF] text-2xl">✓</span>
                <p className="text-white">
                  Les banques proposent des comptes étudiants sans frais avec découvert autorisé
                  (jusqu'à 50€ gratuit chez certaines banques en ligne)
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#3ECFCF] text-2xl">✓</span>
                <p className="text-white">
                  L'APL peut être demandée même si tu es hébergé chez un tiers, sous certaines conditions
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#3ECFCF] text-2xl">✓</span>
                <p className="text-white">
                  Les frais de rentrée (livres, matériel) peuvent être inclus dans une demande de bourse d'urgence FSDIE
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#3ECFCF] text-2xl">✓</span>
                <p className="text-white">
                  Toulouse a un fonds d'urgence municipal spécifique aux étudiants -{' '}
                  <a
                    href="https://www.toulouse.fr/web/solidarites/aides-financieres"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3ECFCF] underline hover:text-[#008080]"
                  >
                    renseigne-toi sur toulouse.fr
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-[#3ECFCF] text-2xl">✓</span>
                <p className="text-white">
                  Certaines mutuelles étudiantes remboursent des frais de santé même non couverts par la Sécu
                  (ostéo, dentaire, optique)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simulateur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            🧮 Simule ton budget
          </h2>
          <BudgetSimulator />
        </motion.div>

        {/* Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            💬 Témoignages
          </h2>
          <div className="space-y-6">
            <TestimonialCardLong
              quote="Je m'appelle Mathieu, 19 ans, BUT Informatique à Toulouse. Au premier mois, j'avais 650€. Mon loyer était à 480€ en coloc. Il me restait 170€ pour manger, me déplacer, et vivre. J'ai pas mangé à ma faim pendant 3 semaines avant de découvrir les repas CROUS à 1€ et l'épicerie solidaire de l'IUT. Personne ne m'en avait parlé à l'inscription. Personne."
              name="Mathieu"
              age={19}
              field="BUT Informatique"
              city="Toulouse"
              initials="M"
              color="#008080"
            />
            <TestimonialCardLong
              quote="J'ai travaillé 25h par semaine en caisse tout au long de ma L2. J'ai raté mon année. Pas parce que je suis nulle, mais parce que je rentrais à 23h et devais être en cours à 8h. J'avais honte de dire que je travaillais. Dans ma tête, les étudiants 'normaux' n'avaient pas à faire ça. Maintenant je sais que c'est 1 sur 2."
              name="Camille"
              age={21}
              field="Licence Éco-Gestion"
              city="Lyon"
              initials="C"
              color="#E8731A"
            />
          </div>
        </motion.div>

        {/* Sources */}
        <SourcesAccordion sources={sources} />

        {/* Navigation */}
        <PageNavigation
          previousPage={{ title: 'Accueil', href: '/' }}
          nextPage={{ title: 'Logement Étudiant', href: '/logement' }}
        />
      </div>
    </div>
  );
}
