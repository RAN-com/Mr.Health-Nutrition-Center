import React, { useState } from 'react';
import bmrImage from '../../../public/Asset1@4x2.png'; // Correct image path
import img1 from '../../../public/Asset1@4x1.png';

// Example thresholds (Adjust based on accurate guidelines)
const BMI_THRESHOLDS = {
  low: 18.5,
  high: 24.9
};

const BMR_THRESHOLDS = {
  low: 1200,
  high: 2000
};

// Visceral fat thresholds for illustration
const VISCERAL_FAT_THRESHOLDS = {
  low: 10,
  high: 20
};

const getBmiIndicatorColor = (bmi) => {
  if (bmi < BMI_THRESHOLDS.low) return 'bg-red-500'; // Underweight
  if (bmi > BMI_THRESHOLDS.high) return 'bg-red-500'; // Overweight
  return 'bg-green-500'; // Normal
};

const getBmrIndicatorColor = (bmr) => {
  if (bmr < BMR_THRESHOLDS.low) return 'bg-red-500'; // Low BMR
  if (bmr > BMR_THRESHOLDS.high) return 'bg-red-500'; // High BMR
  return 'bg-green-500'; // Normal BMR
};

const getVisceralFatIndicatorColor = (visceralFat) => {
  if (visceralFat < VISCERAL_FAT_THRESHOLDS.low) return 'bg-green-500'; // Normal
  if (visceralFat > VISCERAL_FAT_THRESHOLDS.high) return 'bg-red-500'; // High Visceral Fat
  return 'bg-yellow-500'; // Elevated
};

const BMRCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [visceralFat, setVisceralFat] = useState(null);
  const [error, setError] = useState('');

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleGenderChange = (e) => setGender(e.target.value);

  const calculateMetrics = () => {
    if (weight && height && age && gender) {
      // Calculate BMI
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      // Calculate BMR
      let bmrValue;
      if (gender === 'male') {
        bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else if (gender === 'female') {
        bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      } else {
        setError('Please select a gender.');
        return;
      }
      setBmr(bmrValue.toFixed(2));

      // Estimate body fat percentage using BMI
      const bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - (10.8 * (gender === 'male' ? 1 : 0)) - 5.4;

      // Estimate visceral fat
      // Note: This is a rough estimate and may not be accurate without additional measurements
      const visceralFatEstimate = bodyFatPercentage * 0.1; // Simple scaling for example
      setVisceralFat(visceralFatEstimate.toFixed(2));

      setError('');
    } else {
      setError('Please enter weight, height, age, and gender.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-600 p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl w-full shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-2">
          <img
            src={img1}
            alt="Example"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 text-white">
          <h2 className="text-4xl font-bold mb-4">BMR & BMI Calculator</h2>
          <p className="text-2xl font-semibold mb-4">
            Calculate both your BMR (Basal Metabolic Rate) and BMI (Body Mass Index) with this tool.
          </p>
          <button
            onClick={toggleContent}
            className="text-xl font-bold bg-transparent border-4 rounded-full border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
          >
            {isOpen ? 'Close' : 'Calculate Your BMR & BMI'}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-full p-5' : 'max-h-0'}`}
      >
        <div className="bg-transparent p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row h-auto">
            {/* Input Column */}
            <div className="md:w-1/3 p-4 h-auto">
              <h2 className="text-xl font-bold mb-4 text-white">BMR & BMI Calculator</h2>
              {error && <p className="text-red-500 mb-4 bg-red-200 p-2 rounded">{error}</p>}
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
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={handleGenderChange}
                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-lg font-semibold text-gray-700">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={handleGenderChange}
                    className="form-radio h-4 w-4 border-gray-300 focus:ring-2 focus:ring-pink-500"
                  />
                  <span className="ml-2 text-lg font-semibold text-gray-700">Female</span>
                </label>
              </fieldset>
              <button
                onClick={calculateMetrics}
                className="text-xl font-bold bg-transparent border-4 rounded-full border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
              >
                Calculate BMR & BMI
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

            {/* Output Column */}
            <div className="md:w-1/3 p-4">
              <h2 className="text-xl font-bold mb-4 text-white">BMI Results</h2>
              <div className={`bg-${bmi !== null ? getBmiIndicatorColor(bmi) : 'bg-gray-100'} p-4 rounded-lg shadow-md mb-4`}>
                {bmi !== null ? (
                  <p className="text-lg text-white">Your BMI is <strong>{bmi}</strong>.</p>
                ) : (
                  <p className="text-lg text-center text-black">No BMI result yet.</p>
                )}
              </div>
              <h2 className="text-xl font-bold mb-4 text-white">BMR Results</h2>
              <div className={`bg-${bmr !== null ? getBmrIndicatorColor(bmr) : 'bg-gray-100'} p-4 rounded-lg shadow-md mb-4`}>
                {bmr !== null ? (
                  <p className="text-lg text-white">Your BMR is <strong>{bmr}</strong> calories/day.</p>
                ) : (
                  <p className="text-lg text-center text-black">No BMR result yet.</p>
                )}
              </div>
              <h2 className="text-xl font-bold mb-4 text-white">Visceral Fat</h2>
              <div className={`bg-${visceralFat !== null ? getVisceralFatIndicatorColor(visceralFat) : 'bg-gray-100'} p-4 rounded-lg shadow-md mb-4`}>
                {visceralFat !== null ? (
                  <p className="text-lg text-white">Estimated Visceral Fat is <strong>{visceralFat}</strong>.</p>
                ) : (
                  <p className="text-lg text-center text-black">No visceral fat result yet.</p>
                )}
              </div>
              <a href='' className="text-xl font-bold mb-4 text-white cursor-pointer">Whole Body Check</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMRCalculator;
