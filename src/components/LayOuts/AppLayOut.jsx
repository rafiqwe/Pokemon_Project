import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { LoadingPage } from "../pages/LoadingPage";

export const AppLayOut = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <LoadingPage/>
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
