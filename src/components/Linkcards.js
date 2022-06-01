import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

// This component gets and maps all recipes and generates a card with an image, short text and a link button for each
export default function LinkCards({ recipe, giveNode }) {
  return recipe.map((oneRecipe, index) => <Recipe key={index} recipes={oneRecipe} recipeNode={giveNode} />)
}

// This component sets how a single card is populated. It receives the recipes fetched data, and a DOM node from <MainRecipe /> parent
// component to be referenced for a scroll functionality.
function Recipe ({ recipes, recipeNode }) {
  const recipeCard = recipeNode;

  // WIP, this is meant to change the styling of the button depending on what type of type of recipe it has (Starter, Main or Dessert)
  // const [recipeType, setRecipeType] = useState(recipes.fields.recipeType)

  // const recipeTypeCheck = recipeType => {
  //   if (recipeType === 'Main') {
  //     return 'btn btn-primary btn-block'
  //   } 
  //   if (recipeType === 'Starter') {
  //     return 'btn btn-success btn-block'
  //   }
  //   if (recipeType === 'Dessert') {
  //     return 'btn btn-warning btn-block'
  //   }
  // }

  // useEffect(() => {

  // }, [])
  //WIP end

  // Upon link click, the window references to a dom node (rendered by parent container, stored with useRef, and passed down to this
  // container through props), and scrolls smoothly to center the main recipe on the browser.
  const handleClick = (recipeCard) => {
    recipeCard.scrollIntoView({behavior: "smooth"})
  }

  // Each Linkcard has a React Router NavLink component to bring the user to the relevant route for the recipe
  return (
    <> 
    <div className="col-lg-4 diff-recipe mt-5">
      <div className="card recipe-card">
        <img src={recipes.recipe_image_url} className="card-img-top diff-recipe-img" alt={recipes.recipe_image_title} />
        <div className="card-body">
          <h6 className="card-title">{recipes.recipe_name}</h6>
          <p className="card-text">{recipes.short_description}</p>
          <NavLink to={recipes.url_path}><button type="button" onClick={() => {handleClick(recipeCard)}}>{recipes.recipe_name}</button></NavLink> 
        </div>
      </div>
    </div>
    </> 
  )
}
