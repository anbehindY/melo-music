import React from "react";
import Image from "next/image";

const Artist = ({ artist, name }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative w-[65px] h-[65px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] xl:w-[243px] xl:h-[243px] rounded-full flex items-center justify-center shadow-artist-img lg:shadow-artist-shadow"
        key={artist}
      >
        <Image
          src={`/artists/${artist}.png`}
          fill
          style={{ objectFit: "contain" }}
          sizes="(min-width: 1024px) 100%, 100%"
          alt="artist photo"
        />
      </div>
      <span className="tracking-tight text-center text-sm lg:text-[32px] lg:leading-[31px] lg:mt-4">
        {name}
      </span>
    </div>
  );
};

export default Artist;
