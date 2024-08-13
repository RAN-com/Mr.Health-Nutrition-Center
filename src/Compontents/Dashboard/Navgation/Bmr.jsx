import React, { useState } from 'react';
import backgroundImage from '../../../assets/bmr.png'; // Correct image path
import bmrImage from '../../../assets/bmr.png'; // Correct image path

const Bmr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(null);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleGenderChange = (e) => setGender(e.target.value);

  const calculateBMR = () => {
    if (weight && height && age && gender) {
      let bmrValue;
      if (gender === 'male') {
        bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      setBmr(bmrValue.toFixed(2));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-600 p-2 rounded-t-full-">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl w-full shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-4">
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
            {isOpen ? 'Close' : 'Calculate Your BMR'}
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
              <h2 className="text-xl font-bold mb-4 text-white">BMR Calculator</h2>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2 text-white">Weight (kg)</label>
                <input
                  type="number"
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-full mb-4"
                />
                <label className="block text-lg font-semibold mb-2 text-white">Height (cm)</label>
                <input
                  type="number"
                  placeholder="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-full mb-4"
                />
                <label className="block text-lg font-semibold mb-2 text-white">Age (years)</label>
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                    className="mr-2"
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
                onClick={calculateBMR}
                className="text-xl font-bold bg-transparent border-4 rounded-full border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
              >
                Calculate BMR
              </button>
            </div>

            {/* Image Column */}
            <div className="md:w-2/3 p-4 flex items-center justify-center">
              <img
                src={bmrImage}
                alt="BMR Illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* BMR Output Column */}
            <div className="md:w-1/3 p-4">
              <h2 className="text-xl font-bold mb-4 text-white">BMR Output</h2>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                {bmr !== null ? (
                  <p className="text-lg">Your BMR is <strong>{bmr}</strong> calories/day.</p>
                ) : (
                  <p className="text-lg text-center text-black">No result yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmr;
