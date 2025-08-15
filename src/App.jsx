import { useEffect, useState } from "react";
import "./App.css";
import { initialRecipes } from "./constants/initialRecipeData";
import { RecipeList } from "./components/RecipeList";
import { AddRecipe } from "./components/AddRecipe";
import { SearchFilter } from "./components/SearchFilter";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setRecipes(initialRecipes);
  }, []);

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <h3>ADD RECIPE</h3>
      <AddRecipe
        title={title}
        setTitle={setTitle}
        ingredients={ingredients}
        setIngredients={setIngredients}
        instructions={instructions}
        setInstructions={setInstructions}
        setRecipes={setRecipes}
        recipes={recipes}
      />
      <h3>Recipe</h3>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}

export default App;
