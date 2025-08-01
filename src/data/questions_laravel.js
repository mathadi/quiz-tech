export const questions_laravel = [
  // Junior
  {
    question: "Qu'est-ce que Laravel ?",
    options: [
      "Un framework PHP",
      "Un serveur web",
      "Un système de gestion de base de données",
      "Un langage de programmation",
    ],
    answer: 0,
  },
  {
    question:
      "Quelle commande artisan permet de lancer le serveur de développement ?",
    options: [
      "php artisan serve",
      "php artisan start",
      "php artisan run",
      "php artisan dev",
    ],
    answer: 0,
  },
  {
    question:
      "Quel fichier contient la configuration principale de l'application Laravel ?",
    options: [".env", "config/app.php", "composer.json", "artisan"],
    answer: 1,
  },
  {
    question: "Quel dossier contient les contrôleurs dans Laravel ?",
    options: [
      "app/Controllers",
      "app/Http/Controllers",
      "app/Http",
      "app/Controllers/Http",
    ],
    answer: 1,
  },
  {
    question: "Quelle commande permet de créer un modèle ?",
    options: [
      "php artisan make:model",
      "php artisan new:model",
      "php artisan create:model",
      "php artisan generate:model",
    ],
    answer: 0,
  },
  // Intermédiaire
  {
    question: "Quel ORM est utilisé par Laravel ?",
    options: ["Doctrine", "Eloquent", "Propel", "ActiveRecord"],
    answer: 1,
  },
  {
    question: "Comment définir une route GET dans Laravel ?",
    options: [
      "Route::get()",
      "Route::post()",
      "Route::put()",
      "Route::route()",
    ],
    answer: 0,
  },
  {
    question: "Quel helper permet de générer une URL vers une route nommée ?",
    options: ["route()", "url()", "link()", "path()"],
    answer: 0,
  },
  {
    question: "Quel middleware protège contre les attaques CSRF ?",
    options: [
      "VerifyCsrfToken",
      "Authenticate",
      "EncryptCookies",
      "RedirectIfAuthenticated",
    ],
    answer: 0,
  },
  {
    question: "Comment accéder à une variable d'environnement dans Laravel ?",
    options: [
      "env('NOM')",
      "getenv('NOM')",
      "config('NOM')",
      "variable('NOM')",
    ],
    answer: 0,
  },
  // Confirmé
  {
    question: "Quelle commande permet de lancer les migrations ?",
    options: [
      "php artisan migrate",
      "php artisan db:migrate",
      "php artisan migration",
      "php artisan migrate:run",
    ],
    answer: 0,
  },
  {
    question: "Comment valider une requête dans un contrôleur ?",
    options: [
      "$request->validate([...])",
      "validate($request, [...])",
      "$this->validate([...])",
      "Validator::make([...])",
    ],
    answer: 0,
  },
  {
    question: "Quel fichier contient la définition des routes web ?",
    options: [
      "routes/web.php",
      "routes/api.php",
      "app/routes.php",
      "config/routes.php",
    ],
    answer: 0,
  },
  {
    question:
      "Comment accéder à tous les enregistrements d'un modèle Eloquent ?",
    options: [
      "Model::all()",
      "Model::getAll()",
      "Model::findAll()",
      "Model::fetch()",
    ],
    answer: 0,
  },
  {
    question:
      "Quel est le rôle de la méthode boot() dans un Service Provider ?",
    options: [
      "Initialiser des services après le chargement",
      "Définir les routes",
      "Créer des migrations",
      "Gérer les événements",
    ],
    answer: 0,
  },
  // Senior
  {
    question:
      "Comment créer une relation one-to-many dans un modèle Eloquent ?",
    options: [
      "return $this->hasMany(Related::class);",
      "return $this->belongsTo(Related::class);",
      "return $this->hasOne(Related::class);",
      "return $this->manyToMany(Related::class);",
    ],
    answer: 0,
  },
  {
    question: "Quel composant gère l'injection de dépendances dans Laravel ?",
    options: ["Service Container", "Service Provider", "Middleware", "Facade"],
    answer: 0,
  },
  {
    question: "Comment créer une tâche planifiée (cron) dans Laravel ?",
    options: [
      "En utilisant app/Console/Kernel.php",
      "En modifiant .env",
      "En créant un middleware",
      "En éditant config/app.php",
    ],
    answer: 0,
  },
  {
    question: "Quel est le rôle de la méthode handle() dans une Job Laravel ?",
    options: [
      "Exécuter la logique de la tâche",
      "Définir les routes",
      "Gérer les migrations",
      "Initialiser l'application",
    ],
    answer: 0,
  },
  {
    question: "Comment utiliser une file d'attente (queue) dans Laravel ?",
    options: [
      "En utilisant dispatch()",
      "En appelant queue()",
      "En utilisant send()",
      "En appelant push()",
    ],
    answer: 0,
  },
  // Questions supplémentaires pour arriver à 30
  {
    question: "Quel fichier configure la connexion à la base de données ?",
    options: [
      "config/database.php",
      ".env",
      "config/app.php",
      "database/config.php",
    ],
    answer: 0,
  },
  {
    question: "Quelle commande artisan permet de créer un contrôleur ?",
    options: [
      "php artisan make:controller",
      "php artisan new:controller",
      "php artisan create:controller",
      "php artisan generate:controller",
    ],
    answer: 0,
  },
  {
    question:
      "Comment définir une relation many-to-many dans un modèle Eloquent ?",
    options: ["belongsToMany()", "hasMany()", "hasOne()", "belongsTo()"],
    answer: 0,
  },
  {
    question: "Quel helper permet de rediriger vers une route ?",
    options: ["redirect()->route()", "route()", "url()", "back()"],
    answer: 0,
  },
  {
    question: "Quel est le rôle de la méthode up() dans une migration ?",
    options: [
      "Définir les modifications à appliquer",
      "Annuler les modifications",
      "Créer un modèle",
      "Créer un contrôleur",
    ],
    answer: 0,
  },
  {
    question: "Comment accéder à la requête courante dans un contrôleur ?",
    options: [
      "Via l'injection de Request",
      "Via $this->request",
      "Via request()",
      "Via $request->get()",
    ],
    answer: 0,
  },
  {
    question: "Quel est le rôle de la méthode down() dans une migration ?",
    options: [
      "Annuler les modifications de up()",
      "Créer la table",
      "Valider la migration",
      "Exécuter la migration",
    ],
    answer: 0,
  },
  {
    question: "Quel composant permet de gérer les événements dans Laravel ?",
    options: ["Event", "Listener", "Queue", "Middleware"],
    answer: 0,
  },
  {
    question: "Comment générer une clé d'application Laravel ?",
    options: [
      "php artisan key:generate",
      "php artisan make:key",
      "php artisan generate:key",
      "php artisan app:key",
    ],
    answer: 0,
  },
  {
    question: "Quel helper permet de retourner une vue ?",
    options: ["view()", "render()", "display()", "show()"],
    answer: 0,
  },
];
