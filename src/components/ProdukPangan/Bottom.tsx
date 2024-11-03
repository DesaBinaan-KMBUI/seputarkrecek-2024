import Image from "next/image";
import { CardProps } from "./interface";

const Bottom = ({ items }: { items: CardProps[] }) => {
  return (
    <section className="flex relative overflow-hidden flex-col mt-8 md:mt-4 pb-20 w-full items-center text-center">
      <div className="mb-14 md:mb-20 px-4">
        <h1 className="text-[40px] md:text-[80px] font-clash text-[#8D804F] font-semibold">
          UMKM Dusun Krecek
        </h1>
      </div>

      <div className="flex z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 ">
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
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div className="font-clash text-[#2F2014] font-semibold text-left">
                  <h1 className="leading-[30px]">{item.name}</h1>
                </div>

                <a
                  href="https://wa.me/6282133400212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2F2014] px-10 py-2 text-white font-dm font-semibold rounded-lg text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-50px] md:bottom-[-70px] xl:bottom-[-150px] left-0 w-full">
        <Image
          src="/wavy.svg"
          alt="hero"
          layout="responsive"
          width={1000}
          height={300}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Bottom;
