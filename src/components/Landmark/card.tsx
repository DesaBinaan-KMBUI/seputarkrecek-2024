export default function LandmarkCard() {
  return (
    // Adjust padding for smaller screens
    <div className="flex justify-center items-center p-4 md:p-10">
      <div className="flex justify-center items-center 
                      flex-wrap md:flex-nowrap px-4 md:px-40 gap-2 md:gap-5 w-1/2 xl:w-2/3">
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
      </div>
    </div>
  );
}

function CardElement() {
  return (
    <div className="cursor-pointer rounded-xl  w-[350px] md:w-[350px] lg:w-[450px] shrink hover:shrink-0 transition-all h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-gray-300"></div>
  );
}