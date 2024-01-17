// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Container, Typography, Avatar, Stack } from "@mui/material";

import TextTransaction from "../../utils/textTransaction";

// lottie
import Lottie from "react-lottie";
import forwardground from "../../animations/old/new/avatar/Animated Avatar.json";
import animationSetter from "../../animations/animationSetter";

import wahab from "../../assets/team/wahab.jpeg";
import jamal from "../../assets/team/jamal.jpg";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginTop: "-100px",
  paddingBottom: "1em",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

// ----------------------------------------------------------------------

export default function AboutTestimonials() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container>
        <Grid container alignItems="center" justifyContent={{ xs: "center" }}>
          <Stack direction="row" style={{ position: "relative" }}>
            <TextTransaction
              TEXTS={[
                <Box>
                  <div style={{ position: "relative" }}>
                    <Avatar
                      sx={{
                        width: "380px",
                        height: "380px",
                        background: "none",
                      }}
                    >
                      <Lottie options={animationSetter(forwardground)} />
                      <Avatar
                        sx={{
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                          width: "200px",
                          height: "200px",
                        }}
                        src={wahab}
                      />
                    </Avatar>
                  </div>
                  <Typography
                    gutterBottom
                    variant="h4"
                    textAlign={"center"}
                    color={"text.main"}
                  >
                    Wahab{" "}
                    <span style={{ color: theme.palette.primary.main }}>
                      Adil
                    </span>
                  </Typography>
                </Box>,
                <Box>
                  <div style={{ position: "relative" }}>
                    <Avatar
                      sx={{
                        width: "350px",
                        height: "350px",
                        background: "none",
                      }}
                    >
                      <Lottie options={animationSetter(forwardground)} />
                      <Avatar
                        sx={{
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                          width: "200px",
                          height: "200px",
                        }}
                        src={jamal}
                      />
                    </Avatar>
                  </div>

                  <Typography
                    gutterBottom
                    variant="h4"
                    textAlign={"center"}
                    color={"text.main"}
                  >
                    Jamal{" "}
                    <span style={{ color: theme.palette.primary.main }}>
                      Jowaini
                    </span>
                  </Typography>
                </Box>,
              ]}
              duration={6000}
            />
          </Stack>
        </Grid>
      </Container>
    </RootStyle>
  );
}
