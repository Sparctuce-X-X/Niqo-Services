# Niqo Services — guide de collaboration

Ce fichier cadre la collaboration avec l'assistant IA sur le projet **Niqo Services**.
Il est chargé automatiquement à chaque session. Garder court et à jour.

## Langue

**Toutes les réponses, livrables et documents en français.**

## Qui

Structure de services numériques haut de gamme au **Congo Brazzaville**.

- **Dominique Huang** (Paris) — tech / IA / produit
- **Alain Steven Makosso-Della** (Brazzaville) — business / ops / terrain

Structure juridique **déjà constituée** — ne pas re-aborder ce sujet sauf demande explicite.

## Positionnement

**"Cabinet Premium"** — référence McKinsey / Lazard adaptée au marché africain francophone.
Pas tech startup, pas maison de luxe africaine. Autorité, sérieux, durabilité.

**Repositionnement panafricain (acté le 2026-05-30).** Niqo Services se vend désormais
comme cabinet de services numériques pour l'**Afrique francophone**, avec un ancrage fort
en **République du Congo** (siège, Brazzaville · Pointe-Noire) et une couverture export sur
l'Afrique centrale et de l'Ouest (Côte d'Ivoire, Sénégal, Cameroun, Gabon, RDC, Bénin…).
Le Congo reste la base et la preuve de présence terrain — il n'est plus la limite
commerciale.

**Ne jamais mentionner Paris** dans les supports clients (landing, OG, deck, plaquette,
signature email). Le fait que Dominique soit basé à Paris est un contexte interne — il ne
fait pas partie du positionnement commercial. L'ancrage affiché est l'Afrique francophone,
siège Congo.

## Catalogue (3 services phares)

1. **Web + Mobile sur-mesure**
2. **Solutions IA appliquées**
3. **Conseil + Cloud + Formation**

Les SaaS verticaux (Niqo Education, Niqo Marketplace, CloudCostPilot) sont des
**produits-vitrines** servant à vendre le sur-mesure — ils ne sont **pas** au catalogue
public.

## Cibles (par priorité)

1. **Écoles privées premium** — cible #1. Congo (Brazzaville + Pointe-Noire) en terrain
   chaud via Alain, puis export Afrique francophone (Abidjan, Dakar, Douala, Libreville…)
2. PME premium / cabinets
3. ONG / bailleurs (AFD, UE, Banque Mondiale)
4. Banques / filiales locales
5. Administrations / ministères

**Priorité géographique export** : Côte d'Ivoire > Sénégal > Cameroun > Gabon > RDC >
Bénin/Togo. Le Congo reste le marché socle (relation physique Alain).
Voir `docs/prospection/` pour la ligne directive de prospection (index dans `README.md`).

## Tarification

Voir `docs/pricing/` (index dans `README.md`). Devis en **FCFA** par défaut, EUR pour
bailleurs internationaux. Affichage des prix en « à partir de ».
Acompte 40/30/30 (abaissé à 30/40/30 pour écoles).
Paiement Mobile Money MTN/Airtel, virement OHADA, virement EUR.
Forfaits : Présence Premium (dès 900 k FCFA) · Inscriptions Rentrée (dès 1,5 M FCFA) ·
Abonnement récurrent 25 k / 50 k FCFA/mois.

## Coordonnées officielles

- **Domaine** : `niqo-services.com` (avec tiret)
- **Email pro** : `contact@niqo-services.com`
- **WhatsApp / téléphone** : `+242 06 875 53 53` (Alain, Brazzaville)

## Identité visuelle

Direction **"Cabinet Premium"** retenue le 2026-05-29.

- Palette : Navy `#0F172A` · Or `#A16207` · Ivoire `#F8FAFC` · Ardoise `#64748B`
- Typographie : **Manrope** (titres) · **Inter** (caps trackées) · **Source Sans 3** (corps)
- Logo : sceau okapi (en cours de production externe via Claude Design)

Les fichiers de marque vivent sous `brand/` (brand kit v1 livré, v2 en attente avec emblème vectorisé).

## Stack technique

- **Site vitrine Niqo Services** : Next.js 15 App Router + Tailwind + Vercel
- **Backend projets clients** : Spring Boot (Java 17+) ou Node.js selon contexte
- **Mobile** : React Native + Expo
- **IA** : OpenAI, Anthropic, RAG, agents
- **Cloud** : AWS prioritaire (Solutions Architect Associate), GCP en alternative
- **Data** : PostgreSQL + Prisma, Supabase pour les MVP

## Contexte marché Congo Brazza

À intégrer dans toute recommandation :

- Paiements **lents** dans le secteur public (90-180 jours) — provisionner trésorerie
- **Mobile Money MTN/Airtel** dominant pour les flux < 5 M FCFA
- Cadre juridique **OHADA**
- **Forums Osiane / Mosala** = canaux de visibilité institutionnels
- L'importance des **relations physiques** (Alain sur le terrain) ne se délègue pas

## Conventions de travail

- Réponses concises, niveau senior junior assumé (pas besoin de vulgariser CI/CD, RAG, RLS, IaC…)
- Pour les livrables clients : ton sobre, registre cabinet — pas de superlatifs ni d'emojis
- Avant tout devis ou maquette : valider la cible exacte (école X taille Y budget Z) plutôt que générique
- Toutes les dates relatives ("jeudi", "le mois prochain") sont converties en dates absolues dans les livrables

## Ne pas faire

- Ne pas re-discuter la structure juridique
- Ne pas proposer un SaaS vertical comme offre principale
- Ne pas mentionner Paris dans les supports clients — l'ancrage commercial affiché est l'Afrique francophone (siège Congo), jamais Paris
- Ne pas tomber dans les clichés locaux (lion frontal, motifs wax, etc.) sur les supports de marque
- Ne pas utiliser de typo "chaleureuse" type Lexend / Poppins / Quicksand — registre cabinet uniquement
