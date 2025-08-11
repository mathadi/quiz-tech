export const questions_react = [
  {
    question: "Qu'est-ce que JSX en React ?",
    options: [
      "Un langage de programmation séparé",
      "Une extension de syntaxe JavaScript qui permet d'écrire du HTML dans du JavaScript",
      "Un framework CSS",
      "Un outil de build"
    ],
    answer: 1
  },
  {
    question: "Comment créer un composant fonctionnel en React ?",
    options: [
      "class MonComposant { render() { return <div>Hello</div>; } }",
      "function MonComposant() { return <div>Hello</div>; }",
      "const MonComposant = <div>Hello</div>;",
      "MonComposant() => { return <div>Hello</div>; }"
    ],
    answer: 1
  },
  {
    question: "Quelle est la différence entre un composant fonctionnel et un composant de classe ?",
    options: [
      "Il n'y a aucune différence",
      "Les composants fonctionnels utilisent des hooks, les composants de classe utilisent des méthodes de cycle de vie",
      "Les composants fonctionnels sont plus rapides",
      "Les composants de classe sont obsolètes"
    ],
    answer: 1
  },
  {
    question: "Comment exporter un composant React ?",
    options: [
      "export MonComposant;",
      "export default MonComposant;",
      "module.exports = MonComposant;",
      "return MonComposant;"
    ],
    answer: 1
  },
  {
    question: "Quelle est la syntaxe correcte pour importer un composant React ?",
    options: [
      "import { MonComposant } from './MonComposant';",
      "import MonComposant from './MonComposant';",
      "require('./MonComposant');",
      "include './MonComposant';"
    ],
    answer: 1
  },
  {
    question: "Comment passer des props à un composant enfant ?",
    options: [
      "<Enfant props={nom: 'John', age: 25} />",
      "<Enfant nom='John' age={25} />",
      "<Enfant nom='John' age='25' />",
      "<Enfant {nom: 'John', age: 25} />"
    ],
    answer: 1
  },
  {
    question: "Comment accéder aux props dans un composant fonctionnel ?",
    options: [
      "function MonComposant() { return <div>{this.props.nom}</div>; }",
      "function MonComposant(props) { return <div>{props.nom}</div>; }",
      "function MonComposant() { return <div>{props.nom}</div>; }",
      "function MonComposant(props) { return <div>{this.nom}</div>; }"
    ],
    answer: 1
  },
  {
    question: "Comment destructurer les props dans un composant fonctionnel ?",
    options: [
      "function MonComposant(props) { const { nom, age } = props; }",
      "function MonComposant({ nom, age }) { return <div>{nom}</div>; }",
      "function MonComposant([nom, age]) { return <div>{nom}</div>; }",
      "function MonComposant(...props) { return <div>{props.nom}</div>; }"
    ],
    answer: 1
  },
  {
    question: "Les props sont-elles modifiables dans un composant enfant ?",
    options: [
      "Oui, on peut les modifier directement",
      "Non, les props sont en lecture seule",
      "Oui, mais seulement avec setState",
      "Oui, mais seulement dans les composants de classe"
    ],
    answer: 1
  },
  {
    question: "Comment passer une fonction comme prop ?",
    options: [
      "<Enfant onClick='handleClick' />",
      "<Enfant onClick={handleClick} />",
      "<Enfant onClick={this.handleClick} />",
      "<Enfant onClick={handleClick()} />"
    ],
    answer: 1
  },
  {
    question: "Quel hook utiliser pour gérer l'état local dans un composant fonctionnel ?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useReducer"
    ],
    answer: 1
  },
  {
    question: "Quelle est la syntaxe correcte pour utiliser useState ?",
    options: [
      "const count = useState(0);",
      "const [count, setCount] = useState(0);",
      "const [count] = useState(0);",
      "const count = setState(0);"
    ],
    answer: 1
  },
  {
    question: "Comment mettre à jour l'état avec useState ?",
    options: [
      "count = count + 1;",
      "setCount(count + 1);",
      "this.setState({ count: count + 1 });",
      "state.count = count + 1;"
    ],
    answer: 1
  },
  {
    question: "Quel hook utiliser pour exécuter du code après le rendu ?",
    options: [
      "useState",
      "useEffect",
      "useCallback",
      "useMemo"
    ],
    answer: 1
  },
  {
    question: "Comment exécuter useEffect seulement au montage du composant ?",
    options: [
      "useEffect(() => { /* code */ });",
      "useEffect(() => { /* code */ }, []);",
      "useEffect(() => { /* code */ }, [deps]);",
      "useEffect(() => { /* code */ }, null);"
    ],
    answer: 1
  },
  {
    question: "Comment gérer un événement de clic en React ?",
    options: [
      "<button onclick={handleClick}>Cliquer</button>",
      "<button onClick={handleClick}>Cliquer</button>",
      "<button onClick='handleClick'>Cliquer</button>",
      "<button onClick={handleClick()}>Cliquer</button>"
    ],
    answer: 1
  },
  {
    question: "Comment passer des paramètres à un gestionnaire d'événement ?",
    options: [
      "<button onClick={handleClick(id)}>Cliquer</button>",
      "<button onClick={() => handleClick(id)}>Cliquer</button>",
      "<button onClick={handleClick, id}>Cliquer</button>",
      "<button onClick={handleClick.id}>Cliquer</button>"
    ],
    answer: 1
  },
  {
    question: "Comment empêcher le comportement par défaut d'un événement ?",
    options: [
      "event.stopPropagation();",
      "event.preventDefault();",
      "event.cancel();",
      "event.block();"
    ],
    answer: 1
  },
  {
    question: "Comment arrêter la propagation d'un événement ?",
    options: [
      "event.preventDefault();",
      "event.stopPropagation();",
      "event.cancel();",
      "event.block();"
    ],
    answer: 1
  },
  {
    question: "Quel est l'équivalent React de 'onchange' en HTML ?",
    options: [
      "onchange",
      "onChange",
      "onInput",
      "onModify"
    ],
    answer: 1
  },
  {
    question: "Comment faire un rendu conditionnel avec une expression ternaire ?",
    options: [
      "{if (isLoggedIn) <UserGreeting /> else <GuestGreeting />}",
      "{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}",
      "{isLoggedIn && <UserGreeting /> || <GuestGreeting />}",
      "{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}"
    ],
    answer: 1
  },
  {
    question: "Comment faire un rendu conditionnel avec l'opérateur && ?",
    options: [
      "{isLoggedIn ? <UserGreeting /> : null}",
      "{isLoggedIn && <UserGreeting />}",
      "{if (isLoggedIn) <UserGreeting />}",
      "{isLoggedIn || <UserGreeting />}"
    ],
    answer: 1
  },
  {
    question: "Comment faire un rendu conditionnel avec if/else en dehors du JSX ?",
    options: [
      "if (isLoggedIn) return <UserGreeting />; else return <GuestGreeting />;",
      "let content; if (isLoggedIn) { content = <UserGreeting />; } else { content = <GuestGreeting />; }",
      "const content = if (isLoggedIn) <UserGreeting /> else <GuestGreeting />;",
      "let content = isLoggedIn ? <UserGreeting /> : <GuestGreeting />;"
    ],
    answer: 1
  },
  {
    question: "Comment afficher un message de chargement conditionnellement ?",
    options: [
      "{isLoading ? <div>Chargement...</div> : null}",
      "{isLoading && <div>Chargement...</div>}",
      "{if (isLoading) <div>Chargement...</div>}",
      "{isLoading || <div>Chargement...</div>}"
    ],
    answer: 1
  },
  {
    question: "Comment gérer plusieurs conditions de rendu ?",
    options: [
      "{if (status === 'loading') <Loading /> else if (status === 'error') <Error /> else <Success />}",
      "{status === 'loading' && <Loading /> || status === 'error' && <Error /> || <Success />}",
      "{switch(status) { case 'loading': <Loading />; case 'error': <Error />; default: <Success />; }}",
      "{status === 'loading' ? <Loading /> : status === 'error' ? <Error /> : <Success />}"
    ],
    answer: 1
  },
  {
    question: "Comment rendre une liste d'éléments en React ?",
    options: [
      "{items.forEach(item => <li>{item.name}</li>)}",
      "{items.map(item => <li key={item.id}>{item.name}</li>)}",
      "{items.map(item => <li>{item.name}</li>)}",
      "{items.map((item, index) => <li>{item.name}</li>)}"
    ],
    answer: 1
  },
  {
    question: "Pourquoi utiliser une prop 'key' dans une liste ?",
    options: [
      "Pour styliser les éléments",
      "Pour aider React à identifier quels éléments ont changé",
      "Pour valider les données",
      "Pour optimiser les performances"
    ],
    answer: 1
  },
  {
    question: "Quelle est la meilleure pratique pour les clés ?",
    options: [
      "Utiliser l'index du tableau",
      "Utiliser un ID unique et stable",
      "Utiliser une valeur aléatoire",
      "Utiliser le nom de l'élément"
    ],
    answer: 1
  },
  {
    question: "Comment filtrer une liste avant de la rendre ?",
    options: [
      "{items.map(item => item.active && <li key={item.id}>{item.name}</li>)}",
      "{items.filter(item => item.active).map(item => <li key={item.id}>{item.name}</li>)}",
      "{items.filter(item => item.active).forEach(item => <li key={item.id}>{item.name}</li>)}",
      "{items.map(item => { if (item.active) return <li key={item.id}>{item.name}</li>; })}"
    ],
    answer: 1
  },
  {
    question: "Comment trier une liste avant de la rendre ?",
    options: [
      "{items.map(item => <li key={item.id}>{item.name}</li>).sort()}",
      "{items.sort((a, b) => a.name.localeCompare(b.name)).map(item => <li key={item.id}>{item.name}</li>)}",
      "{items.map(item => <li key={item.id}>{item.name}</li>).reverse()}",
      "{items.orderBy('name').map(item => <li key={item.id}>{item.name}</li>)}"
    ],
    answer: 1
  },
  {
    question: "Comment créer un formulaire contrôlé en React ?",
    options: [
      "<input value={value} onInput={handleChange} />",
      "<input value={value} onChange={handleChange} />",
      "<input defaultValue={value} onChange={handleChange} />",
      "<input value={value} onModify={handleChange} />"
    ],
    answer: 1
  },
  {
    question: "Comment gérer la soumission d'un formulaire ?",
    options: [
      "<form onsubmit={handleSubmit}>",
      "<form onSubmit={handleSubmit}>",
      "<form onSubmit='handleSubmit'>",
      "<form submit={handleSubmit}>"
    ],
    answer: 1
  },
  {
    question: "Comment empêcher la soumission par défaut d'un formulaire ?",
    options: [
      "const handleSubmit = (e) => { e.stopPropagation(); /* logique */ };",
      "const handleSubmit = (e) => { e.preventDefault(); /* logique */ };",
      "const handleSubmit = () => { /* logique */ };",
      "const handleSubmit = (e) => { return false; };"
    ],
    answer: 1
  },
  {
    question: "Comment gérer plusieurs champs de formulaire avec un seul état ?",
    options: [
      "const [name, setName] = useState(''); const [email, setEmail] = useState('');",
      "const [formData, setFormData] = useState({ name: '', email: '' });",
      "const formData = { name: '', email: '' };",
      "const [formData] = useState({ name: '', email: '' });"
    ],
    answer: 1
  },
  {
    question: "Comment mettre à jour un champ spécifique dans un formulaire ?",
    options: [
      "setFormData({ formData, [name]: value });",
      "setFormData({ ...formData, [name]: value });",
      "setFormData({ ...formData, name: value });",
      "formData[name] = value;"
    ],
    answer: 1
  }
];
