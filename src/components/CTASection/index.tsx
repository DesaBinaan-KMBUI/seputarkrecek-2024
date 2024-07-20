import Image from "next/image";

export default function CTASection() {
  return (
    <div className="flex items-center justify-center gap-10 px-24 py-20">
      <div className="w-1/2">
        <h1 className="font-clash font-semibold text-[80px] text-blue-900 leading-[89.60px]">
          Yuk kenali Dusun Krecek!
        </h1>
        <p className="text-deep-cove-900 tracking-wide mt-4 font-dm text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/images/CTA.png"
          width={1173}
          height={640}
          alt="cta"
          className="p-10 relative z-30"
        />
        <div className="absolute scale-95 w-full h-2/3 bg-gradient-to-l from-lime-500 to-lime-900 top-1/2 -translate-y-1/2 rotate-[-18deg] z-0"></div>
      </div>
    </div>
  );
}
