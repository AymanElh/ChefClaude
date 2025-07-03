import {useEffect, useRef, useState} from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientList from "./IngredientList.jsx";
import {getRecipeFromMistral} from "../ai.js";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null);
    console.log(recipeSection)

    useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {
            // recipeSection.current.scrollIntoView();
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    }, [recipe]);

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
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
            {ingredients.length > 0 &&
                <IngredientList
                    reference={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}