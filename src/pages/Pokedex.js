import React, { useState, useEffect } from "react";
import { getPokemonList } from "../components/Api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Pokedex.css";
// import { useNavigate } from "react-router-dom";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState(null);
  const [Isloading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=21";
        // const fetchedPokemon = [];
        const response = await getPokemonList(url);
        // const navigate = useNavigate();

        const data = response.array;

        setPokemonData(data);
      } catch (error) {
        console.error("Error capturando la pokemon data", error);
      }

      setIsloading(true);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="ocoro">
      {Isloading ? (
        pokemonData.map((item) => {

          console.log(item)
          return (
            <div className="crc">
              <div class="card">
                <img src={item.image} class="card-img-top" alt="Pokemon" />
                <div class="card-body">
                  <h5 class="card-title">Nombre: {item.name}</h5>
                  <p class="card-text">#0{item.id}</p>

                  <div className="type_container">

                    {item.type[0] ? (<div className="type"><img className="type-icon" src={require(`../images/${item.type[0]}.svg`)}/></div>) : (null)}
                    <br></br>
                    {item.type[1] ? (<div className="type"><img className="type-icon" src={require(`../images/${item.type[1]}.svg`)}/></div>) : (null)}

                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Cargando información ...</p>
      )}
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pokedex;
