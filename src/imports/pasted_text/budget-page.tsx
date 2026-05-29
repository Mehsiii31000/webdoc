═════════════════════════════════════════════════════════════════
INSTRUCTIONS GLOBALES — MISSION, RÈGLES, FORMAT UNIVERSEL
═════════════════════════════════════════════════════════════════

INSTRUCTIONS GLOBALES — ENRICHISSEMENT MAXIMAL AVEC DONNÉES RÉELLES
══════════════════════════════════════════════════════════════════

SITE : https://luxury-river-15788577.figma.site/
MISSION : enrichir les 6 pages thématiques avec des données officielles
réelles, des graphiques visuels, des tableaux détaillés et des
témoignages émotionnels. Rendre le site le plus informatif possible.

TU AS LE DROIT ET LE DEVOIR DE :
→ Chercher toutes les données disponibles sur internet
→ Utiliser les sources officielles (OVE, LMDE, INSEE, CROUS, CAF, INSERM)
→ Créer des graphiques en CSS pur (barres horizontales, camemberts SVG)
→ Créer autant de tableaux que nécessaire
→ Écrire des textes longs, détaillés, émotionnels et informatifs
→ Citer chaque source avec son URL complète et sa date

DONNÉES CLÉS À INTÉGRER PARTOUT (utilise ces chiffres officiels) :

LOGEMENT :
  • 175 000 logements CROUS pour 2,9 millions d'étudiants = 1 place pour 17
  • 8% des étudiants n'ont pas de logement stable à la rentrée
  • 42% des dossiers étudiants refusés par des propriétaires privés
  • Loyer moyen studio ville universitaire : 560€/mois en 2024
  • Délai moyen pour trouver un logement : 6 semaines
  Source : OVE 2023, CROUS rapport annuel 2023

ALIMENTATION :
  • 20% des étudiants en situation de précarité alimentaire (IFOP 2023)
  • 23% sautent régulièrement des repas faute d'argent
  • 1 étudiant sur 4 ne mange pas à sa faim tous les jours
  • Seuls 11% de ceux qui en auraient besoin utilisent l'aide alimentaire
  • 800 000 repas distribués par les épiceries solidaires étudiantes en 2023
  Source : IFOP/Linkee 2023, Banque alimentaire 2023

SANTÉ MENTALE :
  • 1 étudiant sur 3 présente des symptômes d'anxiété (LMDE 2024)
  • 1 étudiant sur 5 a des pensées dépressives régulières
  • Burn-out : +43% depuis 2020
  • 5% seulement ont accès à un suivi psychologique régulier
  • 1 psy pour 30 000 étudiants dans les universités françaises
  Source : LMDE Baromètre 2024, INSERM 2022

BUDGET / PRÉCARITÉ :
  • 39% des étudiants en situation de précarité financière (OVE 2023)
  • Budget moyen mensuel : 914€ dont 55% pour le seul logement
  • 1 étudiant sur 4 à découvert au moins une fois par mois
  • Les dépenses ont augmenté 3x plus vite que les bourses (2015-2024)
  Source : OVE 2023, LMDE 2023, INSEE 2023

RÉUSSITE :
  • 45% des étudiants exercent un job rémunéré
  • Taux d'abandon 1re année BUT : ~15%
  • Au-delà de 16h/semaine de travail : -25% sur les notes
  • 1 enfant de cadre a 3x plus de chances d'obtenir un Master
  Source : OVE 2022, APEC 2023, Ministère ESRI 2023

AIDES :
  • +500 millions € d'aides non réclamées chaque année
  • 37% des étudiants éligibles à une bourse CROUS, seulement 34% la demandent
  • La bourse max (échelon 7) = 6 335€/an soit 527€/mois
  • APL : 44% des locataires étudiants y ont droit
  Source : CNAF 2023, CROUS rapport 2023, etudiant.gouv.fr

FORMAT GRAPHIQUES (utiliser CSS et SVG, pas de bibliothèque externe) :
  → Graphiques en barres : div avec width en %, couleur teal ou dégradé
  → Graphiques circulaires : SVG avec stroke-dasharray/stroke-dashoffset
  → Couleurs : teal #008080, orange #E8731A, rouge #f85149, vert #3fb950
  → Fond : #161b22, bordures : #30363d, texte : #ffffff

FORMAT TABLEAUX :
  → En-têtes : fond #008080, texte blanc, padding 12px 16px
  → Lignes alternées : #161b22 / #0d1117
  → Scroll horizontal sur mobile (wrapper overflow-x:auto)
  → Cellules importantes : couleur selon gravité (rouge/orange/vert)

FORMAT SOURCES (ajouter en bas de chaque section) :
  → Accordéon "📚 Sources de cette section"
  → Chaque source : auteur · titre · année · lien cliquable
  → Minimum 3 sources par thématique

FORMAT TÉMOIGNAGES :
  → Encadré fond #111827, bordure gauche 4px teal
  → Citation : 8-12 lignes, italic, situation concrète et précise
  → Attribution : Prénom · âge · filière · ville

═════════════════════════════════════════════════════════════════
💰 BUDGET — DONNÉES PRÉCARITÉ, GRAPHIQUES RÉPARTITION
═════════════════════════════════════════════════════════════════

PAGE BUDGET — DONNÉES RÉELLES ET GRAPHIQUES COMPLETS
══════════════════════════════════════════════════════════════════

Dans BudgetPage.tsx, intègre tout ce qui suit :

━━━ CHIFFRES CLÉS ANIMÉS (count-up au scroll) ━━━
  914€  — Budget mensuel moyen étudiant (OVE 2023)
  39%   — Étudiants en précarité financière
  55%   — Part du budget consacrée au logement seul
  45%   — Étudiants qui travaillent pour survivre
  1/4   — Étudiants à découvert chaque mois
  +52%  — Hausse du coût des courses depuis 2015

━━━ GRAPHIQUE 1 — CAMEMBERT : Répartition du budget étudiant ━━━
Créer un graphique SVG circulaire (viewBox 0 0 200 200) :
Données :
  Logement    55%  couleur #008080
  Alimentation 20%  couleur #E8731A
  Transport    8%   couleur #3fb950
  Loisirs      7%   couleur #58a6ff
  Santé        5%   couleur #a371f7
  Autres       5%   couleur #8b949e
