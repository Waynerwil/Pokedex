import React, { useState, useEffect } from "react";
import { getPokemonList } from "../components/Api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Pokedex.css";
import searchIcon from "../images/search-question-svgrepo-com.svg";
import Carta from "../components/Carta";
import { useParams } from "react-router-dom";



function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const [filterPokemones, setfilterPokemones] = useState("");
  



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
  }, []);

  function irDetalle() {
 
    console.log(pokemonData[0].id)
    window.open(`/Pokedex/detalle/:id`)
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
    <div>
      {/* <Busqueda/> */}
      <div className="searched">
        <label htmlFor="search">
          <img className="imgsearch" src={searchIcon} alt="pokemon" />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          value={filterPokemones}
          onChange={handleSearch}
          />
      </div>
      <div></div>
      <div></div>


      <div className="ocoro">
      {Isloading ? (
        filteredPokemon.map((item) => {
          <Carta />;
          return (
            
            <div className="crc">
              <div className="card">
                <button onClick={irDetalle}>HOLA</button>
                {/* <button onClick={() => showInfo(pokemon)}>inspeccionar</button> */}
                <img src={item.image} className="card-img-top" alt="Pokemon" />
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
        <div class="div1"><nav aria-label="Page navigation example ">
        <ul className="pagination">
          <a className="page-link" href="#">
            Previous
          </a>

          <a className="page-link" href="#">
            1
          </a>

          <a className="page-link" href="#">
            2
          </a>

          <a className="page-link" href="#">
            3
          </a>

          <a className="page-link" href="#">
            4
          </a>

          <a className="page-link" href="#">
            5
          </a>

          <a className="page-link" href="#">
            6
          </a>

          <a className="page-link" href="#">
            7
          </a>

          <a className="page-link" href="#">
            Next
          </a>
        </ul>
      </nav> </div>
      </div>
      
      </div>
          </div>
  );
}
export default Pokedex;
