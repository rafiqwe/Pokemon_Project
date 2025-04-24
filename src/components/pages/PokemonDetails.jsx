import { NavLink, useLoaderData, useNavigate } from "react-router-dom";

export const PokemonDetails = () => {

  const pokemonDetails = useLoaderData();
  const {
    name,
    height,
    id,
    weight,
    base_experience,
    abilities,
    sprites,
    stats,
  } = pokemonDetails;
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <>
      <li className="pokemon_details flex">
        <div className="details_img">
          <img src={sprites.other.dream_world.front_default} alt={name} />
        </div>
        <div className="pokemon_card_details">
          <div className="top_details">
            <div className="id_name">
              <span>#0{id}</span>
              <h1>{name}</h1>
            </div>
            <div className="type flex detail_type">
              {pokemonDetails.types.map((type) => {
                return <span key={type.type.name}> {type.type.name} </span>;
              })}
            </div>
            <div className="base__experience">
              <p> Base Experience : </p>
              <p>{base_experience}</p>
            </div>
            <div className="height_weight">
              <div className="height">
                <span>Height : {height}</span>
              </div>
              <div className="weight">
                <span>Weight : {weight}</span>
              </div>
            </div>
          </div>
          <div className="bottom_details">
            <div className="status">
              <h1>Stats</h1>
              <div className="status_boxs flex ">
                {stats.map((curStats) => {
                  return (
                    <div className="flex ">
                      <p>{curStats.stat.name}</p>
                      <p>{curStats.base_stat}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="abilities">
              <h1>Abilities</h1>
              <div className="height_weight ">
                {abilities.map((abilitie) => {
                  return (
                    <div>
                      <span>{abilitie.ability.name} </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="go_back">
              <button onClick={handleGoBack}>Go Back</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
