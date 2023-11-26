import React from "react";
import Slider from "react-slick";
import BrandCard from "./BrandCard";
import IphoneImg from "/mobile-img/iphone2.jpg";
import MotoImg from "/mobile-img/motorola.jpg";
import OppoImg from "/mobile-img/oppo.jpg";
import Realme from "/mobile-img/realme.jpg";
import Redmi from "/mobile-img/redmi.jpg";
import Samsung from "/mobile-img/samsung.jpg";
import Vivo from "/mobile-img/vivo.jpg";

const MobilesData = [
  {
    title: "Iphone",
    image: IphoneImg,
  },
  {
    title: "Motorola",
    image: MotoImg,
  },
  {
    title: "Oppo",
    image: OppoImg,
  },
  {
    title: "Realme",
    image: Realme,
  },
  {
    title: "Redmi",
    image: Redmi,
  },
  {
    title: "Samsung",
    image: Samsung,
  },
  {
    title: "Vivo",
    image: Vivo,
  },
];

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const Swipe = () => {
  const settings = {
    dots: false,
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
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
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
    <div data-aos="fade-up" className="bg-gray-100 dark:bg-gray-800">
      <span id="mobile_brands"></span>
      <div className="container px-10 py-10">
        <h1 className="mb-8 inline-block border-l-8 border-primary py-2 pl-2 text-xl font-bold text-gray-500 sm:text-3xl">
          Best Mobile Phones at affordable prices
        </h1>
        <Slider {...settings}>
          {MobilesData.map((item) => (
            <div>
              <BrandCard image={item.image} title={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Swipe;
