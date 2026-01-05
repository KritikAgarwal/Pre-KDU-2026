import { useParams } from "react-router-dom";

function Player() {
  const { title } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Now Playing</h1>
      <h2>{decodeURIComponent(title)}</h2>
      <p>Enjoy the premium rentals!!</p>
    </div>
  );
}

export default Player;