Légende à droite du cercle avec couleurs et pourcentages.
Titre : "Où va l'argent d'un étudiant ?"
Animation : les segments apparaissent un par un au scroll (stroke-dashoffset 0→valeur)

━━━ GRAPHIQUE 2 — BARRES HORIZONTALES : Qui finance les études ? ━━━
Créer des barres CSS en div (width animé au scroll) :
  Aide famille/parents    71%  teal
  Job étudiant           45%  orange
  Bourse CROUS           37%  vert
  APL logement           44%  bleu
  Alternance             12%  violet
  Prêt étudiant           8%  gris
Titre : "Sources de revenus des étudiants"
Chaque barre : fond #30363d / fill coloré / label gauche / % droite

━━━ TABLEAU 1 — Budget comparatif par ville (2024) ━━━

| Poste             | Toulouse | Paris  | Lyon   | Bordeaux | Lille  | Nantes |
|-------------------|----------|--------|--------|----------|--------|--------|
| Loyer studio      | 490€     | 900€   | 580€   | 530€     | 480€   | 510€   |
| Courses/mois      | 160€     | 200€   | 170€   | 165€     | 155€   | 165€   |
| Transport         | 32€      | 86€    | 48€    | 38€      | 35€    | 40€    |
| Mutuelle          | 52€      | 52€    | 52€    | 52€      | 52€    | 52€    |
| Loisirs           | 80€      | 120€   | 95€    | 88€      | 82€    | 90€    |
| TOTAL             | 814€     | 1358€  | 945€   | 873€     | 804€   | 857€   |
| Budget moyen dispo| 914€     | 914€   | 914€   | 914€     | 914€   | 914€   |
| SOLDE             | +100€    | -444€  | -31€   | +41€     | +110€  | +57€   |

Colorer SOLDE : vert si positif, rouge si négatif, orange si < 50€

━━━ TABLEAU 2 — Évolution coût de la vie vs bourses (2015-2024) ━━━

| Indicateur          | 2015   | 2018   | 2021   | 2024   | Hausse |
|---------------------|--------|--------|--------|--------|--------|
| Loyer studio moy.   | 420€   | 450€   | 480€   | 560€   | +33%   |
| Courses (semaine)   | 25€    | 27€    | 30€    | 38€    | +52%   |
| Transport mensuel   | 28€    | 32€    | 36€    | 44€    | +57%   |
| Bourse CROUS moy.   | 290€   | 302€   | 310€   | 327€   | +13%   |
| SMIC net mensuel    | 1 135€ | 1 185€ | 1 231€ | 1 398€ | +23%   |

Ajouter encart rouge : "Les dépenses ont augmenté 3 à 5x plus vite que les bourses"

━━━ TABLEAU 3 — Précarité selon le profil ━━━

| Profil étudiant          | Revenus moy. | Dépenses fixes | Reste/mois | Niveau précarité |
|--------------------------|--------------|----------------|------------|------------------|
| Alternant                | 890€         | 520€           | 370€       | Faible           |
| Boursier éch.7 + job     | 780€         | 540€           | 240€       | Modéré           |
| Boursier éch.3 seul      | 480€         | 490€           | -10€       | CRITIQUE         |
| Aide famille 300€/mois   | 490€         | 540€           | -50€       | CRITIQUE         |
| Sans aide ni bourse      | 350€         | 480€           | -130€      | EXTRÊME          |

━━━ GRAPHIQUE 3 — BARRES : Étudiants par niveau de précarité ━━━
  Aucune difficulté     26%  vert
  Légères difficultés   35%  orange clair
  Difficultés sérieuses 28%  orange
  Précarité sévère      11%  rouge
Titre : "39% des étudiants en situation de précarité financière"
Source : OVE 2023

━━━ PROBLÈMES DÉTAILLÉS ━━━

PROBLÈME 1 — LE LOYER DÉVORE TOUT
"914€ de budget. 560€ de loyer moyen en 2024.
Il reste 354€ pour manger, se déplacer, se soigner, et vivre.
Ce n'est pas un budget — c'est un compte à rebours."
Expliquer : mécanisme loyer/revenus, effet ciseau depuis 2015,
comparaison avec le seuil de pauvreté (1 102€/mois en France)

PROBLÈME 2 — LE TRAVAIL QUI SABOTE LES ÉTUDES
Données : 45% travaillent / au-delà 16h → -25% sur les notes /
30% dépassent ce seuil par nécessité
Expliquer : le paradoxe de travailler pour étudier mais rater ses études

TÉMOIGNAGE 1 (long, 10 lignes min) :
"Je m'appelle Sofiane, 20 ans, BUT Informatique à Toulouse.
Mon budget mensuel : 680€ — 400€ d'aide familiale + 280€ de bourse.
Mon loyer en coloc : 390€ charges comprises.
Il me reste donc 290€ pour tout le reste — courses, transport, téléphone,
une sortie de temps en temps, une coupe de cheveux.
Le 20 du mois, j'ai souvent moins de 30€ sur mon compte.
J'ai appris à faire des courses pour moins de 20€ la semaine.
J'ai arrêté Netflix. J'ai arrêté les sorties au ciné.
Pas par choix de vie minimaliste — par nécessité pure.
Ce qui est épuisant, c'est pas de ne pas avoir d'argent.
C'est de devoir constamment calculer, anticiper, se priver.
C'est la charge mentale du pauvre qu'on n'enseigne nulle part."
— Sofiane, 20 ans, BUT Informatique, Toulouse

━━━ SOURCES DE CETTE SECTION ━━━
→ OVE — Conditions de vie des étudiants 2023
   https://www.ove-national.education.fr/enquete/cvec/
→ LMDE — Baromètre santé et conditions de vie 2023
   https://www.lmde.fr/actualite/barometre-sante-2023
→ INSEE — Revenus et niveau de vie 2023
   https://www.insee.fr/fr/statistiques/niveaux-de-vie
→ Etudiant.gouv — Aides et bourses 2024
   https://www.etudiant.gouv.fr/fr/aides-et-bourses

