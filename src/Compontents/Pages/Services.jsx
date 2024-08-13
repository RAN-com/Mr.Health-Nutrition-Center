import React from 'react'
import Contact from './Contact'
import FaqList from '../Faq/FaqList'
import backgroundImage from '../../assets/Rectangle 7.png'
import foregroundImage from '../../assets/service.png'
import UserCardsGrid from '../user/Result'
const Services = () => {
  return (
    <section className='bg-green-600 '>
      <div className="flex justify-between p-14 gap-[50px] lg:gap-0">
        <div className='w-1/2 hidden md:block bottom-7 '>
        <div className=' relative  md:w-1/2  justify-center items-center p-4'>
      
        {/* Layer 1: Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="max-w-2xl h-auto object-cover"
        />
        {/* Layer 2: Foreground Image */}
        <img
          src={foregroundImage}
          alt="Doctor"
          className="absolute inset-0 m-auto w-64 md:w-80 left-20 h-auto object-contain"
        />
      </div>
      </div>
      
      <div className='w-full md:w-1/2'>
      <h2 className='text-4xl font-bold mb-4'>OUR SERVICES</h2>

      <FaqList/>
      </div>
      </div>
      < UserCardsGrid/>
     </section>
  )
}

export default Services