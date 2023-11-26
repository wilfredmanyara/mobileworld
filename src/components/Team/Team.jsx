import React from "react";
import Sabir from "../../assets/team/shabir.png";
import Pervej from "../../assets/team/pervej.png";
import { BiPhone } from "react-icons/bi";

const TeamData = [
  {
    name: "Mohammad Pervej",
    mobileNo: "+918574389339",
    image: Pervej,
    message: `Welcome to Mobile World! As the owner, I'm committed to
    delivering top-notch tech experiences. Your journey with us is
    just beginning.`,
  },
  {
    name: "Sabir Ali",
    mobileNo: "+918577020551",
    image: Sabir,
    message: `Mobile World exceeded my expectations! Their EMI options made
    upgrading my phone a breeze, and the service was top-notch.`,
  },
];

const Team = () => {
  return (
    <>
      <section>
        <div className="container my-12">
          <h1 className="mb-8 inline-block border-l-8 border-primary py-2  pl-2 text-xl font-bold text-gray-500 sm:text-3xl">
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4">
            {TeamData.map((data, index) => (
              <div key={index} className="flex flex-row items-center gap-4">
                <div>
                  <img
                    src={data.image}
                    alt="Tabrej"
                    className="h-[150px] min-w-[100px] rounded-xl object-cover shadow-md lg:h-[200px] lg:min-w-[150px]"
                  />
                </div>
                <div className=" flex flex-col justify-center gap-3">
                  <h1 className="text-2xl font-bold text-gray-600 dark:text-white">
                    {data.name}
                  </h1>
                  <p className="text-gray-500">{data.message}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${data.mobileNo}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <BiPhone className="text-primary" />
                      {data.mobileNo}
                    </a>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
