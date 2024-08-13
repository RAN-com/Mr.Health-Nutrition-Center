import React, { useState } from 'react';
// import { db, collection, addDoc } from '../Auth/Firebase'; // Import Firebase config

const Form = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "80aabc5e-20ba-479e-9dee-8d35559fb77d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    mobileNo: '',
    email: '',
    purposeOfVisit: '',
    age: '',
    height: '',
    weight: '',
    targetWeight: '',
    fat: '',
    bmi: '',
    bmr: '',
    energyLevel: '',
    bodyPain: '',
    vitamins: '',
    nutritionSupplements: '',
    prescribedMedicines: '',
    headaches: '',
    appetite: '',
    sleep: '',
    regularExercise: '',
    breathingIssues: '',
    allergies: '',
    wakeUpTime: '',
    teaCoffee: '',
    snacks: '',
    breakfast: '',
    lunch: '',
    dinner: '',
    outsideFood: '',
    vegetarian: false,
    nonVegetarian: false,
    waterIntake: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleYesNoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setResult('Sending....');
      const docRef = await addDoc(collection(db, "formData"), formData);
      setResult('Form Submitted Successfully');
      console.log("Document written with ID: ", docRef.id);
      e.target.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
      setResult('Error submitting form');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
      <form  onSubmit={onSubmit} className="space-y-6">
        {/* Form fields here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="mobileNo">Mobile No</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="purposeOfVisit">Purpose of Visit</label>
            <input
              type="text"
              id="purposeOfVisit"
              name="purposeOfVisit"
              value={formData.purposeOfVisit}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Body Composition Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="height">Height (cm or inches)</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="weight">Weight (kg or lbs)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="targetWeight">Target Weight (kg or lbs)</label>
            <input
              type="number"
              id="targetWeight"
              name="targetWeight"
              value={formData.targetWeight}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fat">Fat (%)</label>
            <input
              type="number"
              id="fat"
              name="fat"
              value={formData.fat}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bmi">BMI</label>
            <input
              type="number"
              id="bmi"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bmr">BMR</label>
            <input
              type="number"
              id="bmr"
              name="bmr"
              value={formData.bmr}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Health Condition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="energyLevel">Energy Level (1-10)</label>
            <input
              type="number"
              id="energyLevel"
              name="energyLevel"
              value={formData.energyLevel}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bodyPain">Body Pain</label>
            <input
              type="text"
              id="bodyPain"
              name="bodyPain"
              value={formData.bodyPain}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="vitamins">Do you take any vitamins?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="vitamins"
                  value="yes"
                  checked={formData.vitamins === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="vitamins"
                  value="no"
                  checked={formData.vitamins === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="nutritionSupplements">Do you take any nutrition supplements?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="nutritionSupplements"
                  value="yes"
                  checked={formData.nutritionSupplements === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="nutritionSupplements"
                  value="no"
                  checked={formData.nutritionSupplements === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="prescribedMedicines">Do you take any prescribed medicines?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="prescribedMedicines"
                  value="yes"
                  checked={formData.prescribedMedicines === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="prescribedMedicines"
                  value="no"
                  checked={formData.prescribedMedicines === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="headaches">Do you experience headaches?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="headaches"
                  value="yes"
                  checked={formData.headaches === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="headaches"
                  value="no"
                  checked={formData.headaches === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="appetite">Do you have appetite issues?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="appetite"
                  value="yes"
                  checked={formData.appetite === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="appetite"
                  value="no"
                  checked={formData.appetite === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="sleep">Do you have sleep issues?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="sleep"
                  value="yes"
                  checked={formData.sleep === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="sleep"
                  value="no"
                  checked={formData.sleep === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="regularExercise">Do you exercise regularly?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="regularExercise"
                  value="yes"
                  checked={formData.regularExercise === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="regularExercise"
                  value="no"
                  checked={formData.regularExercise === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="breathingIssues">Do you have any breathing issues?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="breathingIssues"
                  value="yes"
                  checked={formData.breathingIssues === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="breathingIssues"
                  value="no"
                  checked={formData.breathingIssues === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="allergies">Do you have any allergies?</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="allergies"
                  value="yes"
                  checked={formData.allergies === 'yes'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="allergies"
                  value="no"
                  checked={formData.allergies === 'no'}
                  onChange={handleYesNoChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Typical Daily Diet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="wakeUpTime">Wake-up Time</label>
            <input
              type="time"
              id="wakeUpTime"
              name="wakeUpTime"
              value={formData.wakeUpTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="teaCoffee">Tea/Coffee (times/day)</label>
            <input
              type="number"
              id="teaCoffee"
              name="teaCoffee"
              value={formData.teaCoffee}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="snacks">Snacks (times/day)</label>
            <input
              type="number"
              id="snacks"
              name="snacks"
              value={formData.snacks}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="breakfast">Breakfast (items)</label>
            <input
              type="text"
              id="breakfast"
              name="breakfast"
              value={formData.breakfast}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="lunch">Lunch (items)</label>
            <input
              type="text"
              id="lunch"
              name="lunch"
              value={formData.lunch}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="dinner">Dinner (items)</label>
            <input
              type="text"
              id="dinner"
              name="dinner"
              value={formData.dinner}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="waterIntake">Water Intake (liters/day)</label>
            <input
              type="number"
              step="0.1"
              id="waterIntake"
              name="waterIntake"
              value={formData.waterIntake}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>

        {/* Result Message */}
        {result && <div className="mt-4 text-center">{result}</div>}
      </form>
    </div>
  );
};

export default Form;
