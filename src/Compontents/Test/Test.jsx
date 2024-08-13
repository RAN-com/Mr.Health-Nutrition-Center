import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  { name: "Vijayakumari", text: "Wegiht Loss-80kg To 65Kg", image: "/file.png" },
  { name: "Kavitha", text: "Incredible experience.", image: "/public/kavitha.png" },
  { name: "Vsanthakumari", text: "Top-notch support!", image: "/public/vasanthakumari.png" },
  { name: "Ragul", text: "Loved the quality.", image: "/public/rahul.png" },
  { name: "Vijay", text: "Exceptional results.", image: "/public/vijay.png" },
  { name: "sarasakalamani", text: "Would recommend.", image: "/public/sarasakalamani.png" },
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-yellow-400">
      <h2 className="text-6xl font-bold mb-4 text-white">Our Happy Clients</h2>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="relative -skew-x-8 p-6 bg-slate-300 border  border-green-600 shadow-lg rounded-lg transition-transform transform "
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover transition-transform transform hover:scale-110"
                />
                <p className="text-lg font-semibold mb-2">{testimonial.name}</p>
                {/* <p className="text-gray-600">{testimonial.text}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
