import { useLoaderData } from "react-router-dom";
import { PokemonCards } from "./PokemonCards";

export const PokemonCard = () => {
    const data = useLoaderData();
    console.log(data);
    
  return (
    <>
        <ul className="card_section">
            {data.map((pokemon) => {
                return <PokemonCards pokemon={pokemon} key={pokemon.id} />
            })}
        </ul>
    </>
  );
};
