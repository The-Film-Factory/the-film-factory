import { Link } from "react-router-dom";

const HomePage = (props) => {
    const { toggleBannerVisibility } = props;
  return (
    <div className="homePage">
      <h2>
        Welcome to <span className="titleNeon">The Film Factory</span>
      </h2>
      {/* <h4>Your source for top foreign film recommendations...</h4> */}
      <div className="instructionContainer">
        <p>
          Search the Film Factory catalogue for your favourite English film, and
          discover foreign films similar to your English film selection. Love a
          film pairing? Store your favorites to our public list! Don't forget to
          also check out the pairing recommendations made by others.
        </p>

        <p className="watchlist">
          See our public list of favourite English/foreign film pairings
          {' '}
          <Link 
            to="/watchlist" 
            onClick={function(){
                toggleBannerVisibility(false);
            }}>
            here
          </Link>
          .

        </p>
      </div>
    </div>
  );
};

export default HomePage;
