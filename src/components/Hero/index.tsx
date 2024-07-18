import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  const images = [
    "/images/hero1.png",
    "/images/hero2.png",
    "/images/hero3.png",
    "/images/hero4.png",
    "/images/hero5.png",
  ];

  const totalImages = images.length;
  const extendedImages = [images[totalImages - 1], ...images, images[0]];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionStyle, setTransitionStyle] = useState("transform 0.5s ease");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const moveHandler = (direction: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionStyle("transform 0.5s ease");
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 1));

    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1));
    }
  };

  const transitionEndHandler = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(extendedImages.length - 2);
      setTransitionStyle('none');
      return;
    }

    if (currentIndex === extendedImages.length - 1) {
      setCurrentIndex(1);
      setTransitionStyle('none');
      return;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setTransitionStyle("transform 0.5s ease");
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <div className="relative w-full h-full">
        <div
          className="slide w-full h-full flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitionStyle,
          }}
          onTransitionEnd={transitionEndHandler}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
        </div>

        {/* Content overlay} */}
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
          className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 ml-3 bg-gray-200 bg-opacity-30 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
          onClick={() => moveHandler('left')}
        >
          <ChevronLeft />
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 mr-5 bg-gray-200 bg-opacity-30 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
          onClick={() => moveHandler('right')}
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom-8 w-full flex justify-center space-x-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + 1)}
              className={`w-2 h-2 rounded-full ${(currentIndex === index + 1) ||
                (currentIndex === 0 && index === images.length - 1) ||
                (currentIndex === extendedImages.length - 1 && index === 0)
                ? "bg-white scale-150"
                : "bg-gray-500"
                } transition-transform duration-300`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;