═════════════════════════════════════════════════════════════════
🏠 LOGEMENT — 175 000 PLACES POUR 3M ÉTUDIANTS, CRISE EN DONNÉES
═════════════════════════════════════════════════════════════════

PAGE LOGEMENT — CRISE DU LOGEMENT EN DONNÉES RÉELLES
══════════════════════════════════════════════════════════════════

Dans LogementPage.tsx, intègre tout ce qui suit :

━━━ CHIFFRES CLÉS ANIMÉS ━━━
  175 000 — Logements CROUS pour 2,9M d'étudiants
  1/17    — Ratio place CROUS par étudiant
  8%      — Étudiants sans logement stable à la rentrée
  42%     — Dossiers étudiants refusés par les propriétaires
  560€    — Loyer moyen studio ville universitaire 2024
  6 sem.  — Délai moyen pour trouver un logement

━━━ GRAPHIQUE 1 — CAMEMBERT : Types de logement étudiants ━━━
SVG circulaire, données :
  Logement privé seul      28%  #E8731A
  Colocation               22%  #008080
  Résidence CROUS           9%  #3fb950
  Résidence privée          7%  #58a6ff
  Chez les parents         31%  #8b949e
  Sans logement stable      3%  #f85149
Titre : "Où logent les étudiants en France ?"
Source : OVE 2023

━━━ GRAPHIQUE 2 — BARRES : Loyers par ville vs budget moyen ━━━
Barres doubles (loyer en rouge / budget dispo en teal) :
  Paris      900€ loyer / 914€ budget → reste 14€
  Lyon       580€ loyer / 914€ budget → reste 334€
  Bordeaux   530€ loyer / 914€ budget → reste 384€
  Toulouse   490€ loyer / 914€ budget → reste 424€
  Nantes     510€ loyer / 914€ budget → reste 404€
  Lille      480€ loyer / 914€ budget → reste 434€
Titre : "À Paris, le loyer seul représente 98% du budget étudiant moyen"
Mettre Paris en rouge avec annotation

━━━ TABLEAU 1 — Offre vs demande CROUS (données officielles) ━━━

| Ville        | Étudiants | Places CROUS | Ratio    | Demandes/an | Taux satisfaction |
|--------------|-----------|--------------|----------|-------------|-------------------|
| Paris        | 650 000   | 42 000       | 1 / 15   | 75 000      | 56%               |
| Lyon         | 170 000   | 11 000       | 1 / 15   | 19 000      | 58%               |
| Toulouse     | 130 000   | 8 200        | 1 / 16   | 14 500      | 57%               |
| Bordeaux     | 105 000   | 6 500        | 1 / 16   | 12 000      | 54%               |
| Montpellier  | 95 000    | 5 800        | 1 / 16   | 11 000      | 53%               |
| Lille        | 115 000   | 7 000        | 1 / 16   | 13 000      | 54%               |
| FRANCE       | 2 900 000 | 175 000      | 1 / 17   | 320 000     | 55%               |

Mettre en rouge la colonne "Taux satisfaction" — toutes sous 60%

━━━ TABLEAU 2 — Profil des étudiants les plus touchés par la crise ━━━

| Profil                           | Difficulté à trouver | Raison principale                  |
|----------------------------------|----------------------|------------------------------------|
| Étudiant étranger hors UE        | Extrême              | Pas de garant français, méfiance   |
| Étudiant sans garant physique    | Très élevée          | CDI garant exigé de facto          |
| Étudiant boursier seul           | Élevée               | Revenus jugés insuffisants         |
| Étudiant d'outre-mer             | Élevée               | Pas de réseau local                |
| 1re génération à l'université    | Élevée               | Méconnaissance du système          |
| Étudiant en situation de handicap| Élevée               | Logement adapté rare (< 2% du parc)|
| Étudiant avec animaux            | Très élevée          | Refus systématique des propriétaires|

━━━ TABLEAU 3 — Évolution crise logement (2014-2024) ━━━

| Indicateur                           | 2014     | 2019     | 2024     | Évolution  |
|--------------------------------------|----------|----------|----------|------------|
| Nombre d'étudiants                   | 2,4 M    | 2,7 M    | 2,9 M    | +21%       |
| Places CROUS                         | 160 000  | 168 000  | 175 000  | +9%        |
| Loyer moyen studio                   | 420€     | 490€     | 560€     | +33%       |
| Délai moyen recherche logement       | 3 sem.   | 4 sem.   | 6 sem.   | +100%      |
| % étudiants sans logement à la rentrée| 3%      | 5%       | 8%       | +167%      |
| Taux de refus dossier étudiant       | 28%      | 35%      | 42%      | +50%       |

━━━ GRAPHIQUE 3 — BARRES : Raisons de refus de dossier ━━━
  Pas de CDI garant         38%  rouge
  Revenus insuffisants      32%  orange
  Préférence autre profil   18%  orange clair
  Dossier incomplet         12%  gris
Titre : "Pourquoi les propriétaires refusent les dossiers étudiants"

━━━ PROBLÈMES DÉTAILLÉS ━━━

PROBLÈME 1 — 1 PLACE CROUS POUR 17 ÉTUDIANTS
"175 000 logements CROUS. 2,9 millions d'étudiants.
Le calcul est simple et brutal : l'État ne peut loger que 6% des étudiants.
Les 94% restants se débrouillent sur un marché privé qui les accepte mal."
Expliquer : historique, évolution, pourquoi l'État n'a pas suivi, comparaison européenne
(Allemagne : 1 place pour 9 étudiants / Pays-Bas : 1 pour 7)

PROBLÈME 2 — LES 8% SANS LOGEMENT STABLE À LA RENTRÉE
"8% des étudiants n'ont pas de logement stable au 1er septembre.
Ça représente plus de 230 000 personnes en France.
Ils dorment chez des amis, dans des hébergements provisoires payants,
ou reportent leur arrivée — retardant leur intégration et leurs études."
Données détaillées, solutions existantes, pourquoi elles ne suffisent pas

