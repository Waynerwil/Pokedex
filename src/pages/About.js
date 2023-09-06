import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div>
      <h1>About</h1>
      <h2>¿Qué son los Pokémon?</h2>
      <p>
        Los Pokémon son criaturas de todo tipo de formas y tamaños que viven
        bien en un medio salvaje o junto a los seres humanos. La mayoría de los
        Pokémon solo hablan para decir sus nombres. En la actualidad, hay más de
        700 criaturas que habitan el universo Pokémon. Los dueños de los Pokémon
        (denominados “Entrenadores”) los crían y los cuidan. Durante sus
        aventuras, los Pokémon crecen y adquieren más experiencia, e incluso, en
        ocasiones, evolucionan para convertirse en Pokémon más fuertes. Hay más
        de doce tipos diferentes de Pokémon, como el tipo Fuego, el tipo
        Psíquico o el tipo Dragón. Cada tipo de Pokémon tiene sus ventajas e
        inconvenientes a la hora de luchar contra otros Pokémon. Por ejemplo, un
        Pokémon de tipo Fuego tendrá ventaja sobre un Pokémon de tipo Planta,
        pero estará en desventaja ante un Pokémon de tipo Agua. Esto hace que la
        estrategia, el posicionamiento y el uso que hagas de los Pokémon en tu
        equipo sean de crucial importancia en el desarrollo de los combates.
      </p>
      <div className="total">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                className="raton"
                src="https://i.redd.it/jev6kwlgwrm21.jpg"
                alt="Avatar"
              />
            </div>
            <div className="flip-card-back">
              <h1 className="autor"> Tajiri Satoshi</h1>
              <p>Videogame designer</p>
              <p>Love Pokémon</p>
            </div>
          </div>
        </div>
        <div className="perro">
          <p className="rosa">
            <p><h3>Nombre en japonés</h3> 田尻 智 </p>
            <p>
              <h3>Nacimiento</h3> 28 de agosto de 1965, (57 años) Setagaya, Tokio, Japón
              Residencia Machida, Tokio
              <p><h3> Nacionalidad</h3>Japonesa</p>
            </p>
            <p> <h3>Lengua materna</h3> Japonés</p>
            <p>
              <h3>Educación</h3> Educado en Tokyo National College of Technology
              Información profesional
            </p>
            <p>
              <h3>Ocupación</h3> Diseñador de videojuegos Años activo 1989-presente
              Conocido por Creador de la franquicia de Pokémon Empleador Game
              Freak Obras notables Pokémon; Mendel Palace; Pulseman Distinciones
              CEDEC Awards - Special Award (2011)
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
