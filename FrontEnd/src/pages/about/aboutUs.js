// @mui
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
// components
import { AboutHero, AboutWhat, AboutTestimonials } from "../../sections/about";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle>
      <AboutHero />
      <AboutWhat />
      <Divider
        orientation="vertical"
        sx={{ my: 10, mx: "auto", width: 2, height: 40 }}
      />
      <AboutTestimonials />
    </RootStyle>
  );
}
