import { useState } from "react";
import { AddRecipe } from "../components/AddRecipe";
import { useRecipeStore } from "../hooks/useRecipeStore";

export const AddRecipeScreen = () => {
  const { addRecipe } = useRecipeStore();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <div>
      <h2>Add New Recipe</h2>

      <AddRecipe
        title={title}
        setTitle={setTitle}
        ingredients={ingredients}
        setIngredients={setIngredients}
        instructions={instructions}
        setInstructions={setInstructions}
        addRecipe={addRecipe}
      />
    </div>
  );
};
