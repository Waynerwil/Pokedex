import React from "react";
import "../styles/Contenido.css";

function Contenido() {
  return (
    <div>
      <h1 className="chacha">Tipos de Pokemon</h1>
      <p className="text">
        Existen 18 tipos en los que se organiza a los pokémon. Los tipos acero y
        siniestro fueron agregados en el año 2000, en los juegos Gold, Silver y
        Crystal y el tipo hada fue agregado el 2013 en los juegos Pokémon X e Y.
        Los pokémon pueden aprender ataques distintos a los de su tipo. Por
        ejemplo, Kabutops (Agua/Roca) puede aprender el movimiento Pokémon Giga
        drenado que es de tipo planta. Cada pokémon tiene una cantidad
        determinada de movimientos o ataques que puede aprender. Estos se pueden
        clasificar por su tipo o elemento (por ejemplo, el ataque trueno es un
        ataque tipo eléctrico). Los pokémon también se ordenan y dividen de esta
        manera, dándole ventajas o desventajas contra otros. Por ejemplo: un
        pokémon tipo agua tiene más probabilidad de vencer a un pokémon tipo
        fuego, que uno tipo planta, ya que los ataques de tipo agua apagan el
        fuego, mientras que los ataques de tipo fuego queman las plantas. A las
        plantas, por su parte, ya que crecen con el agua, esta no les causa
        mucho daño. Esta secuencia, se compararía con el popular juego piedra,
        papel o tijera.
      </p>
    </div>
  );
}

export default Contenido;
