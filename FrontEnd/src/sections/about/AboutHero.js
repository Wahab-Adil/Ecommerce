// @mui
import { useTheme, styled } from "@mui/material/styles";
import TextTransaction from "../../utils/textTransaction";
import { Grid, Container, Typography, useMediaQuery } from "@mui/material";
// lottie
import Lottie from "react-lottie";
// animtion
import laptop from "../../animations/aboutUs/laptop.json";
import developer from "../../animations/aboutUs/developer.json";
import animationsSetter from "../../animations/animationSetter";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  marginTop: "3em",
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const theme = useTheme();

  const isMobile = useMediaQuery("down", "sm");

  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={3}
          flexDirection={isMobile ? "column-reverse" : "undefiend"}
        >
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <TextTransaction
              TEXTS={[
                <Lottie
                  options={animationsSetter(developer)}
                  width={isMobile ? "200px" : "400px"}
                  height={isMobile ? "200px" : "400px"}
                  isClickToPauseDisabled
                />,
                <Lottie
                  options={animationsSetter(laptop)}
                  width={isMobile ? "200px" : "400px"}
                  height={isMobile ? "200px" : "400px"}
                  isClickToPauseDisabled
                />,
              ]}
              duration={6000}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            <TextTransaction
              TEXTS={[
                <Typography variant="h3" sx={{ mb: 3 }}>
                  What About &nbsp;
                  <span style={{ color: theme.palette.primary.main }}>
                    Afghan Shop
                  </span>
                  ?
                </Typography>,
                <Typography variant="h2" sx={{ mb: 3, color: "common.main" }}>
                  Who{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    love
                  </span>{" "}
                  <br />
                  Our work
                </Typography>,
              ]}
              duration={6000}
            />

            <TextTransaction
              TEXTS={[
                <Typography
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? "text.main"
                        : "common.white",
                  }}
                >
                  Electronic commerce (ecommerce) refers to companies and
                  individuals that buy and sell goods and services over the
                  Internet. Ecommerce operates in different types of market
                  segments and can be conducted over computers, tablets,
                  smartphones, and other smart devices. Nearly every imaginable
                  product and service
                </Typography>,
                <Typography sx={{ color: "text.main", marginTop: "2em" }}>
                  Our goal is to create a product and service that you’re
                  satisfied with and use it every day. This is why we’re
                  constantly working on our services to make it better every day
                  and really listen to what our users has to say.
                </Typography>,
              ]}
              duration={6000}
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
