import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate(`/about/${user.id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-60">
      <img src={user.photo} alt={user.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{user.name}</h2>
      <button onClick={handleAboutClick} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        About
      </button>
    </div>
  );
};

export default UserCard;