TÉMOIGNAGE 1 (10 lignes min) :
"J'ai envoyé 61 dossiers entre juillet et août pour trouver un appart
à Nantes où je venais étudier. Soixante-et-un. J'avais tout préparé :
lettre de motivation, relevés de notes, attestation bourse CROUS,
justificatif des revenus de mes parents. La plupart ne répondaient
pas. Certains ont rappelé, mais dès que je disais 'étudiant, pas de
garant CDI, boursier' — la conversation s'arrêtait là.
Un propriétaire m'a dit qu'il préférait 'quelqu'un de plus stable'.
Son studio était à 380€. J'avais 420€ de bourse. J'aurais très bien
pu payer. C'est grâce à Visale que j'ai finalement eu un logement —
le propriétaire a changé d'avis en 24h quand il a su que l'État
se portait garant à ma place. La solution existait depuis le début.
Personne ne me l'avait expliquée lors de mon inscription."
— Kévin, 19 ans, BUT GEA, Nantes

TÉMOIGNAGE 2 :
"Je suis arrivée de Martinique pour faire ma licence à Bordeaux.
Je n'avais personne sur place. Aucun garant. J'ai vécu 3 semaines
dans un Airbnb à 55€/nuit — 1 155€ que je n'avais pas.
Ma mère a dû emprunter. Le dossier CROUS, je ne savais pas
qu'il fallait le faire en janvier — j'ai appris ça en octobre.
J'ai perdu une année entière à cause d'une information
que personne ne m'a jamais donnée."
— Océane, 19 ans, Licence Lettres, Bordeaux

━━━ SOURCES ━━━
→ CROUS — Rapport annuel logement étudiant 2023
   https://www.crous-toulouse.fr/logements/
→ OVE — Conditions de logement étudiants 2023
   https://www.ove-national.education.fr
→ Fondation Abbé Pierre — Mal-logement 2024
   https://www.fondation-abbe-pierre.fr/nos-publications
→ Action Logement — Visale 2024
   https://www.visale.fr

═════════════════════════════════════════════════════════════════
🧠 SANTÉ MENTALE — 1/3 ANXIEUX, CRISE SILENCIEUSE EN DONNÉES
═════════════════════════════════════════════════════════════════

PAGE SANTÉ MENTALE — CRISE EN DONNÉES OFFICIELLES
══════════════════════════════════════════════════════════════════

Dans SanteMentalePage.tsx, intègre tout ce qui suit :

━━━ CHIFFRES CLÉS ANIMÉS (fond rouge pour alerter) ━━━
  1/3   — Étudiants avec symptômes d'anxiété (LMDE 2024)
  1/5   — Étudiants avec pensées dépressives régulières
  +43%  — Augmentation du burn-out depuis 2020
  5%    — Étudiants avec suivi psychologique régulier
  1/30K — 1 psy pour 30 000 étudiants dans les universités
  69%   — Étudiants déclarant que les études impactent leur santé mentale

━━━ GRAPHIQUE 1 — CAMEMBERT : État santé mentale étudiants ━━━
SVG circulaire :
  Bien-être global          31%  #3fb950
  Stress ponctuel           29%  #E8731A
  Anxiété persistante       21%  #d29922
  Symptômes dépressifs      12%  #f85149
  Burn-out / épuisement      7%  #b91c1c
Titre : "État de santé mentale des étudiants français en 2024"
Source : LMDE Baromètre 2024

━━━ GRAPHIQUE 2 — BARRES : Évolution des troubles (2018-2024) ━━━
Barres groupées par année :
              2018  2020  2022  2024
Anxiété       22%   31%   38%   40%   (rouge)
Dépression    14%   23%   27%   29%   (orange)
Burn-out      11%   19%   26%   28%   (jaune)
Consulte psy   8%   11%   13%   14%   (teal)
Titre : "La crise progresse. L'offre de soins stagne."
Annotation : flèche rouge "COVID" sur 2020

━━━ TABLEAU 1 — Troubles par profil étudiant ━━━

| Profil                              | Risque santé mentale dégradée | Facteur multiplicateur |
|-------------------------------------|-------------------------------|------------------------|
| Étudiant en précarité financière    | Très élevé                    | ×2.5                   |
| Étudiant travaillant > 20h/sem      | Élevé                         | ×2.1                   |
| Étudiant en mobilité internationale | Élevé                         | ×2.0                   |
| Étudiant isolé géographiquement     | Élevé                         | ×1.8                   |
| Logement instable ou précaire       | Élevé                         | ×1.9                   |
| Orientation subie (non choisie)     | Modéré-élevé                  | ×1.7                   |
| 1re génération à l'université       | Modéré                        | ×1.6                   |

━━━ TABLEAU 2 — Pourquoi les étudiants ne consultent pas ━━━

| Raison évoquée                           | % étudiants |
|------------------------------------------|-------------|
| "Je ne savais pas que c'était gratuit"   | 41%         |
| "J'avais peur d'être jugé·e"             | 38%         |
| "Je pensais que ça passerait tout seul"  | 35%         |
| "Les délais d'attente étaient trop longs"| 29%         |
| "Je n'avais pas le temps"                | 27%         |
| "J'avais honte"                          | 24%         |
| "Je ne savais pas vers qui aller"        | 22%         |

━━━ TABLEAU 3 — Ressources disponibles avec contacts ━━━

| Ressource            | Tarif    | Disponibilité       | Contact                       |
|----------------------|----------|---------------------|-------------------------------|
| PSY-Étudiant         | GRATUIT  | 8 séances/an        | santepsy.etudiant.gouv.fr     |
| Nightline France     | GRATUIT  | 21h-2h30 (semaine)  | nightline.fr / 01 88 32 12 32 |
| Fil Santé Jeunes     | GRATUIT  | 8h-minuit           | 0800 235 236                  |
| SOS Amitié           | GRATUIT  | 24h/24              | 09 72 39 40 50                |
| Croix-Rouge Écoute   | GRATUIT  | 8h-20h              | 0800 858 858                  |
| SUMPPS Univ.Toulouse | GRATUIT  | sur RDV             | via ENT université            |
| Stop-Blues           | GRATUIT  | 24h/24 (site)       | stop-blues.fr                 |

