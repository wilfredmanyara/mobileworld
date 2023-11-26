import React from "react";
import Sabir from "../../assets/shabir.png";
import Tabrej from "../../assets/tabrej.png";
import { BiPhone } from "react-icons/bi";

const Team = () => {
  return (
    <>
      <section>
        <div className="container my-12">
          <h1 className="mb-8 inline-block border-l-8 border-primary py-2  pl-2 text-xl font-bold text-gray-500 sm:text-3xl">
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="">
                <img
                  src={Tabrej}
                  alt="Tabrej"
                  className="h-[150px] min-w-[100px] rounded-xl object-cover shadow-md lg:h-[200px] lg:min-w-[150px]"
                />
              </div>
              <div className=" flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
                  Tabrej Ansari
                </h1>
                <div className="mt-3 flex items-center gap-3">
                  <p>
                    <a
                      href="tel:+918574389339"
                      className="flex items-center justify-center gap-2"
                    >
                      <BiPhone className="text-primary" />
                      +91 8574389339
                    </a>{" "}
                  </p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium beatae voluptate quae tempora ducimus perspiciatis
                  voluptas eaque quos quas modi.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="">
                <img
                  src={Sabir}
                  alt="Sabir"
                  className="h-[150px] min-w-[100px] rounded-xl object-cover shadow-md lg:h-[200px] lg:min-w-[150px]"
                />
              </div>
              <div className=" flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
                  Sabir Ali
                </h1>
                <div className="mt-3 flex items-center gap-3">
                  <p>
                    <a
                      href="tel:+918577020551"
                      className="flex items-center justify-center gap-2"
                    >
                      <BiPhone className="text-primary" />
                      +91 8577020551
                    </a>{" "}
                  </p>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium beatae voluptate quae tempora ducimus perspiciatis
                  voluptas eaque quos quas modi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
