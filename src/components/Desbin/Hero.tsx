import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="mt-36 flex items-center justify-center gap-10 lg:flex-row flex-col">
        <Image
          src="/images/desbin.png"
          alt="logo desbin"
          width={256}
          height={256}
          className="rounded-full w-64 h-64"
        />

        <div className="lg:w-1/2 px-5 lg:px-0">
          <h1 className="text-center mb-3 text-[40px] md:text-[80px] leading-[1] font-clash text-[#8D804F] font-semibold">
            Desa Binaan KMBUI
          </h1>
          <p className="text-[#A17858] text-lg">
            Desa Binaan KMBUI merupakan salah satu program kerja dari departemen
            Pengembangan Sosial KMBUI yang berkolaborasi dengan warga Dusun
            Krecek (Jawa Tengah) untuk mengembangkan potensi desa secara penuh
            dan berkelanjutan.
          </p>
        </div>
      </div>
      <div className="justify-center flex flex-col items-center mt-20 mb-10 gap-5">
        <h1 className="font-clash text-[#ae9e63] text-xl">Didukung oleh</h1>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <img className="h-12" src="/images/sponsor/cdm.png" alt="sponsor" />
          <img className="h-12" src="/images/sponsor/mbi.png" alt="sponsor" />
          <img className="h-12" src="/images/sponsor/mpi.png" alt="sponsor" />
          <img className="h-12" src="/images/sponsor/ui.png" alt="sponsor" />
          <img className="h-12" src="/images/sponsor/untar.png" alt="sponsor" />
          <img className="h-12" src="/images/sponsor/yba.png" alt="sponsor" />
        </div>
      </div>
    </div>
  );
}
