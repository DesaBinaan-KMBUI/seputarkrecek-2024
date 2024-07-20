import Image from "next/image";

const ProdukPangan: React.FC = () => {
    const images = [
        "/images/hero1.png",
    ];
    return (
        <div className="flex min-h-screen flex-col items-center">
            <div className="relative w-screen h-screen overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                    <div
                        className="slide w-full h-full flex"

                    >

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
                </div>
            </div>
            <div className="flex flex-col my-16 justify-between items-center text-center h-full">
                <h1 className="text-4xl font-ClashDisplay text-deep-cove-900 font-semibold">Komoditas Pangan</h1>
                <h1 className="text-4xl font-ClashDisplay text-deep-cove-900 font-semibold">Dusun Krecek</h1>
            </div>
        </div>
    )
}

export default ProdukPangan;
