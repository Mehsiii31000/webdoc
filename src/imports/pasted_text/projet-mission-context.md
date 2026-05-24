════════════════════════════════════════════════════════
CONTEXTE & MISSION DU PROJET
════════════════════════════════════════════════════════

CONTEXTE & MISSION DU PROJET
════════════════════════════════════════════════════════

Site existant à améliorer (NE PAS repartir de zéro) :
→ https://luxury-river-15788577.figma.site/

PROBLÉMATIQUE CENTRALE du webdocumentaire :
"Les étudiants peuvent-ils financer leurs études sans sacrifier
leur réussite et leur équilibre personnel ?"

Public cible : étudiants 18–25 ans — BUT Informatique 1re année, IUT Paul Sabatier
Module : R2.13 Expression et Communication

TA MISSION DANS CETTE SESSION :
1. Supprimer DÉFINITIVEMENT tout système de connexion / compte / inscription
2. Rendre 100% du contenu accessible à tous, sans restriction
3. Créer les 6 pages thématiques complètes avec contenu riche
4. Compléter toutes les sections existantes avec le maximum d'informations
5. Ajouter une section newsletter légère (email uniquement, sans compte)
6. Rendre toutes les aides financières interactives avec guides et liens
7. Citer des sources fiables et datées pour chaque information
8. Intégrer 2 à 3 lecteurs vidéo/interviews dans le site
9. Appliquer le meilleur UI/UX possible : animations, micro-interactions, storytelling
10. Tu as le DROIT DE CHERCHER et d'intégrer toutes les informations
    pertinentes sur les 6 thématiques — budget, logement, santé mentale,
    alimentation, réussite scolaire, aides financières

RÉFÉRENCES WEBDOC à s'inspirer (style, navigation, narration) :
→ https://donottrack-doc.com/fr/intro/ (référence principale)
→ https://webdoc.france24.com/si-je-reviens-un-jour-louise-pikovsky/
→ https://fantasy.bnf.fr/fr/
→ https://www.panamaalbrown.com/
→ https://correspondances.tv5monde.com/
→ https://howtomakeakenloachfilm.com/fr

════════════════════════════════════════════════════════
RÈGLES GLOBALES — ACCÈS PUBLIC, PALETTE, RESPONSIVE
════════════════════════════════════════════════════════

RÈGLES GLOBALES — Accès public, palette, typographie, responsive
════════════════════════════════════════════════════════

ACCÈS PUBLIC — RÈGLE ABSOLUE, NON NÉGOCIABLE :
- Supprimer TOUT bouton "Connexion", "Créer un compte", "Se connecter"
- Supprimer tout contenu verrouillé, tout badge "🔒 Premium" ou "Membres"
- Supprimer tout AuthContext, LoginPage, SignupPage, DashboardPage
- Supprimer toute logique d'état connecté/non-connecté
- 100% du contenu visible immédiatement pour tout visiteur
- Remplacer "CONNEXION" dans la navbar par "Newsletter" ou "S'inscrire"

PALETTE STRICTE :
Teal principal  : #008080 / hover : #006666 / clair : #E1F5EE
Orange accent   : #E8731A / hover : #CC5F10
Fond sombre     : #0d1117
Fond cartes     : #161b22
Bordures        : #30363d
Texte principal : #ffffff
Texte secondaire: #8b949e
Succès          : #3fb950
Erreur          : #f85149
Avertissement   : #d29922

TYPOGRAPHIE — Inter uniquement :
H1 hero     : 72px desktop / 40px mobile / weight 800 / line-height 1.1
H2 section  : 40px / weight 700 / line-height 1.2
H3 carte    : 22px / weight 600 / line-height 1.3
Corps       : 16px / weight 400 / line-height 1.7
Tags/labels : 12px / uppercase / letter-spacing 0.08em

ESPACEMENT BASE 8PX :
4 / 8 / 16 / 24 / 40 / 64 / 96px
Border-radius : 8px boutons & inputs / 12px cartes / 16px héros

RESPONSIVE OBLIGATOIRE — tester sur 3 breakpoints :
Mobile  : 375px (prioritaire, mobile-first)
Tablette: 768px
Desktop : 1440px
Touch targets : minimum 44×44px sur mobile

════════════════════════════════════════════════════════
HERO PAGE D'ACCUEIL — ACCROCHE IMMERSIVE
════════════════════════════════════════════════════════

HERO PAGE D'ACCUEIL — Storytelling immersif & accroche émotionnelle
════════════════════════════════════════════════════════

