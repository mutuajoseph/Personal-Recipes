
export const AddRecipe = ({
  title,
  setTitle,
  ingredients,
  setIngredients,
  instructions,
  setInstructions,
  addRecipe
}) => {
  const handleAddRecipe = async (e) => {
    e.preventDefault();

    // contruct our new recipe object
    const newRecipe = {
      title,
      ingredients: ingredients
        .split(",")
        .map((ingredient) => ingredient.trim()),
      instructions,
      time: "40 min",
      category: "Dinner",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop",
      servings: 4,
      difficulty: "Easy",
      isFavorite: false,
      createdAt: new Date().toISOString(),
    };

    await addRecipe(newRecipe)

    // Reset form fields
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleAddRecipe} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Recipe Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Add ingredients & separate using ,"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Instructions"
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

// TWO WAY DATA BINDING
// event handling
