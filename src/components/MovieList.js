import Movie from "./Movie"
import myMovies from '../assets/Movies.json'
import "bootstrap/dist/css/bootstrap.min.css"
import "../MovieList.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MovieList(){
    return(
        <Row>
        <div className="movie-list">
            {  
                myMovies.map(movie =>(
                    <Col lg={6} md={8}>
                    <Movie title = {movie.title} director={movie.director} stars = {movie.stars}  key ={movie.title}/>
                    </Col>
                ))   
            }
            
        </div>
        </Row>
    )
}

export default MovieList;