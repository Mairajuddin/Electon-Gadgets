import { Outlet } from "react-router-dom";
import AccessBar from "../Components/LandingPage/AccessBar";
import NavBar from "../Components/LandingPage/NavBar";
import TopBar from "../Components/LandingPage/TopBar";
import Footer from "../Components/LandingPage/Footer";
import NewsLetter from "../Components/LandingPage/NewsLetter";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <AccessBar />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default MainLayout;
