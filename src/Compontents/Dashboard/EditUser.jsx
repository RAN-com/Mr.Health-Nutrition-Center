// components/EditUser/EditUser.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Initialize with user data
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  // Fetch user data based on `id` and update state here
  // Example:
  // useEffect(() => {
  //   fetch(`/api/users/${id}`)
  //     .then(response => response.json())
  //     .then(data => setUser(data));
  // }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data
    // Example:
    // fetch(`/api/users/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(user),
    // }).then(() => navigate(`/about/${id}`));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="border p-2 rounded"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="border p-2 rounded"
          placeholder="Email"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUser;
