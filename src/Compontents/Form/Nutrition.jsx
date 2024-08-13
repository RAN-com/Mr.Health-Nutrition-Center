// NutritionDeficiencies.js
import React from 'react';

const deficiencies = [
  {
    vitamin: 'Vitamin D',
    diseases: ['Osteoporosis', 'Rickets', 'Bone Pain'],
  },
  {
    vitamin: 'Iron',
    diseases: ['Anemia', 'Fatigue', 'Weakness'],
  },
  {
    vitamin: 'Vitamin B12',
    diseases: ['Anemia', 'Neuropathy', 'Fatigue'],
  },
  {
    vitamin: 'Calcium',
    diseases: ['Osteoporosis', 'Muscle Cramps', 'Tooth Decay'],
  },
  {
    vitamin: 'Vitamin A',
    diseases: ['Night Blindness', 'Dry Skin', 'Immune System Impairment'],
  },
  {
    vitamin: 'Iodine',
    diseases: ['Goiter', 'Hypothyroidism', 'Mental Impairment'],
  },
  {
    vitamin: 'Magnesium',
    diseases: ['Muscle Cramps', 'Fatigue', 'Heart Arrhythmia'],
  },
  {
    vitamin: 'Folate',
    diseases: ['Anemia', 'Birth Defects', 'Fatigue'],
  },
];

const NutritionDeficiencies = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nutrition Deficiencies and Related Diseases</h1>
      {deficiencies.map((item, index) => (
        <div key={index} className="mb-6 p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold">{item.vitamin} Deficiency</h2>
          <ul className="list-disc list-inside mt-2">
            {item.diseases.map((disease, i) => (
              <li key={i} className="text-lg">{disease}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NutritionDeficiencies;
