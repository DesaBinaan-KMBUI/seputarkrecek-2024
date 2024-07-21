import Image from "next/image";

export default function CTASection() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-10 px-6 md:px-24 py-10 md:py-20">
      <div className="w-full xl:w-1/2">
        <h1 className="font-clash font-semibold text-6xl md:text-[80px] text-blue-900 leading-tight md:leading-[89.60px]">
          Yuk kenali Dusun Krecek!
        </h1>
        <p className="text-deep-cove-900 tracking-wide mt-4 mb-8 md:mb-12 font-dm text-base md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w-full md:w-3/4  xl:w-1/2 relative md:mt-4">
        <Image
          src="/images/CTA.png"
          width={1173}
          height={640}
          alt="cta"
          className="p-2 md:p-10 relative z-30"
        />
        <div className="absolute scale-95 w-full h-2/3 bg-gradient-to-l from-lime-500 to-lime-900 top-1/2 -translate-y-1/2 rotate-[-18deg] z-0"></div>
      </div>
    </div>
  );
}
