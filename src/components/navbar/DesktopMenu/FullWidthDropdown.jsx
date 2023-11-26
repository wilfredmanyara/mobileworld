import React from "react";
import Iphone from "../../../assets/mobile-img/iphone2.jpg";
import Iphone2 from "../../../assets/mobile-png/iphone.png";

const MobileBrands = [
  {
    name: "Iphone and Accessories",
    link: "#",
  },
  {
    name: "Samsung Devices",
    link: "#",
  },
  {
    name: "Redmi, Realme, Oppo",
    link: "#",
  },
  {
    name: "Vivo, Tecno, Moto",
    link: "#",
  },
];

const Accessories = [
  {
    name: "Charger & Cables",
    link: "#",
  },
  {
    name: "Screen Guards & Covers",
    link: "#",
  },
  {
    name: "Bluetooth Speaker, Earphones",
    link: "#",
  },
  {
    name: "Smartwatch",
    link: "#",
  },
];

const FullWidthDropdown = () => {
  return (
    <>
      <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
        <div className="grid grid-cols-3 gap-5 ">
          <div className="col-span-2 pl-6">
            <h1 className="pb-3 text-xl font-semibold">
              Quality Is Our First Priority
            </h1>
            <p className="text-sm text-slate-700">
              Discover the epitome of technology with our best-selling
              smartphone. Unmatched performance, cutting-edge features, and
              style that sets you apart.
            </p>
            <div className="grid grid-cols-3 ">
              {/* Top Brands Section*/}
              <ul className="mt-3 flex flex-col gap-2">
                <h1 className="pb-1 text-xl font-semibold">
                  Top Brands Smartphone
                </h1>
                {MobileBrands.map((data) => (
                  <li
                    key={data.name}
                    className="cursor-pointer text-black/80 hover:text-primary"
                  >
                    {data.name}
                  </li>
                ))}
              </ul>
              {/* Other Accessories Section */}
              <ul className="mt-3 flex flex-col gap-2">
                <h1 className="pb-1 text-xl font-semibold">
                  Other Accessories
                </h1>
                {Accessories.map((data) => (
                  <li
                    key={data.name}
                    className="cursor-pointer text-black/80 hover:text-primary"
                  >
                    {data.name}
                  </li>
                ))}
              </ul>
              <div>
                <img src={Iphone2} alt="Iphone" className="w-[220px]" />
              </div>
            </div>
          </div>
          <div className="d-200 overflow-hidden">
            <img
              className="max-h-[300px] w-full rounded-b-3xl object-fill pr-4"
              src={Iphone}
              alt="pics"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullWidthDropdown;
