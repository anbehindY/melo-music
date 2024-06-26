"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavItems from "./NavItems";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Navigation = ({ isLoggedIn = false }) => {
  const [navActive, setNavActive] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const currentPath = usePathname();

  useMotionValueEvent(scrollY, "change", (value) => {
    const previous = scrollY.getPrevious();
    if (value > previous && value > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-between flex-wrap px-6 h-[99px] bg-[#0F0F0F] sticky top-0 w-full z-50 lg:h-[120px] lg:px-16 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        <Link
          href={"/"}
          className="relative w-[100px] h-[40px] lg:w-[200px] lg:h-[77px] cursor-pointer"
        >
          <Image
            src="/Logo.svg"
            fill
            alt="Melo logo"
            style={{ objectFit: "contain" }}
          />
        </Link>
        <button
          className={`w-[36px] h-[36px] z-[9] bg-[#FF2150] rounded-lg flex flex-col gap-1 justify-center items-center duration-[0.4s] nav-line lg:hidden 
				  ${navActive ? "active" : ""}`}
          type="button"
          onClick={() => {
            setNavActive(!navActive);
          }}
        >
          <div
            className={`w-[23px] h-[2.5px] bg-white rounded
					  ${navActive ? "barActive" : ""}`}
          />
        </button>
        <NavItems isLoggedIn={isLoggedIn} />
      </motion.nav>
      <div
        className={`fixed top-0 ${
          navActive ? "left-0" : "left-[100%] lg:hidden"
        } duration-[0.4s] ease-in-out bg-black w-screen h-screen z-[8]`}
      >
        <ul className="flex flex-col gap-8 pt-40 px-4 justify-start items-center h-full">
          <li
            className="font-semibold text-xl cursor-pointer hover:text-[#FF2150]"
            onClick={() => {
              setNavActive(false);
            }}
          >
            <Link href={"/#premiumSection"}>Premium</Link>
          </li>
          <li
            onClick={() => {
              setNavActive(false);
            }}
            className="hover:text-[#FF2150] text-xl font-semibold cursor-pointer border-t-2 pt-8"
          >
            <Link
              href={"/faq"}
              className={currentPath === "/faq" ? "text-[#FF2150]" : ""}
            >
              FAQ
            </Link>
          </li>
          {/* <li
                className='text-xl font-semibold cursor-pointer border-2 rounded-full px-6 py-2 text-[#FF2150] border-[#FF2150]
                 hover:bg-[#FF2150] hover:text-white hover:shadow-listen-btn'
                onClick={() => {
                  router.push('https://melomm.com/register');
                }}
              >
                Register
              </li>
              <li
                className='hover:text-[#FF2150] text-xl font-semibold cursor-pointer'
                onClick={() => {
                  router.push('https://melomm.com/login');
                }}
              >
                Sign In
              </li>
              <li
                className='text-lg cursor-pointer'
                onClick={() => {
                  setDropDownActive(!dropDownActive);
                }}
              >
                <div className='flex flex-col gap-2 ml-2'>
                  <div className='flex items-center gap-2 ml-2'>
                    ENG {dropDownActive ? <BsChevronUp /> : <BsChevronDown />}
                  </div>
                  <Collapse isOpened={dropDownActive}>
                    <ul className='bg-[#96969647] w-20 h-[88px] flex flex-col gap-4 justify-center items-start px-[10px] rounded-[4px]'>
                      <li>ENG</li>
                      <li>MYAN</li>
                    </ul>
                  </Collapse>
                </div>
              </li> */}
          {isLoggedIn && (
            <li>
              <button
                className="text-lg font-semibold cursor-pointer border-2 rounded-full px-6 py-2 text-[#FF2150] border-[#FF2150]
            hover:bg-[#FF2150] hover:text-white hover:shadow-listen-btn"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
