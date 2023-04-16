# bill-app

Ce projet est développé par Adrien THAISSEN.

## Installation

1. Cloner le repository
   ````
    git clone <repository-url>
    ````

2. Ouvrir un terminal dans le dossier du projet.

3. Se déplacer dans le dossier
   ````
    cd billVue-app
    ````

4. Se déplacer dans le dossier `bill-app`
   ````
    cd bill-app
    ````

5. Exécuter la commande `npm install` pour installer toutes les dépendances nécessaires.

6. Répéter l'opération pour le dossier `bill-backend-app`.

## Utilisation

### Partie Vue.js

1. Ouvrir un terminal dans le dossier du projet.
2. Exécuter la commande `npm run dev` pour démarrer l'application en mode développement.
3. Ouvrir un navigateur web et accéder à l'URL `http://localhost:5173` pour voir l'application en action.
- nb: Si ce n'est pas le port 5173 suivez le lien indiqué dans la console après avoir lancé la commande `npm run dev`.

### Partie Node.js

1. Ouvrir un terminal dans le dossier du projet.
2. Exécuter la commande `node app.js` pour démarrer l'application le serveur.
3. L'application est maintenant prête à être utilisée avec l'application Vue.js.
- nb: Ne pas oublier de créer un fichier `.env` dans le dossier `bill-backend-app` avec les informations de connexion à votre base de données.