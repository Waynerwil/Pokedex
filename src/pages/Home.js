import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../styles/Home.css";
import Contenido from "../components/Contenido";
import { Link } from "react-router-dom";


function Home() {
  return (
    <header>
      <div className="Relleno">
        <nav>
          <ul>
            <li><Link to = '/'>Videos Pokémon</Link></li>
            <li><Link to = '/'>Games</Link></li>
            <li><Link to = '/'>Fun facts</Link></li>
          </ul>
        </nav>
      </div>
      <br></br>
      <div className="pokemon-container">
        <Header />
        <Contenido />
      </div>
    </header>
  );
}

export default Home;
