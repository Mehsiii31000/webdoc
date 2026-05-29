# COMMENT ME RENVOYER LES DONNÉES VÉRIFIÉES

## Étape 1 : Copie le prompt

Ouvre le fichier `PROMPT_CHATGPT_VERIFICATION.md` et copie TOUT le contenu.

## Étape 2 : Donne-le à ChatGPT (ou Claude avec accès web)

Colle le prompt dans ChatGPT. Il va chercher toutes les données sur les sites officiels.

## Étape 3 : Récupère la réponse

ChatGPT va te donner une réponse structurée avec toutes les données vérifiées.

## Étape 4 : Renvoie-moi la réponse

**Option A - Simple (copie-colle brut)**

Dis-moi juste : 

```
Voici les données vérifiées par ChatGPT :

[COLLE ICI TOUTE LA RÉPONSE DE CHATGPT]
```

Je vais lire la réponse et mettre à jour tous les fichiers automatiquement.

---

**Option B - Format structuré (si tu veux être précis)**

Renvoie-moi les données dans ce format :

```
DONNÉES VÉRIFIÉES :

=== BUDGET ===
Budget mensuel moyen : 867€ (source: OVE 2023, page 47)
Part logement : 52% (source: OVE 2023)
Aide famille : 73% des étudiants, 420€/mois (source: OVE 2023)
Job étudiant : 46% des étudiants, 390€/mois (source: OVE 2023)
Boursiers : 38% (source: CROUS 2024)
Précarité : 35% (source: OVE 2023)

=== LOGEMENT ===
Logements CROUS France : 177 000 (source: CNOUS 2024)
Étudiants France : 2,95M (source: MESR 2024)
Ratio : 1/17

Loyers moyens 2024 :
- Paris : 920€
- Lyon : 595€
- Toulouse : 510€
- Bordeaux : 545€

CROUS Toulouse :
- Étudiants : 135 000
- Places : 8 500
- Prix chambre : 250-350€
- Prix studio : 400-500€

=== SANTÉ MENTALE ===
Anxiété : 34% (source: LMDE 2024)
Stress régulier : 68% (source: LMDE 2024)
Bien-être global : 28% (source: LMDE 2024)
Suivi psy : 6% (source: LMDE 2024)

=== ALIMENTATION ===
Précarité alimentaire : 18% (source: IFOP/Linkee 2023)
Sautent repas : 21% (source: LMDE 2024)
Prix repas CROUS boursiers : 1€
Prix repas CROUS non-boursiers : 3,30€

=== BOURSES CROUS 2024-2025 ===
Échelon 0bis : 1 094€/an
Échelon 1 : 1 865€/an
Échelon 2 : 2 505€/an
Échelon 3 : 3 145€/an
Échelon 4 : 3 786€/an
Échelon 5 : 4 426€/an
Échelon 6 : 5 066€/an
Échelon 7 : 6 408€/an

Taux boursiers : 37,5%

=== APL ===
APL max zone tendue : 295€/mois

=== DONNÉES MANQUANTES ===
[Liste ici les données que ChatGPT n'a pas pu trouver]
```

---

## Étape 5 : Je mets à jour le code

Une fois que tu m'as envoyé les données, je vais :

1. ✅ Mettre à jour **HomePage.tsx** (stats d'accueil)
2. ✅ Mettre à jour **BudgetPage.tsx** (budget, tableaux)
3. ✅ Mettre à jour **LogementPage.tsx** (CROUS, loyers)
4. ✅ Mettre à jour **SanteMentalePage.tsx** (stress, anxiété)
5. ✅ Mettre à jour **AlimentationPage.tsx** (précarité, prix)
6. ✅ Mettre à jour **AidesPage.tsx** (bourses, APL)
7. ✅ Ajouter les sources exactes dans les composants

---

## Important

- Si ChatGPT ne trouve pas une donnée, dis-le moi, je la supprimerai du site
- Si une donnée a plusieurs sources contradictoires, donne-moi les différentes valeurs
- Note bien les dates : 2023 vs 2024 c'est important

---

## Exemple de message à m'envoyer

```
Voici ce que ChatGPT a trouvé :

Budget mensuel moyen : 867€ selon OVE 2023
Boursiers CROUS : 38% selon CROUS 2024
Stress régulier : 68% selon LMDE 2024 (PAS 73% comme actuellement !)

Prix repas CROUS 2024 :
- 1€ pour boursiers ✓
- 3,30€ pour non-boursiers ✓

Bourses échelon 7 : 6 408€/an (pas 6 335€)

Etc...
```

Je vais tout mettre à jour automatiquement ! 🚀
