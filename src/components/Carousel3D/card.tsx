const CarouselCard = ({ first, rotation }: { first: boolean; rotation: number }) => {
    const rotationStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease',
        backgroundColor: first ? "#40571d" : "#a2cd4e", 
    };

    return (
        <div
            className="carousel-card bg-deep-cove-600 rounded-[60px] justify-center items-center
            w-[280px] h-[450px]
            sm:w-[340px] h-[400px]
            md:w-[420px] md:h-[500px]
            lg:w-[480px] lg:h-[542px]"
            style={rotationStyle}
        >
        </div>
    );
};

export default CarouselCard;
