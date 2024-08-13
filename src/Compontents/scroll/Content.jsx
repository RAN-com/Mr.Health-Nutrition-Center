// App.js
import React, { useState } from 'react';
import './co.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center">
        <div className="min-h-screen flex items-center justify-center p-4">
      <button className="hexagon-button">
        Click Me
      </button>
    </div>
      <button
        onClick={toggleContent}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
      >
        {isOpen ? 'Close Content' : 'Open Content'}
      </button>
      
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-screen p-4' : 'max-h-0'
        }`}
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="min-h-screen p-4 flex flex-col md:flex-row">
      {/* Input Column */}
      <div className="md:w-1/3 p-4">
        <h2 className="text-xl font-bold mb-4">Input</h2>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Calculate BMI
        </button>
      </div>
      
      {/* Image Column */}
      <div className="md:w-1/3 p-4 flex items-center justify-center">
        <img
          src="https://via.placeholder.com/300x300"
          alt="BMI Illustration"
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      {/* BMI Output Column */}
      <div className="md:w-1/3 p-4">
        <h2 className="text-xl font-bold mb-4">BMI Output</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {bmi !== null ? (
            <p className="text-lg">Your BMI is <strong>{bmi}</strong>.</p>
          ) : (
            <p className="text-lg">Enter your details and click "Calculate BMI" to see your result.</p>
          )}
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default App;
