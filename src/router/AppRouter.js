import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import Pokedex from "../pages/Pokedex";
import Detalle from "../components/Detalle";


function AppRouter() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pokedex" element={<Pokedex />} />
        <Route path="/Detalle/:id" element={<Detalle/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
