"use client";

import { GoogleSignInButton } from "@/components/AuthButtons";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  if (session) {
    return (
      <div className="bg-[#27282E]">
        <div className="bg-gradient-rect h-screen bg-no-repeat bg-top bg-[length:100%_50%] flex flex-col justify-start gap-20 items-center">
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
            <button
              className="text-lg font-semibold cursor-pointer border-2 rounded-full px-6 py-2 text-[#FF2150] border-[#FF2150]
            hover:bg-[#FF2150] hover:text-white hover:shadow-listen-btn"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#27282E]">
      <div className="bg-gradient-rect h-screen bg-no-repeat bg-top bg-[length:100%_50%] flex flex-col justify-start gap-20 items-center">
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
        <form className="bg-[#f5f5f5] md:w-[572px] flex flex-col justify-center items-center gap-4 rounded-lg p-8">
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
          <div className="w-4/6">
            <GoogleSignInButton />
          </div>
          {/* <button
            className="text-lg font-semibold cursor-pointer border-2 rounded-full px-6 py-2 text-[#FF2150] border-[#FF2150]
            hover:bg-[#FF2150] hover:text-white hover:shadow-listen-btn"
            onClick={() => signOut()}
          >
            Sign out
          </button> */}
        </form>
        <small className="text-[#d3d3d3]">
          © 2024 All Rights Reserved. Melo Music
        </small>
      </div>
    </div>
  );
}
