import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import DarkMode from "./DarkMode";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
          <DesktopMenu />

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* Light and dark mode switcher */}
            <DarkMode />
            {/* Mobile Hamburger icon */}
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
