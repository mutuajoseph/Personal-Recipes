export const RecipeCard = ({ recipe }) => {
  const handleViewRecipe = (recipe) => {
    console.log(`Viewing recipe`, recipe);
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
