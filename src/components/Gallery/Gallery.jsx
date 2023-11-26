import React from "react";
import Img1 from "../../assets/shop/customer1.jpeg";
import Img2 from "../../assets/shop/customer2.jpeg";
import Img3 from "../../assets/shop/customer3.jpeg";
import Img4 from "../../assets/shop/customer4.jpeg";
import Img5 from "../../assets/shop/customer5.jpeg";
import Img6 from "../../assets/shop/customer6.jpeg";
import Img7 from "../../assets/shop/customer7.jpeg";
import Img8 from "../../assets/shop/customer8.jpeg";
import Img9 from "../../assets/shop/customer9.jpeg";
import Img10 from "../../assets/shop/customer10.jpeg";
import Img11 from "../../assets/shop/customer11.jpeg";
import Img12 from "../../assets/shop/customer12.jpeg";

const Gallery = () => {
  return (
    <>
      <section>
        <div data-aos="fade-up" className="container my-16">
          <div>
            <h1 className="mb-8 inline-block border-l-8 border-primary  py-2 pl-2 text-xl font-bold text-gray-500 sm:text-3xl">
              Gallery
            </h1>
          </div>
          <div>
            <div className="gallery row-span-full mx-auto w-full max-w-5xl columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 ">
              <img
                src={Img1}
                alt="customer"
                className="h-auto max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img2}
                alt="customer"
                className="h-auto max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img3}
                alt="customer"
                className="h-auto max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img4}
                alt="customer"
                className="h-auto max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img5}
                alt="customer"
                className="h-auto max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img6}
                alt="customer"
                className="h-auto max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img7}
                alt="customer"
                className="h-auto w-full max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img8}
                alt="customer"
                className="h-auto w-full max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img9}
                alt="customer"
                className="h-auto w-full max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img10}
                alt="customer"
                className="h-auto w-full max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img11}
                alt="customer"
                className="h-auto w-full max-w-full rounded-lg shadow-md"
              />
              <img
                src={Img12}
                alt="customer"
                className="h-auto w-full max-w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
