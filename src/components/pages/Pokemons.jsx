import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { PokemonCards } from "../LayOuts/UI/PokemonCards";
export const Pokemons = () => {
  const data = useLoaderData();
  
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
              />
            </div>
            <button className="search">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>
      <ul className="card_section">
        {data.map((pokemon) => {
          return <PokemonCards pokemon={pokemon} key={pokemon.id} />;
        })}
      </ul>
    </>
  );
};
