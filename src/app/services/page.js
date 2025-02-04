import Link from "next/link";
import React from "react";
import style from "./poge.module.css";
export const metadata = {
  title: "Services",
  description: "Load Services Data from Array on the file",
};
const services = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description:
        "Building responsive and functional websites using modern technologies.",
      price: 1500,
      category: "Development",
    },
    {
      id: 2,
      name: "Graphic Design",
      description:
        "Creating visually appealing designs for branding and marketing.",
      price: 800,
      category: "Design",
    },
    {
      id: 3,
      name: "Digital Marketing",
      description:
        "Promoting products or services through digital channels to reach a wider audience.",
      price: 1200,
      category: "Marketing",
    },
    {
      id: 4,
      name: "SEO Optimization",
      description:
        "Improving website visibility on search engines to increase organic traffic.",
      price: 600,
      category: "Marketing",
    },
    {
      id: 5,
      name: "Content Writing",
      description:
        "Providing high-quality written content for websites, blogs, and marketing materials.",
      price: 400,
      category: "Writing",
    },
  ];
  return (
    <div>
      <h1>services ...</h1>
      <div className="grid grid-cols-5 gap-4">
        {services.map((service) => (
          <Link
            href={`/services/${service?.id}`}
            key={service?.id}
            className={`border p-2 rounded-lg ${style["bg-white-page"]}`}
          >
            <p>{service?.name}</p>
            <p>{service?.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default services;
