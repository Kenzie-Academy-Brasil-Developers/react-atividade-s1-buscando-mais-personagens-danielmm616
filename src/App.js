import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);

  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };

  const nextPage = () => {
    if (characterList[19] === undefined) {
      return;
    }
    setNext(next + 1);
  };

  console.log(useEffect.length);

  return (
    <div className="App">
      <div className="App-header">
        <header>
          <img
            src="https://imagensemoldes.com.br/wp-content/uploads/2021/04/Rick-and-Morty-PNG.png"
            alt=""
            className="title"
          />
          <div>
            <button
              onClick={previousPage}
              className={next === 1 ? "nopeBack" : "tranksBack"}
            >
              Voltar
            </button>
            <button
              onClick={nextPage}
              className={
                characterList[19] !== undefined ? "tranksFront" : "nopeFront"
              }
            >
              Avançar
            </button>
          </div>
        </header>
        <Characters list={characterList} />
      </div>
    </div>
  );
}

export default App;
