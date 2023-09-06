import React from "react";

function Carta() {
    return (
        <div>
          <Link to={"/detalle"}>
            {pokemonData ? (
                            <div className="crc">
                            <div class="card">
                              <img src={item.image} class="card-img-top" alt="Pokemon" />
                              <div class="card-body">
                                <h5 class="card-title">Nombre: {item.name}</h5>
                                <p class="card-text">#0{item.id}</p>
                              </div>
                            </div>
                          </div>
            ) : (
              <div></div>
            )}
    
          </Link>
        </div>
      );
}

export default Carta;