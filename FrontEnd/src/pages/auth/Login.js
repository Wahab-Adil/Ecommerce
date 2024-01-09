import { capitalCase } from "change-case";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Stack,
  Link,
  Alert,
  Tooltip,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// routes
import { PATH_AUTH } from "../../routes/path";

// animation
import animationSetter from "../../animations/animationSetter";
import loginAnimation from "../../animations/login/login.json";
import Lottie from "react-lottie";
// hooks
// import useAuth from '../../hooks/useAuth';
// import useResponsive from '../../hooks/useResponsive';
// // components
// import Page from '../../components/Page';
// import Logo from '../../components/Logo';
// import Image from '../../components/Image';
// // sections
import { LoginForm } from "../../sections/auth/login";
import TextTransaction from "../../utils/textTransaction";

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

export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <RootStyle>
      <HeaderStyle>
        {isMobile && (
          <Typography variant="body2" sx={{ mt: { md: -2 } }}>
            Don’t have an account? {""}
            <Link
              variant="subtitle2"
              component={RouterLink}
              to={PATH_AUTH.register}
            >
              Get started
            </Link>
          </Typography>
        )}
      </HeaderStyle>

      {isMdScreen && (
        <SectionStyle>
          {/* <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography> */}
          {/* <Image visibleByDefault disabledEffect src="/assets/illustrations/illustration_login.png" alt="login" /> */}
        </SectionStyle>
      )}

      <Container maxWidth="sm">
        <ContentStyle>
          <Lottie
            options={animationSetter(loginAnimation)}
            width={"60%"}
            height={"60%"}
          />
          <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <TextTransaction
                TEXTS={["Welcome", "Sign In"]}
                duration={3000}
                color={"primary.main"}
              />
              <TextTransaction
                TEXTS={["To Afghan Shop"]}
                duration={3000}
                color={"text.secondary"}
              />
              <Typography sx={{ color: "text.secondary" }}>
                Enter your
              </Typography>
              <TextTransaction
                TEXTS={["User-name", "Email"]}
                duration={5000}
                color={"primary.main"}
              />
            </Box>

            {/*   <Tooltip title={capitalCase(method)} placement="right">
                <>
                   <Image
                    disabledEffect
                    src={`https://minimal-assets-api-dev.vercel.app/assets/icons/auth/ic_${method}.png`}
                    sx={{ width: 32, height: 32 }}
                  />
                </>
              </Tooltip> */}
          </Stack>

          {/* <Alert severity="info" sx={{ mb: 3 }}>
            Use email : <strong>demo@minimals.cc</strong> / password :
            <strong> demo1234</strong>
          </Alert> */}

          <LoginForm />
          {!isMobile && (
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?{" "}
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.register}
              >
                Get started
              </Link>
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.newPassword}
              >
                <br /> Forget Password
              </Link>
            </Typography>
          )}
          {!isMdScreen && (
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?{" "}
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.register}
              >
                Get started
              </Link>
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.newPassword}
              >
                <br /> Forget Password
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
