import Image from "next/image";

export default function LandmarkCard() {
  return (
    <div className="flex justify-center items-center p-4 md:p-10 ">
      <div
        className="flex justify-center items-center pb-20
                      flex-wrap md:flex-nowrap px-4 md:px-40 gap-8 md:gap-5 w-1/2 xl:w-2/3"
      >
        <CardElement url="/images/Hero2.jpg" />
        <CardElement url="/images/Hero3.jpg" />
        <CardElement url="/images/Hero4.jpg" />
        <CardElement url="/images/Hero5.jpg" />
      </div>
    </div>
  );
}

function CardElement({ url }: { url: string }) {
  return (
    <div className="relative cursor-pointer rounded-xl flex w-[350px] md:w-[350px] lg:w-[450px] shrink hover:shrink-0 transition-all h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-gray-300">
      <Image
        src={url}
        width={500}
        height={1000}
        alt="img"
        className="w-full absolute top-0 left-0 h-full object-cover object-center"
      />
    </div>
  );
}
