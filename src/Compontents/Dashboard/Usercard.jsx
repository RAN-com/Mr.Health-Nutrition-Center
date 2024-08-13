// components/UserCard/UserCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase-config'; // Adjust the import path as needed

const UserCard = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);
  const [newImage, setNewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      let imageUrl = editableUser.profilePicture;

      // If there's a new image, upload it
      if (newImage) {
        const imageRef = ref(storage, `profile_pictures/${newImage.name}`);
        await uploadBytes(imageRef, newImage);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Save updated user data
      // Example of saving user data with the updated image URL
      // await fetch(`/api/users/${user.id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ ...editableUser, profilePicture: imageUrl }),
      // });

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col items-center">
      {/* User Image */}
      <img
        src={newImage ? URL.createObjectURL(newImage) : editableUser.profilePicture}
        alt={`${editableUser.name}'s profile`}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      {/* User Information */}
      {isEditing ? (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />
          <input
            type="text"
            name="name"
            value={editableUser.name}
            onChange={handleChange}
            className="border p-2 rounded mb-2 w-full"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={editableUser.email}
            onChange={handleChange}
            className="border p-2 rounded mb-4 w-full"
            placeholder="Email"
          />
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">{editableUser.name}</h2>
          <p className="mb-4 text-gray-700">{editableUser.email}</p>
        </>
      )}
      {/* Action Buttons */}
      <div className="flex space-x-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        )}
        <Link
          to={`/about/${editableUser.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
