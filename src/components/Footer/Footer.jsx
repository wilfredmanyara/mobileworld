import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import FooterBg from "../../assets/footer-bg.jpg";
import Iphone from "../../assets/mobile/iphone14pro.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${FooterBg})` }}
      className={`rounded-t-3xl bg-red-950 bg-cover bg-no-repeat dark:bg-primary/10`}
    >
      <section className="mx-auto max-w-[1200px] rounded-t-3xl text-white backdrop-blur-md dark:text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="">
                <span className="inline-block rounded-full bg-primary px-2 py-1 font-bold text-white">
                  M
                </span>
                obile
                <span className="inline-block font-bold text-primary">
                  {" "}
                  world
                </span>
              </a>
            </h1>
            <p className="">
              Discover a world of cutting-edge mobiles, accessories, and expert
              services all under one roof. We're not just a store; we're your
              go-to destination for everything mobile.{" "}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="duration-200 hover:scale-105">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="duration-200 hover:scale-105">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" className="duration-200 hover:scale-105">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Belwa Chungi, Padruna- 274304</p>
            </div>
            <p className="ml-7">Uttar Pradesh, India</p>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>
                <a href="tel:+918115525250">+91 8115525250</a>{" "}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>
                <a href="tel:+918577020551">+91 8577020551</a>{" "}
              </p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Quick Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Home
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <a href="/#mobile_brands">Best Mobile Phones</a>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <a href="/#services">Our Services</a>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <a href="/#location">Address to visit</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About us
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[100vw] sm:w-full">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Buy & Get Free Gifts
                </h1>
                <div className="flex flex-col gap-3">
                  <img src={Iphone} alt="iphone" className="w-[200px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2024 Mobile world || Made with ❤️ by{" "}
            <a className="cursor-pointer" href="https://wa.me/8318639067">
              Dilshad
            </a>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
