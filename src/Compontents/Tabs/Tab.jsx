import { useState, useEffect } from 'react';
import boy from '../../assets/boy.png';
import './Tab.css';

const Tab = () => {
  const [toggle, setToggle] = useState(1);

  const finalClientCount = 150;
  const finalSubscriberCount = 300;
  const finalSalesCount = 120;
  const finalLoginCount = 450;

  const [clientCount, setClientCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [salesCount, setSalesCount] = useState(0);
  const [loginCount, setLoginCount] = useState(0);

  useEffect(() => {
    const incrementCount = (setter, finalValue) => {
      let current = 0;
      const increment = finalValue / 100;
      const interval = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
          setter(finalValue);
          clearInterval(interval);
        } else {
          setter(Math.ceil(current));
        }
      }, 20);
    };

    incrementCount(setClientCount, finalClientCount);
    incrementCount(setSubscriberCount, finalSubscriberCount);
    incrementCount(setSalesCount, finalSalesCount);
    incrementCount(setLoginCount, finalLoginCount);
  }, []);

  return (
    <>
      <div className="flex flex-col p-4 bg-green-700">
        <div className="flex flex-col md:flex-row">
          {/* Column 1 */}
          <div className="md:w-1/2 p-10">
            <h2 className="text-4xl font-bold mb-4 text-cyan-50">Our Services</h2>
            <div className={toggle === 1 ? "show-content" : 'content'}>
              <h1 className="text-cyan-100 text-2xl font-bold mb-4">Weight loss</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={toggle === 2 ? "show-content" : 'content'}>
              <h1>Weight gain</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="content">
              <h1>Weight</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Additional content sections */}
          </div>

          {/* Column 2 */}
          <div className="md:w-2/3 p-4">
            <div className="hexagonarea first">
              <div className="hexagon1 hover:bg-white">
                <img className="hexa" src={boy} onClick={() => setToggle(1)} />
              </div>
            </div>
            <div className="hexagonarea first">
              <div className="hexagon2 hover:bg-white">
                <img className="hexa" src={boy} onClick={() => setToggle(1)} />
              </div>
              <div className="hexagon2 hover:bg-white">
                <img className="hexa1" src={boy} onClick={() => setToggle(2)} />
              </div>
            </div>
            <div className="hexagonarea first">
              <div className="hexagon3 hover:bg-white">
                <img className="hexa" src={boy} onClick={() => setToggle(1)} />
              </div>
              <div className="hexagon3 hover:bg-white">
                <img className="hexa1" src={boy} onClick={() => setToggle(2)} />
              </div>
              <div className="hexagon3 hover:bg-white">
                <img className="hexa2" src={boy} onClick={() => setToggle(3)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="../../../public/Rectangle 109.png" className="w-full" />
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <p className="text-2xl font-bold mb-8">vbsdvsdvs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36 h-96 justify-center items-center text-center">
        <div>
          <p className="text-3xl font-bold">{clientCount}+</p>
          <h2 className="text-xl font-semibold mb-2">Client Count</h2>
        </div>
        <div>
          <p className="text-3xl font-bold">{subscriberCount}+</p>
          <h2 className="text-xl font-semibold mb-2">Subscriber Count</h2>
        </div>
        <div>
          <p className="text-3xl font-bold">{salesCount}+</p>
          <h2 className="text-xl font-semibold mb-2">Sales Count</h2>
        </div>
        <div>
          <p className="text-3xl font-bold">{loginCount}+</p>
          <h2 className="text-xl font-semibold mb-2">Login Count</h2>
        </div>
      </div>
    </>
  );
};

export default Tab;
