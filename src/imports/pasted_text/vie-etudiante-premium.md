Refonte complète et finale du webdocumentaire "Vie Étudiante" — Version Premium 2.0

Tu vas améliorer et compléter la maquette haute-fidélité existante du webdocumentaire 
étudiant "Vie Étudiante" en ajoutant un système d'authentification complet et en 
enrichissant l'expérience globale. Le design actuel (hero dark, palette teal/orange, 
typographie bold) doit être conservé et sublimé.

═══════════════════════════════════════════
PARTIE 1 — SYSTÈME D'AUTHENTIFICATION COMPLET
═══════════════════════════════════════════

Créer deux écrans distincts accessibles depuis le bouton "CONNEXION" dans la navbar :

─── ÉCRAN A : PAGE DE CONNEXION ───

Layout : 
- Split-screen 50/50 : gauche = visuel immersif (photo étudiants + stat choc + 
  citation motivante), droite = formulaire
- Fond gauche : dark overlay sur photo avec gradient teal, stat 
  "6 335€/an d'aides disponibles" en grand, citation d'un étudiant fictif
- Fond droit : fond sombre (#0d1117), formulaire centré avec logo "VE" en haut

Formulaire de connexion (côté droit) :
- Titre : "Bon retour 👋" en blanc 32px bold
- Sous-titre : "Connecte-toi pour accéder à ton espace personnalisé" en gris clair
- Champ : Adresse e-mail universitaire (placeholder: prenom.nom@univ-tlse3.fr)
- Champ : Mot de passe (avec icône œil pour afficher/masquer)
- Lien "Mot de passe oublié ?" aligné à droite, couleur teal
- Bouton CTA principal : "Se connecter" — fond teal, pleine largeur, 48px height, 
  border-radius 8px, hover effect
- Séparateur "ou" avec lignes horizontales
- Bouton secondaire : "Continuer sans compte" — outline blanc, même dimensions
- Lien en bas : "Pas encore de compte ? Créer mon espace →" en teal

─── ÉCRAN B : PAGE D'INSCRIPTION ───

Layout identique au split-screen (même visuel gauche, formulaire droite)

Formulaire d'inscription en 2 étapes (stepper visible en haut : Étape 1/2 — Étape 2/2) :

ÉTAPE 1 — Identité :
- Titre : "Crée ton espace étudiant" en blanc 32px bold
- Prénom (champ texte)
- Nom de famille (champ texte)
- Adresse e-mail (champ texte, validation format universitaire suggérée)
- Numéro de téléphone (champ tel, indicatif +33 pré-rempli)
- Mot de passe (avec indicateur de force : faible / moyen / fort en couleurs)
- Confirmation du mot de passe
- Bouton "Continuer →" teal pleine largeur

ÉTAPE 2 — Profil étudiant :
- Titre : "Dis-nous qui tu es" en blanc 32px bold
- Sous-titre : "Ces infos personnalisent ton expérience et tes aides affichées"
- Année d'études : menu déroulant 
  (1re année BUT / 2e année BUT / 3e année BUT / Licence / Master / Autre)
- Établissement : champ texte (placeholder: IUT Paul Sabatier, Toulouse)
- Statut : boutons radio stylés en cartes 
  (Boursier CROUS / Non boursier / Alternant / En difficulté financière)
- Situation logement : boutons radio stylés en cartes
  (Résidence CROUS / Logement privé / Chez mes parents / Autre)
- Case à cocher : "J'accepte les CGU et la politique de confidentialité"
- Case à cocher optionnelle : "Recevoir des alertes sur les nouvelles aides disponibles"
- Bouton "Créer mon compte ✓" teal pleine largeur

─── ÉCRAN C : TABLEAU DE BORD PERSONNEL (après connexion) ───

Header personnalisé dans la navbar :
- Remplacer "CONNEXION" par avatar initiales + "Bonjour, [Prénom] ▾"
- Menu déroulant : Mon profil / Mes aides sauvegardées / Déconnexion

Page "Mon Espace" accessible depuis la navbar :
- Bandeau de bienvenue : "Bonjour [Prénom] 👋 — Voici ce qui a été préparé pour toi"
- Widget "Ton profil" : résumé (année, statut, logement) + bouton "Modifier"
- Widget "Aides recommandées" : 3 cartes d'aides filtrées selon son profil 
  (statut + logement) avec liens officiels
- Widget "Ta progression" : épisodes regardés / thématiques explorées (barre de 
  progression visuelle)
- Widget "Simulateur sauvegardé" : résultat du dernier calcul de budget
- Bouton : "Mettre à jour mon profil" — outline teal

═══════════════════════════════════════════
PARTIE 2 — AMÉLIORATIONS DE LA PAGE D'ACCUEIL EXISTANTE
═══════════════════════════════════════════

NAVBAR (mise à jour) :
- Si non connecté : afficher "CONNEXION" + "CRÉER UN COMPTE" (outline teal)
- Si connecté : afficher avatar + prénom + menu déroulant
- Ajouter une micro-notification (badge rouge) sur l'avatar si nouvelles aides 
  disponibles selon le profil

HERO (enrichissement) :
- Conserver le design actuel (dark overlay, titre bold, stats)
- Ajouter sous les 3 compteurs une ligne CTA secondaire :
  "Déjà étudiant inscrit ? → Accède à tes aides personnalisées" (lien teal)
- Ajouter un badge flottant discret en bas à droite : 
  "🔒 Connexion = accès aux fonctions premium" avec micro-animation pulse

SECTION THÉMATIQUES (enrichissement) :
- Pour les utilisateurs connectés : afficher un badge "✓ Exploré" sur les 
  thématiques déjà visitées
- Ajouter un indicateur "🔒 Contenu bonus" sur 2 thématiques réservées aux inscrits
- Hover effect : afficher le nombre d'épisodes dans la thématique

SECTION AIDES FINANCIÈRES (enrichissement) :
- Ajouter en tête de section : 
  "🎯 Connecte-toi pour voir les aides adaptées à ton profil"
- Pour les connectés : filtrage automatique selon statut (boursier/alternant/etc.)
- Pour les non-connectés : cartes légèrement floutées avec CTA 
  "Débloque les aides personnalisées →"

═══════════════════════════════════════════
PARTIE 3 — DESIGN SYSTEM & COHÉRENCE VISUELLE
═══════════════════════════════════════════

Palette à respecter strictement :
- Primary : #008080 (teal)
- Secondary : #E8731A (orange)
- Dark bg : #0d1117
- Card bg : #161b22
- Text primary : #ffffff
- Text secondary : #8b949e
- Success : #3fb950
- Error : #f85149
- Warning : #d29922

Composants UI à standardiser :
- Tous les champs de formulaire : height 48px, border #30363d, focus border teal, 
  border-radius 8px, fond #161b22
- Tous les boutons primaires : fond teal, blanc, 48px height, radius 8px, 
  hover fond #006666, transition 200ms
- Tous les boutons secondaires : outline 1px teal, teal text, hover fond teal/10%
- Labels : 14px medium, blanc, margin-bottom 8px
- Messages d'erreur : 12px, rouge #f85149, icône ⚠ devant
- Messages de succès : 12px, vert #3fb950, icône ✓ devant

États à prévoir pour chaque champ :
- Default / Focus (border teal + glow subtil) / Error (border rouge) / 
  Success (border vert + icône ✓) / Disabled (opacité 40%)

═══════════════════════════════════════════
PARTIE 4 — UX & MICRO-INTERACTIONS
═══════════════════════════════════════════

Transitions entre écrans :
- Login → Accueil connecté : fade 300ms + slide up léger
- Étape 1 → Étape 2 inscription : slide horizontal gauche→droite 250ms
- Ouverture modale connexion : scale up 0.95→1 + fade 200ms

Feedback utilisateur :
- Bouton "Se connecter" : état loading (spinner teal) pendant 1.5s puis succès
- Stepper inscription : étape complétée = pastille verte animée ✓
- Champ email : validation en temps réel avec checkmark vert
- Indicateur force mot de passe : barre animée rouge→orange→vert

Accessibilité :
- Tous les champs ont un label visible (pas seulement placeholder)
- Navigation clavier complète (tabindex logique)
- Contraste minimum AA sur tous les textes
- Messages d'erreur associés aux champs (aria-describedby)

═══════════════════════════════════════════
LIVRABLE ATTENDU
═══════════════════════════════════════════

Générer les écrans suivants en haute-fidélité dans le même style que la maquette 
existante :

1. Page Connexion (split-screen)
2. Page Inscription Étape 1/2
3. Page Inscription Étape 2/2
4. Navbar état "connecté" avec menu déroulant
5. Page "Mon Espace" / Tableau de bord personnel
6. Page d'accueil mise à jour (état connecté + état non-connecté)

Appliquer strictement la palette, les composants et les micro-interactions définis 
ci-dessus. Le résultat doit être cohérent, premium, mobile-first et directement 
intégrable dans le projet R2.13.