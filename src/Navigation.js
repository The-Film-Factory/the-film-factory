import EnglishMovieSearch from "./EnglishMovieSearch.js";
import logo from "./assets/logo512.png";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const { sendToTopFunction, toggleBannerVisibility, bannerMovieVisibile } = props;

  // this function sets the visibility of the dropdown menu and banner movie, which we want to turn off on the homepage
  // it's disabled when the logo is clicked, and is passed as a prop into the search componentn


  return (
    <>
      <nav>
        <ul className="navigationContainer">
          <Link
          to={`/`}
          onClick={function () {
            toggleBannerVisibility(false);
          }}
          >
            <li className="logoContainer" onClick={ () => sendToTopFunction()}>
              <img className="logo" src={logo} alt="The Film Factory logo" />
            </li>
          </Link>
          
          <li className="navFilmFactoryLogo">
            <h1>The Film Factory</h1>
          </li>
          
          <EnglishMovieSearch
            toggleBanner={toggleBannerVisibility}
            bannerMovieVisibile={bannerMovieVisibile}
            sendToTopFunction={sendToTopFunction}
          />
        </ul>
      </nav>
    </>
  );
};

export default Navigation;