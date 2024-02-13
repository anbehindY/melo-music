"use client";

import React from "react";
import PremiumFeatures from "./PremiumFeatures";
import Image from "next/image";
import Payment from "./Payment";
import { PAYMENT_INFO } from "@/utils/data";

const PremiumSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full scroll-mt-10"
      id="premiumSection"
    >
      <h2 className="text-[36px] font-semibold text-center leading-[42px] md:!w-4/6 gradient w-[300px] mx-auto my-6 lg:w-full lg:text-[96px] lg:leading-[93px] md:pb-2 lg:pb-8">
        <span className="text-white">Join</span> Melo&apos;s Premium
      </h2>
      <PremiumFeatures />
      <div className="flex flex-col items-center gap-10 w-full">
        <h4 className="w-[250px] text-center text-[24px] font-[700] lg:w-full lg:text-[40px] lg:leading-[56px] lg:mt-2">
          Available Payments for Premium
        </h4>
        <div className="flex flex-col items-center justify-center gap-8 pb-4 md:flex-row">
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center duration-100 w-[90px] h-[90px] ease-in-out p-2 rounded-md border-4 border-black hover:border-[#FF215076]">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/kbzPay.png"
                  quality={100}
                  fill
                  style={{ objectFit: "contain" }}
                  alt="kbzPay"
                />
              </div>
            </div>
            <div className="flex justify-center items-center duration-100 w-[90px] h-[90px] ease-in-out p-2 rounded-md border-black border-4 hover:border-[#FF215076]">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/mptLogo.png"
                  quality={100}
                  fill
                  style={{ objectFit: "contain" }}
                  alt="mptLogo"
                />
              </div>
            </div>
            <div className="flex justify-center items-center duration-100 w-[90px] h-[90px] ease-in-out p-2 rounded-md border-black border-4 hover:border-[#FF215076]">
              <div className="relative w-[50px] h-[50px]">
                <Image
                  src="/dollar.png"
                  fill
                  quality={100}
                  style={{ objectFit: "contain" }}
                  alt="dollar"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center duration-100 w-[90px] h-[90px] ease-in-out p-2 rounded-md border-black border-4 hover:border-[#FF215076]">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/applePay.png"
                  fill
                  quality={100}
                  style={{ objectFit: "contain" }}
                  alt="applePay"
                />
              </div>
            </div>
            <div className="flex justify-center items-center duration-100 w-[90px] h-[90px] ease-in-out p-2 rounded-md border-black border-4 hover:border-[#FF215076]">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/cbPay.png"
                  width={60}
                  height={60}
                  alt="cbPay"
                  quality={100}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 bg-transparent md:flex-row md:flex-wrap md:justify-center md:items-center md:mx-24 lg:gap-12 lg:mx-[13rem] lg:flex-row xl:mx-0">
          {PAYMENT_INFO.map((paymentInfo) => {
            return <Payment key={paymentInfo.type} paymentInfo={paymentInfo} />;
          })}
        </div>
        <div className="border-b-[1px] border-[#5B5858] pb-10 w-[90%] flex justify-center lg:border-none lg:mb-8">
          <button
            className="bg-[#FF2150] shadow-listen-btn mt-4 w-[192px] h-[59px] text-white font-semibold
          text-[18px] leading-6 duration-[0.5s] rounded-[30px] hover:bg-transparent hover:shadow-none border-2 border-[#FF2150] hover:border-[#FF5276] hover:text-[#FF5276]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
