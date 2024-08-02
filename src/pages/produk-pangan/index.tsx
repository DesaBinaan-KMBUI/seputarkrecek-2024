import React, { useState } from "react";
import dynamic from "next/dynamic";
import { config } from "react-spring";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCard from "@/components/Carousel3D/card";
import HeroProdukPangan from "@/components/ProdukPangan/Hero";
import Image from "next/image";
import Bottom from "@/components/ProdukPangan/Bottom";
const Carousel = dynamic(() => import("@/components/Carousel3D"), {
    ssr: false,
});

const ProdukPangan = () => {
    const [goToSlide, setGoToSlide] = useState(0);

    const items = [
        { name: "Gethuk", image: "/images/produk-pangan/umkm/Gethuk.jpg" },
        { name: "Greenbean", image: "/images/produk-pangan/umkm/Greenbean.jpg" },
        { name: "Gula Semut", image: "/images/produk-pangan/umkm/gulasemut.jpg" },
        { name: "Keripik Singkong", image: "/images/produk-pangan/umkm/keripiksingkong.jpeg" },
        { name: "Roastbean", image: "/images/produk-pangan/umkm/Roastbean.jpg" },
    ];



    const totalSlides = 6;
    const cardEachSide = Math.floor(totalSlides / 2);

    const calculateRotation = (position: number) => {
        const distance = ((position - goToSlide) + totalSlides) % totalSlides;
        if (position === goToSlide) return 0;
        return distance > cardEachSide ? -25 : 25;
    };

    const dataCarousel = [
        {
            key: 0, image: "/images/produk-pangan/carousel/kopi.jpg", title: "Ceri Kopi Robusta", description:
                "Komoditas unggulan Dusun Krecek yang dihasilkan melalui proses penanaman yang telaten dan terjaga, menghadirkan cita rasa yang istimewa"
        },
        {
            key: 1, image: "/images/produk-pangan/carousel/cabe.jpg", title: "Cabe", description:
                "Cabe segar dari Dusun Krecek, ideal untuk menambah rasa masakan sehari-hari dan membantu penduduk setempat"
        },
        {
            key: 2, image: "/images/produk-pangan/carousel/jagung.jpg", title: "Jagung", description:
                "Jagung dari Dusun Krecek, pilihan sehat untuk konsumsi harian sekaligus meningkatkan pendapatan warga"
        },
        {
            key: 3, image: "/images/produk-pangan/carousel/timun.jpg", title: "Timun",
            description: "Timun dari Dusun Krecek, ideal untuk salad segar dan mendukung komunitas lokal guna mendukung kebutuhan konsumsi sehari-hari warga sekaligus menambah penghasilan mereka"
        },
        {
            key: 4, image: "/images/produk-pangan/carousel/pare.jpg", title: "Pare",
            description: "Pare dari Dusun Krecek, sayuran yang berguna untuk berbagai hidangan dan mendukung ekonomi lokal"
        },
        {
            key: 5, image: "/images/produk-pangan/carousel/manggis.jpg", title: "Manggis",
            description: "Manggis dari Dusun Krecek, buah manis yang bermanfaat untuk konsumsi sehari-hari dan memberikan kontribusi pada perekonomian warga"
        },
    ]

    const slides = Array.from({ length: totalSlides }, (_, index) => ({
        key: index,
        content: (
            <CarouselCard
                first={index === goToSlide}
                rotation={calculateRotation(index)}
                imageUrl={dataCarousel[index].image}
            />
        ),
    }));


    const swipeLeft = () => {
        setGoToSlide((goToSlide - 1 + totalSlides) % totalSlides);
    };

    const swipeRight = () => {
        setGoToSlide((goToSlide + 1) % totalSlides);
    };

    return (
        <div className="flex min-h-screen flex-col ">
            <HeroProdukPangan />

            <section className="flex flex-col gap-y-52 min-h-5xl my-10 md:my-16 justify-center items-center text-center">
                <div className="mb-14 md:mb-28 px-4">
                    <h1 className="text-[40px] md:text-[80px] font-clash text-deep-cove-900 font-semibold">
                        Komoditas Pangan
                    </h1>
                    <h1 className="text-[40px] md:text-[80px] font-clash text-deep-cove-900 font-semibold">
                        Dusun Krecek
                    </h1>
                </div>

                <div className="relative flex justify-center w-full  mb-14 md:mb-28">
                    <div className="flex flex-row justify-between px-2 md:px-4 w-full md:w-[80%]">

                        <button
                            className=" z-20  bg-gray-200 bg-opacity-30 p-2 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
                            onClick={swipeLeft}
                        >
                            <ChevronLeft />
                        </button>
                        <div className=" w-full md:w-5/6 xl:w-[70%] ">
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
                            className="z-20  bg-gray-200 bg-opacity-30 p-2 rounded-full flex items-center justify-center border border-black hover:bg-opacity-50 transition-opacity"
                            onClick={swipeRight}
                        >
                            <ChevronRight />
                        </button>


                    </div>
                </div>

                <div className="flex w-full justify-center flex-col items-center">
                    <h1 className="text-[40px] md:text-[80px] font-clash text-deep-cove-900 font-semibold">
                        {dataCarousel[goToSlide].title}
                    </h1>
                    <h1 className="w-[80%] md:w-[66%] text-[24px] font-dm text-deep-cove-900 font-normal text-center">
                        {dataCarousel[goToSlide].description}
                    </h1>
                </div>
            </section>


            <section className="grid grid-cols-1 md:grid-cols-2 my-10 md:my-6 font-clash w-full h-full">
                <div className="text-lg px-4 md:px-10 py-20 bg-gradient-to-l from-lime-500 to-lime-700 text-white text-left">
                    <p>Produk Unggulan</p>
                    <h1 className="my-3 font-bold text-5xl">Kopi Kinasih</h1>
                    <p>Kopi Kinasih merupakan salah satu kopi robusta yang diolah langsung dari Dusun Krecek, Temanggung, Jawa Tengah. Dibuat dengan bijih kopi pilihan, cita rasa kopi kinasih pun bervariasi tergantung dari cara pengolahan biji kopi pasca panen. Ada yang mempunyai rasa yang cenderung manis dan seperti coklat, rasa yang agak asam seperti wine, rasa seperti buah beri ataupun kombinasi dari beberapa macam rasa yang seimbang.</p>
                    <p className="pt-4 font-bold">Pricelist:</p>
                    <ul>
                        <li>Kopi bubuk - 150gr</li>
                        <li>Varian kopi bubuk yang tersedia antara lain:</li>
                        <li>Honey → 30k</li>
                        <li>Natural → 27k</li>
                        <li>Natural Lanang → 34k</li>
                        <li>Wine → 37k</li>
                    </ul>
                </div>
                <div className="relative w-full h-64 md:h-full bg-gradient-to-tr from-lime-500 via-lime-300 to-lime-100">
                    <Image
                        src="/images/produk-pangan/kopi-kinasih.png"
                        alt="Kopi Kinasih"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            <Bottom items={items} />


        </div>
    );
};

export default ProdukPangan;
