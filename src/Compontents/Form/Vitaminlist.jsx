// components/VitaminsList.js
import React from 'react';
import { vitamins } from './Vitanin';

const VitaminsList = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Vitamin Deficiencies and Related Diseases</h1>
      {vitamins.map((vitamin, index) => (
        <div key={index} className="mb-6 p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold">{vitamin.name}</h2>
          <p className="font-medium mt-2">{vitamin.deficiency}</p>
          <ul className="list-disc list-inside mt-2">
            {vitamin.diseases.map((disease, i) => (
              <li key={i} className="text-lg">{disease}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default VitaminsList;
