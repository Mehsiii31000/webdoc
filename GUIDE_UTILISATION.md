# Guide d'utilisation - Vie Étudiante Premium

## 🎯 Comment tester l'application

### Navigation principale

L'application dispose de 4 pages principales accessibles via la navigation :

1. **Page d'accueil** (HomePage)
   - Point d'entrée principal
   - Présentation des 6 thématiques
   - Section aides financières
   - Simulateur de budget
   - Témoignages étudiants

2. **Page de connexion** (LoginPage)
   - Accessible via bouton "CONNEXION" dans la navbar
   - Email : `prenom.nom@univ-tlse3.fr` (n'importe quel email valide)
   - Mot de passe : n'importe quel mot de passe (6+ caractères)
   - Option "Continuer sans compte" pour revenir à l'accueil

3. **Page d'inscription** (SignupPage)
   - Accessible via bouton "CRÉER UN COMPTE" dans la navbar
   - **Étape 1/2** : Informations personnelles
     - Prénom et nom
     - Email (format validé en temps réel)
     - Téléphone
     - Mot de passe (indicateur de force)
     - Confirmation mot de passe
   - **Étape 2/2** : Profil étudiant
     - Année d'études
     - Établissement
     - Statut : Boursier / Non boursier / Alternant / En difficulté
     - Logement : CROUS / Privé / Parents / Autre
     - Acceptation CGU (obligatoire)
     - Notifications (optionnel)
   - Animation confetti 🎉 à la création du compte

4. **Tableau de bord** (Dashboard)
   - Accessible uniquement si connecté
   - Via menu utilisateur > "Mon espace"
   - Widgets personnalisés :
     - Résumé du profil
     - Progression dans les thématiques
     - Simulateur de budget sauvegardé
     - Aides recommandées selon le profil

---

## 🔐 Tester l'authentification

### Scénario 1 : Création de compte complet

1. Cliquer sur **"CRÉER UN COMPTE"** dans la navbar
2. Remplir l'étape 1 :
   - Prénom : Sarah
   - Nom : Martin
   - Email : sarah.martin@univ-tlse3.fr
   - Téléphone : +33612345678
   - Mot de passe : Test1234! (observer l'indicateur de force)
   - Confirmation : Test1234!
3. Cliquer sur **"Continuer →"**
4. Remplir l'étape 2 :
   - Année : 1re année BUT
   - Établissement : IUT Paul Sabatier, Toulouse
   - Statut : Cliquer sur la carte **"Boursier CROUS"**
   - Logement : Cliquer sur la carte **"Logement privé"**
   - Cocher **"J'accepte les CGU"**
   - Cocher **"Recevoir des alertes"** (optionnel)
5. Cliquer sur **"Créer mon compte ✓"**
6. Observer :
   - Animation confetti 🎉
   - Toast de succès vert
   - Redirection automatique vers l'accueil
   - Navbar mise à jour avec avatar "SM" et "Bonjour, Sarah"

### Scénario 2 : Connexion rapide

1. Cliquer sur **"CONNEXION"** dans la navbar
2. Saisir un email : `test@univ-tlse3.fr`
3. Saisir un mot de passe : `password123`
4. Cliquer sur **"Se connecter"**
5. Observer :
   - Spinner de chargement pendant 1,5s
   - Toast de succès
   - Redirection vers l'accueil avec état connecté

### Scénario 3 : Navigation utilisateur connecté

1. Une fois connecté, cliquer sur l'avatar "SM" en haut à droite
2. Menu déroulant s'affiche :
   - **Mon espace** : accède au tableau de bord
   - **Modifier mon profil** : accède au tableau de bord
   - **Déconnexion** : déconnecte et revient à l'accueil
3. Cliquer sur **"Mon espace"**
4. Observer le tableau de bord personnalisé

---

## 🎨 Différences selon l'état de connexion

### Page d'accueil — Non connecté

- Hero : Incitation à créer un compte
- Thématiques : 2 cartes avec badge **"🔒 Premium"** (verrouillées)
- Aides financières : 
  - Message "🎯 Connecte-toi pour voir les aides adaptées à ton profil"
  - Filtres manuels (Boursier, Non-boursier, etc.)
  - Cartes non floutées (toutes visibles)
- Footer CTA : **"Créer mon espace"** + **"Se connecter"**

### Page d'accueil — Connecté

- Hero : Lien "Accède à tes aides personnalisées →"
- Navbar : Avatar utilisateur avec menu
- Thématiques : Toutes les cartes accessibles (pas de verrouillage)
- Aides financières :
  - Message "✓ Aides filtrées selon ton profil : Boursier CROUS"
  - **Filtrage automatique** selon le statut utilisateur (pas de filtres manuels)
  - Seules les aides correspondant au profil sont affichées
- Footer CTA : **"Accéder à mon espace"**

---

## 🧪 Profils de test et aides affichées

### Profil : Boursier CROUS

**Aides affichées** :
- ✅ Bourse CROUS (6 335€/an)
- ✅ Aide à la mobilité internationale (1 000€)
- ✅ APL / Aide au logement (300€/mois)
- ✅ Épiceries solidaires (gratuit)
- ✅ Repas à 1€

**Aides masquées** :
- ❌ Aide d'urgence FSDIE (réservée "En difficulté")

### Profil : Non boursier

**Aides affichées** :
- ✅ APL / Aide au logement (300€/mois)

**Aides masquées** :
- ❌ Toutes les autres (réservées Boursier ou En difficulté)

### Profil : Alternant

**Aides affichées** :
- ✅ Aide à la mobilité internationale (1 000€)
- ✅ APL / Aide au logement (300€/mois)

### Profil : En difficulté financière

**Aides affichées** :
- ✅ Aide d'urgence FSDIE (variable)
- ✅ Épiceries solidaires (gratuit)
- ✅ Repas à 1€

---

## 💡 Fonctionnalités interactives à tester

### 1. Indicateur de force du mot de passe

- Page : Inscription > Étape 1
- Taper progressivement : `abc` → Faible (rouge)
- Taper : `Abc123` → Moyen (orange)
- Taper : `Abc123!@#` → Fort (vert)
- Observer la barre qui se remplit avec les couleurs

### 2. Validation email en temps réel

- Page : Inscription > Étape 1
- Taper un email invalide : `test` → Pas de checkmark
- Taper un email valide : `test@univ-tlse3.fr` → Checkmark vert ✓

### 3. Stepper d'inscription

- Page : Inscription
- Observer la progression visuelle :
  - Étape 1 active : pastille "1" en teal
  - Après validation : pastille "✓" verte + ligne teal + pastille "2" active

### 4. Cartes de sélection (statut/logement)

- Page : Inscription > Étape 2
- Cliquer sur une carte → Border teal + fond teal/10%
- Cliquer sur une autre → La précédente se désélectionne

### 5. Accordion "Comment en bénéficier ?"

- Page : Accueil > Section Aides financières
- Cliquer sur **"▾ Comment en bénéficier ?"** sur une carte
- Observer l'expansion smooth avec les étapes numérotées

### 6. Simulateur de budget

- Page : Accueil > Section Simulateur
- Ajuster les sliders (loyer, courses, transports)
- Observer le calcul en temps réel du total et des aides suggérées

### 7. Menu utilisateur

- Une fois connecté, cliquer sur l'avatar
- Hover sur les options → Changement de couleur
- Cliquer en dehors du menu → Fermeture automatique

---

## 🎯 Checklist de test complète

### ✅ Authentification
- [ ] Créer un compte avec profil Boursier
- [ ] Voir l'animation confetti
- [ ] Observer le toast de succès
- [ ] Vérifier que la navbar affiche l'avatar
- [ ] Se déconnecter
- [ ] Se reconnecter avec les mêmes identifiants (simulé)
- [ ] Tester "Continuer sans compte"

### ✅ Navigation
- [ ] Accueil → Connexion
- [ ] Accueil → Inscription
- [ ] Connexion → Inscription (lien bas de page)
- [ ] Inscription → Connexion (lien bas de page)
- [ ] Menu utilisateur → Tableau de bord
- [ ] Tableau de bord → Accueil (logo navbar)

### ✅ Affichage conditionnel
- [ ] Thématiques verrouillées en mode non-connecté
- [ ] Thématiques déverrouillées en mode connecté
- [ ] Filtrage manuel des aides (non-connecté)
- [ ] Filtrage automatique des aides (connecté)
- [ ] Message personnalisé selon le profil

### ✅ Responsiveness
- [ ] Tester sur écran desktop (1440px)
- [ ] Tester sur tablette (768px)
- [ ] Tester sur mobile (375px)
- [ ] Vérifier le split-screen login/signup sur desktop
- [ ] Vérifier le formulaire seul sur mobile

### ✅ Interactions
- [ ] Hover sur cartes thématiques
- [ ] Hover sur boutons CTA
- [ ] Indicateur de force mot de passe
- [ ] Validation email temps réel
- [ ] Stepper inscription animé
- [ ] Accordion aides financières
- [ ] Simulateur de budget
- [ ] Menu utilisateur dropdown

---

## 🐛 Comportements attendus

### Mot de passe oublié
- **Comportement actuel** : Lien affiché mais pas fonctionnel (# anchor)
- **État** : Placeholder pour future implémentation

### Persistance de session
- **Comportement actuel** : Session perdue au rafraîchissement de page
- **État** : Authentification mock en mémoire (pas de localStorage)
- **Future** : Intégrer localStorage ou backend API

### Données utilisateur
- **Comportement actuel** : Profil mock créé automatiquement à la connexion
- **État** : Données simulées (pas de backend)
- **Future** : Intégrer API REST ou GraphQL

---

## 📱 Support navigateurs

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🎨 Palette de couleurs de référence

```
Teal primaire   : #008080
Teal hover      : #006666
Teal clair      : #3ECFCF
Orange accent   : #E8731A
Orange hover    : #CC5F10
Fond sombre     : #0d1117
Carte sombre    : #161b22
Bordure         : #30363d
Texte blanc     : #ffffff
Texte gris      : #8b949e
Succès          : #3fb950
Erreur          : #f85149
Warning         : #d29922
```

---

**Bonne exploration ! 🚀**
