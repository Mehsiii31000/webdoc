══════════════════════════════════════════════════════════
INSTRUCTIONS GLOBALES — DONNÉES, TABLEAUX, PROBLÈMES ÉTUDIANTS
══════════════════════════════════════════════════════════

INSTRUCTIONS GLOBALES — Enrichissement données & contenu
════════════════════════════════════════════════════════════

MISSION PRINCIPALE :
Tu vas enrichir chaque page thématique du webdocumentaire "Vie Étudiante"
avec des données chiffrées réelles, des tableaux comparatifs interactifs,
une présentation approfondie des problèmes étudiants, et des témoignages
ancrés dans la réalité.

Tu as le DROIT DE :
→ Chercher et intégrer toutes les données récentes disponibles sur internet
→ Créer des tableaux HTML stylisés dans le design dark du site
→ Ajouter des graphiques (barres, camemberts) avec des données réelles
→ Inventer des témoignages réalistes inspirés de situations réelles
→ Ajouter autant de contenu que nécessaire pour que chaque page soit complète
→ Citer toutes les sources que tu utilises

RÈGLES DE DESIGN pour les tableaux et données :
→ Fond tableau : #161b22 / en-têtes : #008080 texte blanc
→ Lignes alternées : #0d1117 et #161b22
→ Bordures : 1px solid #30363d
→ Chiffres importants : couleur teal #008080 ou orange #E8731A
→ Chiffres alarmants (précarité, abandon) : couleur rouge #f85149
→ Tous les tableaux doivent être responsive (scroll horizontal sur mobile)

STRUCTURE À AJOUTER dans chaque page thématique :

1. BLOC "EN CHIFFRES" — 4 à 6 stats animées (count-up au scroll)
2. TABLEAU COMPARATIF principal (voir détail par thématique)
3. SECTION "LES VRAIS PROBLÈMES" — présentation des difficultés réelles
4. INFOGRAPHIE ou graphique interactif
5. BLOC "CE QUE PERSONNE NE TE DIT" — informations méconnues
6. TÉMOIGNAGES — 2 à 3 citations longues et détaillées
7. SOURCES — accordéon avec toutes les références citées

FORMAT des témoignages (rendre réaliste et émotionnel) :
→ Prénom + âge + filière + ville
→ Citation longue (5-8 lignes) décrivant une situation concrète
→ Photo placeholder (avatar initiales coloré)
→ Problème spécifique vécu + comment il a été résolu (ou non)
→ Conseil donné aux autres étudiants

PRÉSENTATION DES PROBLÈMES ÉTUDIANTS :
Pour chaque thématique, créer une section visuellement forte :
→ Titre accrocheur en grand (ex: "La réalité que les stats ne montrent pas")
→ Problèmes listés sous forme de cartes avec icône + titre + explication
→ Fond sombre avec bordure gauche colorée (teal ou orange)
→ Citation choc en grand format (blockquote stylé)

══════════════════════════════════════════════════════════
BUDGET — DONNÉES, TABLEAUX COMPARATIFS, PROBLÈMES FINANCIERS
══════════════════════════════════════════════════════════

ENRICHISSEMENT PAGE BUDGET
════════════════════════════════════════════════════════════

Dans BudgetPage.tsx, ajoute les sections suivantes dans l'ordre :

━━━ 1. STATS ANIMÉES (count-up au scroll) ━━━
Créer 6 cartes de stats :
→ 914€   — Budget mensuel moyen d'un étudiant (OVE 2023)
→ 55%    — Part du budget consacrée au logement
→ 39%    — Étudiants en situation de précarité financière
→ 1/2    — Étudiants qui travaillent pour financer leurs études
→ 23%    — Étudiants qui sautent des repas faute d'argent
→ 480€   — Montant moyen d'une bourse CROUS échelon 3

━━━ 2. TABLEAU : BUDGET TYPE PAR VILLE ━━━
Créer un tableau HTML stylisé (fond dark, header teal) :

| Poste de dépense     | Toulouse | Paris  | Lyon   | Bordeaux |
|----------------------|----------|--------|--------|----------|
| Loyer (studio)       | 450€     | 850€   | 550€   | 500€     |
| Courses alimentaires | 180€     | 200€   | 185€   | 175€     |
| Transport            | 30€      | 75€    | 45€    | 35€      |
| Santé / mutuelle     | 50€      | 50€    | 50€    | 50€      |
| Téléphone            | 15€      | 15€    | 15€    | 15€      |
| Loisirs / sorties    | 80€      | 100€   | 90€    | 85€      |
| Livres / fournitures | 30€      | 35€    | 30€    | 30€      |
| TOTAL ESTIMÉ         | 835€     | 1325€  | 965€   | 890€     |
| Budget moyen dispo   | 914€     | 914€   | 914€   | 914€     |
| Solde restant        | +79€     | -411€  | -51€   | +24€     |

