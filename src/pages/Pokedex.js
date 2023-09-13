import React, { useState, useEffect } from "react";
import { getPokemonList, postpokemonlike } from "../components/Api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Pokedex.css";
import Carta from "../components/Carta";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import like_up_img from "../images/up_thumbs_icon_255876.svg";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [valorse, setval] = useState();
  const [Isloading, setIsloading] = useState(false);
  const [filterPokemones, setfilterPokemones] = useState("");
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
        const response = await getPokemonList(url);

        const data = response.array;

        setPokemonData(data);
      } catch (error) {
        console.error("Error capturando la pokemon data", error);
      }

      setIsloading(true);
    };
    fetchPokemon();

 
    
  },
  
  []);


     async function likepokemon (id) {
      const add = await postpokemonlike(id);
    
      console.log(id);
      //  const valor = ;
      
     
    };


  const handlePagination = async (e) => {
    var value = e.target.textContent;
    console.log(value);
    if (value == 1) {
      var newUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";
      var response = await getPokemonList(newUrl);
      var data = response.array;
      setPokemonData(data);
    } else {
      var newUrl = `https://pokeapi.co/api/v2/pokemon?offset=${
        (value - 1) * 20
      }&limit=20 `;
      var response = await getPokemonList(newUrl);
      var data = response.array;
      setPokemonData(data);
    }
  };

 

  // document.getElementById("").onclick = function () {
  //   if (this.value == "suscribirse") {
  //     this.value = "desuscribirse";
  //   } else {
  //     this.value = "suscribirse";
  //   }
  // };

 

  function irDetalle(pokemon) {
    console.log(pokemon.id);
    window.open(`/detalle/${pokemon.id}`);
  }

  const handleSearch = (e) => {
    setfilterPokemones(e.target.value);
  };
  const filteredPokemon = pokemonData.filter(
    (pokemon) =>
      pokemon.name
        .toLowerCase()
        .trim()
        .includes(filterPokemones.toLowerCase().trim()) || // Filtrar por nombre
      pokemon.id.toString().includes(filterPokemones) // Filtrar por ID
  );

 
  return (
    <div className="pokepoke">
      <div class="group">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          class="input"
          value={filterPokemones}
          onChange={handleSearch}
        />
      </div>

      <div className="ocoro">
        {Isloading ? (
          filteredPokemon.map((item) => {
            <Carta />;
            return (
              <div className="crc">
                <div className="card">
                  <button className="info" onClick={() => irDetalle(item)}>
                    INFO
                  </button>

                  <div className="btn_container">
                    <div onClick={() => likepokemon(item.id)} className="like" id="like4" value="me gusta">
                    
                      <img src={like_up_img} />
                   
                      {/* <input type="submit" value="suscribirse"  id="id"></input> */}
                    </div> 
                  </div>

                  {/* <div>
                      <input type="submit" value="suscribirse"  id="boton3"  onClick={() => likepokemon(item.id)}></input>
                  </div> */}

                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="Pokemon"
                  />
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
      </div>

      <div className="prueba">
        <div class="parent">
          <div class="div1">
            <Stack spacing={2}>
              <Pagination
                count={50}
                variant="outlined"
                color="primary"
                onClick={handlePagination}
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokedex;
