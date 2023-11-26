import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";

import DarkMode from "../DarkMode";
import FullWidthDropdown from "./FullWidthDropdown";

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const DesktopMenu = () => {
  return (
    <>
      <div className="hidden md:block">
        <ul className="flex items-center gap-10">
          {/* Light and dark mode switcher */}
          <li className="cursor-pointer">
            <DarkMode />
          </li>
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
              Quick Links{" "}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
              <ul className="space-y-3">
                {DropdownLinks.map((data) => (
                  <li key={data.name}>
                    <a
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Full width Dropdwon */}
          <li className="cursor pointer group">
            <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
              Products{" "}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <FullWidthDropdown />
          </li>
          {/* Phone number section */}
          <div className="flex items-center gap-4">
            <li>
              <a href="tel:+918115525250" className="animate-pulse">
                <BiPhoneCall className="h-[40px] w-[40px] rounded-full bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
              </a>
            </li>
            <li className="hidden lg:block">
              <div>
                <p className="text-sm">Call us on</p>
                <p className="text-lg">
                  {" "}
                  <a href="tel:+918574389339">+91 8574389339</a>
                </p>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default DesktopMenu;
