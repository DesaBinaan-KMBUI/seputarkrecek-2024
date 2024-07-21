import React, { useState } from "react";
import dynamic from "next/dynamic";
import { config } from "react-spring";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCard from "@/components/Carousel3D/card";

const Carousel = dynamic(() => import("@/components/Carousel3D"), {
    ssr: false,
});

const ProdukPangan = () => {
    const [goToSlide, setGoToSlide] = useState(0);
    const images = ["/images/hero1.png"];

    const totalSlides = 3;
    const cardEachSide = totalSlides / 2;

    const colors = [
        "#40571d",
        "#a2cd4e",
        "#a2cd4e",
    ];

    const calculateRotation = (position: number) => {
        const distance = ((position-goToSlide)+totalSlides)%totalSlides;

        if (position === goToSlide) return 0;
        return distance >= cardEachSide ? -25 : 25;
    };


    const slides = Array.from({ length: totalSlides }, (_, index) => ({
        key: index,
        content: <CarouselCard
            first={index===goToSlide}
            rotation={calculateRotation(index)}
        />,
    }));

    function swipeLeft() {
        if (goToSlide > 0) {
            setGoToSlide(goToSlide - 1);
        } else {
            setGoToSlide(totalSlides - 1);
        }
    }

    function swipeRight() {
        if (goToSlide + 1 < totalSlides) {
            setGoToSlide(goToSlide + 1);
        } else {
            setGoToSlide(0);
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center">
            <div className="relative w-screen h-screen overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="slide w-full h-full flex">
                        <div className="w-full h-full flex-shrink-0 relative">
                            <Image
                                src={images[0]}
                                alt={"Hero Image"}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>

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
                </div>
            </div>
            <div className="flex flex-col gap-y-52  min-h-5xl my-16 justify-between items-center text-center">
                <div className="mb-28">
                    <h1 className="text-[80px] font-clash text-deep-cove-900 font-semibold">Komoditas Pangan</h1>
                    <h1 className="text-[80px] font-clash text-deep-cove-900 font-semibold">Dusun Krecek</h1>

                </div>
                <div className="flex justify-between w-3/4 mb-28 ">
                    <button
                        className=" bg-gray-200 bg-opacity-30 p-2 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
                        onClick={swipeLeft}
                    >
                        <ChevronLeft />
                    </button>
                    <div className="w-3/4 ">
                    <Carousel
                        slides={slides}
                        goToSlide={goToSlide}
                        offsetRadius={2}

                        showNavigation={false}
                        animationConfig={config.gentle}
                        goToSlideDelay={100}
                    />

                    </div>

                    <button
                        className=" bg-gray-200 bg-opacity-30 p-2 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
                        onClick={swipeRight}
                    >
                        <ChevronRight />
                    </button>
                </div>
                <div className="flex justify-center flex-col text-center items-center" >
                    <h1 className="text-[80px] font-clash text-deep-cove-900 font-semibold">Lorem Ipsum</h1>
                    <h1 className="w-[66%] text-[24px] font-dm text-deep-cove-900 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h1>

                </div>
            </div>
        </div>
    );
};



export default ProdukPangan;
