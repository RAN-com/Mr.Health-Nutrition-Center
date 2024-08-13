import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'User One', photo: '/ayini.jpeg', description: 'Description for User One' ,link:'' },
  { id: 2, name: 'User Two', photo: '/ayini.jpeg', description: 'Description for User Two' },
  { id: 3, name: 'User Three', photo: '/ayini.jpeg', description: 'Description for User Three' },
  { id: 4, name: 'User Four', photo: '/ayini.jpeg', description: 'Description for User Four' },
  { id: 5, name: 'User Five', photo: '/ayini.jpeg', description: 'Description for User Five' },
];


const UsersList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={user.photo} alt={user.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <Link to={`/about/${user.id}`}>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                View Profile
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
