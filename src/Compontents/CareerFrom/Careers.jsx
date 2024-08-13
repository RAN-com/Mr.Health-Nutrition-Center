import React, { useState } from 'react';


const CareersForm = () => {
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
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className={`max-w-md mx-auto p-10 bg-white shadow-lg rounded-lg `}>
      <h2 className={`text-2xl font-bold mb-4`}>Apply for a Wellness Coach</h2>
      <form onSubmit={onSubmit} className={`space-y-4`}>
        <div className={`flex flex-col`}>
          <label htmlFor="name" className={`mb-1 font-semibold`}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`p-2 border border-gray-300 rounded`}
            required
          />
        </div>
        
        <div className={`flex flex-col`}>
          <label htmlFor="email" className={`mb-1 font-semibold`}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 border border-gray-300 rounded`}
            required
          />
        </div>
        
        <div className={`flex flex-col`}>
          <label htmlFor="phone" className={`mb-1 font-semibold`}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`p-2 border border-gray-300 rounded`}
          />
        </div>
        
        <div className={`flex flex-col`}>
          <label htmlFor="coverLetter" className={`mb-1 font-semibold`}>Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className={`p-2 border border-gray-300 rounded h-32`}
          />
        </div>

        <button
          type="submit"
          className={`w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600`}
        >
          Submit Application
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default CareersForm;
