import "./styles.css";

function CharCard({ char }) {
  return (
    <div
      className={
        char.status === "Alive"
          ? "greenBox"
          : char.status === "Dead"
          ? "redBox"
          : "grayBox"
      }
    >
      <img src={char.image} alt="" />
      <h1>{char.name}</h1>
      <h2>Espécie: {char.species}</h2>
      <h3>{char.status}</h3>
    </div>
  );
}

export default CharCard;
