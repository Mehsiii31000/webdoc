import { Glossary } from '../components/Glossary';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatsCounter } from '../components/StatsCounter';
import { SourcesAccordion } from '../components/SourcesAccordion';
import { DataTable } from '../components/DataTable';
import { HorizontalBarChart } from '../components/HorizontalBarChart';
import { ProblemCard } from '../components/ProblemCard';

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
    ['Budget moyen dispo', '919€', '919€', '919€', '919€'],
    [
      'Solde restant',
      <span key="s1" className="text-[#3fb950] font-bold">+84€</span>,
      <span key="s2" className="text-[#f85149] font-bold">-406€</span>,
      <span key="s3" className="text-[#f85149] font-bold">-46€</span>,
      <span key="s4" className="text-[#3fb950] font-bold">+29€</span>
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
    <div className="min-h-screen pt-20 pb-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <div
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
                  919€ par mois.
                  <br />
                  Comment font-ils ?
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xl text-[#8b949e] text-center max-w-3xl mx-auto">
            919 euros par mois. C'est le budget moyen d'un étudiant en France selon l'OVE 2023. Entre loyer, courses et transport,
            cette somme doit couvrir l'essentiel. Pour beaucoup, elle n'y suffit pas. Enquête sur une survie organisée.
          </p>
        </div>

        {/* Stats Animées - cercles */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 place-items-center">
          {[
            { value: 919, suffix: '€', label: '€ budget moyen/mois', sub: 'OVE 2023', color: '#008080' },
            { value: 61, suffix: '%', label: '% part du logement', sub: 'UNEF 2023', color: '#E8731A' },
            { value: 26, suffix: '%', label: '% en difficulté importante', sub: 'OVE 2023', color: '#f85149' },
            { value: '1/2', suffix: '', label: 'travaillent pour financer', sub: '~45% étudiants', color: '#E8731A' },
            { value: 36, suffix: '%', label: '% sautent des repas', sub: 'IFOP/COP1 2023', color: '#f85149' },
            { value: 311, suffix: '€', label: '€ bourse échelon 3/mois', sub: 'Tarif 2024-2025', color: '#3fb950' }
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className="w-32 h-32 rounded-full bg-[#161b22] border-2 flex items-center justify-center"
                style={{ borderColor: s.color }}
              >
                {typeof s.value === 'number' ? (
                  <StatsCounter value={s.value} label="" suffix={s.suffix} />
                ) : (
                  <div className="text-3xl font-bold" style={{ color: s.color }}>{s.value}</div>
                )}
              </div>
              <p className="text-white font-semibold mt-3 px-2">{s.label}</p>
              <p className="text-xs text-[#8b949e] mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Tableau Budget par Ville */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Le prix de la ville
          </h2>
          <p className="text-[#8b949e] mb-6">
            Toulouse, Paris, Lyon, Bordeaux : à quel point la géographie détermine-t-elle
            la capacité d'un étudiant à boucler ses fins de mois ?
          </p>
          <DataTable headers={budgetByCity[0] as string[]} rows={budgetByCity.slice(1)} />
          <p className="text-sm text-[#8b949e] mt-4">
            Source : OVE 2023, INSEE 2022 - Montants moyens observés
          </p>
        </div>

        {/* Tableau Sources de Revenus */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Les sources de revenus : qui paie quoi ?
          </h2>
          <DataTable headers={revenuesTable[0] as string[]} rows={revenuesTable.slice(1)} />
          <div className="mt-6 bg-[#d29922]/10 border border-[#d29922] rounded-xl p-6">
            <p className="text-white">
              <strong>À noter :</strong> 71% des étudiants dépendent de leurs parents.
              Quand la famille ne peut pas aider, c'est toute la scolarité qui vacille.
            </p>
          </div>
        </div>

        {/* Graphique Répartition Budget */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Où part l'argent
          </h2>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
            <HorizontalBarChart data={budgetRepartition} />
          </div>
          <p className="text-sm text-[#8b949e] mt-4">
            55% du budget part dans le logement. Avant même de manger, de se déplacer ou d'étudier,
            plus de la moitié de l'argent disponible a déjà disparu.
          </p>
        </div>

        {/* Section "LES VRAIS PROBLÈMES" */}
        <div
          className="mb-16"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Les difficultés concrètes
            </h2>
            <p className="text-[#8b949e]">
              Derrière les chiffres moyens, des réalités variées
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
        </div>

        {/* CE QUE PERSONNE NE TE DIT */}
        <div
          className="mb-16"
        >
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ce qu'il faut savoir
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-[#008080]">•</span>
                <p className="text-[#8b949e]">
                  Les banques proposent des comptes étudiants sans frais avec découvert autorisé
                  (jusqu'à 50€ gratuit chez certaines banques en ligne)
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#008080]">•</span>
                <p className="text-[#8b949e]">
                  L'APL peut être demandée même si tu es hébergé chez un tiers, sous certaines conditions
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#008080]">•</span>
                <p className="text-[#8b949e]">
                  Les frais de rentrée (livres, matériel) peuvent être inclus dans une demande de bourse d'urgence FSDIE
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#008080]">•</span>
                <p className="text-[#8b949e]">
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
              <div className="flex gap-3">
                <span className="text-[#008080]">•</span>
                <p className="text-[#8b949e]">
                  Certaines mutuelles étudiantes remboursent des frais de santé même non couverts par la Sécu
                  (ostéo, dentaire, optique)
                </p>
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
