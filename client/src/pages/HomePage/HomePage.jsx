import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import RecipeTabs from "../../components/RecipeTabs/RecipeTabs";

function HomePage() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch(
          "http://localhost:3310/api/auth/checkauth",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(!!data.user);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de l'authentification",
          error
        );
      }
    };

    checkAuthentication();
  }, []);

  const handleDiscoverClick = () => {
    if (isAuthenticated) {
      navigate("/recette");
    } else {
      navigate("/connexion");
    }
  };

  return (
    <div className="homepage">
      <div className="hero-header">
        <div className="content-wrapper">
          <div className="imgcontainer">
            <img
              src="./images/Accueil.jpeg"
              alt="plat cuisiné"
              className="hero-image"
            />
          </div>
        </div>

        <div className="hero-header-container">
          <h1 className="hero-title">Eating Nam Nam</h1>
          <p className="hero-baseline">
            La plateforme leader du partage de recettes "zéro-déchet"
          </p>
          <button
            className="hero-button"
            type="button"
            onClick={handleDiscoverClick}
          >
            Découvrir
          </button>
        </div>
      </div>
      <div className="recipe">
        <h1>Découvrez les 10 dernières recettes postées :</h1>
        <RecipeTabs />
      </div>
    </div>
  );
}

export default HomePage;
