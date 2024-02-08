"use client";

import { GoogleSignInButton } from "@/components/AuthButtons";
import GradientBackground from "@/components/shared/GradientBackground";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  if (session) {
    return (
      <GradientBackground>
        <nav className="flex items-center justify-between flex-wrap px-6 h-[99px] bg-[#0F0F0F66] sticky top-0 w-full z-50 lg:h-[125px] lg:px-16">
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
        <div className="w-full h-full px-2 py-8 lg:px-6 lg:py-20">
          <div className="bg-[#96969647] border-[#666666DB] border-[2px] rounded-xl w-full lg:w-11/12 mx-auto py-4 lg:py-28 text-white leading-7 flex flex-col gap-4 lg:gap-8">
            <div className="flex flex-col justify-start items-center gap-4 h-[calc(100vh-125px)]">
              <p>Signed in as {session.user.email}</p>
              <code className="text-center text-sm">{session.accessToken}</code>
            </div>
          </div>
        </div>
      </GradientBackground>
    );
  }
  return (
    <GradientBackground>
      <nav className="flex items-center justify-between flex-wrap px-6 h-[99px] bg-[#0F0F0F66] sticky top-0 w-full z-50 lg:h-[125px] lg:px-16">
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
      <div className="h-[calc(100vh-125px)] flex justify-center pt-40">
        <div className="w-5/6">
          <GoogleSignInButton />
        </div>
      </div>
    </GradientBackground>
  );
}
