import React, { useState } from "react";
import Slider from "react-slick";

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DiningCarousel() {
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
        "https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/4947e5a59200aca575a2e063f69791c5_1637735321.png",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/6bbbaa1ccabe15209c45f5cfddfdef6a_1620291802.jpg",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/1f0bdedba48aedd922d978630b16b441_1625577669.jpg",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg",
      title: "Best of Delhi NCR",
      places: "150 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/99384005af05393bad27980abd0ef3ee_1618993177.jpg",
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

export default DiningCarousel;
