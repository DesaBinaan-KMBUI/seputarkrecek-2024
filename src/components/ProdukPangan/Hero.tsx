import Image from "next/image";
const HeroProdukPangan = () => {
  const scrollToTarget = () => {
    const target = document.getElementById("komoditas");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="bg-[#relative w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <div className="slide w-full h-full flex">
          <div className="w-full h-full flex-shrink-0 relative">
            <Image
              src="/images/produk-pangan/Hero.jpg"
              alt={"Hero Image"}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 inset-0 flex flex-col justify-center items-start ml-4 md:p-8 md:ml-14 md:mt-8">
          <div className="relative px-10 py-4 rounded-lg max-w-2xl bg-gradient-to-r backdrop-blur-sm">
            <h1 className="font-semibold text-[28px] md:text-[55px] mt-16 text-white mb-4 drop-shadow-lg font-clash [text-shadow:_0px_1px_2px_rgba(0,0,0,0.9)]">
              Komoditas Pangan & Produk UMKM Dusun Krecek
            </h1>

            <p className="text-gray-200 w-[90%] md:w-full text-xl tracking-wide font-semibold mb-6 [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)] text-justify">
              Dusun Krecek memiliki berbagai komoditas pangan yang unggul dan
              produk UMKM yang berkualitas. Temukan berbagai produk pangan lokal
              yang khas dan unik di Dusun Krecek.
            </p>

            <button
              onClick={scrollToTarget}
              className="bg-[#A17858] hover:bg-[#2F2014] text-white font-semibold tracking-wide py-2 md:py-3 px-6 rounded-md shadow-md transition duration-300 text-lg [text-shadow:_0_1px_1px_rgba(0,0,0,0.2)]"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProdukPangan;
