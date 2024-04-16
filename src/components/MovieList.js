import Movie from "./Movie"
import myMovies from './assets/Movies.json'

function MovieList(){
    return(
        <div className="movie-list">
            <h2>Movie List</h2>
            {
                myMovies.map(movie =>)(
                    
                )
            }
        </div>
    )
}