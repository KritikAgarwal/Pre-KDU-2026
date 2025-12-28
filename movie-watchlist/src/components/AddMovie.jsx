function AddMovie({
  movieName,
  setMovieName,
  rating,
  setRating,
  addMovie
}) {
  return (
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
  );
}

export default AddMovie;
