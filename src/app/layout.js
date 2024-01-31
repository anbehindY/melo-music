import "./globals.css";
import { Faustina, Instrument_Sans } from "next/font/google";
import NextAuthProvider from "@/components/NextAuthProvider";

export const metadata = {
  title: "Melo Music",
  description:
    "Melo Music is a music streaming service that allows you to listen to your favorite songs and artists.",
};

export const faustina = Faustina({
  subsets: ["latin"],
  variable: "--font-faustina",
  display: "swap",
});

export const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

// bg-[#110F0F]

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrument_sans.variable} ${faustina.variable} scroll-smooth`}
    >
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
