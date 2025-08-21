import { useState } from "react";

export const EditRecipe = ({ recipe, updateRecipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [time, setTime] = useState(recipe.time);
  const [category, setCategory] = useState(recipe.category);
  const [image, setImage] = useState(recipe.image);

  const handleUpdate = () => {
    const updatedRecipe = { ...recipe, title, time, category, image };
    updateRecipe(recipe.id, updatedRecipe);
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <input 
        type="text" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        placeholder="Time" 
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
      />
      <input 
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        placeholder="Image URL" 
      />
      <button onClick={handleUpdate}>Update Recipe</button>
    </div>
  );
}