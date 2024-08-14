import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../public/vijayakumari-1.png';
import img2 from '../../../public/vasanthakumari.png';
import img3 from '../../../public/kavitha.png';
import img4 from '../../../public/vijay.png';
import img5 from '../../../public/sarasakalamani.png';
import img6 from '../../../public/rahul.png';

const users = [
  { id: 1, name: 'Vijayakumari', photo: img1, description: 'Description for User One' },
  { id: 2, name: 'Vasanthakumari', photo: img2, description: 'Description for User Two' },
  { id: 3, name: 'Kavitha', photo: img3, description: 'Description for User Three' },
  { id: 4, name: 'Vijay', photo: img4, description: 'Description for User Four' },
  { id: 5, name: 'Ragul', photo: img6, description: 'Description for User Five' },
  { id: 6, name: 'Sarasakalamani', photo: img5, description: 'Description for User Six' },
];

const Nutrition = () => {
  return (
    <>
      <h1 className='text-center font-bold text-3xl bg-green-500 text-white p-10'>Our Wellness Coaches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-yellow-500">
        {users.map((user) => (
          <div key={user.id} className="relative rounded-lg bg-transparent p-5 text-center flex flex-col items-center overflow-hidden shadow-lg group">
            {/* Image Layer */}
            <Link to={`/about/${user.id}`} className="relative w-full h-full">
              <img 
                src={user.photo} 
                alt={user.name} 
                className="w-full h-auto sm:h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 flex flex-col items-center justify-end  bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-xl sm:text-2xl   font-bold mb-2">{user.name}</h1>
                <p className="p-1 font-bold text-sm sm:text-lg bg-green-200 border border-yellow-400 rounded-lg shadow-md">
                  Wellness Coach
                </p>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-sm sm:text-base transition duration-300 ease-in-out">
                  View Profile
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nutrition;
