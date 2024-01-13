import PropTypes from "prop-types";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  useMediaQuery,
  Avatar,
  Stack,
} from "@mui/material";

// lottie
import Lottie from "react-lottie";
import wahab from "../../assets/team/wahab.jpeg";
import saboor from "../../assets/team/abdulsaboor.jpg";

// hook

import ratinAnimation from "../../animations/old/about/rating.json";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(10, 0),

  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    padding: 0,
    height: 840,
    overflow: "hidden",
  },
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const isDesktop = useMediaQuery("up", "md");
  const isSuccess = true;
  // lottie configration
  const ratingAnimationConfig = {
    loop: true,
    autoplay: true,
    animationData: ratinAnimation,
  };

  return (
    <RootStyle>
      <Container sx={{ position: "relative", height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: "center" }}
          sx={{ height: 1 }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <Typography variant="h2" sx={{ mb: 3, color: "common.main" }}>
                Who <span sx={{ color: "primary.main" }}>love</span> <br />
                Our work
              </Typography>
              <Lottie
                options={ratingAnimationConfig}
                width={"200px"}
                height={"200px"}
              />
              <Typography sx={{ color: "text.main", marginTop: "-2em" }}>
                Our goal is to create a product and service that you’re
                satisfied with and use it every day. This is why we’re
                constantly working on our services to make it better every day
                and really listen to what our users has to say.
              </Typography>{" "}
            </Box>
          </Grid>
          <Stack direction="row">
            <Avatar src={wahab} sx={{ width: "250px", height: "250px" }} />
            <Avatar src={saboor} sx={{ width: "250px", height: "250px" }} />
          </Stack>
        </Grid>
      </Container>
    </RootStyle>
  );
}
