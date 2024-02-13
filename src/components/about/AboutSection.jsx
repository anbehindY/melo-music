"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ARTISTS } from "@/utils/data";
import Artist from "./Artist";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false);

  const fadeRightAnimationVariants = {
    initial: { x: -100, opacity: 0 },
    animate: (num) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.35,
      },
    }),
  };

  const fadeLeftAnimationVariants = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.35,
      },
    },
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section className="flex flex-col items-center gap-20 w-full overflow-clip">
      <div className="flex flex-col gap-6 items-center w-4/5 lg:w-full lg:py-20">
        <h2 className="text-[36px] font-semibold md:mb-2 lg:text-[96px] lg:leading-[93px] lg:mb-8">
          Take a look at <span className="gradient">Melo</span>
        </h2>
        {isClient && (
          <div className="md:w-[90%] md:h-[300px] lg:w-[80%] lg:h-[450px] xl:w-[75%] xl:h-[500px] 2xl:h-[600px]">
            <ReactPlayer
              url={"https://youtu.be/OQz7ZrfFxTc?si=la4fZ9utoKLFzZQ-"}
              height={"100%"}
              width={"100%"}
              controls
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 items-center lg:mb-20">
        <h2 className="text-[36px] font-semibold lg:text-[96px] lg:leading-[93px] lg:mb-8">
          Our top{" "}
          <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-[#F857A6] via-pink-500 to-[#FF5858]">
            Artists
          </span>
        </h2>
        <div className="flex gap-4 justify-center md:gap-6 xl:gap-16">
          {ARTISTS.map((artist) => (
            <Artist artist={artist[0]} key={artist[1]} name={artist[1]} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center xl:flex-row xl:w-full xl:justify-center xl:gap-12">
        <motion.div
          variants={fadeRightAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] font-semibold text-center leading-[42px] !w-[250px] md:!w-4/6 mx-auto mb-6 lg:text-left lg:text-[72px] lg:leading-[129px] lg:!w-full">
            Personalized <span className="gradient"> Playlists</span>
          </h2>
          <p className="px-8 font-[16px] leading-6 tracking-widest md:w-[550px] lg:px-0 lg:w-[600px] lg:text-xl lg:leading-[35px]">
            No Wi-Fi? No problem. Download your favorite tracks and enjoy them
            on the go, Anytime, Anywhere.
          </p>
        </motion.div>
        <motion.div
          variants={fadeLeftAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative w-[215px] h-[215px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
        >
          <Image
            src="/playlist.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="playlist art"
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-6 items-center xl:flex-row-reverse xl:w-full xl:justify-center xl:gap-40">
        <motion.div
          variants={fadeLeftAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] font-semibold text-center leading-[42px] mx-auto mb-6 lg:text-left lg:text-[72px] lg:leading-[129px] lg:!w-full">
            Offline <span className="gradient">Listening</span>
          </h2>
          <p className="px-8 font-[16px] leading-6 tracking-widest md:w-[550px] lg:px-0 lg:w-[600px] lg:text-xl lg:leading-[35px]">
            No Wi-Fi? No problem. Download your favorite tracks and enjoy them
            on the go, Anytime, Anywhere.
          </p>
        </motion.div>
        <motion.div
          variants={fadeRightAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative w-[215px] h-[215px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
        >
          <Image
            src="/listening.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="listening art"
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-6 items-center xl:flex-row xl:w-full xl:justify-center xl:gap-32 mb-16 xl:mb-40">
        <motion.div
          variants={fadeRightAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] font-semibold text-center leading-[42px] !w-[250px] md:!w-4/6 mx-auto mb-6 lg:text-left lg:text-[72px] lg:leading-[129px] lg:!w-full">
            Discover <span className="gradient">New Music</span>
          </h2>
          <p className="px-8 font-[16px] leading-6 tracking-widest md:w-[550px] lg:px-0 lg:w-[600px] lg:text-xl lg:leading-[35px]">
            No Wi-Fi? No problem. Download your favorite tracks and enjoy them
            on the go, Anytime, Anywhere.
          </p>
        </motion.div>
        <motion.div
          variants={fadeLeftAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative w-[215px] h-[215px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
        >
          <Image
            src="/newMusic.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="New music art"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
