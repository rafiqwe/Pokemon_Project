import { NavLink } from "react-router-dom";

export const PokemonCards = ({ pokemon }) => {
  const { name,id,sprites } = pokemon;
  return (
    <>
      <li className="card">
        <div className="type_id flex">
          <div className="type flex">
              {pokemon.types.map((type) => {
                return( <span key={type.type.name}> {type.type.name} </span> )
              })}
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
            <NavLink to={`/pokedex/${id}`}> <button> Know More </button></NavLink>
          </div>
          <div className="pokemon_img">
            <img src={sprites.other.dream_world.front_default} alt="pokemon" />
          </div>
        </div>
      </li>
    </>
  );
};
