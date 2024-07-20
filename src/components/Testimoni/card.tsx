import React from "react";
import Image from "next/image";

interface TestimoniCardProps {
  imageSrc: string;
  rating: number;
  name: string;
  institution: string;
  testimonial: string;
}

const TestimoniCard: React.FC<TestimoniCardProps> = ({
  imageSrc,
  rating,
  name,
  institution,
  testimonial,
}) => {
  return (
    <div className="relative w-full h-60">
      <Image
        src={imageSrc}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute right-0 top-0 ml-[250px] h-60 overflow-auto flex flex-col text-white p-6 bg-black/50 shadow-lg">
        <div className="flex flex-row gap-1 justify-end mb-1 md:mb-4">
          <Image
            src="/images/star.svg"
            alt={name}
            objectFit="cover"
            height={13}
            width={13}
          />
          <p className="text-xs sm:text-sm font-semibold">{rating}</p>
        </div>

        <h1 className="text-3xl font-semibold font-clash mb-2">{name}</h1>
        <p className="text-lg font-bold font-dm tracking-wide mb-1">
          {institution}
        </p>
        <p className="text-xs sm:text-sm font-dm tracking-wide">
          &quot;{testimonial}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimoniCard;
