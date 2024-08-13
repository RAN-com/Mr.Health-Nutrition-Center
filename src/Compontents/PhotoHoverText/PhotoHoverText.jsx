import React from 'react';
import img1 from '../../assets/Card 1.png';
import img2 from '../../assets/Card 2.png';
import img3 from '../../assets/Card 3.png';
import icon from '../../assets/Asset2@4x3.png';

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-6">
      {/* Card 1 */}
      <div className="relative group">
        <img src={img1} alt="Card 1" className="rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white p-4 text-center">
            <img src={icon} alt="Icon" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Diet Plan</h1>
            <p></p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative group">
        <img src={img2} alt="Card 2" className="rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white p-4 text-center">
            <img src={icon} alt="Icon" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Fitness</h1>
            <p></p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative group">
        <img src={img3} alt="Card 3" className="rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white p-4 text-center">
            <img src={icon} alt="Icon" className="w-20 h-20 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Workout</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
