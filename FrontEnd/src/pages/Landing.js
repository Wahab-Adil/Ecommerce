import { Typography } from "@mui/material";
// import layouts
import MainHeader from "../layouts/MainHeader";
import Footer from '../layouts/Footer';

const Landing = () => {
  return (
    <>
       <MainHeader/>
      <Typography variant='h3' color='primary.main'>This is Landing Page With Primary Color</Typography>
      <Footer/>
    </>
  );
};
export default Landing;
