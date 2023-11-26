import React from "react";
import { BiMobile, BiStore, BiUniversalAccess } from "react-icons/bi";

const ServiceData = [
  {
    icon: (
      <BiMobile className="text-6xl text-primary transition duration-200 group-hover:text-white" />
    ),
    title: "Best Mobile Phones",
    description:
      "Explore the pinnacle of mobile technology with our curated selection of the best phones, ensuring a seamless blend of performance and style.",
    delay: "100",
  },
  {
    icon: (
      <BiStore className="text-6xl text-primary transition duration-200 group-hover:text-white" />
    ),
    title: "Quality Accessories",
    description:
      "Experience the convenience of online shopping with our curated selection of the best brands, ensuring a seamless shopping experience.",
    delay: "150",
  },
  {
    icon: (
      <BiUniversalAccess className="text-6xl text-primary transition duration-200 group-hover:text-white" />
    ),
    title: "Quick Repairs",
    description:
      "Immerse yourself in the world of fashion with our curated selection of the best accessories, ensuring a seamless shopping experience.",
    delay: "200",
  },
];
const ServiceCard = () => {
  return (
    <>
      <span id="services"></span>
      <section className="my-12  dark:bg-gray-900 dark:text-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ServiceData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.delay}
                className="group flex flex-col items-center justify-center gap-4 rounded-xl p-6 shadow-[1px_1px_6px_0px_#bebebe] transition duration-200 hover:!bg-primary hover:text-white hover:shadow-lg dark:bg-gray-950"
              >
                {data.icon}
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-center text-sm text-gray-600 group-hover:text-white/90 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
