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
import BrandTags from "../Components/LandingPage/BrandTags";
import NewsSection from "../Components/LandingPage/NewsSection";
import NewsLetter from "../Components/LandingPage/NewsLetter";
import Footer from "../Components/LandingPage/Footer";
import { Box } from "@mui/material";

const Home = () => {
  // let cursor = document.querySelector("#cursor");
  // let blurs = document.querySelector("#cursr-blur");
  // document.addEventListener("mousemove", (e) => {
  //   cursor.style.left = e.x - 18 + "px";
  //   cursor.style.top = e.y - 18 + "px";
  // });

  // function getRandomColor() {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";

  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }

  //   return color;
  // }

  // const colorCursor = getRandomColor();
  return (
    <>
      {/* <Box
        id="cursor"
        sx={{
          height: "15px",
          width: "15px",
          position: "fixed",
          borderRadius: "50%",
          zIndex: 10000,
          backgroundColor: colorCursor,
        }}
      /> */}
      {/* <TopBar />
      <NavBar />
      <AccessBar /> */}
      <HeroSection />
      <Carousal />
      <PopularProductsCarousal />
      <SalesBanner />
      <QuickSelection />
      <Benefits />
      <Reviews />
      <BrandTags />
      <NewsSection />
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
