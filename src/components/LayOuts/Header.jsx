import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
export const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }
  
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>
          <nav  className={isClick ? "" : "none"}>
            <ul className="flex" >
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
          <FaBars onClick={handleClick} className="nav_icon" />
        </div>
      </header>
    </>
  );
};
