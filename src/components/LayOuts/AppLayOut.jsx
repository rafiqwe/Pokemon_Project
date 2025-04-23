import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";

export const AppLayOut = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <h1 className="container"> wait a few secend</h1>
  }  
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