BARRE D'ANNONCE sticky AU-DESSUS de la navbar (fond #008080) :
Texte : "💡 Tu peux toucher jusqu'à 6 335€/an d'aides — Vérifie maintenant →"
Lien cliquable : https://www.etudiant.gouv.fr/fr/aides-et-bourses
Hauteur : 40px / texte blanc 13px bold / lien qui ouvre un nouvel onglet

HERO SECTION (100vh, photo étudiants fond, overlay dark 60%) :
H1 (72px, blanc, weight 800) :
"Ta vie étudiante mérite mieux que la survie."

Sous-titre (22px, blanc 80%, max-width 600px, centré) :
"6 thématiques vraies. Des histoires vraies. Des aides concrètes."

Badge orange animé (bounce au chargement, 16px bold) :
"⚡ 1 étudiant sur 2 renonce à se soigner faute d'argent."

Phrases en ROTATION CROSSFADE toutes les 3 secondes :
— "Tu n'es pas seul·e face au loyer, au frigo vide, au burn-out."
— "Découvre ce que personne ne t'a jamais expliqué sur tes droits."
— "Pas de compte. Pas de formulaire. Juste ce dont tu as besoin."
— "Des vraies réponses à de vraies questions d'étudiants."
— "Informé·e aujourd'hui, mieux préparé·e pour demain."

CTA principal (bouton teal, 52px height, pulse glow toutes les 3s) :
"→ Explore ta réalité étudiante"

COMPTEUR social proof (3 chiffres animés count-up, sous le CTA) :
"6 thèmes · 12 épisodes · +2 000 étudiants informés"

Scroll indicator animé (bounce loop, bas de section) :
"↓ 6 thématiques t'attendent"

SECTION INTRO (juste avant la grille de cartes) :
Titre (40px bold) : "6 réalités. 6 histoires. La tienne en fait partie."
Sous-titre (18px) : "Explore dans l'ordre ou saute directement au sujet qui te parle —
tout est libre, tout est gratuit, aucune inscription requise."

SECTION VIDÉO TÉMOIGNAGE (entre hero et thématiques) :
Titre : "Ils ont vécu ce que tu vis. Ils en parlent."
Intégrer 2 lecteurs vidéo côte à côte (desktop) / empilés (mobile)
Format : iframe ou video HTML5, fond dark, bouton play centré
Sous chaque vidéo : prénom fictif, filière, ville (ex: "Léa, 20 ans, BUT Info, Toulouse")

════════════════════════════════════════════════════════
NAVIGATION — FLUIDE, SANS CONNEXION, AVEC PROGRESSION
════════════════════════════════════════════════════════

NAVIGATION — Expérience ouverte, fluide, accessible
════════════════════════════════════════════════════════

NAVBAR FIXE (backdrop blur, fond dark semi-transparent) :
Logo gauche : carré teal "VE" + "Vie Étudiante" en blanc bold
Liens navigation : Accueil · Thématiques · Aides · Sources · Newsletter
SUPPRIMER TOTALEMENT : "Connexion" / "Créer un compte" / tout bouton auth
Sur scroll >50px : fond opaque #0d1117 + ombre 0 2px 12px rgba(0,0,0,0.4)

BARRE DE PROGRESSION IMMERSIVE (3px, teal, collée sous la navbar) :
Largeur = position scroll / hauteur totale page × 100%
6 points sur la barre = 6 thématiques
Hover sur un point = tooltip avec nom de la thématique
Label flottant au-dessus du curseur : "Thématique 3/6 — Budget"

FLÈCHES DE TRANSITION entre sections (bas de chaque thématique) :
Budget      → "Et le logement dans tout ça ? →"
Logement    → "Bien logé·e, mais ta santé mentale ? →"
Santé       → "Et pour bien manger sans se ruiner ? →"
Alimentation→ "Prêt·e à parler réussite ? →"
Réussite    → "Découvre les aides auxquelles tu as droit →"
Aides       → "Tu veux rester informé·e ? → Inscris-toi à la newsletter"

MENU MOBILE (hamburger 44×44px, haut droite) :
Drawer latéral full-height depuis la droite, fond dark #0d1117
Fermeture : tap extérieur ou croix
Liens identiques à la navbar desktop
Bouton CTA teal "S'inscrire à la newsletter" en bas du drawer
Aucune barrière, aucun lien de connexion

BOUTON SCROLL-TO-TOP :
Flottant bas-droit, apparaît après 300px de scroll
Fond teal, icône flèche haut, hover #006666, border-radius 50%

BREADCRUMB (pages thématiques uniquement) :
"Accueil > Thématiques > Budget"
Tous les liens cliquables, couleur teal au hover

