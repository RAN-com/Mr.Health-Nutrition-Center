import React from 'react';
import img1 from '../../../public/1.png'
import img2 from '../../../public/2.png'
import img3 from '../../../public/3.png'
import img4 from '../../../public/4.png'
import img5 from '../../../public/5.png'
import img6 from '../../../public/6.png'
const UserCard = ({ user }) => (
  <div className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105  flex flex-col items-center">
    <div className='w-full h-80 overflow-hidden relative mb-4'>
      <img src={user.img} alt={`${user.name}'s profile`} className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
   
    <div className="absolute inset-0  items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
    <img className='w-20 h-auto p-3' src='../../../public/mr1.png'/>
      <div className="text-white text-center items-center justify-center p-4">
   
        <p className="text-lg font-semibold">{user.name}</p>
        <p>{user.text}</p>
      </div>
    </div>
  </div>
);

const UserCardsGrid = () => {
  const users = [
    { id: 1, img: img1,  },
    { id: 2, img: img2, },
    { id: 3, img: img3,  },
    { id: 4, img: img4, },
    { id: 5, img: img5,  },
    { id: 6, img: img6,  },
  ];

  return (
    <>
      <h1 className='text-center text-4xl font-bold text-yellow-300 mb-8'>Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default UserCardsGrid;
