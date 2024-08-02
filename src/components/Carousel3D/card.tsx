const CarouselCard = ({ first, rotation,imageUrl }: { first: boolean; rotation: number,imageUrl:string }) => {
    const rotationStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease',
        backgroundColor: first ? "#40571d" : "#a2cd4e", 
    };

    return (
        <div
            className="carousel-card rounded-[60px]
            w-[280px] h-[450px]
            sm:w-[340px] sm:h-[400px]
            md:w-[420px] md:h-[500px]
            lg:w-[480px] lg:h-[542px]"
            style={rotationStyle}
        >
            <img
                src={imageUrl}
                alt="carousel"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '60px' }}
            />
        </div>
    );
}
export default CarouselCard;