━━━ GRAPHIQUE 3 — BARRES : Taux d'accès aux soins ━━━
  Ont besoin d'aide psy   48%  (rouge)
  En ont fait la demande  14%  (orange)
  Ont obtenu un suivi régulier 5% (vert)
Titre : "1 étudiant sur 10 qui en a besoin reçoit de l'aide"
Mettre l'écart en évidence visuellement

━━━ TÉMOIGNAGE 1 (10+ lignes) ━━━
"En décembre de ma 1re année de BUT, je ne me levais plus.
Pas 'j'avais du mal à me lever' — je ne me levais littéralement plus.
Je fixais le plafond pendant des heures. Je ratais tous mes cours.
Je répondais aux messages de ma mère 'ça va, je bosse dur'.
En réalité je faisais rien. J'étais vide — de motivation, d'énergie,
de tout. J'ai mis des semaines à comprendre que ce que je vivais
avait un nom : un burn-out. J'ai trouvé PSY-Étudiant par hasard
sur Instagram. 8 séances gratuites. Je n'y croyais pas vraiment.
Mais dès le premier rendez-vous, la psychologue m'a dit :
'ce que tu vis est réel, ça a un nom, et on peut t'aider.'
Ces trois phrases. C'est tout ce qu'il me fallait pour recommencer
à avancer. Si tu lis ça et que tu te reconnais — appelle, maintenant."
— Théo, 20 ans, BUT Informatique, Toulouse

━━━ SOURCES ━━━
→ LMDE — Baromètre santé étudiante 2024
   https://www.lmde.fr/actualite/barometre-sante-2024
→ INSERM — Santé mentale en population générale 2022
   https://www.inserm.fr/dossier/depression-et-troubles-depressifs/
→ Observatoire national du suicide 2023
   https://solidarites-sante.gouv.fr
→ PSY-Étudiant — Dispositif officiel
   https://santepsy.etudiant.gouv.fr

═════════════════════════════════════════════════════════════════
🍽 ALIMENTATION — 1/4 NE MANGE PAS À SA FAIM, DONNÉES IFOP
═════════════════════════════════════════════════════════════════

PAGE ALIMENTATION — PRÉCARITÉ ALIMENTAIRE EN DONNÉES
══════════════════════════════════════════════════════════════════

Dans AlimentationPage.tsx, intègre tout ce qui suit :

━━━ CHIFFRES CLÉS ANIMÉS ━━━
  20%   — Étudiants en précarité alimentaire (IFOP 2023)
  23%   — Sautent régulièrement des repas
  1/4   — Ne mange pas à sa faim tous les jours
  11%   — Seulement ceux qui utilisent l'aide alimentaire disponible
  800K  — Repas distribués par les épiceries solidaires en 2023
  1€    — Prix d'un repas CROUS pour les boursiers

━━━ GRAPHIQUE 1 — CAMEMBERT : Situation alimentaire étudiants ━━━
SVG circulaire :
  Mange bien tous les jours   52%  #3fb950
  Difficultés ponctuelles     28%  #E8731A
  Saute des repas régulièrement 13% #f85149
  Précarité alimentaire sévère  7%  #b91c1c
Titre : "Situation alimentaire des étudiants français — IFOP 2023"

━━━ GRAPHIQUE 2 — BARRES : Évolution précarité alimentaire ━━━
  2018  :  12%  (orange)
  2020  :  21%  (rouge — COVID)
  2022  :  19%  (orange)
  2024  :  20%  (rouge)
Annotation : "x2 depuis 2018 — la crise COVID a déclenché une hausse durable"
Titre : "% d'étudiants en situation de précarité alimentaire"

━━━ TABLEAU 1 — Comparatif modes d'alimentation ━━━

| Mode d'alimentation    | Coût/mois | Qualité nutritive | Temps prep. | Faisable étudiant |
|------------------------|-----------|-------------------|-------------|-------------------|
| Cuisine maison simple  | 100-140€  | Bonne             | 20-30min/j  | Idéal             |
| CROUS + complément     | 60-100€   | Bonne             | Faible      | Optimal           |
| Végétarien maison      | 80-120€   | Excellente        | 25min/j     | Très bien         |
| Plats préparés         | 220-280€  | Faible            | 5min        | Cher              |
| Livraison domicile     | 280-400€  | Variable          | 0min        | Très cher         |
| Fast-food quotidien    | 200-320€  | Faible            | 0min        | Trop cher         |
| Aide alimentaire + cuisiné| 30-60€ | Correcte          | 20min/j     | Sous conditions   |

━━━ TABLEAU 2 — 10 aliments essentiels pas chers ━━━

| Aliment          | Prix    | Protéines | Calories  | Conservation | Score étudiant |
|------------------|---------|-----------|-----------|--------------|----------------|
| Lentilles 500g   | 0.80€   | 26g/100g  | 116 kcal  | 1-2 ans      | ⭐⭐⭐⭐⭐     |
| Oeufs x12        | 2.50€   | 13g/oeuf  | 155 kcal  | 3-4 semaines | ⭐⭐⭐⭐⭐     |
| Flocons avoine   | 0.90€   | 13g/100g  | 389 kcal  | 6-12 mois    | ⭐⭐⭐⭐⭐     |
| Riz complet 1kg  | 1.20€   | 7g/100g   | 360 kcal  | 1-2 ans      | ⭐⭐⭐⭐⭐     |
| Sardines boîte   | 0.90€   | 25g/100g  | 208 kcal  | 3-5 ans      | ⭐⭐⭐⭐⭐     |
| Pois chiches     | 0.90€   | 9g/100g   | 164 kcal  | 3-5 ans      | ⭐⭐⭐⭐      |
| Carottes 1kg     | 0.80€   | 1g/100g   | 41 kcal   | 3-4 semaines | ⭐⭐⭐⭐      |
| Bananes 1kg      | 1.50€   | 1g/100g   | 89 kcal   | 1 semaine    | ⭐⭐⭐⭐      |
| Fromage blanc    | 1.20€   | 8g/100g   | 60 kcal   | 2 semaines   | ⭐⭐⭐⭐      |
| Pain de mie      | 1.00€   | 8g/100g   | 265 kcal  | 1 semaine    | ⭐⭐⭐        |

