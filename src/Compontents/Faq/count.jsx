import { useEffect, useState } from 'react';

const Count = () => {
  const finalClientCount = 30;
  const finalSubscriberCount = 25;
  const finalSalesCount = 20;
  const finalLoginCount = 27;

  // State to track the current counts
  const [counts, setCounts] = useState({
    clientCount: 0,
    subscriberCount: 0,
    salesCount: 0,
    loginCount: 0,
  });

  useEffect(() => {
    const incrementCount = (key, finalValue) => {
      let current = 0;
      const increment = finalValue / 100;
      const interval = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
          setCounts((prev) => ({ ...prev, [key]: finalValue }));
          clearInterval(interval);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.ceil(current) }));
        }
      }, 20); // Update every 20ms for smooth animation
    };

    // Start counting animations
    incrementCount('clientCount', finalClientCount);
    incrementCount('subscriberCount', finalSubscriberCount);
    incrementCount('salesCount', finalSalesCount);
    incrementCount('loginCount', finalLoginCount);
  }, []);

  return (
    <div className='bg-slate-700 justify-center text-center '>
      <img src="/Rectangle 109.png" className="w-full mb-8" alt="Banner" />
      <h1 className="text-4xl font-bold mb-8 text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center items-center text-center p-20 text-white">
        
        <div>
          <p className="text-3xl font-bold">{counts.clientCount}+</p>
          <h2 className="text-xl font-semibold mb-2">Client Count</h2>
        </div>
        
        <div>
          <p className="text-3xl font-bold">{counts.subscriberCount}+</p>
          <h2 className="text-xl font-semibold mb-2">Subscriber Count</h2>
        </div>
        
        <div>
          <p className="text-3xl font-bold">{counts.salesCount}+</p>
          <h2 className="text-xl font-semibold mb-2"> Count</h2>
        </div>
        
        <div>
          <p className="text-3xl font-bold">{counts.loginCount}+</p>
          <h2 className="text-xl font-semibold mb-2">Login Count</h2>
        </div>
      </div>
    </div>
  );
};

export default Count;
