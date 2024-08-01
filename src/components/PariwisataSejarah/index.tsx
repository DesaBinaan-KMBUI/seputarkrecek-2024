import Image from "next/image";

export default function PariwisataSejarahHero() {
  const images = "/images/pariwisata-sejarah/Hero.jpg";

  return (
    <div className="relative w-screen h-screen overflow-hidden mb-10">
      <div className="relative w-full h-full overflow-hidden">
        <div className="slide w-full h-full flex" >
            <div className="w-full h-full flex-shrink-0 relative">
              <Image
                src={images}
                alt={`pariwisata-sejarah`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
        </div>

        {/* Content overlay} */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-0 flex flex-col justify-center items-start ml-4 md:p-8 md:ml-14  md:mt-8">
          <div className="relative px-10 py-4 rounded-lg max-w-2xl bg-gradient-to-r backdrop-blur-sm">
            <h1 className="font-semibold text-[32px] md:text-[55px] mt-16 text-white mb-4 drop-shadow-lg font-clash [text-shadow:_0px_1px_2px_rgba(0,0,0,0.9)]">
              Pariwisata & Sejarah Dusun Krecek
            </h1>
            <p className="text-gray-200 w-[90%] md:w-full text-lg md:text-xl tracking-wide font-semibold mb-6 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)] text-justify">
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
    </div>
  );
};