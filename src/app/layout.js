import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  keywords: ["Next.js", "React", "JavaScript"],
  title: {
    default: "Learning Next.js",
    template: "%s | Learning Next.js",
  },
  description: "Learning next js application as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="px-4 max-w-[1440px] mx-auto min-h-[85vh]">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
