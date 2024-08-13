import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close"
        >
          &times;
        </button>
        <iframe
          src="https://koalendar.com/e/mrhealth-nutrition-center?embed=true"
          width="100%"
          height="400px"
          frameBorder="0"
          title="Nutrition Center Calendar"
          className="rounded-lg"
        ></iframe>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
