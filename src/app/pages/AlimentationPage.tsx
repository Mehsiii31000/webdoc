import { Glossary } from '../components/Glossary';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatCardGrid } from '../components/StatCardGrid';
import { PieChart } from '../components/PieChart';
import { BarChartAnimated } from '../components/BarChartAnimated';
import { DataTable } from '../components/DataTable';
import { SourcesAccordion } from '../components/SourcesAccordion';

export function AlimentationPage() {
  const stats = [
    { value: 20, label: 'Étudiants en précarité alimentaire', suffix: '%', description: 'IFOP 2023', color: 'red' as const },
    { value: 36, label: 'Sautent régulièrement des repas', suffix: '%', description: 'IFOP/COP1 2023', color: 'red' as const },
    { value: '1/4', label: 'En difficulté financière importante', description: 'OVE 2023', color: 'red' as const },
    { value: 11, label: 'Seulement ceux qui utilisent l\'aide alimentaire disponible', suffix: '%', color: 'orange' as const },
    { value: '800K', label: 'Repas distribués par les épiceries solidaires en 2023', color: 'teal' as const },
    { value: 1, label: 'Prix d\'un repas CROUS pour les boursiers', suffix: '€', description: 'CROUS 2024', color: 'green' as const },
  ];

  const situationAlimentaire = [
    { label: 'Mange bien tous les jours', value: 52, color: '#3fb950' },
    { label: 'Difficultés ponctuelles', value: 28, color: '#E8731A' },
    { label: 'Saute des repas régulièrement', value: 13, color: '#f85149' },
    { label: 'Précarité alimentaire sévère', value: 7, color: '#b91c1c' },
  ];

  const evolutionPrecarite = [
    { label: '2018', value: 12, color: '#E8731A' },
    { label: '2020 (COVID)', value: 21, color: '#f85149' },
    { label: '2022', value: 19, color: '#E8731A' },
    { label: '2024', value: 20, color: '#f85149' },
  ];

  const modesAlimentation = [
    ['Mode d\'alimentation', 'Coût/mois', 'Qualité nutritive', 'Temps prep.', 'Faisable étudiant'],
    ['Cuisine maison simple', '100-140€', <span className="text-[#3fb950] font-bold">Bonne</span>, '20-30min/j', <span className="text-[#3fb950] font-bold">Idéal</span>],
    ['CROUS + complément', '60-100€', <span className="text-[#3fb950] font-bold">Bonne</span>, 'Faible', <span className="text-[#3fb950] font-bold">Optimal</span>],
    ['Végétarien maison', '80-120€', <span className="text-[#3fb950] font-bold">Excellente</span>, '25min/j', <span className="text-[#3fb950] font-bold">Très bien</span>],
    ['Plats préparés', '220-280€', <span className="text-[#E8731A] font-bold">Faible</span>, '5min', <span className="text-[#E8731A] font-bold">Cher</span>],
    ['Livraison domicile', '280-400€', 'Variable', '0min', <span className="text-[#f85149] font-bold">Très cher</span>],
    ['Fast-food quotidien', '200-320€', <span className="text-[#f85149] font-bold">Faible</span>, '0min', <span className="text-[#f85149] font-bold">Trop cher</span>],
    ['Aide alimentaire + cuisiné', '30-60€', 'Correcte', '20min/j', <span className="text-[#3fb950] font-bold">Sous conditions</span>],
  ];

  const alimentsEssentiels = [
    ['Aliment', 'Prix', 'Protéines', 'Calories', 'Conservation', 'Score étudiant'],
    ['Lentilles 500g', '0.80€', '26g/100g', '116 kcal', '1-2 ans', <span className="text-[#3fb950]">⭐⭐⭐⭐⭐</span>],
    ['Oeufs x12', '2.50€', '13g/oeuf', '155 kcal', '3-4 semaines', <span className="text-[#3fb950]">⭐⭐⭐⭐⭐</span>],
    ['Flocons avoine', '0.90€', '13g/100g', '389 kcal', '6-12 mois', <span className="text-[#3fb950]">⭐⭐⭐⭐⭐</span>],
    ['Riz complet 1kg', '1.20€', '7g/100g', '360 kcal', '1-2 ans', <span className="text-[#3fb950]">⭐⭐⭐⭐⭐</span>],
    ['Sardines boîte', '0.90€', '25g/100g', '208 kcal', '3-5 ans', <span className="text-[#3fb950]">⭐⭐⭐⭐⭐</span>],
    ['Pois chiches', '0.90€', '9g/100g', '164 kcal', '3-5 ans', <span className="text-[#E8731A]">⭐⭐⭐⭐</span>],
    ['Carottes 1kg', '0.80€', '1g/100g', '41 kcal', '3-4 semaines', <span className="text-[#E8731A]">⭐⭐⭐⭐</span>],
    ['Bananes 1kg', '1.50€', '1g/100g', '89 kcal', '1 semaine', <span className="text-[#E8731A]">⭐⭐⭐⭐</span>],
    ['Fromage blanc', '1.20€', '8g/100g', '60 kcal', '2 semaines', <span className="text-[#E8731A]">⭐⭐⭐⭐</span>],
    ['Pain de mie', '1.00€', '8g/100g', '265 kcal', '1 semaine', <span className="text-[#d29922]">⭐⭐⭐</span>],
  ];

  const ressourcesToulouse = [
    ['Ressource', 'Lieu', 'Conditions', 'Lien'],
    ['Épicerie solidaire IUT', 'Campus Paul Sabatier', 'Cert. scolarité', 'Voir secrétariat IUT'],
    ['LINKEE Toulouse', 'Plusieurs points', 'Inscription en ligne', <a href="https://www.linkee.com" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">linkee.com ↗</a>],
    ['Banque alimentaire 31', 'Toulouse + agglo', 'Sur justificatifs', <a href="https://www.banquealimentaire.org" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">banquealimentaire.org ↗</a>],
    ['CROUS Resto U (1€)', '8 sites Toulouse', 'Boursier ou SSAS', <a href="https://www.crous-toulouse.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">crous-toulouse.fr ↗</a>],
    ['Too Good To Go', 'Partout', 'Application mobile', <a href="https://www.toogoodtogo.com" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">toogoodtogo.com ↗</a>],
    ['Croix-Rouge Toulouse', 'Centre-ville', 'Sur demande', <a href="https://www.croix-rouge.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">croix-rouge.fr ↗</a>],
  ];

  const sources = [
    {
      title: 'IFOP / Linkee - Précarité alimentaire étudiants 2023',
      url: 'https://www.linkee.com/actualites/',
      author: 'IFOP / Linkee',
      date: '2023'
    },
    {
      title: 'Fédération banques alimentaires - Rapport 2023',
      url: 'https://www.banquealimentaire.org/rapport-activite',
      author: 'Banques Alimentaires',
      date: '2023'
    },
    {
      title: 'CROUS - Repas à 1€ dispositif national',
      url: 'https://www.etudiant.gouv.fr/fr/repas-a-1-e-crous',
      author: 'CROUS',
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
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1200&h=600&fit=crop"
              alt="Alimentation étudiante"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#d29922]/90 to-black/60 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  Manger équilibré pour 3€/jour :
                  <br />
                  mode d'emploi
                </h1>
              </div>
            </div>
          </div>

          <p className="text-xl text-[#8b949e] italic text-center max-w-3xl mx-auto">
            Non, bien manger n'est pas réservé aux riches. Oui, c'est possible avec un budget serré.
            Voici comment nourrir ton corps sans vider ton compte.
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
            data={situationAlimentaire}
            title="Situation alimentaire des étudiants français - IFOP 2023"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">48% des étudiants rencontrent des difficultés alimentaires.</strong> 36% sautent des repas régulièrement selon IFOP/COP1 2023, et 20% sont en situation de précarité alimentaire.
            </p>
          </div>

          <BarChartAnimated
            data={evolutionPrecarite}
            title="% d'étudiants en situation de précarité alimentaire"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">×2 depuis 2018 - la crise COVID a déclenché une hausse durable.</strong> La précarité alimentaire a doublé en 6 ans et reste élevée même après la pandémie.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Comparatif modes d'alimentation</h3>
            <DataTable headers={modesAlimentation[0] as string[]} rows={modesAlimentation.slice(1)} />
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#3fb950]">Le CROUS + cuisine maison = combo gagnant.</strong> Pour 60-140€/mois, tu peux manger équilibré en combinant les repas à 1€ au CROUS avec quelques courses simples.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">10 aliments essentiels pas chers</h3>
            <DataTable headers={alimentsEssentiels[0] as string[]} rows={alimentsEssentiels.slice(1)} />
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#3fb950]">Ces 10 aliments coûtent moins de 12€ au total.</strong> Ils fournissent protéines, glucides, lipides et vitamines essentielles. Les lentilles, oeufs et flocons d'avoine sont les champions du rapport qualité/prix.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Ressources alimentaires à Toulouse</h3>
            <DataTable headers={ressourcesToulouse[0] as string[]} rows={ressourcesToulouse.slice(1)} />
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#3fb950]">Toutes ces ressources existent. Toutes sont gratuites ou à prix réduit.</strong> L'épicerie solidaire de l'IUT Paul Sabatier est à 500m du campus - il suffit d'y aller.
              </p>
            </div>
          </div>
        </div>

        {/* Contenu éditorial */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            🛒 Liste de courses pour 30€/semaine
          </h2>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-4">Féculents & céréales</h3>
                <ul className="text-white space-y-2">
                  <li className="flex justify-between">
                    <span>Pâtes (1kg)</span>
                    <span className="text-[#8b949e]">1.20€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Riz (1kg)</span>
                    <span className="text-[#8b949e]">1.30€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Flocons d'avoine (500g)</span>
                    <span className="text-[#8b949e]">0.90€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pain de mie</span>
                    <span className="text-[#8b949e]">1.00€</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-4">Protéines</h3>
                <ul className="text-white space-y-2">
                  <li className="flex justify-between">
                    <span>Oeufs (x12)</span>
                    <span className="text-[#8b949e]">2.50€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lentilles sèches (500g)</span>
                    <span className="text-[#8b949e]">0.80€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Poulet surgelé (1kg)</span>
                    <span className="text-[#8b949e]">5.00€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sardines en boîte (x2)</span>
                    <span className="text-[#8b949e]">1.80€</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-4">Légumes & fruits</h3>
                <ul className="text-white space-y-2">
                  <li className="flex justify-between">
                    <span>Carottes (1kg)</span>
                    <span className="text-[#8b949e]">0.80€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tomates en boîte (x3)</span>
                    <span className="text-[#8b949e]">1.50€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bananes (1kg)</span>
                    <span className="text-[#8b949e]">1.50€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pommes de saison (1kg)</span>
                    <span className="text-[#8b949e]">2.00€</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#3ECFCF] mb-4">Produits laitiers & divers</h3>
                <ul className="text-white space-y-2">
                  <li className="flex justify-between">
                    <span>Lait (1L)</span>
                    <span className="text-[#8b949e]">1.10€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fromage blanc (500g)</span>
                    <span className="text-[#8b949e]">1.20€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Huile (500ml)</span>
                    <span className="text-[#8b949e]">2.50€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Épices & condiments</span>
                    <span className="text-[#8b949e]">2.00€</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#30363d]">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-xl">TOTAL</span>
                <span className="text-[#3ECFCF] font-bold text-2xl">27.10€</span>
              </div>
              <p className="text-[#8b949e] text-sm mt-2">
                Il te reste 2.90€ pour acheter un petit plaisir ou compléter selon tes goûts
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">
            👨‍🍳 3 recettes simples pour moins de 2€
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3ECFCF] mb-3">🍝 Pâtes aux lentilles (1.80€)</h3>
              <p className="text-[#8b949e] mb-3">Temps : 20 min · 2 portions · Protéines + féculents</p>
              <ul className="text-white space-y-2">
                <li>• 200g de pâtes (0.24€)</li>
                <li>• 100g de lentilles sèches (0.16€)</li>
                <li>• 1 boîte de tomates (0.50€)</li>
                <li>• Oignon, ail, épices (0.30€)</li>
                <li>• Huile d'olive (0.60€)</li>
              </ul>
              <p className="text-white mt-3">
                Faire cuire les lentilles 15 min. Pendant ce temps, faire revenir oignon + ail + tomates.
                Mélanger avec les pâtes cuites. Deux portions complètes et équilibrées.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3ECFCF] mb-3">🥚 Omelette complète (1.50€)</h3>
              <p className="text-[#8b949e] mb-3">Temps : 10 min · 1 portion · Rapide et protéiné</p>
              <ul className="text-white space-y-2">
                <li>• 3 oeufs (0.63€)</li>
                <li>• 1 tranche de pain de mie (0.10€)</li>
                <li>• Carottes râpées (0.15€)</li>
                <li>• Fromage blanc (0.30€)</li>
                <li>• Huile (0.32€)</li>
              </ul>
              <p className="text-white mt-3">
                Battre les oeufs, cuire à la poêle. Servir avec pain grillé, carottes râpées et fromage blanc.
                Un repas complet en 10 minutes.
              </p>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3ECFCF] mb-3">🍚 Riz au poulet et carottes (1.90€)</h3>
              <p className="text-[#8b949e] mb-3">Temps : 25 min · 2 portions · Batch cooking possible</p>
              <ul className="text-white space-y-2">
                <li>• 200g de riz (0.26€)</li>
                <li>• 150g de poulet surgelé (0.75€)</li>
                <li>• 2 carottes (0.16€)</li>
                <li>• Épices (curry, cumin) (0.20€)</li>
                <li>• Huile (0.53€)</li>
              </ul>
              <p className="text-white mt-3">
                Faire revenir le poulet avec les épices. Ajouter carottes coupées et riz cuit. Mélanger.
                Se conserve 3 jours au frigo - parfait pour meal prep.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6 mt-12">
            💡 Astuces anti-gaspi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#3fb950] mb-4">✅ À faire</h3>
              <ul className="text-white space-y-2">
                <li>• Congeler le pain qui rassit</li>
                <li>• Cuisiner les légumes flétris en soupe</li>
                <li>• Utiliser l'eau de cuisson des pâtes pour les sauces</li>
                <li>• Acheter fruits/légumes moches (même goût, -30%)</li>
                <li>• Batch cooking le dimanche pour la semaine</li>
              </ul>
            </div>

            <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#f85149] mb-4">⚠️ À éviter</h3>
              <ul className="text-white space-y-2">
                <li>• Faire les courses le ventre vide</li>
                <li>• Acheter sans liste = achats impulsifs</li>
                <li>• Ignorer les dates de péremption</li>
                <li>• Jeter sans vérifier (DLC ≠ DDM)</li>
                <li>• Commander sur les plateformes (×3 le prix)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sources */}
        <SourcesAccordion sources={sources} />

      </div>
    </div>
  );
}
