import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <nav>
            <ul className="flex">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "active " : "")}
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pokedex"}>
                  <span>Pokemons</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>
                  <span>About</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  {" "}
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
