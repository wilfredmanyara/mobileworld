import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-delay="100"
      className="container h-12 md:h-32"
    >
      <div className="mx-auto my-4 grid w-full -translate-y-10 grid-cols-4 divide-x divide-slate-700 rounded-full bg-white p-2 shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] md:-translate-y-16 md:p-8">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={5000} suffix="+" duration={2.75} />
          </h1>
          <h1 className="sm:text-md text-xs  md:text-lg">Mobile Sold</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={100} suffix="%" duration={2.75} />
          </h1>
          <h1 className=" sm:text-md text-xs md:text-lg">Happy Customer</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={234} suffix="+" />
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Recent Orders</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp
              start={-5.039}
              end={1000}
              duration={2.75}
              separator=" "
              suffix="+"
            />
          </h1>
          <h1 className="sm:text-md text-xs  md:text-lg">Best Products</h1>
        </div>
      </div>
    </section>
  );
};

export default Counter;
