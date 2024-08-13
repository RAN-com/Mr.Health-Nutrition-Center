import React from 'react';


const cardsData = [
  {
    id: 1,
    photo: 'https://via.placeholder.com/150',
    name: 'John Doe',
    about: 'This is a short description about John Doe.',
  },
  {
    id: 2,
    photo: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    about: 'This is a short description about Jane Smith.',
  },
  {
    id: 3,
    photo: 'https://via.placeholder.com/150',
    name: 'Alice Johnson',
    about: 'This is a short description about Alice Johnson.',
  },
  {
    id: 4,
    photo: 'https://via.placeholder.com/150',
    name: 'Bob Brown',
    about: 'This is a short description about Bob Brown.',
  },
  {
    id: 5,
    photo: 'https://via.placeholder.com/150',
    name: 'Charlie Black',
    about: 'This is a short description about Charlie Black.',
  },
  {
    id: 6,
    photo: 'https://via.placeholder.com/150',
    name: 'David White',
    about: 'This is a short description about David White.',
  },
  {
    id: 7,
    photo: 'https://via.placeholder.com/150',
    name: 'Eva Green',
    about: 'This is a short description about Eva Green.',
  },
  {
    id: 8,
    photo: 'https://via.placeholder.com/150',
    name: 'Frank Blue',
    about: 'This is a short description about Frank Blue.',
  },
  {
    id: 9,
    photo: 'https://via.placeholder.com/150',
    name: 'Grace Red',
    about: 'This is a short description about Grace Red.',
  },
  {
    id: 10,
    photo: 'https://via.placeholder.com/150',
    name: 'Helen Yellow',
    about: 'This is a short description about Helen Yellow.',
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 backdrop-brightness-50">
      {cardsData.map((card) => (
        <div key={card.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <img src={card.photo} alt={card.name} className="w-32 h-32 object-cover rounded-full mb-4" />
          <h2 className="text-xl font-bold mb-2">{card.name}</h2>
          <p className="text-gray-600 mb-4">{card.about}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Book</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