━━━ TABLEAU 3 — Ressources alimentaires à Toulouse ━━━

| Ressource               | Lieu                  | Conditions          | Lien                        |
|-------------------------|-----------------------|---------------------|-----------------------------|
| Épicerie solidaire IUT  | Campus Paul Sabatier  | Cert. scolarité     | Voir secrétariat IUT        |
| LINKEE Toulouse         | Plusieurs points      | Inscription en ligne| https://www.linkee.com      |
| Banque alimentaire 31   | Toulouse + agglo      | Sur justificatifs   | https://www.banquealimentaire.org |
| CROUS Resto U (1€)      | 8 sites Toulouse      | Boursier ou SSAS    | https://www.crous-toulouse.fr |
| Too Good To Go          | Partout               | Application mobile  | https://www.toogoodtogo.com |
| Croix-Rouge Toulouse    | Centre-ville          | Sur demande         | https://www.croix-rouge.fr  |

━━━ TÉMOIGNAGE ━━━
"J'avais 40€ pour les 15 derniers jours du mois. 40€ pour manger,
prendre le bus, et vivre. J'ai mangé des pâtes nature et du pain
pendant 10 jours. Je pesais 54kg pour 1m72. Je n'en parlais à
personne — ni à mes parents (pour ne pas les inquiéter), ni à
mes amis (pour ne pas avoir l'air dans la misère). Une camarade
m'a dit qu'il y avait une épicerie solidaire à 500 mètres de l'IUT.
J'ai mis 3 semaines à oser y aller. La honte. Quand je suis entrée,
il y avait une fille de ma promo. On s'est regardées sans rien dire.
On est reparties chacune avec nos courses. On s'est parlé après.
Elle vivait la même chose depuis des mois. On se privait toutes
les deux alors que la solution était là, gratuite, à 5 minutes."
— Chloé, 21 ans, BUT Chimie, Toulouse

━━━ SOURCES ━━━
→ IFOP / Linkee — Précarité alimentaire étudiants 2023
   https://www.linkee.com/actualites/
→ Fédération banques alimentaires — Rapport 2023
   https://www.banquealimentaire.org/rapport-activite
→ CROUS — Repas à 1€ dispositif national
   https://www.etudiant.gouv.fr/fr/repas-a-1-e-crous

═════════════════════════════════════════════════════════════════
📚 RÉUSSITE — INÉGALITÉS SOCIALES, ABANDON, MÉTHODES EN DONNÉES
═════════════════════════════════════════════════════════════════

PAGE RÉUSSITE — INÉGALITÉS ET DÉCROCHAGE EN DONNÉES
══════════════════════════════════════════════════════════════════

Dans ReussitePage.tsx, intègre tout ce qui suit :

━━━ CHIFFRES CLÉS ANIMÉS ━━━
  45%   — Étudiants exerçant un job rémunéré
  15%   — Taux d'abandon en 1re année de BUT
  -25%  — Impact sur les notes au-delà de 16h/sem de travail
  ×3    — Chances d'obtenir un Master (cadre vs ouvrier)
  48%   — Étudiants déclarant manquer de méthode de travail
  1/3   — En décrochage partiel à un moment de leur cursus

━━━ GRAPHIQUE 1 — BARRES : Taux de réussite par origine sociale ━━━
  Cadres supérieurs        : Licence 78% / Master 65%  (vert)
  Professions intermédiaires: Licence 68% / Master 52%  (teal)
  Employés                 : Licence 55% / Master 38%  (orange)
  Ouvriers                 : Licence 42% / Master 22%  (rouge)
Titre : "L'université française reproduit les inégalités sociales"
Source : Ministère ESRI 2023

━━━ GRAPHIQUE 2 — CAMEMBERT : Causes de décrochage 1re année ━━━
SVG circulaire :
  Difficultés financières      31%  #f85149
  Mauvaise orientation         28%  #E8731A
  Santé mentale                22%  #d29922
  Isolement social             18%  #58a6ff
  Manque méthode travail       17%  #8b949e
  Problèmes logement           12%  #a371f7
Titre : "Pourquoi les étudiants abandonnent en 1re année"
Note : total > 100% car plusieurs facteurs cumulés

━━━ TABLEAU 1 — Impact du job selon les heures travaillées ━━━

| Heures/sem | Notes moyennes | Heures sommeil | Stress ressenti | Risque abandon | Vie sociale |
|------------|----------------|----------------|-----------------|----------------|-------------|
| 0h         | 13.2/20        | 7.5h           | Moyen           | 8%             | Élevée      |
| 1-8h       | 13.5/20        | 7.2h           | Faible          | 7%             | Bonne       |
| 8-16h      | 12.1/20        | 6.8h           | Modéré          | 12%            | Correcte    |
| 16-25h     | 10.4/20        | 6.0h           | Élevé           | 24%            | Limitée     |
| 25h+       | 8.7/20         | 5.2h           | Très élevé      | 41%            | Très faible |

Colorer en rouge les lignes 16-25h et 25h+

━━━ TABLEAU 2 — Taux de réussite par milieu social ━━━

| Milieu social parents  | Accès BAC | Accès Supérieur | Obtention Licence | Obtention Master |
|------------------------|-----------|-----------------|-------------------|------------------|
| Cadres supérieurs      | 96%       | 92%             | 78%               | 65%              |
| Prof. intermédiaires   | 90%       | 83%             | 68%               | 52%              |
| Employés               | 80%       | 70%             | 55%               | 38%              |
| Ouvriers               | 68%       | 55%             | 42%               | 22%              |
| Sans emploi            | 58%       | 44%             | 34%               | 18%              |

Encart rouge : "L'écart entre cadres et ouvriers se creuse à chaque étape"

━━━ TABLEAU 3 — Méthodes de révision comparées ━━━

| Méthode                | Efficacité prouvée | Temps requis   | Recommandée pour          |
|------------------------|--------------------|----------------|---------------------------|
| Répétition espacée     | 95%                | Régulier court | Mémorisation long terme   |
| Enseigner à autrui     | 90%                | Variable       | Compréhension profonde    |
| Exercices / QCM        | 80%                | Régulier       | Auto-évaluation           |
| Technique Pomodoro     | 85%                | 25min+pause    | Concentration             |
| Mind mapping           | 75%                | 1-2h/sujet     | Vision d'ensemble         |
| Relecture simple       | 25%                | Rapide         | INEFFICACE seul           |
| Révision passive       | 20%                | Variable       | À ÉVITER                  |

Colorer en rouge les 2 dernières lignes

━━━ TÉMOIGNAGE (10+ lignes) ━━━
"Mon père est ouvrier en usine, ma mère est aide-soignante.
Ni l'un ni l'autre n'a fait d'études supérieures. Quand j'ai eu
des difficultés en 1re année de BUT, je n'avais personne à appeler
pour m'expliquer comment ça marche, une université. Personne pour
me dire qu'on peut parler aux profs, qu'on peut demander des
aménagements, qu'il existe un tutorat. Mes camarades dont les
parents sont ingénieurs ou profs — ils savaient tout ça.
Ils étaient à l'aise dans ce monde parce que leurs parents
l'avaient fait avant eux. Moi j'avais peur de déranger.
J'avais l'impression que l'université n'était pas fait pour moi.
On appelle ça le 'capital social'. On ne l'enseigne nulle part.
Mais il fait toute la différence entre ceux qui réussissent
et ceux qui abandonnent."
— Dylan, 22 ans, BUT Informatique, Toulouse

━━━ SOURCES ━━━
→ Ministère ESRI — Résultats et insertion BUT 2023
   https://www.enseignementsup-recherche.gouv.fr
→ OVE — Travail salarié et conditions d'études 2022
   https://www.ove-national.education.fr
→ APEC — Insertion professionnelle diplômés 2023
   https://www.apec.fr/tous-nos-articles/2023/les-etudes.html

═════════════════════════════════════════════════════════════════
💶 AIDES — 500M€ NON RÉCLAMÉS, TABLEAUX ÉCHELONS, GUIDE COMPLET
═════════════════════════════════════════════════════════════════

PAGE AIDES — ARGENT NON RÉCLAMÉ ET GUIDE COMPLET
══════════════════════════════════════════════════════════════════

Dans AidesPage.tsx, intègre tout ce qui suit :

━━━ CHIFFRES CLÉS ANIMÉS ━━━
  +500M€ — Aides non réclamées chaque année en France
  37%    — Étudiants éligibles à une bourse CROUS
  34%    — Qui la demandent réellement (3% perdus)
  48%    — Ne savaient pas que des aides existaient
  6 335€ — Montant maximum bourse annuelle (échelon 7)
  400€   — APL mensuelle maximum en zone tendue

━━━ GRAPHIQUE 1 — BARRES : Éligibles vs bénéficiaires ━━━
Barres doubles côte à côte :
  Bourse CROUS  : éligibles 37% / bénéficiaires 34%
  APL           : éligibles 44% / bénéficiaires 38%
  FSDIE urgence : éligibles 15% / bénéficiaires 4%
  Repas 1€      : éligibles 37% / bénéficiaires 29%
  Visale        : éligibles 42% / bénéficiaires 11%
  Prime activité: éligibles 12% / bénéficiaires 6%
Titre : "Des millions d'euros d'aides disponibles — pas réclamées"
Mettre l'écart en rouge avec annotation "écart non réclamé"

━━━ GRAPHIQUE 2 — CAMEMBERT : Pourquoi les aides ne sont pas demandées ━━━
SVG :
  Ne savait pas que ça existait  48%  #f85149
  Démarches trop complexes       35%  #E8731A
  Date limite ratée              29%  #d29922
  Honte / stigmatisation         21%  #8b949e
  Pensait ne pas être éligible   18%  #58a6ff
Note : total > 100% = plusieurs raisons cumulées possibles

━━━ TABLEAU 1 — Les 8 échelons de bourse CROUS ━━━

| Échelon | Revenu fiscal parents (indicatif) | Montant annuel | Mensuel  | Exonération frais inscr. |
|---------|-----------------------------------|----------------|----------|--------------------------|
| 0bis    | < 33 100€ (maintien droits)       | 1 084€         | 90€      | Oui                      |
| 1       | < 33 100€                         | 1 843€         | 153€     | Oui                      |
| 2       | < 27 900€                         | 2 479€         | 206€     | Oui                      |
| 3       | < 24 600€                         | 3 111€         | 259€     | Oui                      |
| 4       | < 21 000€                         | 3 742€         | 311€     | Oui                      |
| 5       | < 17 400€                         | 4 375€         | 364€     | Oui                      |
| 6       | < 13 900€                         | 5 007€         | 417€     | Oui                      |
| 7       | < 10 300€                         | 6 335€         | 527€     | Oui                      |

Lien : https://www.messervices.etudiant.gouv.fr
Note : montants 2023-2024, révisés chaque année. +6% accordés en 2023.

━━━ TABLEAU 2 — Toutes les aides d'un coup d'œil ━━━

| Aide                  | Montant max    | Pour qui              | Quand demander  | Lien officiel                           |
|-----------------------|----------------|-----------------------|-----------------|-----------------------------------------|
| Bourse CROUS          | 6 335€/an      | Sous conditions revenu| Janv → Mai      | messervices.etudiant.gouv.fr            |
| APL logement          | 400€/mois      | Locataires étudiants  | Dans le mois    | caf.fr                                  |
| Aide urgence FSDIE    | 100-2 000€     | Difficulté soudaine   | À tout moment   | trouver-un-service.etudiant.gouv.fr     |
| Visale (caution)      | 36 mois loyer  | Sans garant physique  | Avant bail      | visale.fr                               |
| Repas CROUS 1€        | illimité        | Boursiers + SSAS      | Automatique     | crous-toulouse.fr                       |
| Aide mobilité inter.  | 400-1 600€     | Séjour étranger       | Avant départ    | campusfrance.org                        |
| Aide au mérite        | 1 800€/an      | Mention TB bac        | Automatique     | etudiant.gouv.fr                        |
| Prime d'activité      | ~200€/mois     | Job > 910€/mois       | Via CAF         | caf.fr                                  |

━━━ TABLEAU 3 — Calendrier des démarches (12 mois) ━━━

| Mois              | Action à faire                              | Urgence    |
|-------------------|---------------------------------------------|------------|
| Janvier           | Ouvrir son DSE sur messervices.etudiant.gouv.fr | CRITIQUE |
| Fév - Mars        | Compléter dossier + rassembler pièces       | Haute      |
| Avril - Mai       | DATE LIMITE DSE — dernier délai absolu      | CRITIQUE   |
| Juin              | Simulateur APL sur caf.fr avant de signer   | Haute      |
| Juillet           | Résultats bourses CROUS                     | Info       |
| Août - Septembre  | Demande Visale si pas de garant             | Haute      |
| Septembre         | Demande APL dans le mois suivant l'entrée   | CRITIQUE   |
| Oct - Nov         | Aide urgence FSDIE si besoin                | Selon besoin|
| Décembre          | Bilan budget + préparer DSE suivant         | Modérée    |

Colorer en rouge les lignes CRITIQUE

━━━ TÉMOIGNAGE ━━━
"J'ai découvert que j'avais droit à une bourse en novembre
de ma 1re année. Ma conseillère d'orientation n'en avait
jamais parlé. Ma prof principale non plus. Ma mère gagne
1 100€ par mois — j'aurais eu droit à l'échelon 5 : 364€/mois.
Pendant toute mon année, j'ai travaillé 25h par semaine pour
compenser. J'ai raté mon semestre. Mon responsable de formation
me l'a dit clairement : 'si tu avais eu ta bourse, tu n'aurais
pas eu besoin de travailler autant.' Une information. Une seule.
C'est tout ce qu'il aurait fallu. Maintenant je le dis à tout
le monde dès la rentrée : faites votre DSE en janvier. Pas en
mai, pas en septembre. En janvier. Avant que les cours commencent."
— Mariam, 21 ans, Licence Économie, Paris

━━━ SOURCES ━━━
→ CROUS — Guide officiel bourses 2024
   https://www.etudiant.gouv.fr/fr/bourses-sur-criteres-sociaux
→ CNAF — Rapport APL étudiants 2023
   https://www.caf.fr/allocataires/droits-et-prestations/s-informer-sur-les-aides/logement-et-hebergement/l-aide-personnalisee-au-logement-apl
→ Portail aides étudiantes
   https://www.messervices.etudiant.gouv.fr

═════════════════════════════════════════════════════════════════
📊 CODE GRAPHIQUES CSS/SVG — CAMEMBERTS & BARRES
═════════════════════════════════════════════════════════════════

CODE DES GRAPHIQUES CSS ET SVG — À INTÉGRER DANS CHAQUE PAGE
══════════════════════════════════════════════════════════════════

Crée ces composants React réutilisables et intègre-les dans chaque page :

━━━ COMPOSANT 1 — GRAPHIQUE EN BARRES HORIZONTALES ━━━

Composant React BarChart.tsx :
Props : data = [{label, value, color}], title, source

Rendu :
- Titre h3 14px bold teal
- Pour chaque barre :
  → Label à gauche (120px fixed)
  → Barre : fond #30363d, fill coloré (width = value%)
  → La barre s'anime de 0% → value% au scroll (IntersectionObserver)
  → Valeur affichée à droite en bold

Styles :
  .bar-container { background: #161b22, border-radius 12px, padding 24px }
  .bar-track { height 32px, background #30363d, border-radius 6px, overflow hidden }
  .bar-fill { height 100%, border-radius 6px, transition: width 1.2s ease-out }
  Valeur : color teal, font-weight 700

━━━ COMPOSANT 2 — GRAPHIQUE CIRCULAIRE SVG ━━━

Composant React PieChart.tsx :
Props : data = [{label, value, color}], title, source

SVG 200×200, viewBox="0 0 200 200" :
- Cercle centre (100,100) rayon 80
- Calculer stroke-dasharray pour chaque segment :
  circumference = 2 × π × 80 = 502.65
  segment = value/100 × 502.65
- Chaque cercle empilé avec stroke-dashoffset décalé
- Animation : stroke-dashoffset de 502→valeur au scroll

Légende à droite :
  Carré de couleur + label + pourcentage
  Font 12px, line-height 1.6

━━━ COMPOSANT 3 — STATS CARDS ANIMÉES ━━━

Composant StatCard.tsx :
Props : value (string), label, color, prefix, suffix

Rendu :
- Fond #161b22, border-radius 12px
- Chiffre : count-up JS de 0 → valeur (1.5s ease-out) au scroll
- Couleur configurable (teal, orange, rouge)
- Icône optionnelle (string emoji ou Tabler icon)

━━━ COMPOSANT 4 — TABLEAU STYLISÉ ━━━

Composant DataTable.tsx :
Props : headers (string[]), rows (string[][]), colorRules

Rendu :
- Wrapper div overflow-x:auto (responsive mobile)
- thead : fond #008080, texte blanc, padding 12px 16px
- Lignes alternées #161b22 / #0d1117
- Hover : background rgba(0,128,128,0.08)
- colorRules : { column: 3, rules: [{contains:'CRITIQUE', color:'#f85149'}, ...] }

━━━ UTILISATION DANS CHAQUE PAGE ━━━
Importe et utilise ces composants dans chaque thématique :

BudgetPage.tsx :
  <StatCards data={budgetStats} />
  <BarChart data={sourcesRevenus} title="D'où vient l'argent ?" />
  <PieChart data={repartitionBudget} title="Répartition du budget" />
  <DataTable headers={[...]} rows={budgetParVille} />

LogementPage.tsx :
  <StatCards data={logementStats} />
  <PieChart data={typesLogement} title="Où logent les étudiants ?" />
  <BarChart data={loyersParVille} title="Loyers vs budget" />
  <DataTable headers={[...]} rows={criseLogement} />

(Idem pour les 4 autres pages — adapter les données)

━━━ ANIMATION GLOBALE AU SCROLL ━━━
Créer un hook useIntersectionObserver.ts :
  Retourne { ref, isVisible }
  Options : threshold 0.2, triggerOnce true
  Utiliser sur chaque graphique et compteur pour déclencher l'animation
  uniquement quand l'élément entre dans le viewport