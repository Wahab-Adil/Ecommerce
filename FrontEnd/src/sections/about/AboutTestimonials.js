// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Container, Typography, Avatar, Stack } from "@mui/material";

import TextTransaction from "../../utils/textTransaction";

// lottie
import wahab from "../../assets/team/wahab.jpeg";
import saboor from "../../assets/team/abdulsaboor.jpg";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
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
          <Stack direction="row">
            <TextTransaction
              TEXTS={[
                <Box>
                  <Avatar
                    src={wahab}
                    sx={{ width: "200px", height: "200px" }}
                  />
                  <Typography
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
                  <Avatar
                    src={saboor}
                    sx={{ width: "200px", height: "200px" }}
                  />
                  <Typography
                    variant="h4"
                    textAlign={"center"}
                    color={"text.main"}
                  >
                    Jamal{" "}
                    <span style={{ color: theme.palette.primary.main }}>
                      Jowani
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
