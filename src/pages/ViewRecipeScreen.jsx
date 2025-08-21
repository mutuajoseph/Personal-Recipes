import { useParams } from "react-router-dom"
import { useRecipeStore } from "../hooks/useRecipeStore";
import { EditRecipe } from "../components/EditRecipe";
import { useState } from "react";

export const ViewRecipeScreen = () => {

    const { id } = useParams()
    const { recipes, updateRecipe } = useRecipeStore();
    const [showEdit, setShowEdit] = useState(false);

    const recipe = recipes.find((recipe) => {
        console.log("sdfsd", recipe.id.toString() === id)
        return recipe.id.toString() === id;
    });

    const handleRecipeUpdate = (updatedRecipe) => {
        updateRecipe(recipe.id, updatedRecipe);
    }

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>Time: {recipe.time}</p>
            <p>Category: {recipe.category}</p>
            <img src={recipe.image} alt="Recipe" />
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>

            <button onClick={() => setShowEdit(true)} >Edit Recipe</button>

            { showEdit && (
                <EditRecipe 
                    recipe={recipe} 
                    updateRecipe={(id, updatedRecipe) => {
                        // Logic to update the recipe
                        console.log("Updating recipe:", id, updatedRecipe);

                        handleRecipeUpdate(updatedRecipe);
                        setShowEdit(false);
                    }} 
                />
            )}
        </div>
    )
}