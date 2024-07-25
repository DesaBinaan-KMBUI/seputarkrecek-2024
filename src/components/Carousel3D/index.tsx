import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import { CarouselProps } from './interface';

const Carousel3D: React.FC<CarouselProps> = ({
    slides,
    goToSlide,
    offsetRadius,
    showNavigation,
    animationConfig,
    goToSlideDelay,
}) => {
    return (
        <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showNavigation}
            animationConfig={animationConfig}
            goToSlideDelay={goToSlideDelay}
        />
    );
}

export default Carousel3D;
