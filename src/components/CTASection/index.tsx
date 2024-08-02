import Image from "next/image";

export default function CTASection() {
  return (
    <div id="yuk-kenali" className="flex flex-col xl:flex-row bg-[#F6ECE3] items-center justify-center gap-10 px-6 md:px-24 py-10 md:py-20">
      <div className="w-full xl:w-1/2">
        <h1 className="font-clash  font-semibold text-[40px] md:text-[80px] text-[#8D804F] leading-tight md:leading-[89.60px]">
          Yuk kenali Dusun Krecek!
        </h1>
        <p className="text-[#8D804F] tracking-wide mt-4 mb-8 md:mb-12 font-dm text-base md:text-2xl">
        Sebuah dusun yang kaya akan tradisi Buddhisme dan destinasi wisata yang cocok untuk meningkatkan pengalaman spiritual atau sekedar mendekatkan diri dengan alam. Temui warga yang ramah dan nikmati kekayaan pertanian lokal, termasuk Kopi Robusta yang khas dan berbagai komoditas pangan lainnya.
        </p>
      </div>
      <div className="w-full md:w-3/4  xl:w-1/2 relative md:mt-4">
        <Image
          src="/images/yuk-kenali.jpg"
          width={1173}
          height={640}
          alt="cta"
          className="p-2 md:p-10 relative z-30"
        />
        <div className="absolute scale-95 w-full h-2/3 gradient-background top-1/2 -translate-y-1/2 rotate-[-18deg] z-0"></div>
      </div>
    </div>
  );
}
