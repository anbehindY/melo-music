"use client";

import MainLayout from "@/components/shared/MainLayout";
import { endpoints } from "@/utils/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import FooterSkeleton from "@/components/shared/FooterSkeleton";
import GradientBackground from "@/components/shared/GradientBackground";

const PrivacyPolicy = () => {
  const [content, setContent] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.API_URL}${endpoints.privacyPolicy.get}`,
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
    <GradientBackground>
      <MainLayout>
        {content ? (
          <div className="w-full h-full px-2 py-8 lg:px-6 lg:py-20">
            <div className="bg-[#96969647] border-[#666666DB] border-[2px] rounded-xl w-full lg:w-11/12 mx-auto py-4 lg:py-28 text-black leading-7 flex flex-col gap-4 lg:gap-8">
              <div
                className={`lg:w-4/5 w-[95%] box-border border-2 border-transparent items-start mx-auto bg-white flex flex-col justify-between lg:px-10 lg:py-10 px-6 py-6 font-[500] lg:text-[22px] text-lg rounded-xl
    	`}
              >
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
                <br />
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        ) : (
          <FooterSkeleton />
        )}
      </MainLayout>
    </GradientBackground>
  );
};

export default PrivacyPolicy;
