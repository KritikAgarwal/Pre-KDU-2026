import PremiumMovieCard from "./PremiumMovieCard";

const PREMIUM_MOVIES = [
  "Avengers",
  "Bahubali",
  "Avatar"
];

function PremiumSection() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Premium Rentals</h2>

      {PREMIUM_MOVIES.map((movie) => (
        <PremiumMovieCard key={movie} title={movie} />
      ))}
    </div>
  );
}

export default PremiumSection;
