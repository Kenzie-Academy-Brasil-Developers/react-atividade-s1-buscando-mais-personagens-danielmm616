import CharCard from "../CharCard";

function Characters({ list }) {
  return (
    <div className="cardsParent">
      {list.map((char) => (
        <CharCard char={char} key={char.id} />
      ))}
    </div>
  );
}

export default Characters;
