"use client";

import { useState } from "react";

export default function Produit({ nom, prix }) {
  const [ajoute, setAjoute] = useState(false);

  const handleAjouter = () => {
    setAjoute(true);
  };

  const boutonText = ajoute ? "Ajouté 👍" : "Ajouter au panier 🧺";
  const boutonStyle = ajoute
    ? "bg-green-500 text-white cursor-not-allowed"
    : "gb-blue-500 text-gray-700 hover:bg-blue-600";
  return (
    <div className="bg-white rounded p-4 shadow hover:border-blue-500 border-8 transition">
      <h2 className="text-lg font-semibold">{nom}</h2>
      <p className="text-gray-700 mt-2">{prix}</p>

      <button
        onClick={handleAjouter}
        disabled={ajoute}
        className={`mt-4 px-4 py-2 rounded ${boutonStyle}`}
      > 
        {boutonText}
      </button>
    </div>
  );
}
