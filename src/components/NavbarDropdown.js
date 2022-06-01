import { NavDropdown } from 'react-bootstrap';

// Small file to map all the recipes and generate a Nav dropdown list item component for each recipe/wine
function NavbarDropdownRecipes({ recipes }) {
    console.log(recipes);
    return <NavDropdown.Item href={recipes.url_path}>{recipes.recipe_name}</NavDropdown.Item>
}

function NavbarDropdownWines({ recipes }) {
    return <NavDropdown.Item href={recipes.url_path}>{recipes.wine_name}</NavDropdown.Item>
}

export { NavbarDropdownRecipes, NavbarDropdownWines };

