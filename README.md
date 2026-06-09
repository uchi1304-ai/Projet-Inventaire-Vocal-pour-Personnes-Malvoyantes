## Contexte

Ce projet a été réalisé dans le cadre de la formation **Développeuse IA & Data** chez Simplon Microsoft.

L'objectif est de développer un prototype permettant à une personne malvoyante de connaître le contenu d'une image grâce à l'intelligence artificielle, un inventaire automatique et une description vocale.

---

## Objectif du projet

Créer une application web capable de :

- Importer une image
- Détecter automatiquement les objets présents grâce à l'intelligence artificielle
- Générer un inventaire lisible des objets détectés
- Enrichir les résultats avec des informations sémantiques
- Lire le résultat à voix haute

---

## Fonctionnalités

### Analyse d'image

L'utilisateur sélectionne une image depuis son ordinateur.

### Détection d'objets

L'application utilise le modèle pré-entraîné **COCO-SSD** avec **TensorFlow.js** afin de détecter automatiquement les objets présents dans l'image.

### Génération d'inventaire

Les objets détectés sont regroupés et comptabilisés automatiquement.

Exemple :

- 1 tasse
- 2 bouteilles
- 1 ordinateur portable

### Enrichissement sémantique

Chaque objet peut être associé à :

- une traduction française ;
- une catégorie ;
- une définition simple.

Ces informations sont stockées dans le fichier **semantic.json**.

### Synthèse vocale

Une phrase descriptive est générée puis lue automatiquement grâce à la **Web Speech API**.

Exemple :

> J'ai détecté une tasse et deux bouteilles dans l'image.

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript
- TensorFlow.js
- COCO-SSD
- JSON
- Web Speech API
- Git
- GitHub

---

## Structure du projet

```text
Projet-Inventaire-Vocal-pour-Personnes-Malvoyantes/
│
├── index.html
├── script.js
├── style.css
├── semantic.json
├── resultat.png
│
├── README.md
├── Guide_Utilisation.md
└── Guide_Fonctionnement.pdf
```

## Aperçu

![Résultat du projet](./resultat.png)

---

## Installation

1. Télécharger ou cloner le projet :

```bash
git clone https://github.com/uchi1304-ai/Projet-Inventaire-Vocal-pour-Personnes-Malvoyantes.git

2. Ouvrir le fichier :

```text
index.html
```

dans un navigateur web.

---

## Compétences développées

- Détection d'objets par intelligence artificielle
- Utilisation d'un modèle pré-entraîné
- Manipulation de données JSON
- Développement Front-End
- Accessibilité numérique
- Génération de contenu dynamique
- Synthèse vocale
- Documentation technique et utilisateur

---

## Améliorations possibles

- Webcam en temps réel
- Dessin des bounding boxes
- Historique des analyses
- Export JSON des résultats
- Stockage SQLite
- Mode accessibilité avancé

---

## Auteur

**Ursula Calderón**

Formation Développeuse IA & Data – Simplon Microsoft