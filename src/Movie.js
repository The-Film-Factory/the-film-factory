function Movie(props) {

    const { foreignLanguageMovies } = props;

    return (
        <section className='movieContainer'>
            <p>hi?</p>
            {
                foreignLanguageMovies.map(function(movie){
                    return(
                        <p>{movie.title}</p>
                        )
                })
            }
        </section>
    )
}

export default Movie;