import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes && recipes.length > 0 ? (
        <div style={{ display: "flex", gap: "20px", margin: "0 auto" }}>
          {recipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};
