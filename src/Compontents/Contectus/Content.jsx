import React from 'react';



const Contact = () => {
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
    }}
  return (
    <div>
    <div className="min-h-full bg-cover bg-center " style={{ backgroundImage: "url('../../../public/image7.png') "
        
     }}>
      <h2 className="text-4xl font-bold mb-4 p-10 bg-green-500   text-white">Contact Us</h2>
    <div className="p-4 flex flex-col md:flex-row">
      {/* Contact Us Column */}
      <div className="md:w-1/2 p-4 bg-gray-700 bg-opacity-80 rounded-lg shadow-md">
        
      <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name "
              className="w-full p-2 text-white bg-slate-700  rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 text-white bg-slate-700  rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 text-white bg-slate-700  rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-2 text-white bg-slate-700  rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
      
      {/* Map Column */}
      <div className="md:w-1/2 p-4">
      
        <div className="w-full h-full bg-gray-200 rounded-lg">
          {/* Example placeholder for map */}
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.561762330932!2d79.13052131082469!3d10.768218559300344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab90017719471%3A0xa7400bd52847d526!2sMr.Health%20Nutrition%20centre!5e0!3m2!1sen!2sin!4v1722756675187!5m2!1sen!2sin"
            className="w-full h-full border-none rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    
  </div></div>
  )
};

export default Contact;
