
export default function IngredientList(props) {

    // eslint-disable-next-line react/prop-types
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })

    return (
        <section>
            <h2>Ingredients on hand: </h2>
            <ul className="ingredients-list" aria-level="polite">{ingredientListItems}</ul>
            {/* eslint-disable-next-line react/prop-types */}
            {props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    {/* eslint-disable-next-line react/prop-types */}
                    <div ref={props.reference}>
                        <h3>Ready for a recipe ?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>

                    {/* eslint-disable-next-line react/prop-types */}
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    )
}