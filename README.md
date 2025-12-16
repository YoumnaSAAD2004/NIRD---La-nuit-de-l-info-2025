# Nuit de l’Info 2025 – Le Village Numérique Résistant  
## Escape game interactif de sensibilisation au numérique libre (NIRD)

---

## Présentation du projet

Ce projet a été réalisé dans le cadre de la **Nuit de l’Info 2025**, un hackathon national réunissant étudiants et professionnels autour de défis numériques à fort impact sociétal.

Notre équipe a conçu un **site web interactif sous forme d’escape game**, intitulé **Le Village Numérique Résistant**, dont l’objectif est de **sensibiliser aux enjeux des NIRD (Numérique, Informatique, Réseaux, Données)** et de promouvoir l’usage de **Linux et des logiciels libres** dans le milieu éducatif.

À travers une approche ludique et immersive, le projet met en scène une progression par énigmes permettant d’aborder :
- la dépendance aux grandes plateformes technologiques,
- la souveraineté et la protection des données,
- l’impact écologique du numérique,
- l’autonomie technologique des établissements scolaires.

L’expérience vise à rendre ces problématiques accessibles, concrètes et engageantes, tout en encourageant une réflexion critique sur les choix technologiques actuels.

---

## Contexte et équipe

- Événement : **Nuit de l’Info 2025**
- Projet réalisé en **équipe de 4 personnes**
- Leader d’équipe : **SAAD Youmna**

### Membres de l’équipe
- SAAD Youmna (Leader)
- Dehichi Mouad
- Bouhrich Manel
- Zidelmal Tassadit

---

## Concept et fonctionnement général

L’utilisateur est plongé dans un **parcours interactif de type escape game**, structuré en plusieurs salles virtuelles.

Chaque salle correspond à une **énigme thématique** liée aux enjeux du numérique :
- Big Data et exploitation des données,
- Hébergement des données et respect du RGPD,
- Réemploi du matériel informatique,
- Logiciels libres et indépendance technologique.

Pour progresser, l’utilisateur doit répondre correctement aux questions proposées.  
Chaque bonne réponse déclenche :
- une validation visuelle,
- un **effet sonore de réussite**,
- et l’affichage d’une **explication pédagogique** avant de passer à la salle suivante.

---

## Page d’accueil et immersion

La page d’accueil introduit le concept à travers :
- une **carte interactive du village** servant de point d’entrée au parcours,
- une ambiance graphique immersive,
- des animations visuelles de fond,
- une mise en contexte claire de la mission à accomplir.

L’objectif est d’installer immédiatement une **dimension narrative** et un sentiment de progression.

---

## Système d’énigmes

Le jeu est structuré autour de **plusieurs salles** :

- **Salle 1** : Compréhension du Big Data et de ses usages  
- **Salle 2** : Hébergement des données et souveraineté numérique  
- **Salle 3** : Impact écologique du réemploi et de Linux  
- **Salle 4** : Logiciels libres et autonomie technologique  

Chaque salle est implémentée sous forme de **composant React indépendant**, intégrant :
- la gestion de la réussite ou de l’échec,
- le déclenchement d’un son de validation (`clap.mp3`),
- l’affichage d’un popup explicatif,
- la navigation contrôlée vers la salle suivante.

---

## Effets sonores et feedback utilisateur

Le projet intègre des **effets sonores contextuels** afin de renforcer l’expérience utilisateur :
- son de validation lors d’une bonne réponse,
- son d’indice lors de certaines interactions.

Ces retours audio permettent d’améliorer la compréhension des actions de l’utilisateur et de rendre l’expérience plus engageante.

---

## Page finale et message pédagogique

À l’issue du parcours, l’utilisateur accède à un écran de conclusion mettant en avant :
- les limites des modèles propriétaires dominants,
- les bénéfices du numérique libre,
- l’intérêt de Linux et des logiciels open source dans l’éducation.

Ce message vise à encourager une réflexion critique sur les choix technologiques actuels.

---

## Mentions légales

Une page **Mentions légales** est intégrée et accessible depuis le footer du site.  
Elle présente :
- les informations relatives à l’édition du site,
- l’hébergement,
- la propriété intellectuelle,
- la gestion des données personnelles.

---

## Technologies utilisées

### Frontend
- React
- Vite
- JavaScript (JSX)
- HTML / CSS
- Animations CSS
- Gestion d’état avec `useState`

### Assets
- Images (JPEG, GIF, SVG)
- Sons (MP3)

### Architecture
- Application **100 % frontend**
- Navigation interne contrôlée par l’état React
- Build de production généré via Vite (`dist/`)

---

## Lien :
https://the-night-shift.alwaysdata.net/