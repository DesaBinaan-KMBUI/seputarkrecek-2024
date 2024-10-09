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
  const testimonialLines = testimonial.trim().split('\n');
  const formattedTestimonial = testimonialLines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== testimonialLines.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className="flex w-full h-80">
      <div className="relative w-1/2 md:w-[50%] xl:w-1/3 h-full p-4">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg h-full w-full"
        />
      </div>
      <div className="relative w-1/2 md:w-[80%] xl:w-2/3 h-full overflow-y-scroll flex flex-col text-white p-6 bg-black bg-opacity-90 backdrop-blur-lg shadow-lg">
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
          &quot;{formattedTestimonial}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimoniCard;
