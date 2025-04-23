import { FaSearch } from "react-icons/fa";
import { PokemonCard } from "../LayOuts/UI/PokemonCard";
export const Pokemons = () => {
    
    return(
        <>
            <section className="top_section ">
                <div>
                    <img src="/hero_img.png" alt="pokedex"/>
                </div>
                <div className="search-box">
                    <form className="flex">
                        <div className="input">
                            <input type="text" placeholder="search etg, ditto or pikachu..." />
                        </div>
                        <button className="search"><FaSearch/></button>
                    </form>
                </div>
            </section>
            <PokemonCard/>
        </>
    )
}