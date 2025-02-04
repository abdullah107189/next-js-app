import Link from "next/link";
import React from "react";

// export async function generateMetadata({ params }) {
//   // read route params
//   const id = (await params).id;
//   return {
//     title: product.title,
//     description:product
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

const page = async ({ params }) => {
  const id = await params?.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userData = await res.json();
  console.log(userData);
  if (userData) {
    return (
      <div>
        <p>{userData?.id}</p>
        <p>{userData?.name}</p>
        <p>{userData?.email}</p>
        <p>{userData?.phone}</p>
        <p>{userData?.website}</p>
      </div>
    );
  } else {
    return (
      <div className="place-items-center place-content-center h-screen ">
        <h1 className="text-5xl mb-10">404 page</h1>
        <Link href={"/"} className="btn p-1 border rounded-lg">
          Back to home
        </Link>
      </div>
    );
  }
};

export default page;
