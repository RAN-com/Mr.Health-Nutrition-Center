// NutritionInfo.js
import React, { useState } from 'react';
import axios from 'axios';

const NutritionInfo = () => {
  const [food, setFood] = useState('');
  const [nutrition, setNutrition] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`YOUR_API_ENDPOINT`, {
        params: { query: food },
        headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
      });
      setNutrition(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        className="border p-2 rounded"
        placeholder="Enter food name"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Search
      </button>
      {nutrition && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-lg font-bold">{nutrition.foodName}</h2>
          <p>Calories: {nutrition.calories}</p>
          <p>Protein: {nutrition.protein}g</p>
          <p>Fat: {nutrition.fat}g</p>
          <p>Carbs: {nutrition.carbs}g</p>
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;
