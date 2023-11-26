import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import Iphone from "../../assets/iphone2.jpg";
import Iphone2 from "../../assets/iphone.png";
const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] bg-white text-black shadow-lg dark:bg-gray-900 dark:text-white"
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 ">
          <div className="text-2xl text-black dark:text-white md:text-3xl ">
            <a href="/#home" className="">
              <span className="inline-block rounded-full bg-primary px-2 py-1 font-bold text-white">
                M
              </span>
              obile
              <span className="inline-block font-bold text-primary">
                {" "}
                world
              </span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="cursor-pointer">
                {/* Light and dark mode switcher */}
                {theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className="text-2xl"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className="text-[18px] text-gray-700"
                  />
                )}
              </li>
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Quick Links{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    <li>
                      <a
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        href="/#services"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#mobile_brands"
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        Top Brands
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#location"
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="cursor pointer group">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Products{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
                  <div className="grid grid-cols-3 gap-5 ">
                    <div className="col-span-2 pl-6">
                      <h1 className="pb-3 text-xl font-semibold">
                        Quality Is Our First Priority
                      </h1>
                      <p className="text-sm text-slate-700">
                        Discover the epitome of technology with our best-selling
                        smartphone. Unmatched performance, cutting-edge
                        features, and style that sets you apart.
                      </p>
                      <div className="grid grid-cols-3 ">
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Top Brands Smartphone
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Iphones and Accessories
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Samsung Devices
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Redmi, Realme, Oppo
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Vivo, Tecno, Moto
                          </li>
                        </ul>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold">
                            Other Accessories
                          </h1>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Screen Protector
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Modern Cover
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Smart Watches
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            USB Cable and Charger
                          </li>
                          <li className="cursor-pointer text-black/80 hover:text-primary">
                            Bluetooth Speaker, Earphones
                          </li>
                        </ul>
                        <div>
                          <img
                            src={Iphone2}
                            alt="Iphone"
                            className="w-[220px]"
                          />
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

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
