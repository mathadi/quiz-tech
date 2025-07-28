export const questions_php = [
  // Facile
  {
    question: "Que signifie PHP ?",
    options: [
      "Personal Home Page",
      "Preprocessor Hypertext Processor",
      "PHP: Hypertext Preprocessor",
      "Private Home Page"
    ],
    answer: 2
  },
  {
    question: "Quelle balise est utilisée pour ouvrir un bloc PHP ?",
    options: [
      "<?php ?>",
      "<php> </php>",
      "<? ?>",
      "<script> </script>"
    ],
    answer: 0
  },
  // Moyen
  {
    question: "Quelle fonction permet d'afficher une variable pour le debug ?",
    options: [
      "print()",
      "echo()",
      "var_dump()",
      "show()"
    ],
    answer: 2
  },
  {
    question: "Quel mot-clé permet de définir une constante en PHP ?",
    options: [
      "const",
      "define",
      "constant",
      "static"
    ],
    answer: 1
  },
  {
    question: "Quel est le résultat de 3 == '3' en PHP ?",
    options: [
      "true",
      "false",
      "Erreur",
      "null"
    ],
    answer: 0
  },
  {
    question: "Quelle est la portée d'une variable déclarée avec 'global' dans une fonction ?",
    options: [
      "Locale à la fonction",
      "Globale dans tout le script",
      "Disponible uniquement dans la fonction",
      "Disponible dans toutes les classes"
    ],
    answer: 1
  },
  // Difficile
  {
    question: "Quelle interface PHP permet d'itérer sur un objet avec foreach ?",
    options: [
      "ArrayAccess",
      "Iterator",
      "Traversable",
      "Countable"
    ],
    answer: 2
  },
  {
    question: "Quel est le comportement de '===' en PHP ?",
    options: [
      "Compare la valeur uniquement",
      "Compare la valeur et le type",
      "Compare la référence",
      "Compare la longueur"
    ],
    answer: 1
  },
  {
    question: "Quelle fonction permet de charger automatiquement les classes en PHP moderne ?",
    options: [
      "__autoload()",
      "spl_autoload_register()",
      "autoload_class()",
      "require_once()"
    ],
    answer: 1
  },
  {
    question: "Quel mot-clé permet de déclarer une méthode abstraite ?",
    options: [
      "abstract",
      "interface",
      "virtual",
      "static"
    ],
    answer: 0
  },
  {
    question: "Quelle extension PHP est recommandée pour interagir avec MySQL en orienté objet ?",
    options: [
      "mysql",
      "mysqli",
      "PDO",
      "pgsql"
    ],
    answer: 2
  },
  {
    question: "Que retourne la fonction array_map() ?",
    options: [
      "Un tableau modifié",
      "Un booléen",
      "Un objet",
      "Une chaîne de caractères"
    ],
    answer: 0
  },
  // Nouvelles questions
  {
    question: "Quelle est la portée d'une variable déclarée dans une fonction sans mot-clé global ?",
    options: [
      "Globale",
      "Locale à la fonction",
      "Disponible dans toutes les classes",
      "Statique"
    ],
    answer: 1
  },
  {
    question: "Quelle fonction permet de vérifier si une variable est un tableau ?",
    options: [
      "is_array()",
      "array_check()",
      "isArray()",
      "array_is()"
    ],
    answer: 0
  },
  {
    question: "Quel mot-clé permet de stopper l’exécution d’une boucle ?",
    options: [
      "stop",
      "exit",
      "break",
      "end"
    ],
    answer: 2
  },
  {
    question: "Quelle fonction permet de compter le nombre d’éléments dans un tableau ?",
    options: [
      "count()",
      "size()",
      "length()",
      "elements()"
    ],
    answer: 0
  },
  {
    question: "Comment accéder à la 2ème valeur d’un tableau $arr en PHP ?",
    options: [
      "$arr[2]",
      "$arr(1)",
      "$arr[1]",
      "$arr{2}"
    ],
    answer: 2
  },
  {
    question: "Quel mot-clé permet d’hériter d’une classe en PHP ?",
    options: [
      "extends",
      "inherits",
      "super",
      "parent"
    ],
    answer: 0
  },
  {
    question: "Quelle fonction permet de supprimer un élément d’un tableau ?",
    options: [
      "unset()",
      "remove()",
      "delete()",
      "splice()"
    ],
    answer: 0
  },
  {
    question: "Quel est le résultat de l’expression: (int) '42abc' ?",
    options: [
      "42",
      "0",
      "Erreur",
      "'42abc'"
    ],
    answer: 0
  },
  {
    question: "Quelle fonction permet de récupérer la longueur d'une chaîne de caractères en PHP ?",
    options: [
      "strlen()",
      "count()",
      "length()",
      "size()"
    ],
    answer: 0
  },
  {
    question: "Quel est le mot-clé pour déclarer une variable statique dans une fonction ?",
    options: [
      "static",
      "const",
      "persistent",
      "global"
    ],
    answer: 0
  },
  {
    question: "Quelle fonction permet d'inclure un fichier PHP une seule fois ?",
    options: [
      "include_once()",
      "require()",
      "include()",
      "require_alone()"
    ],
    answer: 0
  },
  {
    question: "Quel opérateur est utilisé pour la concaténation de chaînes en PHP ?",
    options: [
      ".",
      "+",
      "&",
      "*"
    ],
    answer: 0
  },
  {
    question: "Quelle superglobale contient les données envoyées par la méthode POST ?",
    options: [
      "$_POST",
      "$_GET",
      "$_REQUEST",
      "$_DATA"
    ],
    answer: 0
  }
]; 