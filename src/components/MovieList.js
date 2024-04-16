import Movie from "./Movie"
import myMovies from '../assets/Movies.json'

function MovieList(){
    return(
        <div className="movie-list">
            {
                myMovies.map(movie =>(
                    <Movie title = {movie.title} director={movie.director} stars = {movie.stars} />
                ))
            }
        </div>
    )
}

export default MovieList;