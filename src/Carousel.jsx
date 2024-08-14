import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const UniversalCarousel = ({ children, autoplay = true, autoplaySpeed = 3000, speed = 500, slidesToShow = 1 }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    draggable: true,
    arrows: false,
  };

  return (
    <div className="overflow-hidden relative w-full">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default UniversalCarousel;