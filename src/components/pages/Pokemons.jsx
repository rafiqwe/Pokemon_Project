import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { PokemonCards } from "../LayOuts/UI/PokemonCards";
import { useState } from "react";
export const Pokemons = () => {
  const [search, setSearch] = useState("");
  const data = useLoaderData();

  // add search functionality
  const searchData = data.filter((poke) => {
    return poke.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <section className="top_section ">
        <div>
          <img src="/hero_img.png" alt="pokedex" />
        </div>
        <div className="search-box">
          <form className="flex">
            <div className="input">
              <input
                type="text"
                placeholder="search etg, ditto or pikachu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="search">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>
      <ul className="card_section">
        {searchData.map((pokemon) => {
          return <PokemonCards pokemon={pokemon} key={pokemon.id} />;
        })}
      </ul>
    </>
  );
};
