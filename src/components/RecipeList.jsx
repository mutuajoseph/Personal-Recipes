import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipes, removeRecipe, updateRecipe }) => {

  const handleRemoveRecipe = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      await removeRecipe(id);
    }
  };

  const handleUpdateRecipe = async (id, updatedRecipe) => {
    if (window.confirm("Are you sure you want to update this recipe?")) {
      await updateRecipe(id, updatedRecipe);
    }
  };

  return (
    <div>
      {recipes && recipes.length > 0 ? (
        <div style={{ display: "flex", gap: "20px", margin: "0 auto" }}>
          {recipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard 
                recipe={recipe} 
                removeRecipe={handleRemoveRecipe} 
                updateRecipe={handleUpdateRecipe} 
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};
