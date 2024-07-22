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
    const items = [
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
        { name: "Keripik Kentang", image: "/images/Hero3.png", price: "Rp 50000" },
    ];
    const totalSlides = 3;
    const cardEachSide = Math.floor(totalSlides / 2);
    console.log("cardEachSide", cardEachSide);

    const calculateRotation = (position: number) => {
        const distance = ((position - goToSlide) + totalSlides) % totalSlides;
        if (position === goToSlide) return 0;
        return distance > cardEachSide ? -25 : 25;
    };

    const slides = Array.from({ length: totalSlides }, (_, index) => ({
        key: index,
        content: (
            <CarouselCard
                first={index === goToSlide}
                rotation={calculateRotation(index)}
            />
        ),
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
            <section className="relative w-screen h-screen overflow-hidden">
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

                    <div className="absolute top-1/2 -translate-y-1/2 inset-0 flex flex-col justify-center items-start ml-4 md:p-8 md:ml-14 md:mt-8">
                        <div className="relative px-10 py-4 rounded-lg max-w-2xl bg-gradient-to-r backdrop-blur-sm">
                            <h1 className="font-semibold text-[55px] mt-16 text-white mb-4 drop-shadow-lg font-clash [text-shadow:_0px_1px_2px_rgba(0,0,0,0.9)]">
                                Komoditas Pangan & Produk UMKM Dusun Krecek
                            </h1>

                            <p className="text-gray-200 w-[90%] md:w-full text-xl tracking-wide font-semibold mb-6 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)] text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <button className="bg-[#84b230] hover:bg-[#658e22] text-white font-semibold tracking-wide py-2 md:py-3 px-6 rounded-md shadow-md transition duration-300 text-lg [text-shadow:_0_1px_1px_rgba(0,0,0,0.2)]">
                                See More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-y-52  min-h-5xl my-16 justify-between items-center text-center">
                <div className="mb-28">
                    <h1 className="text-[80px] font-clash text-deep-cove-900 font-semibold">
                        Komoditas Pangan
                    </h1>
                    <h1 className="text-[80px] font-clash text-deep-cove-900 font-semibold">
                        Dusun Krecek
                    </h1>
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
                <div className="flex justify-center flex-col text-center items-center">
                    <h1 className="text-[80px] font-clash text-deep-cove-900 font-semibold">
                        Lorem Ipsum
                    </h1>
                    <h1 className="w-[66%] text-[24px] font-dm text-deep-cove-900 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </h1>
                </div>
            </section>

            <section className="grid grid-cols-2 mt-10 font-clash w-full h-full">
                <div className="text-lg px-10 py-20 bg-gradient-to-l from-lime-500 to-lime-700 text-white text-left">
                    LOREM IPSUM
                    <h1 className="my-3 font-bold text-5xl">Kopi Kinasih</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </div>
                <div className="bg-gradient-to-tr from-lime-500 via-lime-300 to-lime-100">
                    <img
                        className="h-full w-full object-cover"
                        src="/images/Hero3.png"
                        alt="kopi"
                    />
                </div>
            </section>

            <section className="flex flex-col my-16 w-full items-center text-center">
                <div className="mb-16">
                    <h1 className="text-[80px] font-clash text-deep-cove-900 font-semibold">
                        UMKM Dusun Krecek
                    </h1>
                </div>

                <div className="flex w-full justify-center items-center">
                    <div className="grid grid-cols-4 gap-16  justify-center">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col w-[280px] gradient-border rounded-xl bg-white"
                            >
                                <div className="flex gap-4 py-8 px-8 w-full flex-col">
                                    <div className="relative w-full h-[200px]">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            layout="fill"
                                            objectFit="cover"
                                            priority
                                        />
                                    </div>

                                    <div className="font-clash text-deep-cove-900 font-semibold text-left">
                                        <h1 className="leading-[30px]">{item.name}</h1>
                                        <h1 className="leading-[30px]">{item.price}</h1>
                                    </div>

                                    <button className="bg-conifer-600 px-10 py-2 text-white font-clash rounded-lg">
                                        Beli
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ProdukPangan;
