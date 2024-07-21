export default function Highlights() {
  return (
    <div className="relative w-full h-full">

        {/* Name  */}
        <h1 className="font-semibold text-deep-cove-900 font-clash text-center text-[80px] leading-[85px] justify-center flex">
            Ada apa saja di <br/>Dusun Krecek
        </h1>
        
        {/* Contents */}
        <section className="grid grid-cols-2 mt-10 font-clash">
            <div className="text-lg px-10 py-20 bg-gradient-to-l from-lime-500 to-lime-700 text-white text-right">
                LOREM IPSUM

                <h1 className="my-3 font-bold text-5xl">
                    Curug
                </h1>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="bg-gradient-to-tr from-lime-500 via-lime-300 to-lime-100">
                <img
                    className="h-full w-full object-cover"
                    src="/images/Hero3.png"
                    alt="curug" />
            </div>

            <div className="bg-gradient-to-tr from-lime-100 via-lime-300 to-lime-500">
                <img
                    className="h-full w-full object-cover"
                    src="/images/Hero3.png"
                    alt="vihara" />
            </div>
            <div className="text-lg px-10 py-20 bg-gradient-to-l from-lime-700 to-lime-500 text-white text-left">
                LOREM IPSUM
                
                <h1 className="my-3 font-bold text-5xl">
                    Vihara
                </h1>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className="text-lg px-10 py-20 bg-gradient-to-l from-lime-500 to-lime-700 text-white text-right">
                LOREM IPSUM

                <h1 className="my-3 font-bold text-5xl">
                    Kuda Lumping
                </h1>


                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="bg-gradient-to-tr from-lime-500 via-lime-300 to-lime-100">
                <img
                    className="h-full w-full object-cover"
                    src="/images/Hero3.png"
                    alt="kuda-lumping" />
            </div>

            <div className="bg-gradient-to-tr from-lime-100 via-lime-300 to-lime-500">
                <img
                    className="h-full w-full object-cover"
                    src="/images/Hero3.png"
                    alt="tarian-horotoyo" />
            </div>
            <div className="text-lg px-10 py-20 bg-gradient-to-l from-lime-700 to-lime-500 text-white text-left">
                LOREM IPSUM

                <h1 className="my-3 font-bold text-5xl">
                    Tarian Horotoyo
                </h1>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </div>
        </section>
    </div>
  );
}
