import {useState} from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientList from "./IngredientList.jsx";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);



    function toggleRecipeShown() {
        setRecipeShown(!recipeShown);
    }

    function addIngredient(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient")
        setIngredients([...ingredients, newIngredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={addIngredient}>
                <input
                    type="text"
                    name="ingredient"
                    aria-label="Add Ingredient"
                    placeholder="e.g. oregano"
                />
                <button type="submit">Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientList
                ingredients={ingredients}
                toggleRecipeShown={toggleRecipeShown}
            />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}