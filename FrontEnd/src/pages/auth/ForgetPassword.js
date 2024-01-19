import { capitalCase } from "change-case";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Stack,
  Link,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// routes
import { PATH_AUTH } from "../../routes/path";

// animation
import Lottie from "react-lottie";
import animationSetter from "../../animations/animationSetter";
import forgetpasswordAnimation from "../../animations/forgetpassword/sendcode.json";
import birdFlying from "../../animations/forgetpassword/bird-flying.json";
import everywhere from "../../animations/forgetpassword/everywhere.json";
// // sections
import { ForgetPasswordForm } from "../../sections/auth/forgetpassword";
import TextTransaction from "../../utils/textTransaction";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  fontFamily: "Raleway",
  marginTop: "-3rem",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ForgetPassword() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMdScreenUp = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(theme.palette.primary.main);
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack gap={7} direction="row" alignItems="center" sx={{ mb: 2 }}>
            <Lottie
              options={animationSetter(forgetpasswordAnimation)}
              width={"70%"}
              height={"70%"}
              isClickToPauseDisabled
            />
            <Box gap={4} sx={{ flexGrow: 1, ml: "-3em" }}>
              <TextTransaction
                TEXTS={["Welcome", "Thanks"]}
                duration={3000}
                color={theme.palette.primary.main}
              />
              <TextTransaction
                TEXTS={["To Afghan Shop", "For Your Trust"]}
                duration={3000}
                // color={theme.palette.primary.main}
              />
              {isMdScreenUp ? (
                <Stack mt={4}
                  sx={{ position: "absolute", top: "25%", right: "29.5%" }}
                >
                  <TextTransaction
                    TEXTS={[
                      <Lottie
                        options={animationSetter(birdFlying)}
                        width={"200px"}
                        height={"200px"}
                        isClickToPauseDisabled
                      />,
                    ]}
                    duration={4000}
                  />
                </Stack>
              ) : null}
            </Box>
          </Stack>
          <Stack
            sx={{
              opacity: ".6",
              margin: "auto",
              position: "absolute",
              top: "39%",
              right: "25%",
              left: "25%",
            }}
          >
            <TextTransaction
              TEXTS={[
                <Lottie
                  options={animationSetter(everywhere)}
                  width={"100%"}
                  height={"100%"}
                  isClickToPauseDisabled
                />,
              ]}
              // color={theme.palette.primary.main}
            />
          </Stack>

          <Stack >
            
            <TextTransaction
              TEXTS={["Enter Your Email", "Forget Your Password?"]}
              duration={5000}
              color={theme.palette.primary.main}
            />
            <ForgetPasswordForm />
          </Stack>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
