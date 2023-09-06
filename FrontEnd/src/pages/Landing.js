import { Typography } from "@mui/material";
import Footer from '../components/Footer';
import Mycart from "./Mycart";

const Landing = () => {
  return (
    <>
    {/* this is the landing page */}
      <Typography variant='h3' color='primary.main'>This is Landing Page With Primary Color</Typography>
      <Mycart/>
      {/* <Footer/> */}
    </>
  );
};
export default Landing;
