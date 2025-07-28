export const questions_node_express = [
  {
    question: "Qu'est-ce que Node.js ?",
    options: [
      "Un framework front-end",
      "Un environnement d'exécution JavaScript côté serveur",
      "Une base de données",
      "Un langage de programmation"
    ],
    answer: 1
  },
  {
    question: "Quel module Node.js permet de créer un serveur HTTP ?",
    options: [
      "le module http",
      "le module fs",
      "le module url",
      "le module path"
    ],
    answer: 0
  },
  {
    question: "Quel est le but principal d'Express ?",
    options: [
      "Gérer les fichiers statiques",
      "Créer des applications web et des API facilement",
      "Compiler du code JavaScript",
      "Gérer les bases de données"
    ],
    answer: 1
  },
  {
    question: "Quelle commande permet d'initialiser un projet Node.js ?",
    options: [
      "node init",
      "npm start",
      "npm init",
      "node install"
    ],
    answer: 2
  },
  {
    question: "Quel middleware Express est utilisé pour parser le JSON dans les requêtes ?",
    options: [
      "express.static()",
      "express.json()",
      "express.urlencoded()",
      "express.router()"
    ],
    answer: 1
  },
  // 45 questions supplémentaires
  {
    question: "Quel gestionnaire de paquets est utilisé par défaut avec Node.js ?",
    options: ["npm", "yarn", "composer", "pip"],
    answer: 0
  },
  {
    question: "Comment installer un module localement avec npm ?",
    options: ["npm install <module>", "npm get <module>", "node install <module>", "npm add <module>"],
    answer: 0
  },
  {
    question: "Quel fichier contient la liste des dépendances d'un projet Node.js ?",
    options: ["package.json", "node_modules.json", "dependencies.json", "modules.json"],
    answer: 0
  },
  {
    question: "Quelle méthode permet de lire un fichier en Node.js ?",
    options: ["fs.readFile", "http.readFile", "file.read", "os.readFile"],
    answer: 0
  },
  {
    question: "Quel port est utilisé par défaut par Express si non spécifié ?",
    options: ["3000", "80", "8080", "5000"],
    answer: 0
  },
  {
    question: "Comment démarre-t-on une application Express ?",
    options: ["app.listen()", "app.start()", "express.run()", "server.begin()"],
    answer: 0
  },
  {
    question: "Quel objet représente la requête HTTP dans un handler Express ?",
    options: ["req", "res", "request", "httpReq"],
    answer: 0
  },
  {
    question: "Quel objet représente la réponse HTTP dans un handler Express ?",
    options: ["res", "req", "response", "httpRes"],
    answer: 0
  },
  {
    question: "Quelle méthode Express permet de définir une route GET ?",
    options: ["app.get()", "app.route()", "app.fetch()", "app.receive()"],
    answer: 0
  },
  {
    question: "Comment exporter une fonction dans Node.js ?",
    options: ["module.exports = maFonction", "export maFonction", "exports: maFonction", "require(maFonction)"],
    answer: 0
  },
  {
    question: "Quel module permet de travailler avec les chemins de fichiers ?",
    options: ["path", "fs", "os", "url"],
    answer: 0
  },
  {
    question: "Quelle commande permet d'installer Express ?",
    options: ["npm install express", "npm get express", "npm add express", "node install express"],
    answer: 0
  },
  {
    question: "Comment accéder aux paramètres d'URL dans Express ?",
    options: ["req.params", "req.query", "req.body", "req.urlParams"],
    answer: 0
  },
  {
    question: "Comment parser les données d'un formulaire en Express ?",
    options: ["express.urlencoded()", "express.json()", "express.form()", "express.body()"],
    answer: 0
  },
  {
    question: "Quel module permet de servir des fichiers statiques avec Express ?",
    options: ["express.static", "express.files", "express.serve", "express.public"],
    answer: 0
  },
  {
    question: "Comment arrêter un serveur Node.js ?",
    options: ["server.close()", "server.stop()", "app.end()", "app.close()"],
    answer: 0
  },
  {
    question: "Quel est le type de module utilisé par défaut dans Node.js ?",
    options: ["CommonJS", "ESM", "AMD", "UMD"],
    answer: 0
  },
  {
    question: "Comment importer un module en CommonJS ?",
    options: ["require()", "import", "include", "use"],
    answer: 0
  },
  {
    question: "Comment envoyer une réponse JSON en Express ?",
    options: ["res.json()", "res.send()", "res.write()", "res.response()"],
    answer: 0
  },
  {
    question: "Quel module permet de travailler avec le système de fichiers ?",
    options: ["fs", "path", "os", "file"],
    answer: 0
  },
  {
    question: "Quelle méthode permet de rediriger une requête en Express ?",
    options: ["res.redirect()", "res.send()", "res.route()", "res.forward()"],
    answer: 0
  },
  {
    question: "Comment accéder aux variables d'environnement dans Node.js ?",
    options: ["process.env", "env.process", "os.env", "node.env"],
    answer: 0
  },
  {
    question: "Quel est le rôle de package-lock.json ?",
    options: ["Verrouiller les versions des dépendances", "Stocker les scripts npm", "Définir les variables d'environnement", "Gérer les routes Express"],
    answer: 0
  },
  {
    question: "Quelle méthode Express permet de définir une route POST ?",
    options: ["app.post()", "app.send()", "app.route()", "app.push()"],
    answer: 0
  },
  {
    question: "Comment ajouter un middleware global dans Express ?",
    options: ["app.use()", "app.middleware()", "app.global()", "app.all()"],
    answer: 0
  },
  {
    question: "Quel module permet de créer un serveur HTTPS en Node.js ?",
    options: ["https", "http", "tls", "ssl"],
    answer: 0
  },
  {
    question: "Comment accéder au corps d'une requête POST en Express ?",
    options: ["req.body", "req.data", "req.content", "req.post"],
    answer: 0
  },
  {
    question: "Quelle méthode permet de supprimer un fichier en Node.js ?",
    options: ["fs.unlink", "fs.remove", "fs.delete", "fs.destroy"],
    answer: 0
  },
  {
    question: "Quel est le rôle de nodemon ?",
    options: ["Redémarrer automatiquement l'application lors de modifications", "Installer des modules", "Gérer les routes", "Compiler le code"],
    answer: 0
  },
  {
    question: "Comment installer nodemon en développement ?",
    options: ["npm install --save-dev nodemon", "npm install nodemon", "npm get nodemon", "npm dev nodemon"],
    answer: 0
  },
  {
    question: "Quelle extension de fichier est utilisée pour les modules Node.js ?",
    options: [".js", ".node", ".json", ".mod"],
    answer: 0
  },
  {
    question: "Comment définir une variable globale en Node.js ?",
    options: ["global.maVar", "window.maVar", "this.maVar", "globalVar.maVar"],
    answer: 0
  },
  {
    question: "Quel module permet de créer un serveur WebSocket en Node.js ?",
    options: ["ws", "http", "express", "socket"],
    answer: 0
  },
  {
    question: "Quelle méthode permet de lire un flux de données en Node.js ?",
    options: ["stream.on('data')", "fs.read()", "http.data()", "buffer.read()"],
    answer: 0
  },
  {
    question: "Comment gérer les erreurs globales dans Node.js ?",
    options: ["process.on('uncaughtException')", "app.on('error')", "node.catch()", "global.error()"],
    answer: 0
  },
  {
    question: "Quel module permet de compresser les réponses HTTP en Express ?",
    options: ["compression", "gzip", "zip", "express-compress"],
    answer: 0
  },
  {
    question: "Comment définir une variable d'environnement temporaire sous Windows ?",
    options: ["set VAR=valeur", "export VAR=valeur", "env VAR=valeur", "define VAR=valeur"],
    answer: 0
  },
  {
    question: "Comment définir une variable d'environnement temporaire sous Linux/Mac ?",
    options: ["export VAR=valeur", "set VAR=valeur", "env VAR=valeur", "define VAR=valeur"],
    answer: 0
  },
  {
    question: "Quel module permet de gérer les cookies en Express ?",
    options: ["cookie-parser", "express-cookies", "cookies", "cookie-manager"],
    answer: 0
  },
  {
    question: "Comment ajouter un en-tête HTTP personnalisé en Express ?",
    options: ["res.set()", "res.header()", "res.addHeader()", "res.customHeader()"],
    answer: 0
  },
  {
    question: "Quelle méthode permet de terminer une réponse en Node.js ?",
    options: ["res.end()", "res.finish()", "res.close()", "res.terminate()"],
    answer: 0
  },
  {
    question: "Quel module permet de gérer les sessions en Express ?",
    options: ["express-session", "session-manager", "express-sessions", "session-express"],
    answer: 0
  },
  {
    question: "Comment définir une route paramétrée en Express ?",
    options: ["/user/:id", "/user/{id}", "/user/<id>", "/user/[id]"],
    answer: 0
  },
  {
    question: "Quelle méthode permet d'envoyer un fichier en Express ?",
    options: ["res.sendFile()", "res.file()", "res.send()", "res.download()"],
    answer: 0
  },
  {
    question: "Quel module permet de gérer les requêtes HTTP externes en Node.js ?",
    options: ["axios", "express", "http", "request"],
    answer: 0
  },
  {
    question: "Comment ajouter un délai d'exécution dans Node.js ?",
    options: ["setTimeout()", "wait()", "delay()", "sleep()"],
    answer: 0
  },
  {
    question: "Quelle méthode permet de créer un dossier en Node.js ?",
    options: ["fs.mkdir", "fs.createDir", "fs.newDir", "fs.dir()"],
    answer: 0
  },
  {
    question: "Comment vérifier si un fichier existe en Node.js ?",
    options: ["fs.existsSync", "fs.fileExists", "fs.checkFile", "fs.isFile"],
    answer: 0
  },
  {
    question: "Quel module permet de crypter des données en Node.js ?",
    options: ["crypto", "bcrypt", "hash", "secure"],
    answer: 0
  },
  {
    question: "Comment gérer les erreurs asynchrones dans Express ?",
    options: ["try/catch dans les fonctions async", "catch() sur les promesses", "res.error()", "app.catch()"],
    answer: 0
  }
]; 