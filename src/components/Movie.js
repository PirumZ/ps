import React from "react";
import "../Movie.css";
import { Button } from "react-bootstrap";
/*Movie component with the title, director, and stars data
additional button to delete component*/
export default function Movie(props) {
  return (
    <div className="movie">
      <div className="movie-title">
        <b>Movie Title: {props.title}</b>
      </div>
      <div className="director">
        <b>Director: {props.director}</b>
      </div>
      <Button
        className="btn btn-danger btn-sm p-1 float-end"
        onClick={() => {
          props.delHandler(props.id);
        }}
      >
        Delete
      </Button>
      <div className="stars">Stars: {props.stars}</div>
    </div>
  );
}
