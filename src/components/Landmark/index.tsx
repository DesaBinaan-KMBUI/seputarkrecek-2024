import LandmarkCard from "./card";

export default function Landmark() {
  return (
    <div className="bg-gradient-to-l from-lime-500 to-lime-900 flex flex-col items-center px-10 pt-28 -my-24 pb-20">
      <h1 className="font-clash font-semibold text-center text-[40px] md:text-[80px] leading-[50.60px] md:leading-[89.60px] text-white">
        Ada apa saja di Dusun Krecek?
      </h1>
      <LandmarkCard />
    </div>
  );
}
