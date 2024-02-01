import AccessBar from "../Components/LandingPage/AccessBar";
import HeroSection from "../Components/LandingPage/HeroSection";
import NavBar from "../Components/LandingPage/NavBar";
import TopBar from "../Components/LandingPage/TopBar";
import Carousal from "../Components/LandingPage/Carousal";
import PopularProductsCarousal from "../Components/LandingPage/PopularProductsCarousal";
import SalesBanner from "../Components/LandingPage/SalesBanner";
import QuickSelection from "../Components/LandingPage/QuickSelection";
import Benefits from "../Components/LandingPage/Benefits";
import Reviews from "../Components/LandingPage/Reviews";

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <AccessBar />
      <HeroSection />
      <Carousal />
      <PopularProductsCarousal />
      <SalesBanner />
      <QuickSelection />
      <Benefits />
      <Reviews />
    </div>
  );
};

export default Home;
