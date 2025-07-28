import React, { useState } from "react";

export default function CategorySelect({ onSelect, onBack }) {
  const [selected, setSelected] = useState(null);

  const categories = [
    {
      key: "node_express",
      label: "Node.js & Express",
      color: "from-indigo-500 to-pink-500",
      icon: "\ud83d\ude80"
    },
    {
      key: "php",
      label: "PHP",
      color: "from-yellow-400 to-purple-500",
      icon: "\ud83d\udcbb"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-pink-100 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-2 flex justify-start">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-pink-500 font-semibold bg-white/80 rounded-full px-4 py-2 shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Retour à l'accueil"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Retour
          </button>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-indigo-200 text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700 drop-shadow">
            Choisis ta catégorie
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-5 mb-8">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => { setSelected(cat.key); onSelect(cat.key); }}
                className={`flex flex-col items-center px-8 py-6 rounded-2xl shadow-lg font-bold text-lg text-white bg-gradient-to-r ${cat.color} hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-pink-200 ${selected === cat.key ? 'ring-4 ring-pink-400' : ''}`}
              >
                <span className="text-4xl mb-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 