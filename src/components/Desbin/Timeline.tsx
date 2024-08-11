import Image from "next/image";

export default function Timeline() {
  return (
    <div className="relative w-full mt-10 pt-40 z-0 flex flex-col justify-center gap-20 px-12 md:px-24 pb-28 gradient-background items-center separator-2">
      <h1 className="mb-3 text-center text-[40px] md:text-[80px] leading-[1] font-clash text-[#d7c78e] font-semibold">
        Our History
      </h1>
      <div>
        <TimelineCard year="2019" tagline="Memetik Harapan Dalam Kebersamaan" />
        <div className="flex md:flex-row flex-col gap-5 py-5">
          <Image
            alt="2019"
            src="/images/timeline/2019.png"
            className="md:w-1/2"
            width={600}
            height={450}
          />

          <ol className="font-clash text-[#f8eab6] text-xs md:text-sm">
            <li>1. Kopi</li>
            <li>2. Kesehatan Lingkungan</li>
            <li>3. Perilaku Hidup Bersih dan Sehat</li>
            <li>4. Pengetahuan Gizi</li>
          </ol>
        </div>
        <TimelineCard year="2020" tagline="Satukan Hati Merangkai Mimpi" />
        <div className="flex md:flex-row flex-col gap-5 py-5">
          <Image
            alt="2020"
            src="/images/timeline/2020.png"
            className="md:w-1/2"
            width={600}
            height={450}
          />

          <ol className="font-clash text-[#f8eab6] text-xs md:text-sm">
            <li>1. Kopi</li>
            <li className="text-xs md:text-sm font-dm text-[#e3d39a] mb-2">
              Memaksimalkan pemasaran kopi Krecek dengan mencari supplier berupa
              coffee shop sembari meningkatkan kualitas kopi krecek dengan
              melakukan workshop kopi bagi petani Krecek.
            </li>
            <li>2. Ekonomi</li>
            <li className="text-xs md:text-sm font-dm text-[#e3d39a] mb-2">
              Meningkatkan pemberdayaan SDM warga Dusun Krecek yang dilakukan
              dengan pelatihan kewirausahaan.
            </li>
            <li>3. Sosial Budaya</li>
            <li className="text-xs md:text-sm font-dm text-[#e3d39a] mb-2">
              Menumbuhkan kesadaran generasi muda Dusun Krecek yang dilakukan
              dengan mengadakan lomba literasi bertemakan Budaya Krecek untuk
              anak-anak Dusun Krecek dan mebantu pengadaan Pojok Baca di Krecek.
            </li>
          </ol>
        </div>
        <TimelineCard
          year="2021"
          tagline="Membawa Perubahan Melalui Semangat dan Kasih"
        />
        <div className="flex md:flex-row flex-col gap-5 py-5">
          <Image
            alt="2021"
            src="/images/timeline/2021.png"
            className="md:w-1/2"
            width={600}
            height={450}
          />

          <ol className="font-clash text-[#f8eab6] text-xs md:text-sm">
            <li>1. Ekonomi</li>
            <li className="text-xs md:text-sm font-dm text-[#e3d39a] mb-2">
              - Pelatihan kewirausahaan berupa perancangan ide usaha
            </li>
            <li className="text-xs md:text-sm font-dm text-[#e3d39a] mb-2">
              - Sosialisasi tentang pembuatan SPP-IRT dan etika dalam berbisnis
            </li>
            <li>2. Infrastruktur</li>
            <li className="text-xs md:text-sm font-dm text-[#e3d39a] mb-2">
              - Perancangan museum budaya dengan Potowa
            </li>
            <li className="text-xs md:text-sm font-dm text-[#e3d39a] mb-2">
              - Penataan jalan Dusun Krecek dengan pemberian rambu lalu lintas
              dan rambu petunjuk jalan
            </li>
          </ol>
        </div>
        <TimelineCard year="2022" tagline="Bergandengan Tangan, Meraih Angan" />
        <div className="flex gap-5 py-5">
          <Image
            alt="2022"
            src="/images/timeline/2022.png"
            className="w-full"
            width={600}
            height={450}
          />
        </div>
        <TimelineCard
          year="2023"
          tagline="Melangkah Bersama Sebarkan Manfaat"
        />
        <div className="flex gap-5 py-5">
          <Image
            alt="2023"
            src="/images/timeline/2023.jpg"
            className="w-full"
            width={600}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ year, tagline }: { year: string; tagline: string }) {
  return (
    <div className="bg-[#2F2014] px-2 rounded-lg py-1 text-white font-clash font-semibold text-lg">
      <h1 className="text-center">{year}</h1>
      <p className="text-center text-gray-200">“{tagline}”</p>
    </div>
  );
}
