import AccessBar from "../Components/LandingPage/AccessBar";
import HeroSection from "../Components/LandingPage/HeroSection";
import NavBar from "../Components/LandingPage/NavBar";
import TopBar from "../Components/LandingPage/TopBar";
import Carousal from "../Components/LandingPage/Carousal";
import PopularProductsCarousal from "../Components/LandingPage/PopularProductsCarousal";

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <AccessBar />
      <HeroSection />
      <Carousal />
      <PopularProductsCarousal />
    </div>
  );
};

export default Home;
