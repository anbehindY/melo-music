"use client";

import React from "react";
import { SUPPORT_DETAILS } from "@/utils/data";
import AccordiumItem from "@/components/support/AccordiumItem";
import MainLayout from "@/components/shared/MainLayout";
import { endpoints } from "@/utils/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";

const SupportPage = () => {
  const [content, setContent] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.API_URL}${endpoints.support.get}`,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.API_KEY,
          },
        }
      );
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout>
      <div className="w-full h-full px-2 py-8 lg:px-6 lg:py-20">
        <div className="bg-[#96969647] border-[#666666DB] border-[2px] rounded-xl w-full lg:w-11/12 mx-auto py-4 lg:py-28 text-black leading-7 flex flex-col gap-4 lg:gap-8">
          {SUPPORT_DETAILS.map((item) => (
            <AccordiumItem
              question={item.question}
              answer={item.answer}
              key={item.key}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default SupportPage;
