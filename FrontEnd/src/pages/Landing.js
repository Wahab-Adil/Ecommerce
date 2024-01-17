import { Box } from "@mui/material";
// import layouts
import MainHeader from "../layouts/MainHeader";
import Footer from "../layouts/Footer";
// import Sections
import {
  LandingHero,
  LandingProducts,
  LandingFaqs,
} from "../sections/LandingPage";

const Landing = () => {
  return (
    <>
      <Box sx={{ marginTop: "80px" }}>
        <MainHeader />
        <LandingHero />
        <LandingProducts />
        <LandingFaqs />
      </Box>
      <Footer />
    </>
  );
};
export default Landing;
