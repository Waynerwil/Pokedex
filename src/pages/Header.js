import React, { useState, useEffect } from "react";

function Header() {
  // randomPokemons almacenar los Pokemon
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const getRandomPokemonId = () => Math.floor(Math.random() * 200) + 1; // funcion que trae aleatorios
        //[100, 4,30,25]
        const pokemonIds = Array.from({ length: 6 }, getRandomPokemonId); // Array .from(tamañ, contenido o como llenar el contenido)

        // [ { name : Pikachu, img:""}, { name : Charmander, img:""}]
        const fetchedPokemons = [];

        for (const id of pokemonIds) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();
          fetchedPokemons.push(data);
        }

        setRandomPokemons(fetchedPokemons);
        setIsVisible(true);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
    };
    fetchRandomPokemon();
  }, []);
  return (
    <div className="pokemon-conta">
      {isVisible ? (
        randomPokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img
              className="iphone"
              src={pokemon.sprites.other["official-artwork"]["front_default"]}
              alt="Pokemon"
            />
            <p>{pokemon.name}</p>
          </div>
        ))
      ) : (
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Header;
