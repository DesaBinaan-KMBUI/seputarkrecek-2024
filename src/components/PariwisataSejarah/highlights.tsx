import { description } from "./description";

export default function Highlights() {
    return (
        <div id="pariwisata" className="bg-[#F6ECE3] relative w-full h-full">
            <h1 className="font-semibold text-[#8D804F] font-clash text-center text-[40px] md:text-[80px] leading-[85px] justify-center flex">
                Ada apa saja di <br />Dusun Krecek
            </h1>


            <section className="grid grid-cols-1 md:grid-cols-2 mt-10 font-clash">
                <div className="text-lg px-10 py-20 gradient-background text-white md:text-right">
                    {description[0].type}
                    <h1 className="my-3 font-bold text-5xl">
                        {description[0].name}
                    </h1>
                    {description[0].description}
                </div>

                <div className="relative mb-5 md:mb-0 w-full h-[300px] md:h-full">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/images/pariwisata-sejarah/highlights/Curug.jpg"
                        alt="curug" />
                </div>

                <div className="relative h-[300px] md:h-full w-full">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/images/pariwisata-sejarah/highlights/Vihara.JPG"
                        alt="vihara" />
                </div>

                <div className="text-lg px-10 py-20 gradient-background-2 text-white text-left mb-5 md:mb-0">
                    {description[1].type}
                    <h1 className="my-3 font-bold text-5xl">
                        {description[1].name}
                    </h1>
                    {description[1].description}
                </div>

                <div className="text-lg px-10 py-20 gradient-background text-white md:text-right">
                    {description[2].type}
                    <h1 className="my-3 font-bold text-5xl">
                        {description[2].name}
                    </h1>
                    {description[2].description}
                </div>

                <div className="relative mb-5 md:mb-0 w-full h-[300px] md:h-full">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/images/pariwisata-sejarah/highlights/Kuda-Lumping.jpg"
                        alt="kuda-lumping" />
                </div>

                <div className="relative h-[300px] md:h-full w-full">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/images/pariwisata-sejarah/highlights/Horotoyo.JPG"
                        alt="tarian-horotoyo" />
                </div>

                <div className="text-lg px-10 py-20 gradient-background-2 text-white text-left">
                    {description[3].type}
                    <h1 className="my-3 font-bold text-5xl">
                        {description[3].name}
                    </h1>
                    {description[3].description}
                </div>
            </section>
        </div>
    );
}
