import { useNavigate } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate()


  const handleViewRecipe = (recipe) => {
  
    if (recipe.id) {
      navigate(`/view-recipe/${recipe.id}`);
    }
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Time: {recipe.time}</p>
      <p>Category: {recipe.category}</p>
      <img src={recipe.image} alt="Recipe" />
      <button onClick={() => handleViewRecipe(recipe)}>View Recipe</button>
    </div>
  );
};
