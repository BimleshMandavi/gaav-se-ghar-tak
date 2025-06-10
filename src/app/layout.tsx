import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./layouts/Footer";
// import { PT_Serif } from "next/font/google";


// const ptSerif = PT_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   display: "swap",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GaavSeGharTak | Village-Fresh Products",
    template: "%s | GaavSeGharTak",
  },
  description:
    "Shop organic and seasonal produce directly from Indian villages, delivered to your door.",

  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
