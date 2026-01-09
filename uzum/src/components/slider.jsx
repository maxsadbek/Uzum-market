import { useState, useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slider1 from "../Images/slider1.jpg";
import Slider2 from "../Images/slider2.jpg";
import Slider3 from "../Images/slider3.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [Slider1, Slider2, Slider3];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative z-11 group w-full lg:max-w-[1240px] mx-auto mt-4 px-4 ">
      <div className="relative w-full h-[200px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Banner ${index}`}
              className="w-full h-full object-cover flex-shrink-0 cursor-pointer"
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white cursor-pointer hidden md:group-hover:flex items-center justify-center transition-all duration-300"
        >
          <GoChevronLeft size={30} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white cursor-pointer hidden md:group-hover:flex items-center justify-center transition-all duration-300"
        >
          <GoChevronRight size={30} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index ? "bg-violet-600 w-6" : "bg-gray-300 w-2"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
