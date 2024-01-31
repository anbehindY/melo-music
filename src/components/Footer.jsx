import Image from "next/image";
import { BsYoutube, BsInstagram, BsTiktok } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-8 items-center justify-center text-center pt-8 py-10 border-b-[1px] border-[#5B5858] w-[90%] mx-auto lg:flex-row lg:justify-between lg:items-start">
        <ul className="text-[16px] flex flex-col gap-4 leading-5 lg:items-start">
          <li className="font-bold !leading-7">Information</li>
          <li className="hover:text-[#FF5276] cursor-pointer"> FAQ</li>
          <li className="hover:text-[#FF5276] cursor-pointer">
            <Link href="/support">Support</Link>
          </li>
        </ul>
        <ul className="text-[16px] flex flex-col gap-4 leading-5 lg:items-start">
          <li className="font-bold !leading-7">Melo</li>
          <li className="hover:text-[#FF5276] cursor-pointer"> About Us</li>
          <li className="hover:text-[#FF5276] cursor-pointer"> Contact Us</li>
        </ul>
        <ul className="text-[16px] flex flex-col gap-4 mb-6 leading-5 lg:items-start">
          <li className="font-bold !leading-7">Legal</li>
          <li className="hover:text-[#FF5276]">
            <Link href="/terms-conditions">Terms and Conditions</Link>
          </li>
          <li className="hover:text-[#FF5276]">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
        <ul className="text-left text-sm leading-4 flex flex-col gap-8 items-start w-[95%] lg:w-[380px] ">
          <li className="flex gap-6 items-start leading-4">
            <div className="relative w-5 h-6">
              <Image
                src={"/location.svg"}
                fill
                style={{ objectFit: "contain" }}
                alt="Location icon"
              />
            </div>
            [A Division Of Music Industry Development Co.,Ltd]
            <br />
            No(737),Su Paung Yone Street,(37) Quarter, North Dagon Township,
            Yangon, Myanmar.
          </li>
          <li className="flex gap-6 items-start leading-4">
            <div className="relative w-5 h-6">
              <Image
                src={"/phone.svg"}
                fill
                style={{ objectFit: "contain" }}
                alt="Location icon"
              />
            </div>
            09-262277337, 09-262277447
          </li>
          <li className="flex gap-6 items-start leading-4">
            <div className="relative w-5 h-6">
              <Image
                src={"/mail.svg"}
                fill
                style={{ objectFit: "contain" }}
                alt="Location icon"
              />
            </div>
            support@melomm.com
          </li>
        </ul>
      </div>
      <div className="flex flex-col py-8 gap-6 lg:flex-row-reverse lg:justify-between lg:mx-[5%] lg:py-0 lg:h-[95px]">
        <ul className="flex justify-center items-center gap-6 text-xl text-white">
          <li>
            <a
              href="https://www.youtube.com/channel/UCA6HtFCBaw0Enx_O0rH6zQA"
              target="_blank"
            >
              <BsYoutube className="hover:text-[#FF5276]" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/melomusicmm/" target="_blank">
              <FaFacebookF className="hover:text-[#FF5276]" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/melomusicmm/" target="_blank">
              <BsInstagram className="hover:text-[#FF5276]" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@melomusicmm" target="_blank">
              <BsTiktok className="hover:text-[#FF5276]" />
            </a>
          </li>
        </ul>
        <div className="flex gap-6 items-center justify-center">
          <div className="w-[93px] h-[35px] lg:w-[124px] lg:h-[47px] relative">
            <Image
              src={"/Logo.svg"}
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="leading-[22px]">
            {" "}
            @2023
            <span className="text-[#FF2150] font-semibold"> Melo Music</span>.
            All rights served.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
