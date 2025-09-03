import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "#dedfdf" }}
      className={`
        ${styles.paddingX} fixed lg:h-12 md:h-10 sm:h-8 xs:h-6 h-5 z-20 w-full flex items-center`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to=""
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p
            className="text-black text-[18px]
              font-medium  cursor-pointer flex "
          >
            Ana Ramon &nbsp;
            <span className="sm:block hidden"> | Full-stack Developer</span>
          </p>
        </Link>
        <ul
          className="list-none hidden sm:flex
          flex-row gap-10"
        >
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-gray-600" : "text-black"
                } 
              hover: text-black text-[18px]
              font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <div
          className="sm:hidden flex
        flex-1 justify-end items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[22px] h-[22px] stroke-black
          object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* Dropdown wrapper */}
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } absolute top-4 right-0 mx-4 my-2 min-w-[100px]`}
          >
            <div className="relative">
              {/* back sheet */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  -translate-x-1 translate-y-1 bg-bg-light
                  border border-black
                "
              />

              {/* top sheet */}
              <div className="relative z-10 p-6 bg-bg-light border border-black">
                <ul className="list-none flex flex-col items-start gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-gray-800" : "text-black"
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
