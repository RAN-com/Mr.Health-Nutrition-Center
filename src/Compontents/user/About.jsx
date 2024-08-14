import React from 'react';
import { useParams, Link } from 'react-router-dom';
import img1 from '../../../public/vijayakumari-1.png';
import img2 from '../../../public/vasanthakumari.png';
import img3 from '../../../public/kavitha.png';
import img4 from '../../../public/vijay.png';
import img5 from '../../../public/sarasakalamani.png';
import img6 from '../../../public/rahul.png';
import img11 from '../../../public/0.png';
import img12 from '../../../public/8.png';
import img13 from '../../../public/9.png';
import img14 from '../../../public/7.png';

const users = [
  { id: 1, name: 'Vijaykumari', photo: img1, qphoto: img1, Resultphoto: img11, Results: 'Weight Loss - 15Kg', Header: 'Roles and Responsibilities of a Wellness Coach', description: 'Personalized Guidance, Health and Nutrition Advice, Behavioral Change, Stress Management, Lifestyle Management, Educational Support, Health Monitoring', link: "https://koalendar.com/e/meet-with-mrhealth-nutrition-center" },
  { id: 2, name: 'Vasanthakumari', photo: img2, qphoto: img2, Resultphoto: img12, Results: 'Weight Loss - 14kg', Header: 'Roles and Responsibilities of a Wellness Coach', description: 'Personalized Guidance, Health and Nutrition Advice, Behavioral Change, Stress Management, Lifestyle Management, Educational Support, Health Monitoring', link: "https://koalendar.com/e/meet-with-mrhealth-nutrition-center-koaxk4Sk" },
  { id: 3, name: 'Kavitha', photo: img3, qphoto: img3, Resultphoto: img13, Results: 'Weight Loss - 33kg', Header: 'Roles and Responsibilities of a Wellness Coach', description: 'Personalized Guidance, Health and Nutrition Advice, Behavioral Change, Stress Management, Lifestyle Management, Educational Support, Health Monitoring', link: "https://koalendar.com/e/meet-with-mrhealth-nutrition-center-koaolOAa" },
  { id: 4, name: 'Vijay', photo: img4, qphoto: '', Resultphoto: '', Results: 'Weight Loss-8kg', Header: 'Roles and Responsibilities of a Wellness Coach', description: 'Personalized Guidance, Health and Nutrition Advice, Behavioral Change, Stress Management, Lifestyle Management, Educational Support, Health Monitoring', link: "https://koalendar.com/e/meet-with-mrhealth-nutrition-center-koaZ4J6E" },
  { id: 5, name: 'Ragul', photo: img6, qphoto: '', Resultphoto: '', Results: 'Weight Gain-7kg', Header: 'Roles and Responsibilities of a Wellness Coach', description: 'Personalized Guidance, Health and Nutrition Advice, Behavioral Change, Stress Management, Lifestyle Management, Educational Support, Health Monitoring', link: "https://koalendar.com/e/meet-with-mrhealth-nutrition-center-koa4YMUf" },
  { id: 6, name: 'Sarasakalamani', photo: img5, qphoto: img5, Resultphoto: img14, Results: 'Weight Loss - 11kg', Header: 'Roles and Responsibilities of a Wellness Coach', description: 'Personalized Guidance, Health and Nutrition Advice, Behavioral Change, Stress Management, Lifestyle Management, Educational Support, Health Monitoring', link: "https://koalendar.com/e/meet-with-sarasakalamani" },
];

const About = () => {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return <p className="text-center text-lg text-red-500">User not found</p>;
  }

  return (
    <div className="min-h-screen bg-yellow-500 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row">
        <div className="sm:flex-1 flex flex-col items-center justify-center p-4">
          <img className="w-32 h-32 sm:w-40 sm:h-40 max-w-xs rounded-full mb-6" src={user.photo} alt={`${user.name}'s photo`} />
          <div className="p-4 text-center sm:text-left">
            <div className='flex flex-col-2 sm:flex-row gap-4 sm:gap-5 mb-6'>
              {user.Resultphoto && (
                <img
                  className="w-32 h-32 sm:w-48 sm:h-48 max-w-xs mb-4 sm:mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={user.Resultphoto}
                  alt={`${user.name}'s result photo`}
                />
              )}
              {user.qphoto && (
                <img
                  className="w-32 h-32 sm:w-48 sm:h-48 max-w-xs mb-4 sm:mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={user.qphoto}
                  alt={`${user.name}'s additional photo`}
                />
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">About Us</h1>
            <div className='flex flex-col sm:flex-row gap-4 items-center'>
              <h1 className="text-xl sm:text-2xl font-bold">{user.name}</h1>
              <p className="p-1 font-bold text-sm sm:text-lg text-gray-800 bg-green-200 border border-yellow-400 rounded-lg shadow-md mt-2 sm:mt-4 inline-block">
                Wellness Coach
              </p>
            </div>
            <h4 className="font-bold mt-2 sm:mt-4">{user.Results}</h4>
            <h2 className='font-bold mt-2 sm:mt-4'>{user.Header}</h2>
            <p className="mt-2">{user.description}</p>
            <br />
            <Link to={`/Detalis`}>
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-sm sm:text-base">
                More
              </button>
            </Link>
          </div>
        </div>

        <div className="sm:flex-1 flex items-center justify-center p-4">
          <div className="w-full flex flex-col items-center p-4">
            <h1 className='font-bold text-gray-700 text-center text-xl sm:text-2xl p-5'>Book Our Wellness Coach</h1>
            <iframe src={user.link} width="100%" height="400px" frameBorder="0" title="Booking" className="rounded-lg"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
