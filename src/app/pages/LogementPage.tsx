import { Glossary } from '../components/Glossary';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatCardGrid } from '../components/StatCardGrid';
import { PieChart } from '../components/PieChart';
import { BarChartAnimated } from '../components/BarChartAnimated';
import { DataTable } from '../components/DataTable';
import { ProblemCard } from '../components/ProblemCard';
import { SourcesAccordion } from '../components/SourcesAccordion';

export function LogementPage() {
  const stats = [
    { value: 175000, label: 'Logements CROUS pour 2,9M étudiants', color: 'teal' as const },
    { value: '1/17', label: 'Ratio place CROUS par étudiant', color: 'red' as const },
    { value: 8, label: 'Étudiants sans logement stable à la rentrée', suffix: '%', color: 'red' as const },
    { value: 42, label: 'Dossiers étudiants refusés par les propriétaires', suffix: '%', color: 'orange' as const },
    { value: 560, label: 'Loyer moyen studio ville universitaire 2024', suffix: '€', color: 'orange' as const },
    { value: '6 sem.', label: 'Délai moyen pour trouver un logement', color: 'orange' as const },
  ];

  const typesLogement = [
    { label: 'Logement privé seul', value: 28, color: '#E8731A' },
    { label: 'Colocation', value: 22, color: '#008080' },
    { label: 'Résidence CROUS', value: 9, color: '#3fb950' },
    { label: 'Résidence privée', value: 7, color: '#58a6ff' },
    { label: 'Chez les parents', value: 31, color: '#8b949e' },
    { label: 'Sans logement stable', value: 3, color: '#f85149' },
  ];

  const loyersParVille = [
    { label: 'Paris', value: 949, color: '#f85149', secondValue: 919, secondColor: '#008080' },
    { label: 'Lyon', value: 637, color: '#E8731A', secondValue: 919, secondColor: '#008080' },
    { label: 'Bordeaux', value: 530, color: '#E8731A', secondValue: 919, secondColor: '#008080' },
    { label: 'Toulouse', value: 490, color: '#d29922', secondValue: 919, secondColor: '#008080' },
    { label: 'Nantes', value: 510, color: '#E8731A', secondValue: 919, secondColor: '#008080' },
    { label: 'Lille', value: 480, color: '#d29922', secondValue: 919, secondColor: '#008080' },
  ];

  const crousOffreDemande = [
    ['Ville', 'Étudiants', 'Places CROUS', 'Ratio', 'Demandes/an', 'Taux satisfaction'],
    ['Paris', '650 000', '42 000', '1 / 15', '75 000', <span className="text-[#f85149] font-bold">56%</span>],
    ['Lyon', '170 000', '11 000', '1 / 15', '19 000', <span className="text-[#f85149] font-bold">58%</span>],
    ['Toulouse', '130 000', '8 200', '1 / 16', '14 500', <span className="text-[#f85149] font-bold">57%</span>],
    ['Bordeaux', '105 000', '6 500', '1 / 16', '12 000', <span className="text-[#f85149] font-bold">54%</span>],
    ['Montpellier', '95 000', '5 800', '1 / 16', '11 000', <span className="text-[#f85149] font-bold">53%</span>],
    ['Lille', '115 000', '7 000', '1 / 16', '13 000', <span className="text-[#f85149] font-bold">54%</span>],
    [<strong className="text-white">FRANCE</strong>, <strong className="text-white">2 900 000</strong>, <strong className="text-white">175 000</strong>, <strong className="text-white">1 / 17</strong>, <strong className="text-white">320 000</strong>, <strong className="text-[#f85149]">55%</strong>],
  ];

  const profilsTouches = [
    ['Profil', 'Difficulté à trouver', 'Raison principale'],
    ['Étudiant étranger hors UE', <span className="text-[#f85149] font-bold">Extrême</span>, 'Pas de garant français, méfiance'],
    ['Étudiant sans garant physique', <span className="text-[#f85149] font-bold">Très élevée</span>, 'CDI garant exigé de facto'],
    ['Étudiant boursier seul', <span className="text-[#E8731A] font-bold">Élevée</span>, 'Revenus jugés insuffisants'],
    ['Étudiant d\'outre-mer', <span className="text-[#E8731A] font-bold">Élevée</span>, 'Pas de réseau local'],
    ['1re génération à l\'université', <span className="text-[#E8731A] font-bold">Élevée</span>, 'Méconnaissance du système'],
    ['Étudiant en situation de handicap', <span className="text-[#E8731A] font-bold">Élevée</span>, 'Logement adapté rare ({'<'} 2% du parc)'],
    ['Étudiant avec animaux', <span className="text-[#f85149] font-bold">Très élevée</span>, 'Refus systématique des propriétaires'],
  ];

  const evolutionCrise = [
    ['Indicateur', '2014', '2019', '2024', 'Évolution'],
    ['Nombre d\'étudiants', '2,4 M', '2,7 M', '2,9 M', <span className="text-[#E8731A] font-bold">+21%</span>],
    ['Places CROUS', '160 000', '168 000', '175 000', <span className="text-[#3fb950] font-bold">+9%</span>],
    ['Loyer moyen studio', '420€', '490€', '560€', <span className="text-[#f85149] font-bold">+33%</span>],
    ['Délai moyen recherche logement', '3 sem.', '4 sem.', '6 sem.', <span className="text-[#f85149] font-bold">+100%</span>],
    ['% étudiants sans logement à la rentrée', '3%', '5%', '8%', <span className="text-[#f85149] font-bold">+167%</span>],
    ['Taux de refus dossier étudiant', '28%', '35%', '42%', <span className="text-[#f85149] font-bold">+50%</span>],
  ];

  const raisonsRefus = [
    { label: 'Pas de CDI garant', value: 38, color: '#f85149' },
    { label: 'Revenus insuffisants', value: 32, color: '#E8731A' },
    { label: 'Préférence autre profil', value: 18, color: '#d29922' },
    { label: 'Dossier incomplet', value: 12, color: '#8b949e' },
  ];

  const sources = [
    {
      title: 'CROUS - Rapport annuel logement étudiant 2023',
      url: 'https://www.crous-toulouse.fr/logements/',
      author: 'CROUS',
      date: '2023'
    },
    {
      title: 'OVE - Conditions de logement étudiants 2023',
      url: 'https://www.ove-national.education.fr',
      author: 'Observatoire de la Vie Étudiante',
      date: '2023'
    },
    {
      title: 'Fondation Abbé Pierre - Mal-logement 2024',
      url: 'https://www.fondation-abbe-pierre.fr/nos-publications',
      author: 'Fondation Abbé Pierre',
      date: '2024'
    },
    {
      title: 'Action Logement - Visale 2024',
      url: 'https://www.visale.fr',
      author: 'Action Logement',
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
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&h=600&fit=crop"
              alt="Logement étudiant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8731A]/90 to-black/60 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Trouver un appart étudiant :
                  <br />
                  le vrai parcours du combattant
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xl text-[#8b949e] text-center max-w-3xl mx-auto">
            En France, il y a 1 place en résidence CROUS pour 17 étudiants. Les autres doivent composer
            avec un marché privé qui leur est hostile : dossiers refusés, garants impossibles, loyers exorbitants.
            Enquête sur une crise qui s'aggrave chaque rentrée.
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
            data={typesLogement}
            title="Où logent les étudiants en France ?"
            source="OVE 2023"
          />

          <BarChartAnimated
            data={loyersParVille}
            title="Loyers par ville vs budget moyen étudiant (919€)"
            showPercentage={false}
            maxValue={919}
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">À Paris, le loyer seul dépasse le budget étudiant moyen.</strong> La barre représente le loyer moyen, la barre bleue le budget moyen disponible (OVE 2023).
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Offre vs demande CROUS (données officielles)</h3>
            <DataTable headers={crousOffreDemande[0] as string[]} rows={crousOffreDemande.slice(1)} />
            <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#f85149]">Toutes les villes affichent un taux de satisfaction inférieur à 60%.</strong> Pour 320 000 demandes annuelles en France, seulement 175 000 places sont disponibles.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Profil des étudiants les plus touchés par la crise</h3>
            <DataTable headers={profilsTouches[0] as string[]} rows={profilsTouches.slice(1)} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Évolution crise logement (2014-2024)</h3>
            <DataTable headers={evolutionCrise[0] as string[]} rows={evolutionCrise.slice(1)} />
            <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#f85149]">Le nombre d'étudiants a augmenté 2 fois plus vite que les places CROUS disponibles.</strong> Pendant ce temps, les loyers ont explosé de +33% en 10 ans.
              </p>
            </div>
          </div>

          <BarChartAnimated
            data={raisonsRefus}
            title="Pourquoi les propriétaires refusent les dossiers étudiants"
            source="OVE 2023"
          />
        </div>

        {/* Problèmes détaillés */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Les problèmes systémiques</h2>
          <div className="space-y-6">
            <ProblemCard
              number={1}
              title="1 PLACE CROUS POUR 17 ÉTUDIANTS"
              description="175 000 logements CROUS. 2,9 millions d'étudiants. Le calcul est simple et brutal : l'État ne peut loger que 6% des étudiants. Les 94% restants se débrouillent sur un marché privé qui les accepte mal. En comparaison, l'Allemagne offre 1 place pour 9 étudiants, les Pays-Bas 1 pour 7. La France est à la traîne, et les étudiants en paient le prix chaque septembre."
              borderColor="#f85149"
            />
            <ProblemCard
              number={2}
              title="LES 8% SANS LOGEMENT STABLE À LA RENTRÉE"
              description="8% des étudiants n'ont pas de logement stable au 1er septembre. Ça représente plus de 230 000 personnes en France. Ils dorment chez des amis, dans des hébergements provisoires payants, ou reportent leur arrivée - retardant leur intégration et leurs études. Cette précarité invisible impacte directement la réussite académique : comment se concentrer sur ses partiels quand on ne sait pas où dormir la semaine prochaine ?"
              borderColor="#f85149"
            />
          </div>
        </div>

        {/* Contenu éditorial */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            🏘️ CROUS : la solution prioritaire
          </h2>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-[#3ECFCF] mb-4">Le DSE : Dossier Social Étudiant</h3>
            <div className="text-white space-y-3">
              <p className="text-[#8b949e]">
                Le DSE est ta porte d'entrée pour le logement CROUS. À déposer entre janvier et mai.
              </p>
              <ul className="space-y-2">
                <li>• <strong>Délais :</strong> dépôt entre le 15 janvier et le 15 mai</li>
                <li>• <strong>Critères prioritaires :</strong> boursiers, éloignement géographique, situation familiale</li>
                <li>• <strong>Numéros de résidence Toulouse :</strong> Chapou, Rangueil, Ponsan, Daniel Faucher</li>
                <li>• <strong>Suivi :</strong> consulte ton dossier sur messervices.etudiant.gouv.fr</li>
              </ul>
              <a
                href="https://www.messervices.etudiant.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors"
              >
                Déposer mon DSE →
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">
            🏢 Logement privé : checklist avant signature
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-2xl">📋</span>
                Documents à vérifier
              </h3>
              <ul className="text-[#8b949e] space-y-2">
                <li>• Bail signé en 2 exemplaires (1 pour toi, 1 pour le proprio)</li>
                <li>• Dépôt de garantie max = 1 mois de loyer (hors charges)</li>
                <li>• État des lieux d'entrée détaillé avec photos</li>
                <li>• Diagnostics obligatoires : DPE, plomb, amiante, gaz, électricité</li>
              </ul>
            </div>

            <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#f85149] mb-3">⚠️ Recours en cas de litige</h3>
              <ul className="text-white space-y-2">
                <li>• ADIL (Agence Départementale d'Information sur le Logement) : conseils gratuits</li>
                <li>• Commission départementale de conciliation (avant tribunal)</li>
                <li>• Dernier recours : tribunal d'instance</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">
            👥 Colocation : avantages et pièges
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3fb950] mb-4">✅ Avantages</h3>
              <ul className="text-white space-y-2">
                <li>• Loyer divisé par 2 ou 3</li>
                <li>• Charges partagées (internet, électricité)</li>
                <li>• Moins de solitude</li>
                <li>• Logements plus grands accessibles</li>
              </ul>
            </div>

            <div className="bg-[#d29922]/10 border border-[#d29922] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#d29922] mb-4">⚠️ Points de vigilance</h3>
              <ul className="text-white space-y-2">
                <li>• Clause de solidarité (tu paies si coloc part)</li>
                <li>• Règles de vie à fixer dès le départ</li>
                <li>• Pacte de colocation écrit recommandé</li>
                <li>• Vérifier compatibilité mode de vie</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-[#3ECFCF] mb-4">🔗 Plateformes de colocation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.lacartedescolocs.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors text-center"
              >
                La Carte des Colocs ↗
              </a>
              <a
                href="https://www.appartager.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors text-center"
              >
                Appartager ↗
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">
            🛡️ Garanties locatives : solutions sans garant
          </h2>

          <div className="bg-[#008080]/10 border-2 border-[#008080] rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-4">🌟 VISALE - La solution miracle</h3>
            <p className="text-white mb-4">
              Visale est une garantie gratuite qui se porte caution à la place d'un garant physique.
              Valable pour les étudiants sans condition de ressources.
            </p>
            <ul className="text-white space-y-2 mb-4">
              <li>• <strong>Montant garanti :</strong> équivalent 36 mois de loyer</li>
              <li>• <strong>Demande :</strong> en ligne AVANT signature du bail</li>
              <li>• <strong>Délai :</strong> réponse sous 48h</li>
              <li>• <strong>Gratuit</strong> pour les étudiants</li>
            </ul>
            <a
              href="https://www.visale.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors"
            >
              Demander Visale →
            </a>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Autres garanties locatives</h3>
            <ul className="text-[#8b949e] space-y-3">
              <li>
                <strong className="text-white">GLI</strong> (Garantie Loyers Impayés) :
                payante, demandée par le propriétaire
              </li>
              <li>
                <strong className="text-white">Caution bancaire :</strong>
                bloque une somme sur ton compte
              </li>
              <li>
                <strong className="text-white">Garant physique :</strong>
                parent ou tiers qui se porte caution
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">
            💰 APL : Aide Personnalisée au Logement
          </h2>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-[#3ECFCF] mb-4">Qui peut en bénéficier ?</h3>
            <p className="text-white mb-4">
              Tout étudiant locataire (hors logement chez les parents) peut demander l'APL,
              sans condition d'âge ni de nationalité.
            </p>

            <h3 className="text-xl font-bold text-[#3ECFCF] mb-4 mt-6">📝 Démarches étape par étape</h3>
            <ol className="text-white space-y-3">
              <li className="flex gap-3">
                <span className="text-[#008080] font-bold">1.</span>
                <div>
                  <strong>Simule ton APL</strong> sur caf.fr AVANT de signer ton bail
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008080] font-bold">2.</span>
                <div>
                  <strong>Dépose ton dossier CAF</strong> dans le mois suivant l'entrée dans le logement
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008080] font-bold">3.</span>
                <div>
                  <strong>Documents nécessaires :</strong> contrat de bail, RIB, justificatif scolarité,
                  déclaration de revenus
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-[#008080] font-bold">4.</span>
                <div>
                  <strong>Délai :</strong> 1 à 3 mois, versement rétroactif au 1er mois de location
                </div>
              </li>
            </ol>

            <a
              href="https://www.caf.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-4 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors"
            >
              Simulateur APL CAF ↗
            </a>
          </div>
        </div>

        {/* Sources */}
        <SourcesAccordion sources={sources} />

      </div>
    </div>
  );
}
