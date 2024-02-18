import "./globals.css";
import { Faustina, Instrument_Sans } from "next/font/google";
import NextAuthProvider from "@/components/NextAuthProvider";
import { Toaster } from "react-hot-toast";

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrument_sans.variable} ${faustina.variable} scroll-smooth`}
    >
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
