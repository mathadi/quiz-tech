import { useState } from "react";
import Home from "./views/Home";
import CategorySelect from "./views/CategorySelect";
import Quiz from "./views/Quiz";
import Result from "./views/Result";
import { questions_node_express } from "./data/questions_node_express";
import { questions_php } from "./data/questions_php";
import { questions_pdo } from "./data/questions_pdo";
import { questions_laravel } from "./data/questions_laravel";
import { questions_react } from "./data/question_react";

function shuffleArray(array) {
  // Mélange un tableau (Fisher-Yates)
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleQuestions(questions) {
  // Mélange l'ordre des questions, puis mélange les options de chaque question
  const shuffledQuestions = shuffleArray(questions);
  return shuffledQuestions.map((q) => {
    const options = shuffleArray(q.options);
    const answerText = q.options[q.answer];
    const newAnswer = options.indexOf(answerText);
    return {
      ...q,
      options,
      answer: newAnswer,
    };
  });
}

export default function App() {
  const [step, setStep] = useState("home");
  const [quizData, setQuizData] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [category, setCategory] = useState(null);

  const getQuestionsForCategory = (cat) => {
    if (cat === "php") return questions_php;
    if (cat === "pdo") return questions_pdo;
    if (cat === "laravel") return questions_laravel;
    if (cat === "react") return questions_react;
    return questions_node_express;
  };

  const handleGo = () => {
    setStep("category");
  };

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    const questions = getQuestionsForCategory(selectedCategory);
    setShuffledQuestions(shuffleQuestions(questions));
    setStep("quiz");
  };

  const handleFinish = (data) => {
    setQuizData(data);
    setStep("result");
  };

  // Recommencer le quiz de la même catégorie
  const handleRestart = () => {
    if (category) {
      const questions = getQuestionsForCategory(category);
      setShuffledQuestions(shuffleQuestions(questions));
      setQuizData(null);
      setStep("quiz");
    } else {
      setQuizData(null);
      setStep("home");
    }
  };

  // Passer un autre quiz : retour à la sélection de catégorie
  const handleOtherQuiz = () => {
    setQuizData(null);
    setStep("category");
    setCategory(null);
  };

  // Retour depuis le quiz vers la sélection de catégorie
  const handleBackToCategory = () => {
    setQuizData(null);
    setStep("category");
    setCategory(null);
  };

  // Retour depuis la sélection de catégorie vers l'accueil
  const handleBackToHome = () => {
    setStep("home");
    setCategory(null);
  };

  return (
    <>
      {step === "home" && <Home onGo={handleGo} />}
      {step === "category" && (
        <CategorySelect
          onSelect={handleSelectCategory}
          onBack={handleBackToHome}
        />
      )}
      {step === "quiz" && (
        <Quiz
          questions={shuffledQuestions}
          onFinish={handleFinish}
          onBack={handleBackToCategory}
        />
      )}
      {step === "result" && quizData && (
        <Result
          questions={quizData.questions}
          answers={quizData.answers}
          onRestart={handleRestart}
          onOtherQuiz={handleOtherQuiz}
        />
      )}
    </>
  );
}
