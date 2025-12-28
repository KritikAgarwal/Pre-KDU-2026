import MovieItem from "./MovieItem";

function MovieList({ movies, toggleWatched, deleteMovie }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          toggleWatched={toggleWatched}
          deleteMovie={deleteMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;
