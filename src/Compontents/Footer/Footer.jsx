import React from 'react';
import { FaYoutube,FaPhone, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/mr1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Image */}
          <div className="flex justify-center md:justify-start items-center">
            <img
              src={logo}
              alt="Company Logo"
              className="w-32 h-auto"
            />
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@Mr.healthNutritionCentre" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/m_r_health_nutrition/" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            
            </div>
            <a href="https://api.whatsapp.com/send/?phone=919944687081&text=Hi%2C+I+am+interested+in+your+product%2Fservice%3A+WEIGHT+LOSS.+Please+provide+more+details.&type=phone_number&app_absent=0" className="text-gray-400 hover:text-white">
                Contact us: 9944687081
              </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm underline">© 2024 RAN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
