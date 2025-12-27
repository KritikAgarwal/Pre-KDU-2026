import { useState } from "react";
import "./App.css";

function App() {
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(3);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Add movie
  const addMovie = () => {
    if (movieName.trim() === "") {
      alert("Please enter a movie name!");
      return;
    }

    const newMovie = {
      id: Date.now(),
      name: movieName,
      rating: rating,
      watched: false
    };

    setMovies([...movies, newMovie]);
    setMovieName("");
    setRating(3);
  };

  // Toggle watched
  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
  };

  // Delete movie
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  // Clear all movies
  const clearAll = () => {
    setMovies([]);
  };

  // Search filter
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🎬 Movie Watchlist</h1>

      {/* Search */}
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Movie */}
      <div className="add-movie">
        <input
          type="text"
          placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} ⭐
            </option>
          ))}
        </select>

        <button onClick={addMovie}>Add</button>
      </div>

      {/* Count */}
      <p className="count">
        Movies in Watchlist: {movies.length}
      </p>

      {/* Empty States */}
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

      {/* Movie List */}
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id} className={movie.watched ? "watched" : ""}>
            <span className="movie-name">
              {movie.name}
              <span className="stars">
                {"★".repeat(movie.rating)}
                {"☆".repeat(5 - movie.rating)}
              </span>
            </span>


            <div className="actions">
              <button onClick={() => toggleWatched(movie.id)}>
                {movie.watched ? "Unwatch" : "Watched"}
              </button>
              <button
                className="delete"
                onClick={() => deleteMovie(movie.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Clear All */}
      {movies.length > 0 && (
        <button className="clear-all" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
