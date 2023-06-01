import { useEffect, useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {

  const [characters, setCharacters] = useState();
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    // side effect:

    const fetchList = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");

      const response = await data.json();

      console.log(response.results);

      setCharacters(response.results);
    };

    fetchList();
  }, [searchQuery]);

  return (
    <div className='App'>
      <h1>Hello Mars</h1>
      <Greeting />
      {characters && characters.map((character) => {
        return <p key={character.id}>{character.name}</p>;
      })}
    </div>
  );
}

export default App;
