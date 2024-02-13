"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbChevronRight, TbChevronDown } from "react-icons/tb";

const AccordiumItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`lg:w-4/5 w-[95%] box-border transition-all border-2 border-transparent items-start mx-auto bg-white flex flex-col justify-between lg:px-10 lg:py-10 px-6 py-6 font-[500] lg:text-[22px] text-lg rounded-xl
			${isOpen && "!border-[#FF2150]"}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex justify-between w-full items-center">
        <p className="w-4/5">{question}</p>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "bottom" : "right"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              zIndex: 1,
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              zIndex: 0,
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
            className={`w-[50px] h-[50px] ${
              isOpen && "bg-gradient"
            } rounded-full shadow-right-arrow flex justify-center items-center text-[#FF2150] cursor-pointer`}
          >
            {isOpen ? (
              <TbChevronDown className="text-3xl text-white" />
            ) : (
              <TbChevronRight className="text-3xl" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.2,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.2,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <p className="w-full cursor-pointer text-[18px] font-[400] leading-[30px] mt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordiumItem;
