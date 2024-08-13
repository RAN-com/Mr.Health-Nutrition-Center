import React, { useState } from 'react';
import backgroundImage from '../../../public/Asset1@4x1.png'; // Correct image path
import bmiImage from '../../../public/Asset1@4x2.png'; // Correct image path

const Scroll = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleGenderChange = (e) => setGender(e.target.value);

  const calculateBMI = () => {
    if (!weight || !height) {
      setError('Please enter both weight and height.');
      return;
    }
    if (isNaN(weight) || isNaN(height)) {
      setError('Please enter valid numeric values.');
      return;
    }
    setError('');
    const heightInMeters = height / 100; // Convert height to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-600 p-2 rounded-t-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl w-full shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-2">
          <img
            src={backgroundImage}
            alt="Example"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 text-white">
          <h2 className="text-4xl font-bold mb-4">Responsive Layout</h2>
          <p className="text-2xl font-semibold mb-4">
            This is an example of a responsive layout using Tailwind CSS. The layout consists of two columns: one for the image and one for the text content.
          </p>
          <p className="text-lg mb-4">
            The layout adjusts automatically to different screen sizes. On smaller screens, the image and text stack vertically. On larger screens, they are displayed side by side.
          </p>
          <button
            onClick={toggleContent}
            className="text-xl font-bold bg-transparent border-4 rounded-full border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
          >
            {isOpen ? 'Close' : 'Check Your BMI'}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen p-4' : 'max-h-0'}`}
      >
        <div className="bg-transparent p-4 rounded-lg shadow-md">
          <div className="min-h-screen p-4 flex flex-col md:flex-row">
            {/* Input Column */}
            <div className="md:w-1/3 p-4">
              <h2 className="text-xl font-bold mb-4 text-white">BMI Calculator</h2>
              {error && <p className="text-red-500">{error}</p>}
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2 text-white">Weight (kg)</label>
                <input
                  type="number"
                  aria-label="Weight"
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-full mb-4"
                />
                <label className="block text-lg font-semibold mb-2 text-white">Height (cm)</label>
                <input
                  type="number"
                  aria-label="Height"
                  placeholder="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-full mb-4"
                />
              </div>
              <fieldset className="mb-4">
                <legend className="text-lg font-semibold mb-2 text-white">Gender</legend>
                <label className="block mb-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                    className="mr-2 "
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </fieldset>
              <button
                onClick={calculateBMI}
                className="text-xl font-bold bg-transparent border-4 rounded-full border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
              >
                Calculate BMI
              </button>
            </div>

            {/* Image Column */}
            <div className="md:w-2/3 p-4 flex items-center justify-center">
              <img
                src={bmiImage}
                alt="BMI Illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* BMI Output Column */}
            <div className="md:w-1/3 p-4">
              <h2 className="text-xl font-bold mb-4 text-white">BMI Output</h2>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                {bmi !== null ? (
                  <p className="text-lg">Your BMI is <strong>{bmi}</strong>.</p>
                ) : (
                  <p className="text-lg text-center text-white">No result yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
