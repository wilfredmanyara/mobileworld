import React from "react";

const BannerDetails = ({ reverse, img, data }) => {
  console.log("data", data);
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "order-last md:order-last" : "order-2 md:order-1"
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">{data?.title}</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {data?.description}
              </p>
              <div>
                <ul className="flex list-inside flex-col gap-2  md:gap-4">
                  {data?.list?.map((item, index) => (
                    <li
                      className="text-sm font-medium text-gray-600 before:content-['👉🏻'] dark:text-gray-400"
                      key={index}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-full  border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Buy Now And Get Free Gift
                </button>
              </div>
            </div>
            <div
              data-aos="fade"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "md:order-1" : "order-1"}
            >
              <img
                src={img}
                alt="No image"
                className="max-auto w-full rounded-xl transition duration-200 hover:rotate-1 hover:scale-105 hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
