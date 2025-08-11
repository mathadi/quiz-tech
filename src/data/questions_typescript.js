export const questions_typescript = [
  {
    question: "Qu'est-ce que TypeScript ?",
    options: [
      "Un nouveau langage de programmation",
      "Un sur-ensemble typé de JavaScript",
      "Un framework JavaScript",
      "Un outil de build"
    ],
    answer: 1
  },
  {
    question: "Quelle extension de fichier utilise TypeScript ?",
    options: [
      ".js",
      ".ts",
      ".tsx",
      ".jsx"
    ],
    answer: 1
  },
  {
    question: "Comment déclarer une variable avec un type en TypeScript ?",
    options: [
      "let name: string = 'John';",
      "let name = 'John' as string;",
      "let name = 'John';",
      "string name = 'John';"
    ],
    answer: 0
  },
  {
    question: "Quel est le type par défaut d'une variable non typée en TypeScript ?",
    options: [
      "any",
      "unknown",
      "undefined",
      "null"
    ],
    answer: 0
  },
  {
    question: "Comment définir une interface en TypeScript ?",
    options: [
      "class User { name: string; }",
      "interface User { name: string; }",
      "type User = { name: string; }",
      "struct User { name: string; }"
    ],
    answer: 1
  },
  {
    question: "Quelle est la différence entre 'any' et 'unknown' ?",
    options: [
      "Il n'y a aucune différence",
      "unknown est plus sûr car il nécessite une vérification de type",
      "any est plus restrictif que unknown",
      "unknown ne peut pas être utilisé"
    ],
    answer: 1
  },
  {
    question: "Comment créer un type union en TypeScript ?",
    options: [
      "type Status = 'loading' | 'success' | 'error';",
      "type Status = 'loading' && 'success' && 'error';",
      "type Status = ['loading', 'success', 'error'];",
      "type Status = { loading, success, error };"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un générique en TypeScript ?",
    options: [
      "Un type prédéfini",
      "Un type qui peut être réutilisé avec différents types",
      "Un type pour les nombres",
      "Un type pour les chaînes"
    ],
    answer: 1
  },
  {
    question: "Comment déclarer un générique ?",
    options: [
      "function identity<T>(arg: T): T { return arg; }",
      "function identity(arg: any): any { return arg; }",
      "function identity<T>(arg: any): T { return arg; }",
      "function identity(arg: T): T { return arg; }"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type intersection ?",
    options: [
      "Un type qui combine plusieurs types avec &",
      "Un type qui combine plusieurs types avec |",
      "Un type qui exclut d'autres types",
      "Un type pour les intersections de routes"
    ],
    answer: 0
  },
  {
    question: "Comment créer un type intersection ?",
    options: [
      "type Combined = Type1 & Type2;",
      "type Combined = Type1 | Type2;",
      "type Combined = Type1 + Type2;",
      "type Combined = Type1 && Type2;"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type literal en TypeScript ?",
    options: [
      "Un type qui représente une valeur spécifique",
      "Un type pour les chaînes littérales",
      "Un type pour les nombres littéraux",
      "Un type pour les objets littéraux"
    ],
    answer: 0
  },
  {
    question: "Comment déclarer un type literal ?",
    options: [
      "let direction: 'north' | 'south' | 'east' | 'west';",
      "let direction: string;",
      "let direction: any;",
      "let direction: Direction;"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type mapped en TypeScript ?",
    options: [
      "Un type qui transforme les propriétés d'un autre type",
      "Un type pour les cartes géographiques",
      "Un type pour les tableaux",
      "Un type pour les objets"
    ],
    answer: 0
  },
  {
    question: "Comment créer un type mapped ?",
    options: [
      "type Readonly<T> = { readonly [P in keyof T]: T[P]; }",
      "type Readonly<T> = { [P in keyof T]: T[P]; }",
      "type Readonly<T> = { readonly P: T[P]; }",
      "type Readonly<T> = { readonly keyof T: T; }"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce que 'keyof' en TypeScript ?",
    options: [
      "Un opérateur qui extrait les clés d'un type objet",
      "Un type pour les clés de base de données",
      "Un opérateur pour les objets",
      "Un type pour les chaînes"
    ],
    answer: 0
  },
  {
    question: "Comment utiliser 'keyof' ?",
    options: [
      "type Keys = keyof User;",
      "type Keys = keyof { name: string; age: number; };",
      "type Keys = keyof 'name' | 'age';",
      "type Keys = keyof string;"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type conditionnel ?",
    options: [
      "Un type qui dépend d'une condition",
      "Un type pour les conditions if/else",
      "Un type pour les booléens",
      "Un type pour les expressions conditionnelles"
    ],
    answer: 0
  },
  {
    question: "Comment créer un type conditionnel ?",
    options: [
      "type NonNullable<T> = T extends null | undefined ? never : T;",
      "type NonNullable<T> = T is null | undefined ? never : T;",
      "type NonNullable<T> = T == null | undefined ? never : T;",
      "type NonNullable<T> = T === null | undefined ? never : T;"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type d'index en TypeScript ?",
    options: [
      "Un type qui permet d'accéder aux propriétés par index",
      "Un type pour les tableaux",
      "Un type pour les objets avec des clés numériques",
      "Un type pour les index de base de données"
    ],
    answer: 0
  },
  {
    question: "Comment déclarer un type d'index ?",
    options: [
      "interface StringArray { [index: number]: string; }",
      "interface StringArray { [index: string]: string; }",
      "interface StringArray { index: number; value: string; }",
      "interface StringArray { [key: number]: string; }"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type de fonction en TypeScript ?",
    options: [
      "Un type qui décrit la signature d'une fonction",
      "Un type pour les fonctions",
      "Un type pour les méthodes",
      "Un type pour les callbacks"
    ],
    answer: 0
  },
  {
    question: "Comment déclarer un type de fonction ?",
    options: [
      "type Func = (x: number, y: number) => number;",
      "type Func = function(x: number, y: number): number;",
      "type Func = (x: number, y: number) -> number;",
      "type Func = function(x, y) { return x + y; };"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type de classe en TypeScript ?",
    options: [
      "Un type qui représente une classe",
      "Un type pour les objets de classe",
      "Un type pour les constructeurs",
      "Un type pour les méthodes de classe"
    ],
    answer: 0
  },
  {
    question: "Comment déclarer un type de classe ?",
    options: [
      "type Constructor = new (name: string) => User;",
      "type Constructor = class(name: string) => User;",
      "type Constructor = new(name: string) -> User;",
      "type Constructor = constructor(name: string) => User;"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type d'énumération en TypeScript ?",
    options: [
      "Un type qui définit un ensemble de constantes nommées",
      "Un type pour les nombres",
      "Un type pour les chaînes",
      "Un type pour les objets"
    ],
    answer: 0
  },
  {
    question: "Comment déclarer une énumération ?",
    options: [
      "enum Color { Red, Green, Blue }",
      "enum Color = { Red, Green, Blue }",
      "enum Color: { Red, Green, Blue }",
      "enum Color -> { Red, Green, Blue }"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type de tuple en TypeScript ?",
    options: [
      "Un type qui représente un tableau avec des types fixes",
      "Un type pour les paires de valeurs",
      "Un type pour les tableaux",
      "Un type pour les objets"
    ],
    answer: 0
  },
  {
    question: "Comment déclarer un tuple ?",
    options: [
      "let tuple: [string, number] = ['hello', 10];",
      "let tuple: [string, number] = ['hello', 10, true];",
      "let tuple: [string, number] = [10, 'hello'];",
      "let tuple: [string, number] = 'hello';"
    ],
    answer: 0
  },
  {
    question: "Qu'est-ce qu'un type de module en TypeScript ?",
    options: [
      "Un type qui représente un module",
      "Un type pour les imports/exports",
      "Un type pour les fichiers",
      "Un type pour les packages"
    ],
    answer: 0
  },
  {
    question: "Comment déclarer un module ?",
    options: [
      "declare module 'my-module' { export function myFunction(): void; }",
      "module 'my-module' { export function myFunction(): void; }",
      "declare 'my-module' { export function myFunction(): void; }",
      "type module 'my-module' = { export function myFunction(): void; }"
    ],
    answer: 0
  }
];
