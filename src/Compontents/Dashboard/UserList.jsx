// components/UserList/UserList.js
import React from 'react';
import UserCard from '../Dashboard/Usercard';


const users = [
  { id: 1, name: 'User One', email: 'userone@example.com' },
  { id: 2, name: 'User Two', email: 'usertwo@example.com' },
  { id: 3, name: 'User Three', email: 'userthree@example.com' },
  { id: 4, name: 'User Four', email: 'userfour@example.com' },
  { id: 5, name: 'User Five', email: 'userfive@example.com' },
];

const UserList = () => {
  return (
    <div className={`p-6`}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
