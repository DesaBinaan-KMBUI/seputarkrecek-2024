import LandmarkCard from "./card";

export default function Landmark() {
  return (
    <div className="gradient-background flex flex-col items-center px-10 pt-28 -my-24 pb-20">
      <h1 className="mb-10  md:px-24 font-clash font-semibold text-center text-[40px] md:text-[80px] leading-tight md:leading-[89.60px] text-white">
        Ada apa saja di Dusun Krecek?
      </h1>
      <LandmarkCard />
    </div>
  );
}
