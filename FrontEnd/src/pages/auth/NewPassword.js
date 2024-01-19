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
import codesent from "../../animations/newpassword/sent.json";
import planet from "../../animations/newpassword/planet.json";
// // sections
import { NewPasswordForm } from "../../sections/auth/new-password";
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

export default function NewPassword() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMdScreenUp = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(theme.palette.primary.main);
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
            <Lottie
              options={animationSetter(codesent)}
              width={"70%"}
              height={"70%"}
              isClickToPauseDisabled
            />
            <Box sx={{ flexGrow: 1, ml: "-3em" }}>
              <TextTransaction
                TEXTS={["Welcome to", "You Were"]}
                duration={3000}
                color={theme.palette.primary.main}
              />
              <TextTransaction
                TEXTS={["Afghan Shop","Received Our Email"]}
                duration={3000}
                // color={theme.palette.primary.main}
              />
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
          </Stack>

          <Stack>
            <TextTransaction
              TEXTS={["Enter the Code","New Password"]}
              duration={5000}
              color={theme.palette.primary.main}
            />
            <NewPasswordForm />
          </Stack>
          <Box  sx={{ textAlign: 'center' }} >

          <Typography variant="body2">
            Don’t have a code? &nbsp;
            <Link variant="subtitle2" onClick={() => {}}>
              Resend code
            </Link>
          </Typography>
          </Box>

        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
