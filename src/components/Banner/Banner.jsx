import React from "react";
import BannerImg from "../../assets/banner.jpg";
import dottedOverlay from "../../assets/dotted.png";

const Banner = () => {
  return (
    <main
      className="bg-primary dark:bg-primary/10"
      style={{ backgroundImage: `url(${dottedOverlay})` }}
    >
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Lone Pe Phone</h1>
            <p className="">
              Get your dream phone at the lowest price and with the EMI option
              without any intrest.
            </p>
            <button className="rounded-md bg-white px-4 py-2 text-sm  text-black transition-colors duration-300 hover:bg-white/90">
              <a className="cursor-pointer" href="https://wa.me/+918574389339">
                Connect On WhatsApp
              </a>{" "}
            </button>
          </div>
          <div className="order-1 md:col-span-2">
            <img
              src={BannerImg}
              alt="Not found"
              className="transition duration-200 hover:scale-105 "
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