Colorer en rouge les soldes négatifs, en vert les positifs.

━━━ 3. TABLEAU : D'OÙ VIENT L'ARGENT DES ÉTUDIANTS ? ━━━

| Source de revenus          | % d'étudiants concernés | Montant moyen |
|----------------------------|-------------------------|---------------|
| Aide famille / parents     | 71%                     | 450€/mois     |
| Job étudiant               | 45%                     | 380€/mois     |
| Bourse CROUS               | 37%                     | 280€/mois     |
| APL logement               | 44%                     | 190€/mois     |
| Alternance / apprentissage | 12%                     | 680€/mois     |
| Prêt étudiant              | 8%                      | 350€/mois     |

━━━ 4. LES VRAIS PROBLÈMES — Section visuellement forte ━━━
Titre : "Ce que vivent vraiment les étudiants"
Sous-titre : "Derrière les moyennes, des situations qui font mal"

Créer 5 cartes-problèmes (fond #161b22, bordure gauche rouge #f85149) :

PROBLÈME 1 — La dépendance aux parents
"71% des étudiants dépendent financièrement de leurs parents.
Quand la famille n'a pas les moyens, c'est toute la scolarité
qui vacille. Certains abandonnent leurs études, d'autres
s'endettent pour survivre."

PROBLÈME 2 — Le job étudiant qui sabote les études
"45% des étudiants travaillent. Au-delà de 16h par semaine,
les recherches montrent une chute significative des résultats.
Pourtant, 30% dépassent ce seuil par nécessité, pas par choix."

PROBLÈME 3 — Les découverts à répétition
"1 étudiant sur 4 est à découvert au moins une fois par mois.
Les frais bancaires s'accumulent, créant un cercle vicieux
difficile à briser sans aide extérieure."

PROBLÈME 4 — La honte de demander de l'aide
"De nombreux étudiants n'osent pas demander les aides
auxquelles ils ont droit, par manque d'information ou par
honte. Des milliers d'euros restent non réclamés chaque année."

PROBLÈME 5 — Les dépenses invisibles
"Frais de scolarité, mutuelle, logiciel, tenue professionnelle
pour les stages — des dizaines de dépenses imprévues que
personne ne liste dans le 'budget type'."

━━━ 5. SIMULATEUR BUDGET INTERACTIF ━━━
3 sliders avec mise à jour en temps réel :
• Revenus totaux (0→1500€, step 50)
• Loyer charges comprises (0→900€, step 10)
• Courses par semaine (0→100€, step 5)
Résultat : "Il te reste [X]€ ce mois"
Si < 0 : fond orange + "Tu es dans le rouge — voici 3 aides disponibles"
Si 0-100 : fond jaune + "Budget très serré — pense à vérifier tes droits"
Si > 100 : fond vert + "Tu gères bien — mais as-tu vérifié toutes tes aides ?"

━━━ 6. TÉMOIGNAGES ━━━

TÉMOIGNAGE 1 :
"Je m'appelle Mathieu, 19 ans, BUT Informatique à Toulouse.
Au premier mois, j'avais 650€. Mon loyer était à 480€ en coloc.
Il me restait 170€ pour manger, me déplacer, et vivre.
J'ai pas mangé à ma faim pendant 3 semaines avant de découvrir
les repas CROUS à 1€ et l'épicerie solidaire de l'IUT.
Personne ne m'en avait parlé à l'inscription. Personne."
— Mathieu, 19 ans, BUT Informatique, Toulouse

TÉMOIGNAGE 2 :
"J'ai travaillé 25h par semaine en caisse tout au long de ma L2.
J'ai raté mon année. Pas parce que je suis nulle, mais parce que
je rentrais à 23h et devais être en cours à 8h. J'avais honte de
dire que je travaillais. Dans ma tête, les étudiants 'normaux'
n'avaient pas à faire ça. Maintenant je sais que c'est 1 sur 2."
— Camille, 21 ans, Licence Éco-Gestion, Lyon

━━━ 7. "CE QUE PERSONNE NE TE DIT" ━━━
Section avec fond légèrement différent, encadrée teal :
→ Que les banques proposent des comptes étudiants sans frais avec découvert autorisé
→ Que certaines mutuelles étudiantes remboursent sous conditions
→ Que l'APL peut être demandée même si on est hébergé chez un tiers (sous conditions)
→ Que les frais de rentrée (livres, matériel) peuvent être inclus dans une bourse d'urgence
→ Que Toulouse a un fonds d'urgence municipal spécifique aux étudiants
   Source : https://www.toulouse.fr/web/solidarites/aides-financieres

━━━ 8. GRAPHIQUE EN BARRES ━━━
Créer un graphique HTML/CSS (pas de lib externe) montrant la
répartition du budget étudiant moyen en barres horizontales colorées :
Logement 55% (teal) / Alimentation 20% (orange) / Transport 7% /
Loisirs 9% / Santé 5% / Autres 4%

══════════════════════════════════════════════════════════
LOGEMENT — TABLEAUX COMPARATIFS, GALÈRE DU LOGEMENT
══════════════════════════════════════════════════════════

ENRICHISSEMENT PAGE LOGEMENT
════════════════════════════════════════════════════════════

Dans LogementPage.tsx, ajoute les sections suivantes :

━━━ 1. STATS ANIMÉES ━━━
→ 68%    — Étudiants qui quittent le domicile familial pour étudier
→ 250€   — Loyer moyen en résidence CROUS
→ 620€   — Loyer moyen d'un studio en ville universitaire
→ 6 sem. — Délai moyen pour trouver un logement
→ 1/5    — Étudiants en situation de précarité logement
→ 42%    — Étudiants qui n'ont pas de garant physique

━━━ 2. TABLEAU : COMPARATIF TYPES DE LOGEMENT ━━━

| Type de logement     | Loyer moyen | Avantages               | Inconvénients            |
|----------------------|-------------|-------------------------|--------------------------|
| Résidence CROUS      | 250€/mois   | Pas de garant, charges  | Liste d'attente longue   |
|                      |             | incluses, communauté    | Petite surface (9-18m²)  |
| Studio privé seul    | 550-700€    | Indépendance totale     | Cher, garant obligatoire |
| Colocation           | 300-450€    | Moins cher, convivial   | Compromis, règles communes|
| Résidence privée     | 400-600€    | Services inclus, sécurité| Prix élevé               |
| Famille d'accueil    | 200-350€    | Cadre structurant       | Moins de liberté         |
| Chez les parents     | 0-150€      | Économique              | Déplacements, dépendance |

━━━ 3. TABLEAU : LOYERS MOYENS PAR VILLE (studio) ━━━

| Ville         | Loyer moyen studio | APL estimée | Coût réel après APL |
|---------------|--------------------|-------------|---------------------|
| Paris         | 900€               | 180€        | 720€                |
| Lyon          | 580€               | 190€        | 390€                |
| Toulouse      | 490€               | 200€        | 290€                |
| Bordeaux      | 530€               | 195€        | 335€                |
| Montpellier   | 510€               | 198€        | 312€                |
| Marseille     | 480€               | 195€        | 285€                |
| Nantes        | 500€               | 200€        | 300€                |
| Strasbourg    | 460€               | 202€        | 258€                |

━━━ 4. LES VRAIS PROBLÈMES DU LOGEMENT ÉTUDIANT ━━━
Titre : "Trouver un logement étudiant : le parcours du combattant"

PROBLÈME 1 — La discrimination à l'entrée
"Pas de CDI, pas de garant ? De nombreux propriétaires refusent
les dossiers étudiants sans même les lire. 42% des étudiants
déclarent avoir essuyé des refus liés à leur statut."

PROBLÈME 2 — Le marché qui s'emballe
"Les villes universitaires sont en pénurie de logements abordables.
À Toulouse, le nombre d'étudiants a augmenté de 30% en 10 ans
pendant que le parc CROUS n'a progressé que de 8%."

PROBLÈME 3 — La liste d'attente CROUS
"La demande CROUS (DSE) doit être faite entre janvier et mai
pour une entrée en septembre. Beaucoup d'étudiants arrivent
sans logement car ils ne connaissaient pas cette date limite."

PROBLÈME 4 — Les arnaques en ligne
"Les annonces frauduleuses ciblant les étudiants ont augmenté
de 60% en 5 ans. Demande d'acompte sans visite, faux propriétaires,
faux contrats — les pièges sont nombreux."

PROBLÈME 5 — La caution impossible
"Un propriétaire peut demander jusqu'à 2 mois de loyer en caution
+ 1 mois de loyer d'avance. Pour un studio à 500€, cela représente
1 500€ à avoir immédiatement. Beaucoup ne peuvent pas."

━━━ 5. GUIDE VISUEL : ÉTAPES POUR TROUVER UN LOGEMENT ━━━
Timeline horizontale (ou verticale sur mobile) :
Étape 1 (Janvier-Mars) : Faire sa demande DSE sur messervices.etudiant.gouv.fr
Étape 2 (Mars-Mai) : Demander Visale sur visale.fr (sans garant physique)
Étape 3 (Mai-Juin) : Faire le simulateur APL sur caf.fr
Étape 4 (Juin-Août) : Rechercher en parallèle CROUS + privé + coloc
Étape 5 (Avant signature) : Checklist bail (15 points à vérifier)
Étape 6 (À l'entrée) : État des lieux détaillé + photos + CAF dans le mois

━━━ 6. TÉMOIGNAGES ━━━

TÉMOIGNAGE 1 :
"J'ai envoyé 47 dossiers pour trouver un appartement à Toulouse.
47. La plupart n'ont jamais répondu. Quand j'appelais, dès qu'ils
entendaient 'étudiant sans CDI', c'était non. J'ai failli abandonner
mes études. C'est Visale qui m'a sauvé la mise — le propriétaire
a accepté dès qu'il a su que c'était l'État qui se portait garant."
— Antoine, 20 ans, BUT GEA, Toulouse

TÉMOIGNAGE 2 :
"Je suis arrivée de Martinique pour mes études. Je n'avais personne
à Paris. Aucun garant. Aucun historique de loyer français.
J'ai vécu 3 semaines dans un Airbnb en attendant ma résidence CROUS.
Le dossier social, je ne savais même pas que ça existait.
Ma conseillère d'orientation ne m'en avait jamais parlé."
— Océane, 19 ans, CPGE Lettres, Paris

━━━ 7. CHECKLIST INTERACTIVE (cases à cocher) ━━━
Titre : "Avant de signer un bail — 10 points à vérifier"
Cases à cocher stylées teal :
□ Le DPE (Diagnostic Performance Énergétique) est fourni
□ L'état des lieux d'entrée est fait contradictoirement
□ Les charges locatives sont détaillées
□ Le montant de la caution est ≤ 1 mois de loyer (loi Alur)
□ Le bail est en français et conforme à la loi
□ Visale ou garant physique est prêt avant signature
□ La demande APL est préparée (à envoyer dans le mois)
□ Le logement n'est pas classé G ou F au DPE (interdit depuis 2025)
□ L'adresse est enregistrée pour la bourse CROUS
□ Les photos de l'état des lieux sont datées et signées

══════════════════════════════════════════════════════════
SANTÉ MENTALE — CRISE, CHIFFRES ALARMANTS, RESSOURCES
══════════════════════════════════════════════════════════

ENRICHISSEMENT PAGE SANTÉ MENTALE
════════════════════════════════════════════════════════════

Dans SanteMentalePage.tsx, ajoute les sections suivantes :

━━━ 1. STATS ANIMÉES (fond rouge pour alerter) ━━━
→ 1/3    — Étudiants présentant des symptômes d'anxiété (LMDE 2023)
→ 43%    — Augmentation du burn-out étudiant depuis 2020
→ 5%     — Étudiants ayant accès à un suivi psy régulier
→ 1/5    — Étudiants ayant des pensées dépressives régulières
→ 69%    — Étudiants déclarant que leurs études impactent leur santé mentale
→ 8      — Séances psy gratuites via PSY-Étudiant

━━━ 2. TABLEAU : SIGNES D'ALERTE PAR CATÉGORIE ━━━

| Catégorie       | Signes légers               | Signes modérés              | Signes graves              |
|-----------------|-----------------------------|-----------------------------|----------------------------|
| Stress          | Nervosité avant examens     | Insomnies régulières        | Paralysie, crises de panique|
| Dépression      | Manque de motivation passager| Tristesse persistante +2sem | Idées noires, isolement     |
| Burn-out        | Fatigue après révisions     | Épuisement permanent        | Incapacité à travailler     |
| Alimentation    | Sauts de repas ponctuels    | TCA, contrôle excessif      | Anorexie, boulimie          |
| Social          | Envie d'être seul parfois   | Repli sur soi régulier      | Isolement total             |

Colorer : vert (léger) / orange (modéré) / rouge (grave) dans chaque cellule.

━━━ 3. LES VRAIS PROBLÈMES — SANTÉ MENTALE ÉTUDIANTE ━━━
Titre : "La crise silencieuse que l'université ne voit pas"

PROBLÈME 1 — Le mythe du "t'as qu'à te motiver"
"La santé mentale étudiante est encore trop souvent perçue comme
un manque de volonté. 72% des étudiants en difficulté n'osent pas
en parler à leurs enseignants par peur d'être jugés ou de perdre
des points."

PROBLÈME 2 — Le désert médical universitaire
"En France, il y a 1 psychologue pour 30 000 étudiants dans
les universités. Les délais d'attente pour un rendez-vous au SUMPPS
(service médical universitaire) dépassent souvent 3 mois."

PROBLÈME 3 — La double peine : pauvre ET stressé
"La précarité financière et la santé mentale dégradée se nourrissent
mutuellement. Les étudiants en difficulté financière ont 2,5 fois
plus de risques de présenter des symptômes dépressifs."

PROBLÈME 4 — Le COVID comme déclencheur
"La génération actuelle d'étudiants a vécu le lycée pendant la
pandémie. Isolement, cours en ligne, perte du lien social — des
séquelles qui durent et que les universités sous-estiment."

PROBLÈME 5 — La honte de demander de l'aide
"En France, consulter un psychologue reste tabou pour beaucoup.
60% des étudiants qui en auraient besoin ne consultent pas,
principalement par stigmatisation sociale et méconnaissance des
ressources gratuites disponibles."

━━━ 4. TABLEAU : RESSOURCES DISPONIBLES ━━━

| Ressource              | Public ciblé    | Tarif    | Contact / Lien               |
|------------------------|-----------------|----------|------------------------------|
| PSY-Étudiant           | Tous étudiants  | GRATUIT  | santepsy.etudiant.gouv.fr    |
| Nightline France       | Tous étudiants  | GRATUIT  | nightline.fr / 01 88 32 12 32|
| Fil Santé Jeunes       | 12-25 ans       | GRATUIT  | 0800 235 236 (anonyme)       |
| SUMPPS Toulouse        | Univ. Toulouse  | GRATUIT  | sur rdv via l'université     |
| SOS Amitié             | Tous publics    | GRATUIT  | 09 72 39 40 50 (24h/24)     |
| Croix-Rouge Écoute     | Tous publics    | GRATUIT  | 0800 858 858                 |
| Stop-Blues             | Dépression      | GRATUIT  | stop-blues.fr                |
| Médecin généraliste    | Tous publics    | 26.50€   | Remboursé sécu (70%)         |

━━━ 5. QUIZ INTERACTIF : MON NIVEAU DE STRESS ━━━
5 questions avec score affiché à la fin :
Q1 : "Depuis combien de temps tu te sens épuisé·e ?"
     < 1 semaine (1pt) / 1-4 semaines (2pts) / > 1 mois (3pts)
Q2 : "Est-ce que tu dors bien ?"
     Oui (1pt) / Parfois mal (2pts) / Rarement bien (3pts)
Q3 : "As-tu envie de voir tes amis ?"
     Souvent (1pt) / De moins en moins (2pts) / Plus vraiment (3pts)
Q4 : "Comment tu te sens avant un examen ?"
     Un peu stressé·e (1pt) / Très anxieux·se (2pts) / Paralysé·e (3pts)
Q5 : "Arrives-tu à te concentrer sur tes cours ?"
     Facilement (1pt) / Avec effort (2pts) / Très difficilement (3pts)

Résultats :
5-8 pts → "Tout va bien, reste vigilant·e" (fond vert)
9-12 pts → "Attention, tu montres des signes de fatigue" + ressources (fond orange)
13-15 pts → "Prends soin de toi — voici des ressources immédiates" (fond rouge)

━━━ 6. TÉMOIGNAGES ━━━

TÉMOIGNAGE 1 :
"En novembre de ma 1re année, je ne sortais plus du lit.
Je ratais tous mes cours. Mes parents pensaient que je m'amusais,
ils ne comprenaient pas. J'avais honte. J'ai découvert PSY-Étudiant
par hasard sur Instagram. 8 séances gratuites. Ça m'a littéralement
sauvé mon année — et peut-être plus que ça."
— Théo, 20 ans, BUT Informatique, Toulouse

TÉMOIGNAGE 2 :
"Je faisais des crises d'angoisse avant chaque partiel.
Je pensais que c'était normal d'avoir peur. En vrai j'avais besoin
d'aide. Le médecin de l'université m'a orientée vers une psy en 2
semaines. Maintenant je gère, mais j'aurais aimé le savoir avant."
— Emma, 22 ans, Licence de Droit, Bordeaux

══════════════════════════════════════════════════════════
ALIMENTATION — PRÉCARITÉ ALIMENTAIRE, TABLEAUX NUTRITION/BUDGET
══════════════════════════════════════════════════════════

ENRICHISSEMENT PAGE ALIMENTATION
════════════════════════════════════════════════════════════

Dans AlimentationPage.tsx, ajoute les sections suivantes :

━━━ 1. STATS ANIMÉES ━━━
→ 20%    — Étudiants ayant recours à l'aide alimentaire
→ 1€     — Prix d'un repas CROUS pour les boursiers
→ 23%    — Étudiants qui sautent régulièrement des repas
→ 30€    — Budget courses hebdomadaire moyen
→ 23kg   — Gaspillage alimentaire annuel moyen étudiant
→ 1/4    — Étudiants ne mangeant pas à leur faim tous les jours

━━━ 2. TABLEAU : BUDGET COURSES COMPARATIF ━━━

| Régime alimentaire    | Budget/semaine | Budget/mois | Nutritif ? | Faisable ?  |
|-----------------------|----------------|-------------|------------|-------------|
| Plats préparés seuls  | 55-70€         | 220-280€    | Faible     | Cher        |
| Cuisine maison simple | 25-35€         | 100-140€    | Bon        | Idéal       |
| Végétarien maison     | 20-30€         | 80-120€     | Excellent  | Très bon    |
| Livraison à domicile  | 70-100€        | 280-400€    | Variable   | Très cher   |
| CROUS + maison        | 15-25€         | 60-100€     | Bon        | Optimal     |
| Fast-food quotidien   | 50-80€         | 200-320€    | Faible     | Trop cher   |

━━━ 3. TABLEAU : 10 ALIMENTS ESSENTIELS PAS CHERS ━━━

| Aliment         | Prix moyen  | Protéines | Calories | Conservation |
|-----------------|-------------|-----------|----------|--------------|
| Lentilles       | 0.80€/500g  | 26g/100g  | 116 kcal | 1-2 ans      |
| Oeufs (12)      | 2.50€       | 13g/oeuf  | 155 kcal | 3-4 semaines |
| Flocons d'avoine| 0.90€/500g  | 13g/100g  | 389 kcal | 6-12 mois    |
| Riz complet     | 1.20€/kg    | 7g/100g   | 360 kcal | 1-2 ans      |
| Bananes         | 1.50€/kg    | 1g/100g   | 89 kcal  | 1 semaine    |
| Sardines boîte  | 0.90€/boîte | 25g/100g  | 208 kcal | 3-5 ans      |
| Carottes        | 0.80€/kg    | 1g/100g   | 41 kcal  | 3-4 semaines |
| Pois chiches    | 0.90€/boîte | 9g/100g   | 164 kcal | 3-5 ans      |
| Fromage blanc   | 1.20€/500g  | 8g/100g   | 60 kcal  | 2 semaines   |
| Pain de mie     | 1.00€       | 8g/100g   | 265 kcal | 1 semaine    |

━━━ 4. LES VRAIS PROBLÈMES — PRÉCARITÉ ALIMENTAIRE ━━━

PROBLÈME 1 — Manger ou payer son loyer
"Pour 23% des étudiants, il arrive de ne pas manger correctement
faute d'argent. Ce n'est pas une question de mauvaise gestion —
c'est une question de survie. Quand il reste 50€ pour 2 semaines,
les choix nutritionnels deviennent un luxe."

PROBLÈME 2 — La honte des files d'attente
"Les épiceries solidaires et banques alimentaires sont sous-utilisées
par les étudiants qui en auraient besoin. La honte d'être vu·e,
le sentiment d'échec — beaucoup préfèrent sauter des repas
plutôt que de demander de l'aide."

PROBLÈME 3 — Les déserts alimentaires universitaires
"De nombreux campus sont éloignés des grandes surfaces. Sans voiture,
les étudiants dépendent des supérettes de proximité, souvent 30 à 50%
plus chères. Les inégalités géographiques s'ajoutent aux inégalités sociales."

PROBLÈME 4 — L'impact sur la santé à long terme
"Une alimentation déséquilibrée sur 3-5 ans d'études laisse
des traces : carences, fatigue chronique, système immunitaire
affaibli. Les étudiants précaires ont un recours aux soins 40%
plus faible que les autres."

━━━ 5. CARTE DES RESSOURCES ALIMENTAIRES À TOULOUSE ━━━
Section avec liste cliquable des points d'aide :
→ Épicerie solidaire IUT Paul Sabatier — sur place, sur justificatifs
→ LINKEE Toulouse — inscription en ligne : https://www.linkee.com
→ Banque alimentaire Haute-Garonne : https://www.banquealimentaire.org
→ Restaurants CROUS Toulouse (repas à 1€) : https://www.crous-toulouse.fr
→ Too Good To Go (invendus à prix réduit) : https://www.toogoodtogo.com

━━━ 6. RECETTES ÉCONOMIQUES (3 fiches) ━━━
Présenter 3 recettes en cartes visuelles :
RECETTE 1 : "Curry de lentilles" — 0.80€/portion, 15 min, 4 personnes
RECETTE 2 : "Pâtes à l'ail et huile d'olive" — 0.50€/portion, 10 min
RECETTE 3 : "Omelette complète" — 0.90€/portion, 8 min, 2 personnes

━━━ 7. TÉMOIGNAGES ━━━

TÉMOIGNAGE 1 :
"Pendant 2 mois j'ai mangé des pâtes le midi et un sandwich
le soir. Je n'en parlais à personne. Un jour une camarade m'a
parlé de l'épicerie solidaire du campus. J'ai mis 3 semaines
à oser y aller tellement j'avais honte. Aujourd'hui je dis à
tout le monde que ça existe. C'est fait pour ça."
— Jade, 20 ans, BUT TC, Toulouse

══════════════════════════════════════════════════════════
RÉUSSITE — TRAVAIL, MÉTHODES, DONNÉES SUR L'ÉCHEC ÉTUDIANT
══════════════════════════════════════════════════════════

ENRICHISSEMENT PAGE RÉUSSITE
════════════════════════════════════════════════════════════

Dans ReussitePage.tsx, ajoute les sections suivantes :

━━━ 1. STATS ANIMÉES ━━━
→ 45%    — Étudiants exerçant un job rémunéré
→ 30%    — Dont le travail impacte négativement les résultats
→ 15%    — Taux d'abandon en 1re année de BUT
→ 16h    — Seuil critique de travail hebdomadaire
→ 48%    — Étudiants déclarant manquer de méthode de travail
→ 1/3    — Étudiants en décrochage partiel à un moment de leur cursus

━━━ 2. TABLEAU : IMPACT DU JOB ÉTUDIANT SELON LE VOLUME ━━━

| Heures de travail/sem | Impact sur les notes | Vie sociale | Niveau de stress |
|-----------------------|----------------------|-------------|------------------|
| 0h (étudiant pur)     | Neutre               | Élevée      | Moyen            |
| 1-8h (petits jobs)    | +0% à +5%            | Bonne       | Faible           |
| 8-16h (travail léger) | -5% à -10%           | Correcte    | Modéré           |
| 16-25h (mi-temps)     | -15% à -25%          | Limitée     | Élevé            |
| 25h+ (quasi plein)    | -30% à -50%          | Très faible | Très élevé       |

Colorer la colonne impact : vert / orange / rouge selon le niveau.

━━━ 3. TABLEAU : MÉTHODES DE RÉVISION COMPARÉES ━━━

| Méthode              | Efficacité | Temps requis | Difficulté | Idéale pour       |
|----------------------|------------|--------------|------------|-------------------|
| Répétition espacée   | 95%        | Régulier     | Moyenne    | Mémorisation long terme|
| Technique Pomodoro   | 85%        | 25min+pause  | Faible     | Concentration     |
| Mind mapping         | 75%        | 1-2h/sujet   | Moyenne    | Comprendre liens  |
| Révision passive     | 20%        | Variable     | Faible     | À éviter          |
| Relecture simple     | 25%        | Rapide       | Faible     | Inefficace seul   |
| Enseignement à autrui| 90%        | Variable     | Élevée     | Maîtrise profonde |
| QCM et exercices     | 80%        | Régulier     | Moyenne    | Auto-évaluation   |

━━━ 4. LES VRAIS PROBLÈMES — RÉUSSITE ÉTUDIANTE ━━━

PROBLÈME 1 — Le mythe du "travaille plus"
"On dit aux étudiants de travailler plus. Personne ne leur explique
comment travailler mieux. 48% déclarent manquer de méthode.
La répétition espacée est prouvée scientifiquement — 95% des
lycées ne l'enseignent jamais."

PROBLÈME 2 — La charge invisible
"En dehors des cours, un étudiant consacre en moyenne 20h/semaine
à d'autres contraintes : job, transports, courses, administration.
Ces heures-là ne sont jamais comptées dans les 'heures de révision'."

PROBLÈME 3 — Le piège du présentisme
"Être en cours sans comprendre n'est pas mieux qu'être absent.
Pourtant de nombreux étudiants sont là physiquement mais absents
mentalement — épuisés, affamés, anxieux. L'assiduité sans condition
est un indicateur trompeur."

PROBLÈME 4 — L'isolement face aux difficultés
"1 étudiant sur 3 en difficulté académique ne demande pas d'aide.
Par honte, par manque d'info, ou par peur. Le tutorat existe dans
presque toutes les formations — moins de 10% des étudiants qui en
auraient besoin y font appel."

PROBLÈME 5 — Les inégalités de départ
"Un étudiant dont les parents sont cadres supérieurs a 3 fois
plus de chances d'obtenir un Master qu'un enfant d'ouvrier.
Les inégalités scolaires se creusent à l'université, elles ne
se réduisent pas."

━━━ 5. OUTIL : PLANNING TYPE HEBDOMADAIRE ━━━
Tableau HTML 7 jours × 4 plages horaires (matin/midi/après-midi/soir)
Pré-rempli avec un exemple équilibré :
→ 20h de cours / 15h de révision / 10h de job max recommandé
→ 3 soirs libres minimum / 1 weekend semi-libre
→ Code couleur : cours (teal), révisions (orange), job (rouge), libre (vert)

━━━ 6. TÉMOIGNAGES ━━━

TÉMOIGNAGE 1 :
"J'ai failli rater mon BUT parce que je travaillais 30h par semaine
à côté. Je finançais mon loyer, mes parents ne pouvaient pas aider.
Mon responsable de formation m'a aidé à monter un dossier de bourse
d'urgence. J'ai pu réduire à 15h et j'ai rattrapé mon retard.
Si tu es dans cette situation, parle-en — il existe des solutions."
— Rayan, 22 ans, BUT Informatique, Toulouse

TÉMOIGNAGE 2 :
"J'ai découvert la méthode Pomodoro en 2e année. Avant, je passais
4h à réviser sans rien retenir. Avec 25min de focus + 5min de pause,
je retenais 3x plus en 2h. Personne ne m'avait appris à travailler."
— Léa, 21 ans, BUT Info, Lyon

══════════════════════════════════════════════════════════
AIDES — TABLEAUX COMPARATIFS, GUIDE COMPLET, TOUTES LES AIDES
══════════════════════════════════════════════════════════

ENRICHISSEMENT PAGE AIDES FINANCIÈRES
════════════════════════════════════════════════════════════

Dans AidesPage.tsx, ajoute les sections suivantes :

━━━ 1. TABLEAU GÉNÉRAL : TOUTES LES AIDES D'UN COUP D'ŒIL ━━━

| Aide                    | Montant max      | Qui ?              | Quand déposer ? | Délai réponse |
|-------------------------|------------------|--------------------|-----------------|---------------|
| Bourse CROUS (éch. 7)   | 6 335€/an        | Sous conditions    | Janv–Mai        | Juillet       |
| APL logement            | 400€/mois        | Locataires         | Dans le mois    | 1-3 mois      |
| Aide urgence FSDIE      | 100-2000€        | En difficulté      | À tout moment   | 2 semaines    |
| Aide mobilité inter.    | 400-1600€        | Séjour étranger    | Avant départ    | 1 mois        |
| Repas CROUS 1€          | Sans plafond     | Boursiers          | Automatique     | Immédiat      |
| Garantie Visale         | 36 mois loyer    | Sans garant        | Avant bail      | 48h           |
| Aide au mérite          | 1800€/an         | Mention TB bac     | Automatique     | Juillet       |
| Mutuelle étudiante      | Variable         | Tous               | À l'inscription | Immédiat      |
| Prime d'activité        | ~200€/mois       | Si job >910€/mois  | Via CAF         | 1 mois        |
| Aide région Occitanie   | 500-1500€        | Étudiants Occitanie| Selon appels    | Variable      |

━━━ 2. TABLEAU : ÉCHELONS DE BOURSE CROUS ━━━

| Échelon | Revenus annuels parents (indicatif) | Montant annuel | Montant mensuel |
|---------|-------------------------------------|----------------|-----------------|
| 0bis    | < 33 100€ (aide maintien)           | 1 084€         | 90€             |
| 1       | < 33 100€                           | 1 843€         | 153€            |
| 2       | < 27 900€                           | 2 479€         | 206€            |
| 3       | < 24 600€                           | 3 111€         | 259€            |
| 4       | < 21 000€                           | 3 742€         | 311€            |
| 5       | < 17 400€                           | 4 375€         | 364€            |
| 6       | < 13 900€                           | 5 007€         | 417€            |
| 7       | < 10 300€                           | 6 335€         | 527€            |

Note : montants 2023-2024, révisés chaque année. +6% accordés en 2023.
Source officielle : https://www.etudiant.gouv.fr

━━━ 3. LES VRAIS PROBLÈMES — AIDES MÉCONNUES ━━━

PROBLÈME 1 — Des millions d'euros non réclamés chaque année
"Chaque année, des millions d'euros de bourses et d'aides
ne sont pas réclamés faute d'information. L'État ne vient
pas frapper à ta porte — c'est à toi de savoir ce à quoi
tu as droit et de le demander."

PROBLÈME 2 — La date limite du DSE que personne ne connaît
"La demande de bourse CROUS se fait entre janvier et mai.
Passé cette date, plus rien n'est possible avant l'année suivante.
Pourtant, des milliers d'étudiants découvrent ce système en octobre,
trop tard pour cette année-là."

PROBLÈME 3 — L'APL que beaucoup oublient de demander
"44% des étudiants locataires ont droit à l'APL, mais beaucoup
ne la demandent pas dans le délai d'un mois après leur entrée
dans le logement. La demande rétroactive n'est possible que
sur une période limitée."

PROBLÈME 4 — Les aides locales méconnues
"En dehors des aides nationales, il existe des aides régionales,
départementales, municipales et universitaires. Toulouse, la région
Occitanie, l'IUT Paul Sabatier — chacun a ses propres dispositifs,
très peu connus des étudiants."

━━━ 4. GUIDE VISUEL : CALENDRIER DES DÉMARCHES ━━━
Timeline annuelle (12 mois) avec les dates clés :
→ Janvier : ouverture DSE sur messervices.etudiant.gouv.fr
→ Février-Mars : compléter le DSE, joindre les pièces justificatives
→ Avril-Mai : DATE LIMITE DSE — dernier délai absolu
→ Juin : simulateur APL sur caf.fr avant de signer un bail
→ Juillet : résultats des bourses CROUS
→ Août-Septembre : demande Visale si nécessaire
→ Septembre : demande APL dans le mois suivant l'entrée
→ Octobre-Novembre : vérifier l'aide d'urgence FSDIE si besoin
→ Décembre : bilan budget, préparer le DSE suivant

━━━ 5. ACCORDÉONS INTERACTIFS — GUIDE COMPLET POUR CHAQUE AIDE ━━━
(Voir section 6 du prompt principal pour le détail des 8 accordéons)
S'assurer que chaque aide a :
→ Bouton "Accéder au site officiel" (lien cliquable, nouvel onglet)
→ Accordéon "Comment en bénéficier ?" avec les 5 étapes
→ Badge couleur indiquant le profil ciblé
→ Date limite si applicable (en rouge si urgent)