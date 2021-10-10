import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieMatch = () => {
  const { movieID, foreignMovieID } = useParams();
  return (
    <div>
      <h2>Path to foreign film</h2>
      <MovieCard />
      <MovieCard />
    </div>
  );
};
export default MovieMatch;
