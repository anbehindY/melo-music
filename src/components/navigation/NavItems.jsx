"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

const NavItems = ({ isLoggedIn }) => {
  const currentPath = usePathname();

  return (
    <ul className="hidden lg:flex flex-col gap-8 pt-40 px-4 justify-start items-center text-xl h-full lg:flex-row lg:pt-0 lg:text-base">
      <li className="font-semibold cursor-pointer hover:text-[#FF2150]">
        <Link href="/#premiumSection">Premium</Link>
      </li>
      <li className="hover:text-[#FF2150] font-semibold cursor-pointer pb-8 lg:pb-0 lg:border-l-2 lg:pl-8">
        <Link
          href="/faq"
          className={currentPath === "/faq" ? "text-[#FF2150]" : ""}
        >
          FAQ
        </Link>
      </li>

      {/* <li
				className='font-semibold cursor-pointer border-2 rounded-full px-6 py-2 text-[#FF2150] border-[#FF2150]
						 hover:bg-[#FF2150] hover:text-white hover:shadow-listen-btn'
				onClick={() => {
					router.push('https://melomm.com/register');
				}}
			>
				Register
			</li>
			<li
				className='hover:text-[#FF2150] font-semibold cursor-pointer'
				onClick={() => {
					router.push('https://melomm.com/login');
				}}
			>
				Sign In
			</li>
			<li
				className='text-lg lg:text-base cursor-pointer'
				onClick={() => {
					setDropDownActive(!dropDownActive);
				}}
			>
				<div className='flex flex-col gap-2 ml-2 justify-center lg:absolute lg:right-7 lg:top-[52px]'>
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
  );
};

export default NavItems;
