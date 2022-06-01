import Winecard from "./Winecard";
import LinkCards from "./Linkcards";
import { useEffect, useRef } from "react";

function IngrTable({ recipe }) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Add to Shopping Cart</th>
          <th>Ingredient</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {recipe.map((ingredient, index) => {
          return (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </td>
            <td>{ingredient.name}</td>
            <td>{ingredient.amount}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  );
}

//Component to map a list out of the recipe description string
function PrepSteps({ prep }) {
  const makeList = prep.split("\\n");
  return (
    <ol>
      {makeList.map((eachStep, index) => {
        return <li key={index}>{eachStep}</li>;
      })}
    </ol>
  );
}

// Main recipe gets all recipes to pass to Linkcards and one recipe to populate its content
export default function MainRecipe({ allRecipes, recipe }) {
  const recipePath = recipe.url_path;
  const recipeIngredients = allRecipes.ingredientsForRecipe[recipePath];
  const mainRecipeDiv = useRef();

  // Once the node is rendered, the page scrolls to center it in the screen
  useEffect(() => {
    // getNode(mainRecipeDiv.current) --> This would be used to pass the node reference for a parent component, a function prop getNode would
    // need to be passed to this component for it to be accessible in the parent component (<App />)
    mainRecipeDiv.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Rendering a card with an image, rich text table, preparation steps, a linked/fixed Winecard component,
  // and Linkcards with the remaining recipes
  return (
    <>
      <div
        ref={mainRecipeDiv}
        className="card col-12 col-lg-6"
        id="main-recipe-card"
      >
        <img
          src={recipe.recipe_image_url}
          className="card-img-top img-fluid main-recipe-img"
          alt={recipe.recipe_image_title}
        />
        <div className="card-body">
          <h5 className="card-title">How to make {recipe.recipe_name}</h5>
          <IngrTable recipe={recipeIngredients} />
          <h6>Preparation instructions</h6>
          <PrepSteps prep={recipe.recipe_description} />
        </div>
      </div>
      <Winecard wine={recipe} />
      <LinkCards giveNode={mainRecipeDiv && mainRecipeDiv.current} recipe={allRecipes.recipesAndWines} />
    </>
  );
}
