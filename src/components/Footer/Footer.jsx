"use client";
import { usePathname } from "next/navigation";
import React from "react";
const Footer = () => {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} abdullah107189. All rights
            reserved.
          </p>
        </div>
      </footer>
    );
  } else {
    <></>;
  }
};

export default Footer;
