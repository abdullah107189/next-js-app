import Link from "next/link";
import React from "react";
import style from "./poge.module.css";
export const metadata = {
  title: "All Users",
  description: "Load users Data from Array on the file",
};
const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>All Users ...</h1>
      <div className="grid grid-cols-5 gap-4">
        {data.map((user) => (
          <Link
            href={`/users/${user?.id}`}
            key={user?.id}
            className={`border p-2 rounded-lg ${style["bg-white-page"]}`}
          >
            <p>{user?.name}</p>
            <p>{user?.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
