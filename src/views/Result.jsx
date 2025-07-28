import React from "react";

export default function Result({ questions, answers, onRestart, onOtherQuiz }) {
  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const total = questions.length;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-1 sm:px-4 relative">
      <div className="w-full max-w-md sm:max-w-2xl bg-white/90 p-3 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-blue-100 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-blue-700 drop-shadow">Résultat du Quiz</h2>
        <div className="mb-2 sm:mb-4 text-base sm:text-lg md:text-xl">Score : <span className="text-green-600 font-bold">{correct} / {total}</span></div>
        <div className="overflow-x-auto mb-4 sm:mb-8">
          <table className="min-w-[400px] sm:min-w-full border text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-1 sm:py-2 px-1 sm:px-2 border">#</th>
                <th className="py-1 sm:py-2 px-1 sm:px-2 border text-left">Question</th>
                <th className="py-1 sm:py-2 px-1 sm:px-2 border">Votre réponse</th>
                <th className="py-1 sm:py-2 px-1 sm:px-2 border">Bonne réponse</th>
                {/* <th className="py-1 sm:py-2 px-1 sm:px-2 border">Résultat</th> */}
              </tr>
            </thead>
            <tbody>
              {questions.map((q, i) => {
                const userIdx = answers[i];
                const isCorrect = userIdx === q.answer;
                const isTimeout = userIdx === null;
                return (
                  <tr key={i} className={isCorrect ? "bg-green-50" : isTimeout ? "bg-gray-50" : "bg-red-50"}>
                    <td className="border px-1 sm:px-2 py-1 font-mono">{i + 1}</td>
                    <td className="border px-1 sm:px-2 py-1 text-left">{q.question}</td>
                    <td className="border px-1 sm:px-2 py-1">
                      {isTimeout ? <span className="text-gray-400 italic">Non répondu</span> : q.options[userIdx]}
                    </td>
                    <td className="border px-1 sm:px-2 py-1 font-semibold">{q.options[q.answer]}</td>
                    {/* <td className="border px-1 sm:px-2 py-1 text-lg">
                      {isCorrect ? <span className="text-green-600">✔</span> : isTimeout ? <span className="text-gray-400">⏳</span> : <span className="text-pink-600">✖</span>}
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 items-center w-full">
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-pink-400 text-white py-3 rounded-lg font-bold text-lg shadow hover:scale-105 hover:from-blue-600 hover:to-pink-500 transition-transform duration-200 mb-0"
            onClick={onRestart}
          >
            Recommencer
          </button>
          <button
            className="w-full bg-gradient-to-r from-gray-400 to-blue-300 text-white py-3 rounded-lg font-bold text-lg shadow hover:scale-105 hover:from-gray-500 hover:to-blue-400 transition-transform duration-200"
            onClick={onOtherQuiz}
          >
            Passer un autre quiz
          </button>
        </div>
      </div>
    </div>
  );
} 