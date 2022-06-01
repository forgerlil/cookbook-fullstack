import WineLogo from "../Pictures/FoodWine.jpeg";
import { NavbarDropdownRecipes, NavbarDropdownWines } from "./NavbarDropdown";
import { Button, Navbar, Nav, NavDropdown, Container, Form, FormControl } from "react-bootstrap";

export default function NavigationBar({ recipes }) {
  // The NavBar is being rendered with React Bootstrap, and for each element in the dropdown menus
  // we map the recipes array (with all recipes) to generate a component link that takes the user to the page of the selected recipe/wine
  console.log(recipes)
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className="container d-flex flex-row justify-content-space">
            <Navbar.Brand href="#">
              <img
                alt=""
                src={WineLogo}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="container d-flex flex-row justify-content-space">
                <div>
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="/" className="">
                      About
                    </Nav.Link>
                    <NavDropdown
                      title="Recipe"
                      id="navbarScrollingDropdownRecipe"
                    >
                      {recipes.map((oneRecipe, index) => (
                        <NavbarDropdownRecipes
                          key={index}
                          recipes={oneRecipe}
                        />
                      ))}
                      <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown title="Wine" id="navbarScrollingDropdownWine">
                      {recipes.map((oneRecipe, index) => (
                        <NavbarDropdownWines key={index} recipes={oneRecipe} />
                      ))}
                      <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>
                </div>
                <div className="form-align">
                  <Form className="container d-flex flex-row justify-content-space">
                    <div>
                      <FormControl
                        type="search"
                        placeholder="Type here"
                        className="me-2"
                        aria-label="Search"
                      />
                    </div>
                    <div>
                      <Button variant="outline-dark">Search</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
