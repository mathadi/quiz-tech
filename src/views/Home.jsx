import React from "react";
import logo from "../assets/logo.png";

export default function Home({ onGo }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-200 via-white to-pink-100 px-2 sm:px-4">
      <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl bg-white my-4 sm:my-10 px-3 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl border border-indigo-200 text-center">
        <img
          src={logo}
          alt="Logo Quiz"
          className="mx-auto w-20 h-20 sm:w-28 sm:h-28 object-contain mb-2 sm:mb-3"
        />
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-2 sm:mb-4 text-indigo-700 drop-shadow">
          Quiz Tech
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Bienvenue sur l'application de quiz technique !<br/>
          Teste et renforce tes connaissances sur différentes technologies du web.<br/>
          <span className="inline-block mt-2 text-sm sm:text-base text-gray-500">
            Prêt à relever le défi ?
          </span>
        </p>
        <ul className="mb-6 sm:mb-8 flex flex-col gap-4 sm:gap-6 items-center">
          <li className="w-full max-w-xs sm:max-w-md bg-white rounded-xl shadow-md flex flex-col items-center py-3 sm:py-5 px-3 sm:px-6 transition-all duration-200 hover:shadow-xl hover:bg-pink-50 group">
            <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100 mb-1 sm:mb-2 group-hover:bg-pink-200 transition-all text-xl sm:text-2xl text-pink-500 shadow">⚡</span>
            <span className="font-semibold text-pink-700 text-base sm:text-lg text-center">Résultat détaillé et immédiat à la fin</span>
          </li>
          <li className="w-full max-w-xs sm:max-w-md bg-white rounded-xl shadow-md flex flex-col items-center py-3 sm:py-5 px-3 sm:px-6 transition-all duration-200 hover:shadow-xl hover:bg-green-50 group">
            <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 mb-1 sm:mb-2 group-hover:bg-green-200 transition-all text-xl sm:text-2xl text-green-600 shadow">🔄</span>
            <span className="font-semibold text-green-700 text-base sm:text-lg text-center">Rejoue autant de fois que tu veux</span>
          </li>
          <li className="w-full max-w-xs sm:max-w-md bg-white rounded-xl shadow-md flex flex-col items-center py-3 sm:py-5 px-3 sm:px-6 transition-all duration-200 hover:shadow-xl hover:bg-red-50 group">
            <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 mb-1 sm:mb-2 group-hover:bg-red-200 transition-all text-xl sm:text-2xl text-red-500 shadow">⏳</span>
            <span className="font-semibold text-red-700 text-base sm:text-lg text-center">Mais attention, pour chaque question, tu as 20 secondes pour répondre !</span>
          </li>
        </ul>
        <button
          onClick={onGo}
          className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-base sm:text-lg font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Aller go !
        </button>
      </div>
    </div>
  );
} 