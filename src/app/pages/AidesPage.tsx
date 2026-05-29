import { Glossary } from '../components/Glossary';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { StatCardGrid } from '../components/StatCardGrid';
import { PieChart } from '../components/PieChart';
import { BarChartAnimated } from '../components/BarChartAnimated';
import { DataTable } from '../components/DataTable';
import { SourcesAccordion } from '../components/SourcesAccordion';

type AideFiltre = 'boursier' | 'non-boursier' | 'alternant' | 'difficulte' | 'crous' | 'prive';

interface Aide {
  id: number;
  titre: string;
  montant: string;
  badge: string;
  description: string;
  lien: string;
  profils: AideFiltre[];
  guide: {
    criteres: string[];
    documents: string[];
    demarche: string;
    delai: string;
    conseil: string;
  };
}

export function AidesPage() {
  const [filtresActifs, setFiltresActifs] = useState<AideFiltre[]>([]);
  const [aidesOuvertes, setAidesOuvertes] = useState<number[]>([]);

  const stats = [
    { value: '+500M€', label: 'Aides non réclamées chaque année en France', color: 'red' as const },
    { value: 37, label: 'Étudiants boursiers CROUS (2023-2024)', suffix: '%', description: 'SIES 2024', color: 'teal' as const },
    { value: 35.8, label: 'Étudiants boursiers en 2024-2025 (en baisse)', suffix: '%', description: 'SIES 2024', color: 'orange' as const },
    { value: 48, label: 'Ne savaient pas que des aides existaient', suffix: '%', color: 'red' as const },
    { value: '6 335€', label: 'Montant maximum bourse annuelle (échelon 7)', description: 'Arrêté JO 2024', color: 'green' as const },
    { value: '~295€', label: 'APL maximum zone tendue (indicatif)', description: 'Variable selon situation', color: 'green' as const },
  ];

  const eligiblesVsBeneficiaires = [
    { label: 'Bourse CROUS - éligibles', value: 37, color: '#008080' },
    { label: 'Bourse CROUS - bénéficiaires', value: 34, color: '#3fb950' },
    { label: 'APL - éligibles', value: 44, color: '#008080' },
    { label: 'APL - bénéficiaires', value: 38, color: '#3fb950' },
    { label: 'FSDIE urgence - éligibles', value: 15, color: '#008080' },
    { label: 'FSDIE urgence - bénéficiaires', value: 4, color: '#f85149' },
    { label: 'Repas 1€ - éligibles', value: 37, color: '#008080' },
    { label: 'Repas 1€ - bénéficiaires', value: 29, color: '#3fb950' },
    { label: 'Visale - éligibles', value: 42, color: '#008080' },
    { label: 'Visale - bénéficiaires', value: 11, color: '#f85149' },
    { label: 'Prime activité - éligibles', value: 12, color: '#008080' },
    { label: 'Prime activité - bénéficiaires', value: 6, color: '#f85149' },
  ];

  const raisonsNonDemande = [
    { label: 'Ne savait pas que ça existait', value: 48, color: '#f85149' },
    { label: 'Démarches trop complexes', value: 35, color: '#E8731A' },
    { label: 'Date limite ratée', value: 29, color: '#d29922' },
    { label: 'Honte / stigmatisation', value: 21, color: '#8b949e' },
    { label: 'Pensait ne pas être éligible', value: 18, color: '#58a6ff' },
  ];

  const echelonsCROUS = [
    ['Échelon', 'Revenu fiscal parents (indicatif)', 'Montant annuel', 'Mensuel', 'Exonération frais inscr.'],
    ['0bis', '< 33 100€ (maintien droits)', '1 454€', '145€', 'Oui'],
    ['1', '< 33 100€', '1 843€', '184€', 'Oui'],
    ['2', '< 27 900€', '2 479€', '248€', 'Oui'],
    ['3', '< 24 600€', '3 111€', '311€', 'Oui'],
    ['4', '< 21 000€', '3 742€', '374€', 'Oui'],
    ['5', '< 17 400€', <span className="text-[#3fb950] font-bold">4 375€</span>, <span className="text-[#3fb950] font-bold">438€</span>, 'Oui'],
    ['6', '< 13 900€', <span className="text-[#3fb950] font-bold">5 007€</span>, <span className="text-[#3fb950] font-bold">501€</span>, 'Oui'],
    ['7', '< 10 300€', <span className="text-[#3fb950] font-bold">6 335€</span>, <span className="text-[#3fb950] font-bold">633€</span>, 'Oui'],
  ];

  const toutesAides = [
    ['Aide', 'Montant max', 'Pour qui', 'Quand demander', 'Lien officiel'],
    ['Bourse CROUS', '1 454€ à 6 335€/an', 'Sous conditions revenu', 'Janv → Mai', <a href="https://www.messervices.etudiant.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">messervices.etudiant.gouv.fr ↗</a>],
    ['APL logement', 'Variable (simulateur)', 'Locataires étudiants', 'Dans le mois', <a href="https://www.caf.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">caf.fr ↗</a>],
    ['Aide urgence FSDIE', '100-2 000€', 'Difficulté soudaine', 'À tout moment', <a href="https://trouver-un-service.etudiant.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">trouver-un-service.etudiant.gouv.fr ↗</a>],
    ['Visale (caution)', '36 mois loyer', 'Sans garant physique', 'Avant bail', <a href="https://www.visale.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">visale.fr ↗</a>],
    ['Repas CROUS 1€', 'illimité', 'Boursiers + SSAS', 'Automatique', <a href="https://www.crous-toulouse.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">crous-toulouse.fr ↗</a>],
    ['Aide mobilité inter.', '400-1 600€', 'Séjour étranger', 'Avant départ', <a href="https://www.campusfrance.org" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">campusfrance.org ↗</a>],
    ['Aide au mérite', '1 800€/an', 'Mention TB bac', 'Automatique', <a href="https://www.etudiant.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">etudiant.gouv.fr ↗</a>],
    ['Prime d\'activité', '~200€/mois', 'Job {'>'} 910€/mois', 'Via CAF', <a href="https://www.caf.fr" target="_blank" rel="noopener noreferrer" className="text-[#3ECFCF] hover:underline">caf.fr ↗</a>],
  ];

  const calendrierDemarches = [
    ['Mois', 'Action à faire', 'Urgence'],
    ['Janvier', 'Ouvrir son DSE sur messervices.etudiant.gouv.fr', <span className="text-[#f85149] font-bold">CRITIQUE</span>],
    ['Fév - Mars', 'Compléter dossier + rassembler pièces', <span className="text-[#E8731A] font-bold">Haute</span>],
    ['Avril - Mai', 'DATE LIMITE DSE - dernier délai absolu', <span className="text-[#f85149] font-bold">CRITIQUE</span>],
    ['Juin', 'Simulateur APL sur caf.fr avant de signer', <span className="text-[#E8731A] font-bold">Haute</span>],
    ['Juillet', 'Résultats bourses CROUS', 'Info'],
    ['Août - Septembre', 'Demande Visale si pas de garant', <span className="text-[#E8731A] font-bold">Haute</span>],
    ['Septembre', 'Demande APL dans le mois suivant l\'entrée', <span className="text-[#f85149] font-bold">CRITIQUE</span>],
    ['Oct - Nov', 'Aide urgence FSDIE si besoin', 'Selon besoin'],
    ['Décembre', 'Bilan budget + préparer DSE suivant', 'Modérée'],
  ];

  const sources = [
    {
      title: 'CROUS - Guide officiel bourses 2024',
      url: 'https://www.etudiant.gouv.fr/fr/bourses-sur-criteres-sociaux',
      author: 'CROUS',
      date: '2024'
    },
    {
      title: 'CNAF - Rapport APL étudiants 2023',
      url: 'https://www.caf.fr/allocataires/droits-et-prestations/s-informer-sur-les-aides/logement-et-hebergement/l-aide-personnalisee-au-logement-apl',
      author: 'CNAF',
      date: '2023'
    },
    {
      title: 'Portail aides étudiantes',
      url: 'https://www.messervices.etudiant.gouv.fr',
      author: 'Ministère ESRI',
      date: '2024'
    }
  ];

  const toggleFiltre = (filtre: AideFiltre) => {
    setFiltresActifs(prev =>
      prev.includes(filtre)
        ? prev.filter(f => f !== filtre)
        : [...prev, filtre]
    );
  };

  const toggleAide = (id: number) => {
    setAidesOuvertes(prev =>
      prev.includes(id)
        ? prev.filter(aideId => aideId !== id)
        : [...prev, id]
    );
  };

  const aides: Aide[] = [
    {
      id: 1,
      titre: 'Bourse CROUS sur critères sociaux',
      montant: '1 454€ à 6 335€/an',
      badge: 'Tous profils',
      description: 'Aide financière accordée selon les revenus du foyer fiscal, la situation familiale et l\'éloignement géographique.',
      lien: 'https://www.messervices.etudiant.gouv.fr',
      profils: ['boursier', 'difficulte'],
      guide: {
        criteres: [
          'Revenus du foyer fiscal inférieurs au plafond',
          'Âge < 28 ans au 1er septembre',
          'Inscrit en formation initiale',
          'Assiduité aux cours et examens'
        ],
        documents: [
          'DSE (Dossier Social Étudiant) en ligne',
          'Avis fiscal des parents',
          'Acte de naissance',
          'Certificat de scolarité',
          'Bulletins de salaire si travail'
        ],
        demarche: 'DSE à remplir sur messervices.etudiant.gouv.fr entre le 15 janvier et le 15 mai pour l\'année suivante',
        delai: 'Résultat en juillet, versement à partir de septembre',
        conseil: 'Ne JAMAIS rater la date limite de mai ! Un recours est possible en septembre en cas de changement de situation.'
      }
    },
    {
      id: 2,
      titre: 'APL - Aide Personnalisée au Logement',
      montant: 'Variable selon situation',
      badge: 'Locataires',
      description: 'Allocation logement pour tous les étudiants locataires, que ce soit en CROUS ou en logement privé. Montant calculé individuellement selon loyer, revenus et localisation.',
      lien: 'https://www.caf.fr',
      profils: ['boursier', 'non-boursier', 'crous', 'prive'],
      guide: {
        criteres: [
          'Être locataire (hors logement chez les parents)',
          'Revenus inférieurs au plafond selon zone géographique',
          'Logement décent et conforme aux normes'
        ],
        documents: [
          'Contrat de bail',
          'RIB',
          'Justificatif de scolarité',
          'Déclaration de revenus',
          'Attestation de loyer (fournie par le propriétaire)'
        ],
        demarche: 'Dossier CAF à déposer en ligne sur caf.fr dans le mois suivant l\'entrée dans le logement',
        delai: '1 à 3 mois de traitement, versement rétroactif au premier mois de location',
        conseil: 'Utilise le simulateur CAF AVANT de signer ton bail pour estimer le montant auquel tu as droit !'
      }
    },
    {
      id: 3,
      titre: 'Aide d\'urgence FSDIE',
      montant: '100€ à 2 000€',
      badge: 'Difficulté soudaine',
      description: 'Fonds de solidarité pour les étudiants en difficulté financière imprévue (rupture familiale, accident, perte d\'emploi).',
      lien: 'https://trouver-un-service.etudiant.gouv.fr',
      profils: ['difficulte'],
      guide: {
        criteres: [
          'Difficulté financière soudaine et imprévue',
          'Rupture familiale ou accident de vie',
          'Justificatifs de la situation difficile'
        ],
        documents: [
          'Relevés bancaires des 3 derniers mois',
          'Justificatifs de charges (loyer, factures)',
          'Lettre de motivation expliquant la situation',
          'Certificat de scolarité'
        ],
        demarche: 'Prendre RDV avec le service social (SSAS) de ton université ou du CROUS pour constituer un dossier',
        delai: 'Réponse sous 2 semaines, versement rapide en cas d\'acceptation',
        conseil: 'Ne pas attendre d\'être au fond du gouffre ! Plus tôt tu fais la demande, plus vite l\'aide arrive.'
      }
    },
    {
      id: 4,
      titre: 'Aide à la mobilité internationale',
      montant: '400€ à 1 600€',
      badge: 'Stage / Échange',
      description: 'Bourse pour les étudiants effectuant un stage ou un échange universitaire à l\'étranger (Erasmus+, hors Europe).',
      lien: 'https://www.campusfrance.org',
      profils: ['boursier', 'non-boursier'],
      guide: {
        criteres: [
          'Stage ou échange validé par l\'établissement',
          'Durée minimum 2 mois',
          'Convention de stage ou accord d\'échange'
        ],
        documents: [
          'Attestation d\'accueil de l\'organisme étranger',
          'Convention de stage ou accord d\'échange',
          'Certificat de scolarité',
          'Avis d\'attribution de bourse (si boursier)'
        ],
        demarche: 'Se renseigner auprès du service des relations internationales de l\'IUT, dossier à déposer avant le départ',
        delai: '2 à 3 mois de traitement',
        conseil: 'Cumule Erasmus+ avec l\'aide à la mobilité du CROUS si tu es boursier !'
      }
    },
    {
      id: 5,
      titre: 'Repas à 1€ CROUS',
      montant: '2,30€ économisés/repas',
      badge: 'Boursiers',
      description: 'Accès aux restaurants universitaires à tarif réduit de 1€ pour tous les étudiants boursiers.',
      lien: 'https://www.crous-toulouse.fr',
      profils: ['boursier', 'crous'],
      guide: {
        criteres: [
          'Être étudiant boursier CROUS (échelon 0 à 7)',
          'Carte étudiante à jour'
        ],
        documents: [
          'Notification de bourse CROUS',
          'Carte étudiante'
        ],
        demarche: 'Automatique dès réception de la notification de bourse. Présenter la carte étudiante au RU.',
        delai: 'Immédiat dès notification de bourse',
        conseil: 'Les RU à Toulouse : Arsenal, Rangueil, Paul Sabatier, INSA. Économie de ~50€/mois si tu manges 5x/semaine au RU !'
      }
    },
    {
      id: 6,
      titre: 'Épiceries solidaires',
      montant: 'Produits à -70%',
      badge: 'Difficulté',
      description: 'Accès à des produits alimentaires et d\'hygiène à prix très réduits ou gratuits via Linkee et Banque Alimentaire.',
      lien: 'https://www.linkee.com',
      profils: ['difficulte', 'boursier'],
      guide: {
        criteres: [
          'Quotient familial < seuil défini',
          'Étudiant en situation de précarité',
          'Justificatifs de ressources'
        ],
        documents: [
          'Certificat de scolarité',
          'Avis d\'imposition ou attestation CAF',
          'Justificatif de domicile',
          'Pièce d\'identité'
        ],
        demarche: 'Inscription sur place à l\'épicerie solidaire la plus proche. Liste disponible sur linkee.com',
        delai: 'Inscription immédiate, accès dès validation du dossier',
        conseil: 'Certaines épiceries proposent aussi des ateliers cuisine et anti-gaspi gratuits !'
      }
    },
    {
      id: 7,
      titre: 'Garantie VISALE - Caution logement',
      montant: '36 mois de loyer garantis',
      badge: 'Sans garant',
      description: 'Garantie locative gratuite pour les étudiants sans garant physique. Se porte caution à la place des parents.',
      lien: 'https://www.visale.fr',
      profils: ['boursier', 'non-boursier', 'crous', 'prive'],
      guide: {
        criteres: [
          'Être étudiant (sans condition d\'âge ni de revenus)',
          'Signer un bail de location',
          'Demande AVANT signature du bail'
        ],
        documents: [
          'Certificat de scolarité',
          'Pièce d\'identité',
          'Projet de bail ou pré-bail'
        ],
        demarche: 'Demande en ligne sur visale.fr AVANT de signer le bail. Numéro de dossier à transmettre au propriétaire.',
        delai: 'Réponse sous 48h',
        conseil: 'VISALE est GRATUIT et accepté par la plupart des propriétaires. Indispensable si tes parents ne peuvent pas se porter garants !'
      }
    },
    {
      id: 8,
      titre: 'Aide au mérite',
      montant: '+1 800€/an',
      badge: 'Excellents résultats',
      description: 'Complément de bourse pour les étudiants boursiers ayant obtenu une mention Très Bien au bac ou d\'excellents résultats universitaires.',
      lien: 'https://www.etudiant.gouv.fr',
      profils: ['boursier'],
      guide: {
        criteres: [
          'Mention Très Bien au baccalauréat',
          'OU figurer dans les meilleurs étudiants de la promotion (top 10%)',
          'Être boursier CROUS'
        ],
        documents: [
          'Relevé de notes du bac (si mention TB)',
          'Relevés de notes universitaires',
          'Notification de bourse'
        ],
        demarche: 'Automatique pour mention TB bac. Pour résultats universitaires : dossier à déposer auprès du CROUS.',
        delai: 'Versement en même temps que la bourse CROUS',
        conseil: 'L\'aide au mérite est versée pendant 3 ans maximum (durée normale du BUT).'
      }
    }
  ];

  const aidesFiltrées = filtresActifs.length === 0
    ? aides
    : aides.filter(aide => aide.profils.some(profil => filtresActifs.includes(profil)));

  return (
    <div className="min-h-screen pt-20 pb-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <div
          className="mt-8 mb-16"
        >
          <div className="relative h-[40vh] rounded-2xl overflow-hidden mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop"
              alt="Aides financières étudiantes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0969da]/90 to-black/60 flex items-center justify-center">
              <div className="text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  L'argent qui t'attend.
                  <br />
                  Vraiment.
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Sans compte, sans inscription - filtre selon ta situation et découvre les aides
                  auxquelles tu as droit maintenant.
                </p>
              </div>
            </div>
          </div>
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
            data={eligiblesVsBeneficiaires}
            title="Éligibles vs bénéficiaires - Des millions d'euros d'aides disponibles, pas réclamées"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">L'écart entre éligibilité et bénéfice révèle des millions d'euros non réclamés.</strong> Pour Visale, seulement 11% des éligibles (42%) en bénéficient réellement - soit 31 points de perte.
            </p>
          </div>

          <PieChart
            data={raisonsNonDemande}
            title="Pourquoi les aides ne sont pas demandées"
          />
          <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 -mt-8">
            <p className="text-white text-sm">
              <strong className="text-[#f85149]">Note : total {'>'} 100% = plusieurs raisons cumulées possibles.</strong> 48% ne savaient pas que les aides existaient - le problème n'est pas la complexité, c'est l'ignorance de l'existence même des dispositifs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Les 8 échelons de bourse CROUS</h3>
            <DataTable headers={echelonsCROUS[0] as string[]} rows={echelonsCROUS.slice(1)} />
            <div className="bg-[#3fb950]/10 border border-[#3fb950] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#3fb950]">Source officielle : Arrêté JO du 19 avril 2025</strong> - Montants 2024-2025 et 2025-2026 confirmés identiques. Revalorisation de +37€/mois appliquée en 2023. Tous les échelons donnent droit à l'exonération des frais d'inscription.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Toutes les aides d'un coup d'œil</h3>
            <DataTable headers={toutesAides[0] as string[]} rows={toutesAides.slice(1)} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#3ECFCF] mb-6">Calendrier des démarches (12 mois)</h3>
            <DataTable headers={calendrierDemarches[0] as string[]} rows={calendrierDemarches.slice(1)} />
            <div className="bg-[#f85149]/10 border border-[#f85149] rounded-xl p-4 mt-4">
              <p className="text-white text-sm">
                <strong className="text-[#f85149]">Janvier et Mai sont les deux mois critiques.</strong> Si tu rates la date limite du DSE en mai, tu perds une année entière de bourse. Pas de recours possible sauf changement de situation exceptionnel.
              </p>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Trouve les aides qui te concernent</h2>
          <div className="flex flex-wrap gap-3 items-center mb-4">
            <span className="text-[#8b949e] font-semibold">Filtrer par profil :</span>
            {[
              { id: 'boursier' as AideFiltre, label: 'Boursier CROUS' },
              { id: 'non-boursier' as AideFiltre, label: 'Non boursier' },
              { id: 'alternant' as AideFiltre, label: 'Alternant' },
              { id: 'difficulte' as AideFiltre, label: 'En difficulté' },
              { id: 'crous' as AideFiltre, label: 'Logement CROUS' },
              { id: 'prive' as AideFiltre, label: 'Logement privé' }
            ].map(filtre => (
              <button
                key={filtre.id}
                onClick={() => toggleFiltre(filtre.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filtresActifs.includes(filtre.id)
                    ? 'bg-[#008080] text-white scale-105'
                    : 'bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:border-[#008080] hover:text-white'
                }`}
              >
                {filtre.label}
              </button>
            ))}
            {filtresActifs.length > 0 && (
              <button
                onClick={() => setFiltresActifs([])}
                className="px-5 py-2 rounded-full font-semibold text-sm bg-[#f85149]/20 text-[#f85149] hover:bg-[#f85149]/30 transition-all"
              >
                Tout afficher ×
              </button>
            )}
          </div>
          <p className="text-[#3ECFCF] font-bold text-lg">
            {aidesFiltrées.length} aide{aidesFiltrées.length > 1 ? 's' : ''} correspond
            {aidesFiltrées.length > 1 ? 'ent' : ''} à ta situation
          </p>
        </div>

        {/* Cartes d'aides */}
        <div className="space-y-6 mb-16">
          {aidesFiltrées.map((aide, index) => (
            <div
              key={aide.id}
              className={`bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden transition-all duration-300 ${
                filtresActifs.length > 0 && !aide.profils.some(p => filtresActifs.includes(p))
                  ? 'opacity-40 scale-[0.98]'
                  : 'opacity-100 scale-100'
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">💰</span>
                      <h3 className="text-xl font-bold text-white">{aide.titre}</h3>
                    </div>
                    <p className="text-3xl font-bold text-[#3ECFCF] mb-2">{aide.montant}</p>
                    <span className="inline-block px-4 py-1 bg-[#E8731A]/20 text-[#E8731A] rounded-full text-sm font-bold">
                      {aide.badge}
                    </span>
                  </div>
                </div>

                <p className="text-[#8b949e] mb-4">{aide.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={aide.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-lg transition-colors text-center"
                  >
                    Accéder au site officiel ↗
                  </a>
                  <button
                    onClick={() => toggleAide(aide.id)}
                    className="px-6 py-3 bg-[#161b22] border border-[#30363d] hover:border-[#008080] text-white font-bold rounded-lg transition-all text-center flex items-center justify-center gap-2"
                  >
                    {aidesOuvertes.includes(aide.id) ? '▾' : '▸'} Guide complet - Comment en bénéficier ?
                  </button>
                </div>

                {/* Accordéon Guide */}
                {aidesOuvertes.includes(aide.id) && (
                  <div
                    className="mt-6 pt-6 border-t border-[#30363d] space-y-6"
                  >
                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="text-[#3ECFCF]">1.</span> Qui peut en bénéficier ? (Critères)
                      </h4>
                      <ul className="space-y-2">
                        {aide.guide.criteres.map((critere, i) => (
                          <li key={i} className="text-[#8b949e] flex gap-3">
                            <span className="text-[#3ECFCF]">•</span>
                            <span>{critere}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="text-[#3ECFCF]">2.</span> Documents nécessaires
                      </h4>
                      <ul className="space-y-2">
                        {aide.guide.documents.map((doc, i) => (
                          <li key={i} className="text-[#8b949e] flex gap-3">
                            <span className="text-[#3ECFCF]">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="text-[#3ECFCF]">3.</span> Où et comment faire la demande ?
                      </h4>
                      <p className="text-[#8b949e]">{aide.guide.demarche}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="text-[#3ECFCF]">4.</span> Délai de traitement
                      </h4>
                      <p className="text-[#8b949e]">{aide.guide.delai}</p>
                    </div>

                    <div className="bg-[#008080]/10 border border-[#008080] rounded-lg p-4">
                      <h4 className="text-[#3ECFCF] font-bold mb-2 flex items-center gap-2">
                        <span>💡</span> Conseil pratique
                      </h4>
                      <p className="text-white">{aide.guide.conseil}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sources */}
        <SourcesAccordion sources={sources} />

      </div>
    </div>
  );
}
