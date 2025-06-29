import {useState} from "react";

export default function Main() {

    const [ingredients, setIngredients] = useState([]);

    function handleSubmitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient")
        setIngredients([...ingredients, newIngredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmitForm}>
                <input type="text" name="ingredient" aria-label="Add Ingredient" placeholder="e.g. oregano"/>
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredients && ingredients.map(function(ingredient) {
                    return <li key={ingredient}>{ingredient}</li>
                })}
            </ul>
        </main>
    )
}