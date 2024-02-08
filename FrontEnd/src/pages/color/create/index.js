// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// animation
import Lottie from "react-lottie";
import Glass from "../../../animations/old/new/buble.json";
import animationSetter from "../../../animations/animationSetter";

// sections
import { CreateBrandForm } from "../../../sections/color/create";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
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
}));

// ----------------------------------------------------------------------

export default function CreateProduct() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <RootStyle>
      <Container>
        <Lottie
          options={animationSetter(Glass)}
          width={"100%"}
          height={"400px"}
          style={{ position: "absolute", top: 1 }}
          isClickToPauseDisabled
        />
        <ContentStyle>
          {" "}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ color: theme.palette.primary.main, textAlign: "center" }}
              variant="h4"
              gutterBottom
            >
              Choose
            </Typography>
            <Typography variant="h4">&nbsp; Color</Typography>
          </Box>
          <CreateBrandForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
