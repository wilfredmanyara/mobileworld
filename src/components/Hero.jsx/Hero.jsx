import React from "react";
import Banner from "../../assets/iphone.png";
import dotted from "../../assets/dotted.png";
import { BiPhoneCall } from "react-icons/bi";
import GradientBG from "../../assets/gradient-img.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${GradientBG})`,
        backgroundSize: "100% 100%",
      }}
    >
      <main
        className="bg-gradient-to-r pt-28 sm:pt-20"
        style={{ backgroundImage: `url(${dotted})` }}
      >
        <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-8  md:grid-cols-2">
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-center gap-6 text-center  text-white md:items-start md:text-left "
            >
              <h1 className=" text-5xl ">
                Mobile World: Your Gateway to Smart Living
              </h1>
              <p className="text-white/80">
                Discover the Future of Mobile Convenience - EMI Plans,
                Trendsetting Accessories, and Exceptional Services.
              </p>
              <div className="space-x-4">
                <button className="rounded-full border-2 border-primary bg-primary px-8 py-2 text-white transition duration-300 hover:scale-105 hover:bg-primary">
                  <a
                    className="flex items-center gap-3"
                    href="tel:+918115525250"
                  >
                    Connect Now <BiPhoneCall />{" "}
                  </a>{" "}
                </button>
                <button className="border-1 rounded-full border-2 border-white px-4 py-2 text-white transition duration-300 hover:scale-105 hover:bg-primary hover:text-white ">
                  <a className="cursor-pointer" href="https://wa.me/8115525250">
                    Message
                  </a>{" "}
                </button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-once="true"
              className="mx-auto max-w-xs p-4"
            >
              <img
                src={Banner}
                alt="No image"
                className="hover:drop-shadow-md md:translate-y-[35px] md:scale-150"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
