import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";

export default function KMB() {
  return (
    <div className="relative -mt-32 bg-white w-full pt-40 z-0 flex flex-col justify-center gap-20 px-12 md:px-24 pb-28 items-center separator-2">
      <div className="flex md:flex-row flex-col items-center justify-center gap-16">
        <Image
          className="w-full md:w-1/3"
          src="/images/kmb/kmb.png"
          width={600}
          height={450}
          alt="kmb"
        />
        <div className="w-full md:w-1/2">
          <h1 className="mb-3 md:text-start text-center text-[40px] md:text-[80px] leading-[1] font-clash text-deep-cove-900 font-semibold">
            KMBUI
          </h1>
          <div className="text-deep-cove-900 font-dm md:text-lg flex items-center gap-2 my-3 cursor-pointer">
            <RiInstagramFill className="text-xl text-deep-cove-900" />
            <a target="_blank" href="https://www.instagram.com/ukm_kmbui/">
              @ukm_kmbui
            </a>
          </div>
          <p className="text-deep-cove-900 font-semibold font-dm text-sm md:text-lg">
            KMBUI (Keluarga Mahasiswa Buddhis Universitas Indonesia) adalah
            organisasi kemahasiswaan yang mewadahi mahasiswa Buddhis Universitas
            Indonesia. Sebagai salah satu UKM di Universitas Indonesia, KMBUI
            bergerak di bidang keagamaan dan juga sosial-masyarakat.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start justify-center">
        <div className="w-full md:w-1/2 md:mb-0 mb-10">
          <h1 className="text-deep-cove-900 font-semibold font-dm text-base md:ext-xl">
            Visi
          </h1>
          <p className="text-deep-cove-900 font-dm text-sm md:text-lg mt-3">
            Mewujudkan UKM KMBUI sebagai keluarga yang peduli kepada anggotanya
            dan sesama untuk mengembangkan diri sebagai mahasiswa yang
            berlandaskan nilai dan ajaran sang Buddha.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-deep-cove-900 font-semibold font-dm text-base md:text-xl">
            Misi
          </h1>
          <ol className="text-deep-cove-900 font-dm text-sm md:text-lg mt-3">
            <li>
              1. Menanamkan nilai dari ajaran sang Buddha secara universal
              terhadap program kerja dan pengurus KMBUI.{" "}
            </li>
            <li>
              2. Membangun iklim kekeluargaan yang harmonis pada internal KMBUI.
            </li>
            <li>
              3. Melakukan pengembangan diri bagi anggota KMBUI melalui kegiatan
              yang membawa kebermanfaatan.
            </li>
            <li>
              4. Meningkatkan eksistensi KMBUI kepada vihara, cetiya, KMB lain,
              dan organisasi yang berlandaskan Buddhisme.
            </li>
            <li>
              5. Meningkatkan kerjasama baik antara UKM KMBUI dengan KMB BEM IKM
              FKUI.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
