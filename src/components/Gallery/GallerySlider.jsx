import React from "react";
import Slider from "react-slick";

import Img1 from "../../assets/customer-gallery/customer1.jpeg";
import Img2 from "../../assets/customer-gallery/customer2.jpeg";
import Img3 from "../../assets/customer-gallery/customer3.jpeg";
import Img4 from "../../assets/customer-gallery/customer4.jpeg";
import Img5 from "../../assets/customer-gallery/customer5.jpeg";
import Img6 from "../../assets/customer-gallery/customer6.jpeg";
import Img7 from "../../assets/customer-gallery/customer7.jpeg";
import Img8 from "../../assets/customer-gallery/customer8.jpeg";
import Img9 from "../../assets/customer-gallery/customer9.jpeg";
import Img10 from "../../assets/customer-gallery/customer10.jpeg";
import Img11 from "../../assets/customer-gallery/customer11.jpeg";
import Img12 from "../../assets/customer-gallery/customer12.jpeg";

const CustomerImg = [
  {
    image: Img1,
  },
  {
    image: Img2,
  },
  {
    image: Img3,
  },
  {
    image: Img4,
  },
  {
    image: Img5,
  },
  {
    image: Img6,
  },
  {
    image: Img7,
  },
  {
    image: Img8,
  },
  {
    image: Img9,
  },
  {
    image: Img10,
  },
  {
    image: Img11,
  },
  {
    image: Img12,
  },
];

const GallerySlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    loop: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div data-aos="fade-up" className="bg-white dark:bg-gray-800">
      <span id="mobile_brands"></span>
      <div className=" py-10 md:px-10">
        <div className="pl-2">
          <h1 className="container mb-8 inline-block border-l-8 border-primary py-2 text-xl font-bold text-gray-500 sm:text-3xl">
            Our Happy Customers
          </h1>
        </div>
        <Slider {...settings}>
          {CustomerImg.map((item, id) => (
            <div key={id} className="overflow-hidden p-2">
              <img
                src={item.image}
                alt={id}
                className="h-[350px] w-full rounded-lg object-cover shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GallerySlider;
