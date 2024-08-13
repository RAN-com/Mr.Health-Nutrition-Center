import React from 'react';
import { Link } from 'react-router-dom';


const users = [
  { id: 1, name: 'Vijayakumari', photo: '../../../public/vijayakumari-1.png', description: 'Description for User One' },
  { id: 2, name: 'Vasanthakumari', photo: '../../../public/vasanthakumari.png', description: 'Description for User Two' },
  { id: 3, name: 'Kavitha', photo: '../../../public/kavitha.png', description: 'Description for User Four' },
  { id: 4, name: 'Vijay', photo: '../../../public/vijay.png', description: 'Description for User Three' },
 { id: 5, name: 'Ragul', photo: '../../../public/rahul.png', description: 'Description for User Five' },
 { id: 6, name: 'Sarasakalamani', photo: '../../../public/sarasakalamani.png', description: 'Description for User Three' },

  
];


const Nutrition = (doctors) => {
  return (
    <>
    <h1 className='text-center font-bold text-3xl outline bg-green-500 p-10'>Our WellnessCoach</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-yellow-500">
     
      {users.map((user) => (
        <div key={user.id} className="bg-slate-600 rounded-lg justify-self-center items-center text-center p-5">
          <img src={user.photo} alt={user.name} className="w-80 h-80  rounded-lg" />
          
            <h2 className="text-xl font-bold text-white ">{user.name}</h2>
            <Link to={`/about/${user.id}`}>
              <button className="mt-4 bg-green-500  text-white py-2 px-4 rounded">
                View Profile
              </button>
            </Link>
          </div>
        
      ))}
    </div></>
  );
};

export default Nutrition;
