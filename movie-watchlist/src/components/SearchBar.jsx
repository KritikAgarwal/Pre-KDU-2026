function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
