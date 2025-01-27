"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const loggedIn = false;
  const handleGoAddressPage = () => {
    if (loggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p>about page..</p>
      <button
        type="button"
        onClick={handleGoAddressPage}
        className="border px-2 rounded-lg"
      >
        Go address page
      </button>
    </div>
  );
};

export default Page;
