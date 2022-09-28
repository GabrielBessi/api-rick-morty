import { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
import Character from "./components/Characteres";
import "../src/styles/index.css";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharactersList(response.results))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="App">
      <Header />
      <Buttons page={page} setPage={setPage} />
      {loading ? (
        <span className="span-style">Carregando</span>
      ) : (
        <>
          <Character charactersList={charactersList} />
        </>
      )}
    </div>
  );
}

export default App;
