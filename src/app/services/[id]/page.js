import React from "react";

const page = ({ params }) => {
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
  const id = params?.id;
  const serviceData = services.find((service) => service?.id == id);
  if (serviceData) {
    return (
      <div>
        <p>{serviceData?.id}</p>
        <p>{serviceData?.name}</p>
        <p>{serviceData?.price}</p>
        <p>{serviceData?.category}</p>
        <p>{serviceData?.description}</p>
      </div>
    );
  } else {
    return (
      <>
        <p>Page not found</p>
      </>
    );
  }
};

export default page;