════════════════════════════════════════════════════════
6 PAGES THÉMATIQUES — CONTENU COMPLET, TÉMOIGNAGES, SOURCES
════════════════════════════════════════════════════════

6 PAGES THÉMATIQUES COMPLÈTES
════════════════════════════════════════════════════════

STRUCTURE COMMUNE À CHAQUE PAGE (applique sur les 6 pages) :
┌──────────────────────────────────────────────────────┐
│ Hero thématique (40vh) : titre + accroche + gradient  │
│ Breadcrumb : Accueil > Thématiques > [Nom]            │
│ Chapeau introductif (3-4 lignes, italic, centré)      │
├──────────────────────────────────────────────────────┤
│ 3 stats animées (count-up à l'entrée viewport)        │
│ Contenu éditorial long (texte structuré, riche)       │
│ Infographie ou schéma interactif                      │
│ Lecteur vidéo ou interview (placeholder si besoin)    │
│ Témoignage fort (citation + prénom + filière)         │
│ Sources citées (accordéon dépliable)                  │
│ Liens utiles (boutons cliquables, nouvel onglet)      │
│ Navigation ← Thème précédent / Thème suivant →       │
└──────────────────────────────────────────────────────┘

━━━ PAGE 1 : BUDGET ━━━
Hero accroche : "900€ par mois. Comment font-ils ?"
Stats : Budget moyen 914€/mois · 55% part logement · 39% en précarité
Contenu détaillé à générer :
  • Décomposition du budget type étudiant par poste (loyer, courses,
    transport, santé, loisirs, téléphone, abonnements)
  • Comparatif ville moyenne (Toulouse) vs grande métropole (Paris)
  • Astuces concrètes pour réduire chaque poste de dépenses
  • Erreurs budgétaires les plus fréquentes chez les étudiants
  • Simulateur interactif : 3 sliders revenus/loyer/courses
    → affiche solde restant en temps réel, alerte si négatif (orange)
Témoignage : "Je gagnais 700€/mois. Le loyer était à 450€.
  J'ai dû choisir entre les courses et les sorties." — Tom, 20 ans, BUT Info
Sources (accordéon) :
  → OVE Enquête conditions de vie 2021 : https://www.ove-national.education.fr
  → LMDE Baromètre santé 2023 : https://www.lmde.fr
  → INSEE niveau de vie étudiants : https://www.insee.fr

━━━ PAGE 2 : LOGEMENT ━━━
Hero accroche : "Trouver un appart étudiant : le vrai parcours du combattant."
Stats : Loyer moyen CROUS 250€ · Délai recherche 6 semaines · 1/5 en précarité logement
Contenu détaillé à générer :
  • CROUS : DSE (Dossier Social Étudiant), délais, critères prioritaires,
    numéros de résidence à Toulouse, comment suivre sa demande
  • Logement privé : checklist avant signature bail, dépôt garantie,
    état des lieux, recours en cas de litige
  • Colocation : avantages/inconvénients, plateformes, pacte de colocation
  • Garanties locatives : Visale (sans garant physique), GLI, caution bancaire
  • APL : qui peut en bénéficier, simulateur CAF, démarches étape par étape
Témoignage : "J'ai mis 2 mois à trouver une coloc. Le propriétaire voulait
  3 mois de loyer en caution. Visale m'a sauvé la mise." — Sarah, 21 ans
Liens cliquables :
  → CROUS logement : https://www.messervices.etudiant.gouv.fr
  → Visale garantie : https://www.visale.fr
  → Simulateur APL CAF : https://www.caf.fr
  → La Carte des Colocs : https://www.lacartedescolocs.fr
  → Appartager : https://www.appartager.com

━━━ PAGE 3 : SANTÉ MENTALE ━━━
Hero accroche : "Tu n'as pas à faire semblant que tout va bien."
Stats : 1/3 symptômes anxiété · 5% accès psy régulier · burn-out +43% depuis 2020
Contenu détaillé à générer :
  • Reconnaître les signes d'épuisement, d'anxiété et de dépression
  • Différence burn-out étudiant / dépression / stress ponctuel
  • Ressources gratuites accessibles à Toulouse et partout en France :
    CROUSopsy (séances psy gratuites), Nightline France (écoute nocturne),
    Fil Santé Jeunes, PSY-Étudiant (8 séances remboursées)
  • Conseils pratiques : routine matinale, sommeil, écrans, sport léger
  • Que faire si un ami semble en difficulté : comment l'aborder
  • Quiz interactif : "Mon niveau de stress" (5 questions, résultat avec ressources)
Témoignage vidéo placeholder (iframe) : "Pendant 6 mois j'ai fait semblant.
  Les séances PSY-Étudiant m'ont aidé à remonter la pente." — Inès, 22 ans
Liens cliquables :
  → Nightline France : https://www.nightline.fr (écoute soir/nuit)
  → Fil Santé Jeunes : https://www.filsantejeunes.com / 0800 235 236
  → PSY-Étudiant : https://santepsy.etudiant.gouv.fr
  → SOS Amitié : https://www.sos-amitie.com / 09 72 39 40 50

━━━ PAGE 4 : ALIMENTATION ━━━
Hero accroche : "Manger équilibré pour 3€/jour : mode d'emploi."
Stats : 20% recours aide alimentaire · Repas CROUS 1€ depuis 2020 · 23kg gaspillés/an
Contenu détaillé à générer :
  • Guide pratique : liste de courses pour 30€/semaine (avec prix réels)
  • Les 5 aliments les moins chers et les plus nutritifs
  • Meal prep étudiant : 3 recettes rapides et économiques
  • Les épiceries solidaires à Toulouse : Liste Linkee, Banque alimentaire
  • Repas CROUS à 1€ : qui peut en bénéficier, restaurants universitaires Toulouse
  • Éviter les pièges (plats préparés, livraison, gaspillage)
Infographie interactive : roue des dépenses alimentaires type étudiant
Liens cliquables :
  → CROUS restaurants Toulouse : https://www.crous-toulouse.fr
  → Linkee épiceries solidaires : https://www.linkee.com
  → Banque alimentaire : https://www.banquealimentaire.org
  → Too Good To Go (anti-gaspi) : https://www.toogoodtogo.com

━━━ PAGE 5 : RÉUSSITE ━━━
Hero accroche : "Étudier, bosser, survivre. Comment on fait les 3 ?"
Stats : 45% des étudiants travaillent · 30% résultats impactés · ~15% abandon 1re année BUT
Contenu détaillé à générer :
  • Droits des étudiants salariés : aménagements examens, congés, contrats légaux
  • Temps de travail recommandé : au-delà de 16h/sem → risque sur les études
  • Techniques de révision efficaces : Pomodoro, spaced repetition, mind mapping
  • Gérer sa charge mentale : matrice d'Eisenhower, to-do list hebdo
  • Ressources IUT Paul Sabatier : tutorat, BU, salles de travail, aide aux devoirs
  • Comment parler à ses enseignants d'une situation difficile
  • Interview vidéo placeholder : "J'ai réussi mon BUT en travaillant 20h/semaine.
    Voici comment j'ai organisé mon temps." — Lucas, 23 ans, diplômé BUT Info
Liens cliquables :
  → APEC insertion BUT : https://www.apec.fr
  → Ministère ESRI résultats : https://www.enseignementsup-recherche.gouv.fr
  → IUT Paul Sabatier : https://www.iut.univ-tlse3.fr

━━━ PAGE 6 : AIDES FINANCIÈRES (page complète dédiée) ━━━
→ Voir section 6 ci-dessous pour le détail complet de cette page

════════════════════════════════════════════════════════
AIDES FINANCIÈRES — PAGE INTERACTIVE, GUIDES COMPLETS, LIENS
════════════════════════════════════════════════════════

PAGE AIDES FINANCIÈRES — Outil pratique 100% interactif
════════════════════════════════════════════════════════

Hero accroche : "L'argent qui t'attend. Vraiment."
Sous-titre : "Sans compte, sans inscription — filtre selon ta situation
et découvre les aides auxquelles tu as droit maintenant."

━━━ FILTRES INTERACTIFS (multi-select, aucun compte requis) ━━━
Pills : [Boursier CROUS] [Non boursier] [Alternant] [En difficulté] [Logement CROUS] [Logement privé]
Comportement :
  → Clic = cartes non concernées opacity 40% + scale 0.98 (300ms smooth)
  → Compteur dynamique : "X aides correspondent à ta situation"
  → Bouton reset "Tout afficher ×" à droite des filtres

━━━ STRUCTURE DE CHAQUE CARTE D'AIDE ━━━
┌───────────────────────────────────────────────┐
│ Icône + Nom de l'aide (bold 16px)              │
│ Montant estimé (teal 22px bold)                │
│ Badge profil ciblé (pill orange)               │
│ Description courte (2 lignes max)              │
│ [Accéder au site officiel ↗] — lien cliquable │
│ [▾ Guide complet — Comment en bénéficier ?]   │
└───────────────────────────────────────────────┘

Accordéon "Comment en bénéficier ?" (expand smooth 300ms, chevron rotate) :
  Étape 1 : Qui peut en bénéficier ? (critères précis)
  Étape 2 : Documents nécessaires (liste à puces)
  Étape 3 : Où et comment faire la demande (lien direct cliquable)
  Étape 4 : Délai de traitement estimé
  Étape 5 : Conseil pratique + date limite si applicable

━━━ 8 AIDES À INTÉGRER (toutes avec liens officiels) ━━━

1. BOURSE CROUS SUR CRITÈRES SOCIAUX
   Montant : 1 084€ à 6 335€/an selon échelon (0 à 7)
   Profil : tout étudiant sous conditions de ressources
   Lien : https://www.messervices.etudiant.gouv.fr
   Guide accordéon :
     • Critères : revenus du foyer fiscal, situation familiale, éloignement
     • Documents : DSE en ligne (jan–mai), avis fiscal parents, acte de naissance,
       bulletin de salaire si travail, justificatif scolarité
     • Demande : DSE sur messervices.etudiant.gouv.fr entre janvier et mai
     • Délai : résultat en juillet pour l'année académique suivante
     • Conseil : ne jamais rater la date limite de mai — recours possible en septembre

2. APL — AIDE PERSONNALISÉE AU LOGEMENT
   Montant : jusqu'à 400€/mois selon zone et revenus
   Profil : tout étudiant locataire (hors parents)
   Lien : https://www.caf.fr
   Guide accordéon :
     • Critères : être locataire ou en résidence CROUS, revenus < plafond
     • Documents : contrat de bail, RIB, justificatif scolarité, déclaration revenus
     • Demande : dossier CAF dans le mois suivant l'entrée dans le logement
     • Délai : 1 à 3 mois, versement rétroactif
     • Conseil : utiliser le simulateur CAF avant de signer un bail

3. AIDE D'URGENCE FSDIE
   Montant : 100€ à 2 000€ selon situation
   Profil : étudiant en difficulté financière soudaine
   Lien : https://trouver-un-service.etudiant.gouv.fr
   Guide accordéon :
     • Critères : difficulté financière imprévue, rupture familiale, accident
     • Documents : relevé bancaire 3 mois, justificatifs charges, lettre motivation
     • Demande : service social SSAS de l'université ou du CROUS
     • Délai : réponse sous 2 semaines, versement rapide
     • Conseil : ne pas attendre — plus tôt la demande, plus vite l'aide

4. AIDE À LA MOBILITÉ INTERNATIONALE
   Montant : 400€ à 1 600€ selon destination
   Profil : étudiant en stage ou échange à l'étranger
   Lien : https://www.campusfrance.org
   Lien Erasmus+ : https://www.service-public.fr/particuliers/vosdroits/F32840

5. REPAS À 1€ CROUS
   Qui : boursiers CROUS automatiquement, autres sur dossier SSAS
   Lien : https://www.crous-toulouse.fr
   Localisation : liste des restaurants universitaires à afficher

6. ÉPICERIES SOLIDAIRES
   Fonctionnement : gratuit ou prix symbolique avec justificatifs
   Lien Linkee : https://www.linkee.com
   Lien banque alimentaire : https://www.banquealimentaire.org
   Guide : inscription sur place, certificat scolarité + quotient familial

7. GARANTIE VISALE — CAUTION LOGEMENT
   Montant : équivalent 36 mois de loyer garantis
   Profil : étudiant sans garant physique
   Lien : https://www.visale.fr
   Guide : demande en ligne avant signature du bail, réponse 48h

8. AIDE AU MÉRITE
   Montant : +1 800€/an en complément de la bourse
   Critères : mention TB au bac OU excellents résultats universitaires
   Lien : https://www.etudiant.gouv.fr

━━━ SIMULATEUR DE BUDGET (widget interactif, sans compte) ━━━
Titre : "Calcule ce qu'il te reste ce mois-ci"
3 sliders :
  • Revenus mensuels (0 → 1 500€, step 50€)
  • Loyer charges comprises (0 → 800€, step 10€)
  • Budget courses hebdomadaire (0 → 100€, step 5€)
Résultat temps réel : "Il te reste [X]€ ce mois-ci"
Si solde < 0 : fond orange + message "Tu pourrais avoir droit à ces aides →"
  → affiche les 3 aides les plus pertinentes automatiquement
Aucune donnée sauvegardée, aucun compte requis

CTA final sous toutes les cartes :
"Tu ne sais pas par où commencer ? → Lance le simulateur (2 min, sans inscription)"

════════════════════════════════════════════════════════
NEWSLETTER — INSCRIPTION EMAIL LÉGÈRE, SANS COMPTE
════════════════════════════════════════════════════════

NEWSLETTER — Inscription légère, sans mot de passe, sans compte
════════════════════════════════════════════════════════

SECTION DÉDIÉE (entre la section Aides et le Footer)
Fond légèrement différent : #111827 pour la distinguer du reste

Titre (40px bold) : "Reste informé·e des aides qui te concernent."
Sous-titre (18px, blanc 70%) :
"Rappels de bourses, nouvelles aides, actus étudiantes —
dans ta boîte mail. Sans spam. Sans compte requis. Désabonnement en 1 clic."

Ce que l'inscription apporte (liste avec icônes teal) :
  ✉  Rappel dépôt DSE chaque année (janvier–mai)
  🔔 Alerte nouvelles aides disponibles
  📚 Actus vie étudiante sélectionnées et vérifiées
  🎓 Calendrier examens et inscriptions importantes
  💡 Conseils pratiques budget, logement, santé

FORMULAIRE (2 champs maximum) :
Champ email : type="email", placeholder "ton.prenom@univ-tlse3.fr"
Champ select : "Je suis..." → Boursier / Non boursier / Alternant / Autre
Bouton : "Je m'inscris gratuitement →" (teal, pleine largeur mobile, 48px height)

Confirmation inline après soumission :
  → Animation confetti légère (canvas, 15 particules teal+orange, 2s)
  → Message : "✓ Parfait ! Tu recevras les prochaines actus sur [email]."
  → Lien visible : "Modifier ou se désinscrire à tout moment ↗"

Mention RGPD (12px, #8b949e) :
"Tes données sont utilisées uniquement pour l'envoi de la newsletter.
Aucune revente. Aucun partenaire commercial. Conforme RGPD."

FOOTER MIS À JOUR :
Colonnes :
  À propos | Thématiques | Aides financières | Sources | Newsletter
Phrase bas de page :
"Ce webdocumentaire a été créé par des étudiants, pour des étudiants.
Pas de pub. Pas de compte. Tout est gratuit et accessible à tous."
Liens footer : Crédits · Sources · Mentions légales · IUT Paul Sabatier
Copyright : "© 2025 Vie Étudiante — IUT Paul Sabatier · Module R2.13"

════════════════════════════════════════════════════════
PAGE SOURCES — VALIDATION, CRÉDIBILITÉ, CRITÈRE R2.13
════════════════════════════════════════════════════════

PAGE SOURCES — Validation des informations
════════════════════════════════════════════════════════

CRÉER UNE PAGE "SOURCES" accessible depuis la navbar et le footer.

Titre : "Nos sources — des informations vérifiées et fiables"
Sous-titre : "Conformément aux critères de validation des sources
de l'Université Paul Sabatier, chaque information de ce site
est issue d'une source identifiée, datée et vérifiable."

ENCART CRITÈRES DE VALIDATION (6 points, accordéon ou liste) :
→ Expertise et notoriété de l'auteur ou de l'organisation
→ Institution clairement nommée avec coordonnées précisées
→ Date de publication et de dernière mise à jour
→ Objectif informatif (non commercial, non militant)
→ Qualité rédactionnelle (syntaxe et orthographe correctes)
→ Sources croisées (recoupement sur plusieurs sites indépendants)
Source de ce cadre : ABCdoc — Université Paul Sabatier Toulouse III

SOURCES PAR THÉMATIQUE (accordéons par section) :

BUDGET :
→ OVE — Enquête nationale conditions de vie 2021
   https://www.ove-national.education.fr
→ LMDE — Baromètre santé étudiante 2023
   https://www.lmde.fr
→ INSEE — Niveau de vie étudiants France 2022
   https://www.insee.fr

LOGEMENT :
→ CROUS Toulouse — Chiffres clés résidences 2023
   https://www.crous-toulouse.fr
→ Action Logement — Rapport annuel Visale 2023
   https://www.visale.fr
→ OVE — Conditions de logement étudiants 2022

SANTÉ MENTALE :
→ LMDE — Baromètre santé mentale 2023 : https://www.lmde.fr
→ INSERM — Santé mentale jeunes adultes 2022 : https://www.inserm.fr
→ OMS / WHO Mental Health Atlas 2022 : https://www.who.int
→ PSY-Étudiant (Ministère ESRI) : https://santepsy.etudiant.gouv.fr

ALIMENTATION :
→ IFOP — Précarité alimentaire étudiante 2022
→ Rapport Linkee 2023 : https://www.linkee.com
→ Fédération des banques alimentaires : https://www.banquealimentaire.org

RÉUSSITE :
→ APEC — Insertion BUT Informatique 2023 : https://www.apec.fr
→ Ministère ESRI — Résultats BUT 2022
   https://www.enseignementsup-recherche.gouv.fr
→ OVE — Travail salarié et études 2021

AIDES FINANCIÈRES :
→ Service étudiant.gouv : https://www.etudiant.gouv.fr
→ MesServices.etudiant : https://www.messervices.etudiant.gouv.fr
→ CAF simulateur APL : https://www.caf.fr
→ Visale garantie : https://www.visale.fr

Design de la page :
→ Table des matières cliquable en haut (ancres par thématique)
→ Chaque source = ligne avec : auteur, titre, date, lien ↗ (nouvel onglet)
→ Bandeau disclaimer en bas :
  "Ce site est un projet académique étudiant (R2.13, IUT Paul Sabatier).
  En cas de doute, consultez les sites officiels référencés."

════════════════════════════════════════════════════════
ANIMATIONS & MICRO-INTERACTIONS — UI/UX PREMIUM
════════════════════════════════════════════════════════

ANIMATIONS & MICRO-INTERACTIONS — UI/UX de référence
════════════════════════════════════════════════════════

PHILOSOPHIE : chaque animation a un sens narratif. Jamais gratuit.
Durées : micro 150ms / standard 250ms / narratif 400ms / page 600ms
OBLIGATOIRE : respecter prefers-reduced-motion (désactiver si OS le demande)

━━━ HERO ━━━
→ H1 : fade-in + translateY(40px→0) (600ms ease-out, délai 200ms)
→ Badge orange : scale(0→1) + bounce (500ms, délai 800ms)
→ CTA bouton : pulse glow teal toutes les 3s (attention passive)
→ Compteurs 6/12/2000 : count-up animé en 1.5s ease-out au chargement
→ Phrases rotation : crossfade opacity 0→1 toutes les 3s
→ Photo fond hero : parallaxe légère au scroll (translateY 0.3×)

━━━ SCROLL STORYTELLING ━━━
→ Chaque section : IntersectionObserver → fade + translateY(-30px→0)
→ Stats/chiffres : count-up déclenché uniquement à l'entrée viewport
→ Barre progression : calcul en temps réel scrollY / docHeight × 100

━━━ CARTES THÉMATIQUES ━━━
→ Hover : scale(1.02) + overlay teal 15% + sous-titre slide-up (250ms)
→ Click : ripple effect depuis le point de clic (cercle teal, fade out)
→ Chargement initial : stagger 80ms entre chaque carte (1→2→3→4→5→6)

━━━ FILTRES AIDES FINANCIÈRES ━━━
→ Pill select : background fill clip-path circle expand depuis le centre
→ Cartes filtrées : opacity(0.4) + scale(0.98) smooth 300ms
→ Compteur "X aides" : count-up animé à chaque changement de filtre

━━━ ACCORDÉONS (aides + sources) ━━━
→ Chevron : rotate(0→180°) smooth 200ms
→ Corps : max-height 0→auto, cubic-bezier(0.4,0,0.2,1)
→ En-tête ouvert : fond teal/10% léger

━━━ SIMULATEUR BUDGET ━━━
→ Slider thumb : teal, track remplie teal
→ Résultat : count-up à chaque drag (Math.round pour éviter les décimales)
→ Si solde négatif : shake horizontal léger + fond orange + message aide

━━━ LECTEURS VIDÉO ━━━
→ Poster image sur chaque vidéo avec bouton play centré (scale hover 1.05)
→ Sur lecture : overlay disparaît fade 300ms
→ Contrôles HTML5 natifs ou interface custom dark cohérente

━━━ NEWSLETTER ━━━
→ Soumission bouton : loading spinner teal 1s → confetti canvas 2s → succès
→ Confetti : 15 particules couleurs teal + orange, physics légère

━━━ TRANSITIONS DE PAGES ━━━
→ Entrée page thématique : fade + slideUp 400ms
→ Retour accueil : slide-down 300ms
→ Breadcrumb : fade-in 200ms au changement de page

━━━ FEEDBACK GÉNÉRAL ━━━
→ Toast bas-droit : slide-in 300ms, auto-disparaît 3s
   Exemples : "✓ Lien copié !" / "✓ Newsletter confirmée !"
→ Lien externe : icône ↗ visible au hover, target="_blank" rel="noopener"
→ Tous les boutons : active scale(0.97) + transition 100ms

════════════════════════════════════════════════════════
CRITÈRES R2.13 — 20 POINTS INTÉGRÉS AU DESIGN
════════════════════════════════════════════════════════

CRITÈRES D'ÉVALUATION R2.13 — 20 POINTS INTÉGRÉS
════════════════════════════════════════════════════════

Ce site répond aux 4 critères officiels du module R2.13,
BUT Informatique 1re année, IUT Paul Sabatier.

━━━ 1. TRAITEMENT DU SUJET (8 points) ━━━

Problématique affichée dès la page d'accueil (bandeau ou intro) :
"Les étudiants peuvent-ils financer leurs études sans sacrifier
leur réussite et leur équilibre personnel ?"

→ Les 6 thématiques = 6 réponses partielles à cette problématique
→ Sources fiables et datées sur chaque page (critère fiabilité)
→ Diversité des formats : texte + vidéo + infographie + témoignage
→ 2 à 3 interviews vidéo (reportage terrain) intégrées sur le site
→ Voix off ou sous-titres sur les vidéos (accessibilité)
→ Originalité du traitement : angle personnel, stats marquantes,
  témoignages réels, pas un simple guide administratif

━━━ 2. ASPECTS TECHNIQUES — Images, son, montage (3 points) ━━━

→ 2 à 3 vidéos intégrées : lecteur HTML5 natif ou iframe YouTube/Vimeo
→ Images HD minimum 1200px, lazy loading, format WebP recommandé
→ Qualité son vidéo : normalisée, audible sans casque
→ Alt-text sur toutes les images (accessibilité WCAG AA)
→ Orthographe et syntaxe irréprochables sur l'ensemble du site
→ Hiérarchie typographique cohérente H1/H2/H3/body sur toutes les pages

━━━ 3. QUALITÉ ARTISTIQUE — Graphisme, créativité (3 points) ━━━

→ Charte graphique stricte et originale :
  teal #008080 / orange #E8731A / dark #0d1117 / blanc #ffffff
→ Originalité : inspiré de Do Not Track mais avec identité propre —
  pas un template Figma générique, pas une copie d'un site existant
→ Hero plein écran immersif avec animation storytelling
→ Barre de progression élégante, cartes avec profondeur, micro-animations
→ Navbar backdrop blur, menu mobile drawer, breadcrumb contextuel
→ Design system cohérent et homogène sur toutes les pages

━━━ 4. DÉCLINAISON INTERACTIVE (6 points) ━━━

Arborescence du site :
Accueil (hub central)
├── Thématique 1 : Budget
├── Thématique 2 : Logement
├── Thématique 3 : Santé mentale
├── Thématique 4 : Alimentation
├── Thématique 5 : Réussite
├── Thématique 6 : Aides financières (page dédiée)
├── Sources
└── Newsletter (section page d'accueil)

Éléments interactifs à implémenter (tous sans compte requis) :
→ Filtres aides financières (pills multi-select, résultat dynamique)
→ Simulateur de budget (3 sliders, résultat temps réel)
→ Quiz santé mentale (5 questions, résultat avec ressources adaptées)
→ Accordéons guides d'aides (8 aides avec guides complets)
→ Formulaire newsletter (email + statut, confirmation animée)
→ Scroll storytelling (barre progression + transitions sections)
→ Lecteurs vidéo HTML5 (2-3 interviews intégrées)
→ Phrases hero en rotation automatique

Logique de navigation (tous les liens fonctionnels) :
→ Navbar : tous les liens mènent aux bonnes pages
→ Cartes thématiques : clic → page dédiée correspondante
→ Flèches prev/next entre thématiques
→ Breadcrumb cliquable sur toutes les pages internes
→ Footer : tous les liens fonctionnels (internes + externes)
→ ZÉRO lien mort sur l'ensemble du site

LISTE COMPLÈTE DES LIENS EXTERNES À VÉRIFIER :
https://www.etudiant.gouv.fr/fr/aides-et-bourses
https://www.messervices.etudiant.gouv.fr
https://www.caf.fr
https://www.visale.fr
https://trouver-un-service.etudiant.gouv.fr
https://www.campusfrance.org
https://www.crous-toulouse.fr
https://www.linkee.com
https://www.nightline.fr
https://www.filsantejeunes.com
https://santepsy.etudiant.gouv.fr
https://www.ove-national.education.fr
https://www.lmde.fr
https://www.insee.fr
https://www.inserm.fr
https://www.apec.fr
https://www.lacartedescolocs.fr
https://www.banquealimentaire.org