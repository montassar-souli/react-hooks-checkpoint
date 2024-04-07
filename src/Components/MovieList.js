import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ FilredMovies }) => {
  return (
    <div className="flex flex-wrap">
      {FilredMovies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
