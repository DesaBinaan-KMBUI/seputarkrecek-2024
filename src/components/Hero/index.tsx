import React, { useState, useEffect } from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";

const Hero: React.FC = () => {
  const images = [
    "/images/hero1.png",
    "/images/hero2.png",
    "/images/hero3.png",
    "/images/hero4.png",
    "/images/hero5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Slide */}
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 ml-14 mt-8">
          <div className="relative p-8 w-[550px] rounded-lg max-w-2xl bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Lorem Ipsum
            </h1>
            <p className="text-white text-lg mb-6 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-[#84b230] hover:bg-[#658e22] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 text-lg [text-shadow:_0_1px_1px_rgba(0,0,0,0.2)]">
              See More
            </button>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPreviousSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 ml-3 bg-gray-200 bg-opacity-30 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
        >
          <span className="text-gray-600 text-xl"><ChevronLeft /></span>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 mr-5 bg-gray-200 bg-opacity-30 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
        >
          <span className="text-gray-600 text-xl"><ChevronRight /></span>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 w-full flex justify-center space-x-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white scale-150" : "bg-gray-500"
              } transition-transform duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
