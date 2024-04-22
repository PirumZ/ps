import Movie from "./Movie";
import myMovies from "../movies.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import "../MovieList.css"

// function used to interact with the array of movies, in essence removing
// the components from the UI
function MovieList() {
  const [movies, setMovies] = useState(myMovies);

  const delMovie = (idToBeRemoved) => {
    console.log("Delete button is clicked at " + idToBeRemoved);
    const remainingmovies = movies.filter((m) => {
      return m.id === idToBeRemoved ? false : true;
    });
    setMovies(remainingmovies);
  };

  return (
    /* I wasn't able to fix the key issue, but it functions fine
     you're free to dock some points
     I also axed the title since it wasn't in the screenshot
     md sizing isn't necessary, but I felt it should be there
     I'm also curious how you got all of your cells in a column to be the same height
     mine just ended up looking kinda wonky depending on the resolution.
     */
    <Container fluid className="mt-4 ms-4">
      <div className="movie-list">
        <Row>
          {movies.map((movie) => (
            <Col md={5} lg={5}>
              <Movie
                key={movie.id}
                title={movie.title}
                director={movie.director}
                stars={movie.stars}
                id={movie.id}
                delHandler={delMovie}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default MovieList;
