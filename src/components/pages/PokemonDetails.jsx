import { NavLink, useLoaderData } from "react-router-dom"

export const PokemonDetails = () => {
    const pokemonDetails = useLoaderData();
    const { name, height,id, weight, base_experience, abilities, sprites } = pokemonDetails;
    return (
      <>
        <li className="card">
          <div className="type_id flex">
            <div className="type flex">
               <p>{pokemonDetails.types.map((type) => type.type.name).join(", ")}</p> 
            </div>
            <div className="id">
              <span>#{id}</span>
            </div>
          </div>
          <div className="title">
            <h1>{name}</h1>
          </div>
          <div className="down_card flex">
            <div className="sub_title">
              <p>
                A strange seed was planted on its back at birth. the plant sprouts
                and grows with this pokémon.
              </p>
              <button> <NavLink to={`/pokedex/${id}`}>Know More</NavLink> </button>
            </div>
            <div className="pokemon_img">
              <img src={sprites.other.dream_world.front_default} alt="pokemon" />
            </div>
          </div>
        </li>
      </>
    );
}