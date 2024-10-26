import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  const images = [
    "/images/Hero1.jpg",
    "/images/Hero2.jpg",
    "/images/Hero3.jpg",
    "/images/Hero4.jpg",
    "/images/Hero5.jpg",
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
    if (direction === "left") {
      setCurrentIndex((prevIndex) => {
        return (prevIndex - 1 + extendedImages.length) % extendedImages.length;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % extendedImages.length;
      });
    }
  };

  const transitionEndHandler = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(extendedImages.length - 2);
      setTransitionStyle("none");
      return;
    }

    if (currentIndex === extendedImages.length - 1) {
      setCurrentIndex(1);
      setTransitionStyle("none");
    }
  };

  const scrollToTarget = () => {
    const target = document.getElementById("yuk-kenali");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setTransitionStyle("transform 0.5s ease");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedImages.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [extendedImages.length, isTransitioning]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
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
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 inset-0 flex flex-col justify-center items-start ml-4 md:p-8 md:ml-14  md:mt-8">
          <div className="relative px-10 py-4 rounded-lg max-w-2xl bg-gradient-to-r backdrop-blur-sm">
            <h1 className="font-semibold text-[40px] mt-16 md:mt-0 md:text-[80px] text-white mb-4 drop-shadow-lg font-clash [text-shadow:_0px_1px_2px_rgba(0,0,0,0.9)]">
              Dusun Krecek
            </h1>
            <p className="text-gray-200 w-[90%] md:w-full text-lg md:text-xl tracking-wide font-semibold mb-6 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)] text-justify">
              Destinasi kaya budaya di mana tradisi Jawa dan agama Buddha
              berpadu. Nikmati acara adat unik seperti Kendurian dan Anjangsana.
              Mari jelajahi kekayaan budaya Dusun Krecek dan rasakan kehangatan
              komunitas kami!
            </p>
            <button
              onClick={scrollToTarget}
              className="bg-[#A17858] hover:bg-[#2F2014] text-white font-semibold tracking-wide py-2 md:py-3 px-6 rounded-md shadow-md transition duration-300 text-lg [text-shadow:_0_1px_1px_rgba(0,0,0,0.2)]"
            >
              See More
            </button>
          </div>
        </div>
        <button
          className="absolute top-1/2 -translate-y-1/2 left-1 md:left-4 w-10 h-10 md:ml-3 bg-gray-200 bg-opacity-30 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
          onClick={() => moveHandler("left")}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-1 md:right-4 w-10 h-10 mr-4 xl:mr-5 bg-gray-200 bg-opacity-30 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
          onClick={() => moveHandler("right")}
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom-24 md:bottom-12 w-full flex justify-center space-x-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + 1)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index + 1 ||
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
