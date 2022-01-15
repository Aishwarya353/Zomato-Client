import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function NightLifeCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [nightLife] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/41e1750c148b298d6aa4b9fa8a87d588_1618995559.jpg",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/c577e0ca5b896facbba4ef70ffbba204_1618994185.jpg",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/c9a13aa54e83ed6eb04c11cb7fca09ac_1625637908.jpg",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/68607/a104b53df2e8d9998c238b2b608cc8af_o2_featured_v2.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/1/65881/d9207d682046c8e1a8de44da15b5d624_o2_featured_v2.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/4/18670224/8887111e93c39fa9eb0a5498af5f0697_o2_featured_v2.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
  ]);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {nightLife.map((nightLife, index) => (
          <PictureCarouselCard {...nightLife} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default NightLifeCarousel;