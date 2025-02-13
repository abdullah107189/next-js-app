import Link from "next/link";

const Page = async ({ params }) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params?.id}`
  );

  if (!res.ok) {
    return (
      <div className="text-center text-red-500 py-4">
        Error fetching data. Please try again later.
      </div>
    );
  }

  const data = await res.json();
  const recipe = data.meals ? data.meals[0] : null;

  if (!recipe) {
    return (
      <div className="text-center text-red-500 py-4">Invalid meal ID.</div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8">
        {/* Added container for responsiveness */}
        <Link
          href="/meals"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Meals
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Overflow hidden for image clipping */}
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-auto object-cover"
            style={{ maxHeight: "400px" }}
          />
          <div className="p-6">
            {/* Added padding to the content area */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {recipe.strMeal}
            </h1>
            {/* Slightly smaller heading */}
            <div className="mb-4">
              {/* Combined category, area, tags */}
              <p className="text-lg text-gray-700">
                Category:
                <span className="font-medium">{recipe.strCategory}</span>
              </p>
              <p className="text-lg text-gray-700">
                Area: <span className="font-medium">{recipe.strArea}</span>
              </p>
              {recipe.strTags && ( // Conditionally render tags
                <p className="text-lg text-gray-700">
                  Tags:
                  <span className="font-medium">
                    {recipe.strTags.split(",").join(", ")}
                  </span>
                  {/* Handle multiple tags */}
                </p>
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Ingredients:
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {Object.keys(recipe)
                .filter((key) => key.startsWith("strIngredient") && recipe[key])
                .map((key, index) => (
                  <li key={index}>
                    {recipe[`strMeasure${index + 1}`]} {recipe[key]}
                  </li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Instructions:
            </h2>
            <div className="text-gray-700 prose lg:prose-xl">
              {/* Added prose class for better readability */}
              {recipe.strInstructions?.split("\r\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {recipe.strYoutube && ( // Conditionally render the video link
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-300" // Changed color to red
              >
                Watch the Video Tutorial
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
