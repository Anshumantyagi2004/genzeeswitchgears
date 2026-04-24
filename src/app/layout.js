import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Main/Navbar";
import Footer from "@/components/Main/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Switchgear Manufacturer | Industrial Switchgear & MCB Box Manufacturer | Genzee Switchgear",
  description: "Leading Switchgear Manufacturer offering Industrial Switchgear and MCB Boxes. Genzee Switchgear delivers safe, durable, and high-performance electrical solutions.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
