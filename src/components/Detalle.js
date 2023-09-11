import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetailByUrl } from "./Api";

function Detalle() {
  const [Datapokemon, setPokemonData] = useState([]);
  const [PokemonDataAttack, setPokemonDataAttack] = useState([]);
  const [PokemonDataDefense, setPokemonDataDefense] = useState([]);
  const [PokemonDataSpecial, setPokemonDataSpecial] = useState([]);
  const [Datapokemonhp, setPokemonDatahp] = useState([]);
  const [Isloading, setIsloading] = useState(false);

  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        console.log(id);
        const url = "https://pokeapi.co/api/v2/pokemon/" + id;

        const response = await getPokemonDetailByUrl(url);

        const data = response;

        console.log("LOG", data);

        const hp = data.stats?.[0].hp;
        const attack = data.stats?.[1].attack;
        const defense = data.stats?.[2].defense;
        const special = data.stats?.[3].special;

        setPokemonDataAttack(attack);
        setPokemonDataDefense(defense);
        setPokemonDataSpecial(special);
        setPokemonDatahp(hp);
        setPokemonData(data);
      } catch (error) {
        console.error("Error capturando la pokemon data", error);
      }

      setIsloading(true);
    };
    fetchPokemon();
  }, []);

  console.log(Datapokemonhp);

  return (
    <>
      <div>
        <h2>{Datapokemon.name}</h2>
        <h3>Hp: {Datapokemonhp}</h3>
        <h3>Attack: {PokemonDataAttack}</h3>
        <h3>Defense: {PokemonDataDefense}</h3>
        <h3>Special-attack: {PokemonDataSpecial}</h3>
        <img src={Datapokemon.image}></img>
      </div>
    </>
  );
}

export default Detalle;
