import { useState, useEffect } from 'react';
import imageSlide from '../../Data/Data';
import FlexTwoColumnLayout from '../FlexTwoColumnLayout/FlexTwoColumnLayout';
import Main from '../PhotoHoverText/PhotoHoverText';
import Scroll from '../scroll/Scroll';
import Contact from '../Contectus/Content';
import Testimonials from '../Test/Test';
import faqimg from '../../assets/service.png';
import FaqList from '../Faq/FaqList';
import Count from '../Faq/count';
import BmrCalculator from '../scroll/Bmr';
import Pop from '../pop/Popup'


const Home = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prev) => (prev === imageSlide.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
  };

  const goToNext = (index) => {
    setCurrentState(index);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  

  return (
    <>
      <section id="Home">
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover  bg-center transition-opacity duration-1000"
            style={bgImageStyle}
          ></div>
          <div className="absolute inset-0 m-24 text-white p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{imageSlide[currentState].title}</h1>
            <p className="text-lg font-bold md:text-4xl">{imageSlide[currentState].body}</p>
            <br />
            <button  onClick={openPopup} className="bg-white text-green-400 font-bold py-2 px-4 rounded hover:bg-gray-200">
              Book your appointment
            </button>
            <Pop isOpen={isPopupOpen} onClose={closePopup} />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {imageSlide.map((_, index) => (
              <span
                key={index}
                onClick={() => goToNext(index)}
                className={`cursor-pointer h-4 w-4 rounded-full transition-colors ${
                  index === currentState ? 'bg-white' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <header className="App-header p-10 justify-center items-center text-center bg-yellow-400">
        <h1 className="text-4xl font-bold mb-4 text-white">Photo</h1>
        <Main />
      </header>

      <header className="App-header p-10 justify-center items-center text-center bg-yellow-400">
        <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
        <FlexTwoColumnLayout />
      </header>

  

      <header className="App-header  justify-center items-center text-center bg-yellow-400">
        <h1 className="text-4xl font-bold mb-4 text-white">BMR Calculator</h1>
        <BmrCalculator />
      </header>

      <section className="bg-green-600">
        <div className="flex justify-between p-20 gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block justify-center">
            <img className="bottom-10" src={faqimg} alt="FAQ" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-white">OUR SERVICES</h2>
            <FaqList />
          </div>
        </div>
      </section>

      <Count />

      <header className="App-header justify-center items-center text-center bg-green-600">
        <Contact />
      </header>

      <header className="App-header justify-center items-center text-center">
        <Testimonials />
      </header>
      
    </>
  );
};

export default Home;
