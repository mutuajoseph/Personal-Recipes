import { useEffect, useState } from "react";
import { SearchFilter } from "../components/SearchFilter";
import { RecipeList } from "../components/RecipeList";
import { initialRecipes } from "../constants/initialRecipeData";
import { useRecipeStore } from "../hooks/useRecipeStore";

export const ViewRecipesScreen = () => {
  const { recipes, setRecipes } = useRecipeStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setRecipes(initialRecipes);
  }, []);

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>View Recipes</h1>

      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};
