import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

function App() {
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(3);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const addMovie = () => {
    if (!movieName.trim()) {
      alert("Please enter a movie name!");
      return;
    }

    setMovies([
      ...movies,
      {
        id: Date.now(),
        name: movieName,
        rating,
        watched: false
      }
    ]);

    setMovieName("");
    setRating(3);
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const clearAll = () => setMovies([]);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🎬 Movie Watchlist</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <AddMovie
        movieName={movieName}
        setMovieName={setMovieName}
        rating={rating}
        setRating={setRating}
        addMovie={addMovie}
      />

      <p className="count">
        Movies in Watchlist: {movies.length}
      </p>

      {movies.length === 0 && (
        <p className="empty">
          Your watchlist is empty. Add your first movie!
        </p>
      )}

      {filteredMovies.length === 0 && movies.length > 0 && (
        <p className="empty">
          No movies found. Try a different search!
        </p>
      )}

      <MovieList
        movies={filteredMovies}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />

      {movies.length > 0 && (
        <button className="clear-all" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
