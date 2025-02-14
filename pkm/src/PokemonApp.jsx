import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PokemonDetalle from "./PokemonDetail";
import "./App.css";

const Pokedex = () => {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const obtenerPokemon = async () => {
      try {
        const respuesta = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        setListaPokemon(respuesta.data.results);
      } catch (error) {
        console.error("Error al obtener los Pokémon:", error);
      }
    };

    obtenerPokemon();
  }, []);

  const pokemonFiltrados = listaPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1>Pokédex</h1>
              <input
                type="text"
                placeholder="Buscar Pokémon..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="search-box"
              />
              <div className="pokemon-grid">
                {pokemonFiltrados.map((pokemon, indice) => {
                  const idPokemon = pokemon.url.split("/")[6];
                  return (
                    <Link
                      to={`/pokemon/${idPokemon}`}
                      key={indice}
                      className="pokemon-card"
                    >
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}
                        alt={pokemon.name}
                      />
                      <h2>{pokemon.name}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          }
        />
        <Route path="/pokemon/:id" element={<PokemonDetalle />} />
      </Routes>
    </Router>
  );
};

export default Pokedex;
