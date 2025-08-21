import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe, removeRecipe, updateRecipe }) => {
  const navigate = useNavigate()


  const handleViewRecipe = (recipe) => {
  
    if (recipe.id) {
      navigate(`/view-recipe/${recipe.id}`);
    }
  }

  const handleDelete = (recipe) => {
    if (recipe.id) {
      removeRecipe(recipe.id)
    }
  }

  // const handleUpdate = (recipe) => {
  //   if (recipe.id) {
  //     updateRecipe(recipe.id, recipe)
  //   }
  // }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Time: {recipe.time}</p>
      <p>Category: {recipe.category}</p>
      <img src={recipe.image} alt="Recipe" />
      <button onClick={() => handleViewRecipe(recipe)}>View Recipe</button>
      <button style={{ backgroundColor: "red", color: "white" }} onClick={() => handleDelete(recipe)}>Delete Recipe</button>
    </div>
  );
};
