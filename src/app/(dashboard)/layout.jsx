import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* left side navbar  */}
      <div className="col-span-3 border p-4">
        <ul className="flex flex-col gap-2">
          <Link className="p-2 border rounded-lg" href={"/dashboard/user-info"}>User Info</Link>
          <Link className="p-2 border rounded-lg" href={"/dashboard/book-product"}>Book Product</Link>
        </ul>
      </div>

      {/* right side content  */}
      <div className="col-span-9 border p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
