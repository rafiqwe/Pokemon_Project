import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">𝓑𝓮𝓰𝓲𝓷 𝓨𝓸𝓾𝓻 𝓟𝓸𝓴é𝓶𝓸𝓷 𝓐𝓭𝓿𝓮𝓷𝓽𝓾𝓻𝓮 𝓣𝓸𝓭𝓪𝔂</h1>
          <p className="hero-subtitle">
            Step into a world full of wonder, strategy, and nostalgia. Explore
            detailed Pokédex entries, discover your favorite Pokémon, and build
            your ultimate team to take on any challenge. Whether you're a
            seasoned trainer or just starting out, your journey begins here.
          </p>
          <NavLink to={"/pokedex"} className="hero-button">
            Start Exploring
          </NavLink>
        </div>
      </section>
      {/* <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Catch 'Em All. Explore Them All.</h1>
          <p className="hero-subtitle">
            Dive into the ultimate Pokémon experience — discover detailed stats,
            evolutions, types, and more. Whether you're a casual fan or a
            battle-hardened trainer, this is your all-in-one Pokédex for every
            generation.
          </p>
          <NavLink to={"/pokedex"} className="hero-button">
            Start Exploring
          </NavLink>
        </div>
      </section> */}
    </>
  );
};
