function MovieItem({ movie, toggleWatched, deleteMovie }) {
  return (
    <li className={movie.watched ? "watched" : ""}>
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
  );
}

export default MovieItem;
