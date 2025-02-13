"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const page = () => {
  const [meals, setMeals] = useState([]);
  const [serach, setSearch] = useState("");
  const fetchMeal = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${serach}`
      );
      const data = await res.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };
  useEffect(() => {
    fetchMeal();
  }, [serach]);
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-5 flex items-center justify-center my-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="border px-5 rounded-md bg-gray-100"
          type="text"
          placeholder="Enter Title Name"
        />
      </div>
      {meals?.map((meal) => (
        <Link
          href={`/meals/${meal?.idMeal}`}
          key={meal?.idMeal}
          className={`border p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200`}
        >
          <p>{meal?.strMeal}</p>
        </Link>
      ))}
    </div>
  );
};

export default page;
