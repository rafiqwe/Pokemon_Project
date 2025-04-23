import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/LayOuts/Header";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { AppLayOut } from "./components/LayOuts/AppLayOut";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
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
