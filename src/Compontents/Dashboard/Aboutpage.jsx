// components/AboutPage/AboutPage.js
import React from 'react';
import { useParams } from 'react-router-dom';


const users = [
  { id: 1, name: 'User One', email: 'userone@example.com', bio: 'Bio of User One' },
  { id: 2, name: 'User Two', email: 'usertwo@example.com', bio: 'Bio of User Two' },
  { id: 3, name: 'User Three', email: 'userthree@example.com', bio: 'Bio of User Three' },
  { id: 4, name: 'User Four', email: 'userfour@example.com', bio: 'Bio of User Four' },
  { id: 5, name: 'User Five', email: 'userfive@example.com', bio: 'Bio of User Five' },
];

const AboutPage = () => {
  const { userId } = useParams();
  const user = users.find((u) => u.id === parseInt(userId, 10));

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className={`p-6`}>
      <h2 className={`text-2xl font-bold mb-2`}>{user.name}</h2>
      <p className={`mb-4`}>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default AboutPage;
