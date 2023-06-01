import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

// Need to setup container for Characters
// Fetch the characters
// side effect
// ===> loading data
// ====> timers
// ====> event handling
// Set the characters
// Render the characters finally

function App() {
  // current value, method to set value, and default value
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const data = await fetch("https://rickandmortyapi.com/api/character");

      const response = await data.json();

      // console.log(response.results);

      setCharacters(response.results);
    }

    fetchCharacters();
  }, []);

  console.log("characters", characters);

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {characters.map((character) => {
          return <UserCard key={character.id} characterName={character.name} />;
        })}
      </ul>
    </div>
  );
}

export default App;
