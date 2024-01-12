import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Link,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// animation
import Lottie from "react-lottie";
import animationSetter from "../../animations/animationSetter";
import BeeFlying from "../../animations/register/agriotriton.json";
import BoatSailing from "../../animations/register/sailing-boat.json";

// Text Transaction
import TextTransaction from "../../utils/textTransaction";

// routes
import { PATH_AUTH } from "../../routes/path";

// sections
import { RegisterForm } from "../../sections/auth/register";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
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

export default function Register() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <RootStyle>
      <HeaderStyle>
        {/* <Logo /> */}
        {isMobile && (
          <Typography variant="body2" sx={{ mt: { md: -2 } }}>
            Already have an account? {""}
            <Link
              variant="subtitle2"
              component={RouterLink}
              to={PATH_AUTH.login}
            >
              Login
            </Link>
          </Typography>
        )}
      </HeaderStyle>

      {isMdScreen && <SectionStyle>Mobile Mode</SectionStyle>}

      <Container>
        <ContentStyle>
          <Lottie
            options={animationSetter(BeeFlying)}
            width={"400px"}
            height={"100px"}
            isClickToPauseDisabled
          />
          <Lottie
            options={animationSetter(BoatSailing)}
            width={"400px"}
            isClickToPauseDisabled
          />
        </ContentStyle>
      </Container>
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1 }}>
              <TextTransaction
                TEXTS={["Welcome", "Sign Up"]}
                duration={3000}
                color={theme.palette.primary.main}
              />
              <Box sx={{ display: "flex" }}>
                <Typography variant="h4" gutterBottom>
                  To &nbsp;
                </Typography>
                <Typography
                  sx={{ color: theme.palette.primary.main }}
                  variant="h4"
                  gutterBottom
                >
                  Afghan
                </Typography>
                <Typography variant="h4">&nbsp; Shop.</Typography>
              </Box>

              <Typography sx={{ color: "text.secondary" }}>
                We're happy To Have you with OwnSelf.Let's register You Dear
              </Typography>
            </Box>
          </Box>

          <RegisterForm />

          <Typography
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 3 }}
          >
            By registering, I agree to our Afghan Shop&nbsp;
            <Link underline="always" color="text.primary" href="#">
              Terms of Service &nbsp;
            </Link>
            {""}and{""}
            <Link underline="always" color="text.primary" href="#">
              &nbsp; Privacy Policy
            </Link>
            .
          </Typography>

          {!isMdScreen && (
            <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
              Already have an account?{" "}
              <Link
                variant="subtitle2"
                to={PATH_AUTH.login}
                component={RouterLink}
              >
                Login
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
