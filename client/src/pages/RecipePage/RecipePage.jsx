import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import "./RecipePage.css";
import BackButton from "../../components/BackButton/BackButton";

function RecipePage() {
  const recipeData = useLoaderData();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const sortedRecipes = [...recipeData].sort(
      (a, b) => new Date(b.recipe_date) - new Date(a.recipe_date)
    );
    setRecipes(sortedRecipes);
  }, [recipeData]);

  return (
    <>
      <BackButton />
      <div className="recipes-container">
        <div className="all-recipes">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.recipe_id} className="recipe-card">
                <h3>{recipe.name}</h3>
                <img src={recipe.image} alt={recipe.recipe_name} />
                <Link to={`/details/${recipe.recipe_id}`}>
                  <button type="button" className="buttonDetails">
                    Détails
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>Aucune recette trouvée.</p>
          )}
        </div>
      </div>
    </>
  );
}
export default RecipePage;
