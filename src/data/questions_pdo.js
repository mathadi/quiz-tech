export const questions_pdo = [
  // Questions de base sur PDO
  {
    question: "Que signifie PDO ?",
    options: [
      "PHP Database Objects",
      "PHP Data Objects",
      "Personal Database Objects",
      "Program Database Objects"
    ],
    answer: 1
  },
  {
    question: "Quel est l'avantage principal de PDO par rapport aux anciennes extensions MySQL ?",
    options: [
      "Plus rapide",
      "Interface unifiée pour plusieurs bases de données",
      "Plus simple à utiliser",
      "Meilleure sécurité"
    ],
    answer: 1
  },
  {
    question: "Quelle méthode PDO permet de se connecter à une base de données ?",
    options: [
      "PDO::connect()",
      "new PDO()",
      "PDO::open()",
      "PDO::database()"
    ],
    answer: 1
  },
  {
    question: "Quel est le format correct du DSN pour MySQL avec PDO ?",
    options: [
      "mysql:host=localhost;dbname=ma_base",
      "mysql://localhost/ma_base",
      "mysql:localhost:ma_base",
      "mysql:host=localhost;database=ma_base"
    ],
    answer: 0
  },
  // Notions de base SQL
  {
    question: "Quelle commande SQL permet de créer une nouvelle base de données ?",
    options: [
      "CREATE DATABASE",
      "NEW DATABASE",
      "BUILD DATABASE",
      "MAKE DATABASE"
    ],
    answer: 0
  },
  {
    question: "Quelle commande SQL permet de créer une nouvelle table ?",
    options: [
      "CREATE TABLE",
      "NEW TABLE",
      "BUILD TABLE",
      "MAKE TABLE"
    ],
    answer: 0
  },
  {
    question: "Quelle commande SQL permet d'insérer des données dans une table ?",
    options: [
      "INSERT INTO",
      "ADD TO",
      "PUT INTO",
      "CREATE IN"
    ],
    answer: 0
  },
  {
    question: "Quelle commande SQL permet de récupérer des données d'une table ?",
    options: [
      "SELECT",
      "GET",
      "FETCH",
      "RETRIEVE"
    ],
    answer: 0
  },
  {
    question: "Quelle commande SQL permet de modifier des données existantes ?",
    options: [
      "UPDATE",
      "MODIFY",
      "CHANGE",
      "ALTER"
    ],
    answer: 0
  },
  {
    question: "Quelle commande SQL permet de supprimer des données d'une table ?",
    options: [
      "DELETE FROM",
      "REMOVE FROM",
      "DROP FROM",
      "CLEAR FROM"
    ],
    answer: 0
  },
  // PDO - Requêtes préparées
  {
    question: "Quelle méthode PDO permet de préparer une requête SQL ?",
    options: [
      "prepare()",
      "query()",
      "execute()",
      "statement()"
    ],
    answer: 0
  },
  {
    question: "Quelle méthode permet d'exécuter une requête préparée ?",
    options: [
      "execute()",
      "run()",
      "query()",
      "fetch()"
    ],
    answer: 0
  },
  {
    question: "Quel est l'avantage d'utiliser des requêtes préparées ?",
    options: [
      "Plus rapides",
      "Protection contre les injections SQL",
      "Plus faciles à écrire",
      "Meilleure gestion mémoire"
    ],
    answer: 1
  },
  {
    question: "Comment lier un paramètre à une requête préparée ?",
    options: [
      "bindParam()",
      "bind()",
      "param()",
      "link()"
    ],
    answer: 0
  },
  // SQL - Clauses et conditions
  {
    question: "Quelle clause SQL permet de filtrer les résultats ?",
    options: [
      "WHERE",
      "FILTER",
      "IF",
      "CONDITION"
    ],
    answer: 0
  },
  {
    question: "Quelle clause SQL permet de trier les résultats ?",
    options: [
      "ORDER BY",
      "SORT BY",
      "ARRANGE BY",
      "SORT"
    ],
    answer: 0
  },
  {
    question: "Quelle clause SQL permet de grouper les résultats ?",
    options: [
      "GROUP BY",
      "COLLECT BY",
      "BUNDLE BY",
      "SET BY"
    ],
    answer: 0
  },
  {
    question: "Quel opérateur SQL permet de joindre deux tables ?",
    options: [
      "JOIN",
      "CONNECT",
      "LINK",
      "MERGE"
    ],
    answer: 0
  },
  // PDO - Récupération de données
  {
    question: "Quelle méthode permet de récupérer une ligne de résultat ?",
    options: [
      "fetch()",
      "get()",
      "row()",
      "next()"
    ],
    answer: 0
  },
  {
    question: "Quelle constante PDO permet de récupérer un tableau associatif ?",
    options: [
      "PDO::FETCH_ASSOC",
      "PDO::ASSOC",
      "PDO::FETCH_ARRAY",
      "PDO::ARRAY_ASSOC"
    ],
    answer: 0
  },
  {
    question: "Quelle méthode permet de récupérer toutes les lignes d'un résultat ?",
    options: [
      "fetchAll()",
      "getAll()",
      "rows()",
      "all()"
    ],
    answer: 0
  },
  // SQL - Types de données
  {
    question: "Quel type de données SQL est utilisé pour stocker du texte ?",
    options: [
      "VARCHAR",
      "INTEGER",
      "DECIMAL",
      "BOOLEAN"
    ],
    answer: 0
  },
  {
    question: "Quel type de données SQL est utilisé pour stocker des nombres entiers ?",
    options: [
      "INT",
      "VARCHAR",
      "DECIMAL",
      "TEXT"
    ],
    answer: 0
  },
  {
    question: "Quel type de données SQL est utilisé pour stocker des dates ?",
    options: [
      "DATE",
      "TIME",
      "VARCHAR",
      "INT"
    ],
    answer: 0
  },
  // PDO - Transactions
  {
    question: "Quelle méthode PDO permet de commencer une transaction ?",
    options: [
      "beginTransaction()",
      "startTransaction()",
      "transaction()",
      "begin()"
    ],
    answer: 0
  },
  {
    question: "Quelle méthode permet de valider une transaction ?",
    options: [
      "commit()",
      "validate()",
      "confirm()",
      "save()"
    ],
    answer: 0
  },
  {
    question: "Quelle méthode permet d'annuler une transaction ?",
    options: [
      "rollback()",
      "cancel()",
      "undo()",
      "abort()"
    ],
    answer: 0
  },
  // SQL - Contraintes
  {
    question: "Quelle contrainte SQL garantit l'unicité des valeurs ?",
    options: [
      "UNIQUE",
      "PRIMARY KEY",
      "NOT NULL",
      "FOREIGN KEY"
    ],
    answer: 0
  },
  {
    question: "Quelle contrainte SQL empêche les valeurs NULL ?",
    options: [
      "NOT NULL",
      "UNIQUE",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    answer: 0
  },
  {
    question: "Quelle contrainte SQL définit la clé primaire ?",
    options: [
      "PRIMARY KEY",
      "UNIQUE",
      "NOT NULL",
      "FOREIGN KEY"
    ],
    answer: 0
  },
  // PDO - Gestion des erreurs
  {
    question: "Quelle exception est levée en cas d'erreur PDO ?",
    options: [
      "PDOException",
      "DatabaseException",
      "SQLError",
      "PDOError"
    ],
    answer: 0
  },
  {
    question: "Comment définir le mode d'erreur pour lever des exceptions ?",
    options: [
      "$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)",
      "$pdo->errorMode(PDO::ERRMODE_EXCEPTION)",
      "$pdo->setErrorMode(PDO::ERRMODE_EXCEPTION)",
      "$pdo->configure(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)"
    ],
    answer: 0
  }
]; 