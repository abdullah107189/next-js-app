import Link from "next/link";
import React from "react";

const NotFount = () => {
  return (
    <div className="place-items-center place-content-center h-screen ">
      <h1 className="text-5xl mb-10">404 page</h1>
      <Link href={"/"} className="btn p-1 border rounded-lg">
        Back to home
      </Link>
    </div>
  );
};

export default NotFount;
