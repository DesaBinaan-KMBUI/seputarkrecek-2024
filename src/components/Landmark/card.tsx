export default function LandmakrCard() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="flex gap-5 w-2/3">
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
    <div className="cursor-pointer rounded-xl w-[450px] shrink hover:shrink-0 transition-all h-[450px] bg-gray-300"></div>
  );
}
