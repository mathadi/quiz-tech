import React, { useState, useEffect, useRef } from "react";

export default function Quiz({ questions, onFinish, onBack }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showCorrection, setShowCorrection] = useState(false);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(40);
  const timerRef = useRef();

  useEffect(() => {
    setTimer(40);
    setSelected(null);
    setShowCorrection(false);
    timerRef.current = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  useEffect(() => {
    if (timer === 0 && !showCorrection && selected === null) {
      // Temps écoulé sans réponse : passer à la suivante sans correction
      clearInterval(timerRef.current);
      setAnswers((prev) => [...prev, null]);
      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent(current + 1);
        } else {
          onFinish({
            questions,
            answers: [...answers, null],
          });
        }
      }, 300); // petit délai pour la fluidité
    }
  }, [timer]);

  if (!questions || !questions.length)
    return <div className="flex items-center justify-center min-h-screen">Aucune question trouvée.</div>;

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;
  const isAnswered = selected !== null || showCorrection;

  function handleAnswer(idx) {
    clearInterval(timerRef.current);
    setSelected(idx);
    setShowCorrection(true);
    setAnswers((prev) => [...prev, idx]);
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        onFinish({
          questions,
          answers: [...answers, idx],
        });
      }
      setShowCorrection(false);
      setSelected(null);
    }, 1500);
  }

  // Animation fluide de la barre de progression
  const progressStyle = {
    width: `${progress}%`,
    transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-2">
      {/* Bouton retour aligné à gauche */}
      <div className="w-full max-w-xl mb-2 flex justify-start">
        <button
          onClick={onBack}
          className="flex items-center cursor-pointer gap-2 text-blue-600 hover:text-pink-500 font-semibold bg-white/80 rounded-full px-4 py-2 shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Retour à l'accueil"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Retour
        </button>
      </div>
      <div className="w-full max-w-xl bg-white/90 p-6 md:p-10 rounded-2xl shadow-xl border border-blue-100">
        {/* Barre de progression + chrono */}
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex justify-between mb-1 text-sm text-gray-600">
            <span>Question {current + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-pink-400 h-2.5 rounded-full" style={progressStyle}></div>
          </div>
          <div className="flex justify-end items-center mt-2">
            <span className={`font-mono text-lg px-3 py-1 rounded ${timer <= 3 ? 'bg-pink-200 text-pink-700' : 'bg-blue-100 text-blue-700'}`}>⏰ {timer}s</span>
          </div>
        </div>
        <div className="mb-8 text-xl md:text-2xl font-bold text-center text-blue-700 drop-shadow">
          {q.question}
        </div>
        <div className="flex flex-col gap-4">
          {q.options.map((option, idx) => {
            let btnClass = "bg-blue-50 hover:bg-pink-200 text-blue-900 font-semibold py-3 px-4 rounded-lg shadow transition-all duration-200 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
            if (showCorrection) {
              if (idx === selected) {
                btnClass += selected === q.answer
                  ? " border-2 border-green-500 bg-green-100"
                  : " border-2 border-pink-500 bg-pink-100";
              } else {
                btnClass += " opacity-60";
              }
            }
            return (
              <button
                key={idx}
                className={btnClass}
                onClick={() => !isAnswered && handleAnswer(idx)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>
        {/* Feedback minimal */}
        {showCorrection && selected !== null && (
          <div className="mt-6 text-center text-lg font-semibold">
            {selected === q.answer
              ? <span className="text-green-600">✔ Bonne réponse !</span>
              : <span className="text-pink-600">✖ Mauvaise réponse.</span>
            }
          </div>
        )}
      </div>
    </div>
  );
} 