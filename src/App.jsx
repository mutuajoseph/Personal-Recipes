import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { AddRecipeScreen } from "./pages/AddRecipeScreen";
import { ViewRecipesScreen } from "./pages/ViewRecipesScreen";
import { Welcome } from "./pages/Welcome";
import { ViewRecipeScreen } from "./pages/ViewRecipeScreen";

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/add-recipe" element={<AddRecipeScreen />} />
        <Route path="/view-recipes" element={<ViewRecipesScreen />} />
        <Route path="/view-recipe/:id" element={<ViewRecipeScreen />} />
    </Routes> 
    </>
  );
}

export default App;
