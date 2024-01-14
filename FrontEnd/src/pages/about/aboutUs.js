// @mui
import { styled } from "@mui/material/styles";
// components
import { AboutHero, AboutTestimonials } from "../../sections/about";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(11),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle>
      <AboutTestimonials />
      <AboutHero />
    </RootStyle>
  );
}
