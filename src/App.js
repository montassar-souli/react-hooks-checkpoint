import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MovieCard from "./Components/MovieCard";
import { useEffect, useState } from "react";
import moviesData from "./Components/data";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const [movieTitle, setMovieTitle] = useState("");
  const [moviePosterURL, setMoviePosterURL] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const FilredMovies = movies
    .filter((movie) => {
      return movie.title
        .toLowerCase()
        .includes(titleFilter.toLocaleLowerCase());
    })
    .filter((number) => {
      return number.rating >= ratingFilter;
    });
  const addMovie = () => {
    const newMovie = {
      id: movies.id.length + 1,
      title: movieTitle,
      desciption: moviePosterURL,
      posterURL: movieRating,
      rating: movieDescription,
    };
    setMovies((m) => [...m, newMovie]);
    setMovieTitle("");
    setMoviePosterURL("");
    setMovieDescription("");
    setMovieRating("");
    console.log(movies);
  };
  return (
    <>
      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList FilredMovies={FilredMovies} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4 w-80 mx-auto"
        id="submit"
      >
        <div>
          <label className="font-medium">title</label>
          <input
            type="text"
            onChange={(e) => setMovieTitle(e.target.value)}
            required
            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">posterURL</label>
          <input
            type="text"
            onChange={(e) => setMoviePosterURL(e.target.value)}
            required
            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">rating</label>
          <input
            type="number"
            onChange={(e) => setMovieRating(e.target.value)}
            min="0"
            max="10"
            required
            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">description</label>
          <textarea
            onChange={(e) => setMovieDescription(e.target.value)}
            required
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          ></textarea>
        </div>
        <button
          onChange={addMovie}
          className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
