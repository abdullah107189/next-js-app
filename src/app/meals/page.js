"use client";
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

  return <div>meals length is : {meals.length}</div>;
};

export default page;
