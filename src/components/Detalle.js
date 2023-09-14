import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetailByUrl } from "./Api";
import "../styles/Detalle.css"

function Detalle() {
  const [Datapokemon, setPokemonData] = useState([]);
  const [PokemonDataAttack, setPokemonDataAttack] = useState([]);
  const [PokemonDataDefense, setPokemonDataDefense] = useState([]);
  const [PokemonDataSpecial, setPokemonDataSA] = useState([]);
  const [PokemonDataSPEA, setPokemonDataSP] = useState([]);
  const [Datapokemonhp, setPokemonDatahp] = useState([]);
  const [PokemonDataSpeed, setPokemonDataSpeed] = useState([]);
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
        const SA = data?.stats?.[3]['special-attack'];
        const SP = data?.stats?.[4]['special-defense']; 
        const speed = data?.stats?.[5].speed; 
  
        
        setPokemonDataAttack(attack);
        setPokemonDataDefense(defense);
        setPokemonDataSP(SP);
        setPokemonDataSA(SA);
        setPokemonDataSpeed(speed);
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
    // <>
    <div className="Hola">
      <div className="papa2">
        <h2>{Datapokemon.name}</h2>
        <img src={Datapokemon.image}></img>
      </div>

      <div className="hijo">
        <h3 id="amarillo">Hp: {Datapokemonhp}</h3>
        <h3  id="azul">Attack: {PokemonDataAttack}</h3>
        <h3  id="gris">Defense: {PokemonDataDefense}</h3>
        <h3 id="marron">Special-attack: {PokemonDataSpecial}</h3>
        <h3  id="morado">Special-defense: {PokemonDataSPEA}</h3>
        <h3  id="rojo">Speed: {PokemonDataSpeed}</h3>
      </div>  


    </div>
  );
}

export default Detalle;