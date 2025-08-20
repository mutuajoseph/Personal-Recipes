import { useParams } from "react-router-dom"
import { useRecipeStore } from "../hooks/useRecipeStore";

export const ViewRecipeScreen = () => {

    const { id } = useParams()
    const { recipes } = useRecipeStore();

    const recipe = recipes.find((recipe) => {
        console.log("sdfsd", recipe.id.toString() === id)
        return recipe.id.toString() === id;
    });

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
        </div>
    )
}