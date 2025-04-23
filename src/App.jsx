import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/LayOuts/Header";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { AppLayOut } from "./components/LayOuts/AppLayOut";
import { Pokemons } from "./components/pages/Pokemons";
import { getPokemon } from "./components/API/getPokemon";
import { ErrorPage } from "./components/pages/ErrorPage";
import { PokemonDetails } from "./components/pages/PokemonDetails";
import { getPokemonDetails } from "./components/API/getPokemonDetails";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayOut />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pokedex",
          element: <Pokemons />,
          loader: getPokemon,
        },
        {
          path: "/pokedex/:pokemonID",
          element: <PokemonDetails />,
          loader: getPokemonDetails,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
