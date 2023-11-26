import React from "react";
import Slider from "react-slick";
import IphoneImg from "/mobile-img/iphone2.jpg";
import MotoImg from "/mobile-img/motorola.jpg";
import Samsung from "/mobile-img/samsung.jpg";
import Vivo from "/mobile-img/vivo.jpg";
import TestimonialCard from "./TestimonialCard";

const TestimonialData = [
  {
    name: "Pradeep",
    image: MotoImg,
    description:
      "Mobile World exceeded my expectations! Their EMI options made upgrading my phone a breeze, and the service was top-notch.",
  },
  {
    name: "Satya",
    image: Samsung,
    description:
      "A one-stop-shop for all things mobile! The best phones, a fantastic accessory collection, and a user-friendly experience. Mobile World truly stands out.",
  },
  {
    name: "Dilshad ",
    image: Vivo,
    description:
      "I'm a tech enthusiast, and Mobile World is my go-to. Quality accessories, prompt repairs, and the latest smartphones – they deliver excellence!",
  },
  {
    name: "Sabir Ali",
    image: IphoneImg,
    description:
      "Exceptional service! When my phone needed quick repairs, Mobile World's efficient team had it back in my hands in no time. Highly recommended!",
  },
];

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
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 2,
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
const Testimonial = () => {
  return (
    <>
      <span id="testimonial"></span>
      <div data-aos="zoom-in" className="bg-primary/20 dark:bg-gray-800 ">
        <span id="mobile_brands"></span>
        <div className="container px-10 py-10">
          <h1 className="mb-8 inline-block border-l-8 border-primary py-2  pl-2 text-xl font-bold text-gray-500 sm:text-3xl">
            What Our Customer Says
          </h1>
          <Slider {...settings}>
            {TestimonialData.map((item) => (
              <div>
                <TestimonialCard
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
