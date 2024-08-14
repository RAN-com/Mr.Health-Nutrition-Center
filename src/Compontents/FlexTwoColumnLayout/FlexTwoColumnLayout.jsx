import {Link} from 'react-router-dom';
import backgroundImage from '../../assets/Rectangle 7.png';
import foregroundImage from '../../assets/Female-Doctor-PNG-Pic 1.png';

const FlexTwoColumnLayout = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center p-10 bg-green-700">
      {/* Left Column - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center ">
        {/* Layer 1: Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-auto object-cover"
        />
        {/* Layer 2: Foreground Image */}
        <img
          src={foregroundImage}
          alt="Doctor"
          className="absolute inset-0 m-auto w-4/5 md:w-3/5 h-auto object-contain"
        />
      </div>

      {/* Right Column - Text Content */}
      <div className="w-full md:w-1/2 p-6 md:p-16 bg-green-700 rounded-lg text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">About Us</h2>
        <h3 className="text-xl font-semibold mb-4 text-white">Nutritionist</h3>
        <p className="text-lg text-white font-bold">
        A nutritionist is a professional who specializes in the science of nutrition and its application to health and wellness. They provide guidance on dietary practices, help individuals make informed food choices, and support overall health improvement. Here's a detailed look at what a nutritionist does and their role in health care:
        </p>
        <br/>
        <h1 className='text-2xl font-bold mb-4 text-yellow-500'> Personalized Nutrition Plans:</h1>
        <li className='text-lg text-white font-bold'>Custom Diet Plans: Develops tailored nutrition plans based on individual goals, such as weight management, disease prevention, or improvement of specific health conditions.
        </li>
        <br/>
        <li className='text-lg text-white font-bold'>Meal Planning: Provides guidance on meal planning and preparation to ensure balanced and nutritious eating.</li>
        <Link to={`/Detalis`}>
              <button className="mt-4 bg-green-500  text-white py-2 px-4 rounded">
                More
              </button>
            </Link>
      </div>
      
    </div>
  );
};

export default FlexTwoColumnLayout;
