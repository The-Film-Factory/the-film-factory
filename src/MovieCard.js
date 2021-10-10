const MovieCard = (props) => {

    const { movieKey, cardClass, movieTitle, movieOgLang, imgClass, moviePoster } = props;

    return (
        <li key={movieKey}>
            <div className={cardClass}> 
                <h2>{movieTitle}</h2>
                <p>Language: {movieOgLang}</p>
            </div>
            <div className={imgClass}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
                    alt={`Poster for '${movieTitle}'`}
                />
            </div>
        </li>
    ) 
} 

export default MovieCard; 