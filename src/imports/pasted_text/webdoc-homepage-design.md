🎯 OBJECTIFS
Concevoir la maquette haute-fidélité d'un site webdocumentaire destiné à un public étudiant (BUT Informatique 1re année, IUT Paul Sabatier). Le site a pour but de traiter de la vie étudiante sous plusieurs angles thématiques, en combinant contenus multimédias (vidéos, textes, infographies, témoignages) et navigation immersive. La page d'accueil constitue le hub central de toute l'expérience : elle doit orienter l'utilisateur vers 6 sections thématiques tout en donnant une identité visuelle forte, inspirée des standards des webdocumentaires professionnels (référence : Do Not Track). Le design doit refléter les compétences attendues en communication visuelle, ergonomie et argumentation numérique dans le cadre du module R2.13.

⚙️ CONTRAINTES ATTENDUES

Format desktop prioritaire : 1440 × 900 px (frame Figma standard)
Responsive pensé pour tablette (768px) en secondary frame
Accessibilité : contraste WCAG AA minimum sur tous les textes
Pas de dépendance à des images non libres de droits — utiliser des placeholders stylisés ou des visuels libres (Unsplash/Pexels)
Tous les composants doivent être construits en Auto Layout Figma pour faciliter l'adaptabilité
Utiliser des components réutilisables (cards, boutons, icônes) avec variants
La page doit être entièrement scrollable (hauteur totale ~2800px)
Prévoir un état hover sur chaque bloc thématique (changement de couleur, légère élévation)
Aucune surcharge textuelle en page d'accueil : max 3 lignes par bloc


🧭 CHOIX DE NAVIGATION — COMPLET ET PRÉCIS
Structure : Hub central en arborescence
Intégrer au centre de la page une ellipse interactive bleu marine foncé (#1B2A3B) portant le label "Accueil" en blanc bold, reliée par des lignes courbes subtiles à 6 blocs thématiques cliquables :
#SectionCouleurPosition dans le hub1Budget & ressourcesBleu-vert #1A7A8AHaut gauche2Travail étudiantBleu-vert #1A7A8AMilieu gauche3Réussite académiqueBleu-vert #1A7A8AHaut droite4Santé mentaleBleu-vert #1A7A8AMilieu droite5Témoignages étudiantsOrange #E8731ABas centre-gauche — prioritaire6Analyse professionnelleOrange #E8731ABas centre-droite — prioritaire
Navbar fixe en haut de page :

Logo/titre du webdoc (à gauche)
Liens texte : ÉPISODES · THÈMES · À PROPOS · CONNEXION (à droite)
Style : fond transparent sur hero, fond sombre au scroll (position: sticky)
Inspiration directe de l'interface Do Not Track : typographie uppercase, soulignement rouge sur item actif

Navigation secondaire (footer) :

Répéter les 6 thèmes en liens texte
Mention légale + crédits équipe IUT

Interactions à annoter en Figma :

Clic sur un bloc hub → transition vers la page thématique (flèche de prototype)
Hover sur les blocs → légère élévation (shadow 0 8px 24px rgba(0,0,0,0.15)) + brighten couleur +10%
Burger menu sur version tablette


📚 CHOIX DE SOURCES (à intégrer visuellement)
Prévoir une section "Sources & ressources" en bas de page d'accueil (avant le footer), composée de 3 cartes horizontales dans le style Do Not Track (fond sombre, titre coloré, accroche courte) :
CarteTitre affichéType de source1Documentation interne IUTRapport / PDF institutionnel2Témoignages terrainInterview vidéo / audio3Données statistiquesInfographie / source officielle (INSEE, ONISEP…)
Chaque carte comprend : un label de couleur (cyan #3ECFCF), un titre en blanc bold, une courte accroche en gris clair, et un bouton "Voir la source" outlined.

💰 AFFICHAGE DES AIDES AU FINANCEMENT
Intégrer un widget flottant ou une section dédiée dans la page d'accueil, accessible depuis le bloc "Budget & ressources", avec les éléments suivants :

Bandeau d'alerte doux (fond #FFF3CD, icône 💡, texte : "Des aides financières existent pour toi → Découvrir") positionné juste sous la navbar
Modale ou drawer latéral (annoté en Figma, non développé) contenant :

Bourse CROUS (critères sociaux)
Aide à la mobilité
Aide d'urgence (FSDIE)
Logement étudiant (APL, résidences CROUS)
Aide alimentaire (épiceries solidaires, repas à 1€)


Chaque aide présentée sous forme de card compacte : nom de l'aide + montant indicatif + bouton "En savoir plus" (lien externe)
Indicateur visuel : pastille rouge sur le bloc "Budget & ressources" du hub (badge ● = nouveauté/info disponible)


🎨 CHOIX GRAPHIQUES UI/UX
Palette de couleurs
UsageCouleurCode hexFond principal heroBrun sombre immersif#1A0A00Fond sectionsBleu très clair#EAF4F7Hub centralBleu marine#1B2A3BBlocs thématiques principauxBleu-vert#1A7A8ABlocs éditoriaux prioritairesOrange vif#E8731AAccent / hoverCyan#3ECFCFTexte principalBlanc / Gris clair#FFFFFF / #E0E0E0Alerte financementJaune doux#FFF3CD
Typographie

Titres : Space Grotesk Bold ou DM Sans Bold — uppercase pour les labels nav
Corps : Inter Regular 16px — line-height 1.6
Accroches héro : taille 48–64px, poids 700, éventuellement avec effet barré (strikethrough) pour les titres de sections à la Do Not Track

Style visuel global

Hero plein écran (100vh) avec image/vidéo de fond assombrie (overlay rgba(0,0,0,0.65))
Titre du webdoc en bas à gauche du hero (style Do Not Track) avec sous-titre thématique et bouton CTA COMMENCER (fond #1A7A8A, texte blanc, no border-radius)
Lignes de connexion du hub : stroke gris clair 1px, légèrement courbées, opacité 60%
Coins arrondis des blocs thématiques : 12px
Espacement généreux : padding interne des sections ≥ 80px vertical
Micro-animations annotées : pulse sur le hub central, fade-in des blocs au scroll (à noter avec des commentaires Figma)
Mode sombre dominant sur hero + navbar / mode clair sur sections de contenu = contraste dynamique qui guide le regard

Composants Figma à créer obligatoirement

ThemeCard (variant : default / hover / prioritaire)
NavBar (variant : transparent / scrolled)
SourceCard
FinancementCard
HubNode (ellipse centrale)
CTAButton (variant : primary / outlined / ghost)