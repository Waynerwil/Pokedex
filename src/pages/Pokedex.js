import React, { useState, useEffect } from "react";
import { getPokemonList } from "../components/Api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Pokedex.css";
import searchIcon from '../images/search-question-svgrepo-com.svg'

// import Busqueda from "../components/Busqueda";
// import { useNavigate } from "react-router-dom";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState(null);
  const [Isloading, setIsloading] = useState(false);
  const [filterPokemones, setfilterPokemones] = useState(null);


  const busqueda = () => {
    var pokemonS= document.getElementById("search").value;
    const filtrados  = pokemonData.filter(pokemon => pokemon.name == pokemonS);
    console.log(filtrados);
    setfilterPokemones(filtrados)
  }



  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=21";
        // const fetchedPokemon = [];
        const response = await getPokemonList(url);
        // const navigate = useNavigate();

        const data = response.array;

       
        // console.log(filterPokemones)

        setPokemonData(data);

        
      } catch (error) {
        console.error("Error capturando la pokemon data", error);
      }

      setIsloading(true);
    };
    fetchPokemon();
  }
  
  , []);

 
  

  return (
    <div className="ocoro">
      {/* <Busqueda/> */}
      <div className="searched">
            <label htmlFor="search"><img className="imgsearch" src={searchIcon} alt="pokemon"/></label>
            <input id="search" type="text" placeholder="Search" onChange={busqueda}/>
        </div>
      <div></div>
      <div></div>
      {Isloading ? (
        pokemonData.map((item) => {
          return (
            <div className="crc">
              <div className="card">
                <img src={item.image} class="card-img-top" alt="Pokemon" />
                <div className="card-body">
                  <h5 className="card-title">Nombre: {item.name}</h5>
                  <p className="card-text">#0{item.id}</p>

                  <div className="type_container">
                    {item.type[0] ? (
                      <div className="type">
                        <img
                          className="type-icon"
                          src={require(`../images/${item.type[0]}.svg`)}
                        />
                      </div>
                    ) : null}
                    <br></br>
                    {item.type[1] ? (
                      <div className="type">
                        <img
                          className="type-icon"
                          src={require(`../images/${item.type[1]}.svg`)}
                        />
                      </div>
                    ) : null}
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
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pokedex;
