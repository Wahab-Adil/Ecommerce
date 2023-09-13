import { Typography, Box } from "@mui/material";
import Mycart from "./Mycart";
// import layouts
import MainHeader from "../layouts/MainHeader";
import Footer from "../layouts/Footer";
// import Sections
import { LandingHero,LandingProducts,LandingFaqs } from "../sections/LandingPage";


const Landing = () => {
  return (
    <>
      <MainHeader />
      <Box style={{ marginTop: "80px" }}>
        <LandingHero />
        <LandingProducts />
        <LandingFaqs />
      </Box>
      <Mycart />
      <Footer />
    </>
  );
};
export default Landing;
