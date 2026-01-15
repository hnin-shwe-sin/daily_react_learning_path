import React from "react";
import Recipe from "./Recipe";
export default function Main() {
    // ingredient lists
    var [ingredients, setIngredients] = React.useState([]);
    // ingredient format
    const ingredientItems = ingredients.map(ingredient => (
        <li className="mb-2" key={ingredient}>{ingredient}</li>
    ));

    // ingredient handle click
    function showIngredients(formData) {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevItems => [...prevItems, newIngredient]);
    }

    // get a recipe 
    let [recipeShown, setRecipeShown] = React.useState(false);

    // main return statement
    return (
        <main className="max-w-5xl mx-auto mt-12 p-5">
            <form className="grid grid-cols-12 gap-3" action={showIngredients}>
                <input type="text" className="border border-gray-300 col-span-8 p-[8px] rounded focus:outline-none" placeholder="e.g. orange" name="ingredient" />
                <button type="submit" className="add-btn col-span-4 bg-gray-900 rounded-lg text-white">Add Intregrient</button>
            </form>
            {/* ingredient list */}
            {ingredients.length > 0 &&
                <section className="mt-3">
                    <h1 className="text-[22px] font-bold">Ingredients on hand:</h1>
                    <ul className="list-disc p-5">
                        {ingredientItems}
                    </ul>
                    {ingredients.length > 3 && <div className="send-box p-4 rounded bg-gray-200 flex justify-between items-center">
                        <div>
                            <h3 className="text-[18px] font-semibold mb-2">Ready for a Recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={() => setRecipeShown(prev => !prev)} className="bg-orange-500 p-2 rounded text-white">Get a recipe</button>
                    </div>}
                </section>}
            {/* AI response */}
            {recipeShown && <Recipe />}
        </main>
    )
}