import placeholder from "./assets/noPhoto.svg";

const MovieCard = (props) => {
  const {
    movieKey,
    cardClass,
    imgClass,
    movieOgLang,
    showOgLang,
    movieTitle,
    moviePoster,
    cardInformation,
    movieDescription,
    showMovieDescription,
    movieReleaseDate,
    showMovieReleaseDate
  } = props;

  /////////////////////////////////////////////////// to do: change null line 21 to placeholder image

  return (
    <li key={movieKey} 
        className={cardClass}>
      <div className={cardInformation}>
        <h2>{movieTitle}</h2>
        {
            showOgLang
            ?
            <p>Language: {movieOgLang}</p>
            :
            null
        }

        {
            showMovieReleaseDate
            ?
            <p className="releaseDateClass">{movieReleaseDate}</p>
            :
            null
        }
        {
            showMovieDescription
            ?
            <p><span>Description</span>: {movieDescription}</p>
            :
            null
        }
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





//      adult: false
//      backdrop_path: "/pajKyahlPPggk0k5LiA2v4kwWqn.jpg"
//      genre_ids: Array [ 12, 14 ]
//      id: 671
//      original_language: "en"
//      original_title: "Harry Potter and the Philosopher's Stone"
//      overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame."
//      popularity: 235.63
//      poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"
//      release_date: "2001-11-16"
//      title: "Harry Potter and the Philosopher's Stone"
//      video: false
//      vote_average: 7.9
//      vote_count: 21129
