import placeholder from "./assets/noPhoto.svg";

const MovieCard = (props) => {
  const {
    movieKey,
    cardClass,
    imgClass,
    movieOgLang,
    movieTitle,
    moviePoster,
  } = props;

  /////////////////////////////////////////////////// to do: change null line 21 to placeholder image

  return (
    <li key={movieKey}>
      <div className={cardClass}>
        <h2>{movieTitle}</h2>
        <p>Language: {movieOgLang}</p>
      </div>
      <div className={imgClass}>
        <img
          src={
            moviePoster
              ? `https://image.tmdb.org/t/p/w500/${moviePoster}`
              : { placeholder }
          }
          alt={`Poster for '${movieTitle}'`}
        />
      </div>
    </li>
  );
};

export default MovieCard;
