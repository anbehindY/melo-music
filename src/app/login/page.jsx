"use client";

import { GoogleSignInButton } from "@/components/AuthButtons";
import TrashCan from "@/components/shared/TrashCan";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { endpoints } from "@/utils/endpoints";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loginHandler = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.API_URL}${endpoints.login.google}`,
          { token: session.id_token },
          {
            headers: {
              "Content-Type": "application/json",
              "api-key": process.env.API_KEY,
            },
          }
        );
        setToken(data.token);
      } catch (error) {
        console.log(error);
      }
    };
    if (session) {
      loginHandler();
    }
  }, [session]);

  const onDeleteHandler = async () => {
    try {
      const res = await axios.delete(
        `${process.env.API_URL}${endpoints.account.delete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "api-key": process.env.API_KEY,
          },
        }
      );
      console.log(res.data);
      toast.success("Account deleted successfully");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  if (session) {
    return (
      <div className="bg-[#27282E]">
        <div className="bg-gradient-rect h-screen bg-no-repeat bg-top bg-[length:100%_50%] px-6 lg:px-16 flex flex-col justify-start gap-20 items-center">
          <nav className="flex items-center justify-between flex-wrap h-[99px] sticky top-0 w-full z-50 lg:h-[120px] ">
            <div className="relative w-[100px] h-[40px] lg:w-[200px] lg:h-[77px] cursor-pointer">
              <Image
                src="/Logo.svg"
                fill
                alt="Melo logo"
                style={{ objectFit: "contain" }}
                onClick={() => router.push("/")}
              />
            </div>
            <button
              className="text-base cursor-pointer border-[1.5px] rounded-md px-6 py-2 border-white"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </nav>
          <div className="bg-black md:w-[572px] lg:w-[754px] flex flex-col justify-self-center justify-center items-center rounded-3xl p-4">
            <div className="bg-[#27282E] h-full px-12 py-8 rounded-t-lg">
              <div className="border-b border-[#bfbfbf] py-4 flex flex-col md:flex-row justify-between ">
                <p className="text-2xl mb-4 md:mb-0">
                  Do you want to delete your account?
                </p>
                <TrashCan />
              </div>
              <p className="py-3 text-xl leading-6 text-[#bfbfbf]">
                This will delete all your data from Melo Music. All your data,
                music collections will be deleted. Are you sure you want to
                delete?
              </p>
            </div>
            <div className="bg-[#575757] flex justify-end w-full p-4 rounded-b-lg gap-4">
              <button
                className="w-[131px] h-12 bg-[#434343] rounded-md"
                onClick={() => {
                  router.push("/");
                }}
              >
                Cancel
              </button>
              <button
                className="w-[131px] h-12 bg-[#434343] rounded-md text-[#e81e49]"
                onClick={onDeleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#27282E]">
      <div className="bg-gradient-rect min-h-screen bg-no-repeat bg-top bg-[length:100%_50%] flex flex-col justify-start gap-16 md:gap-20 items-center">
        <nav className="flex items-center justify-between flex-wrap px-6 h-[99px] sticky top-0 w-full z-50 lg:h-[120px] lg:px-16">
          <div className="relative w-[100px] h-[40px] lg:w-[200px] lg:h-[77px] cursor-pointer">
            <Image
              src="/Logo.svg"
              fill
              alt="Melo logo"
              style={{ objectFit: "contain" }}
              onClick={() => router.push("/")}
            />
          </div>
        </nav>
        <div className="bg-[#f5f5f5] md:w-[572px] flex flex-col justify-center items-center gap-4 rounded-lg p-8">
          <div className="relative w-[150px] h-[150px] cursor-pointer">
            <Image
              src="/logo/signIn_logo.svg"
              fill
              alt="Melo logo"
              style={{ objectFit: "contain" }}
              onClick={() => router.push("/")}
            />
          </div>
          <h3 className="text-[#0f1016] text-3xl font-bold">Log In to Melo</h3>
          <small className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-[#ff512f] text-[13px] to-[#dd2476]">
            Melo to your Heart!
          </small>
          <div className="w-full md:w-4/6">
            <GoogleSignInButton />
          </div>
        </div>
        <small className="text-[#d3d3d3]">
          © 2024 All Rights Reserved. Melo Music
        </small>
      </div>
    </div>
  );
}
