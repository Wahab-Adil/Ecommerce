// @mui
import {
  Box,
  Typography,
  styled,
  Button,
  Grid,
  Link,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// Lottie
import Lottie from "react-lottie";
import animation from "../animations/user-profile.json";
import animationSetter from "../animations/animationSetter";
// Styles
const RootStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "35%",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
}));
const ContentStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  position: "relative",
  borderBottom: `5px solid ${theme.palette.background.main}`,
  width: "80%",
  borderTopRightColor: "blue",
  marginTop: "-5.5em",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "row",
  boxShadow: theme.shadows[15],
  borderRadius: "5px",
  paddingBottom: "1em",
}));
const StyledBox = styled(Grid)(({ theme }) => ({
  backgrounColor: theme.palette.background.paper,
  margin: "1em",
  textAlign: "start",
}));
const StyledTitle = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
  marginBottom: ".3em",
}));
const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "center",
  fontWeight: "bold",
  fontSize: ".8rem",
  marginBottom: ".3em",
}));
// Footer JSX
export default function Footer() {
  return (
    <RootStyle>
      <Divider
        sx={{
          width: "82%",
          filter: "drop-shadow(.5em)",
          borderRadius: "1em",
          boxShadow: (theme) => theme.shadows[24],
          marginTop: ".5em",
          marginRight: "auto",
          marginLeft: "auto",
          height: "7px",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      />
      <Divider
        sx={{
          width: "85%",
          filter: "drop-shadow(.5em)",
          borderRadius: "1em",
          boxShadow: (theme) => theme.shadows[24],
          marginTop: ".5em",
          marginRight: "auto",
          marginLeft: "auto",
          height: "7px",
          backgroundColor: (theme) => theme.palette.primary.main,
          zIndex: -1,
        }}
      />
      <ContentStyle>
        <StyledBox item md={6} flexGrow={4}>
          <Box>🌕</Box>
          <Box
            mt={1}
            sx={{
              color: (theme) => theme.palette.text.secondary,
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle1" textAlign={"center"}>
              This is Fully Functional Ecommerce App
              <br />
              This is Fully Functional Ecommerce App
              <br />
              This is Fully Functional Ecommerce App
              <br />
              This is Fully Functional Ecommerce App
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"}>
              🌎 Hel,Lashkar-gah,AFG
            </Typography>
          </Box>
        </StyledBox>
        <StyledBox item md={2} flexGrow={2} sx={{ textAlign: "center" }}>
          <StyledTitle>Categories</StyledTitle>

          <Box>
            {" "}
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Laptops & Computers
            </StyledLink>
          </Box>

          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Smart Phones & Tablets
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Video Games & Consoles
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Waterproof Headphones
            </StyledLink>
          </Box>
          <Box mt={1}>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Cameras & Photography
            </StyledLink>
          </Box>
        </StyledBox>
        <StyledBox item md={2} flexGrow={2} sx={{ textAlign: "center" }}>
          <StyledTitle>Customer Care</StyledTitle>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              My Account
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Discount
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Returns
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Orders History
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Order Tracking
            </StyledLink>
          </Box>
        </StyledBox>
        <StyledBox item md={2} flexGrow={2} sx={{ textAlign: "center" }}>
          <StyledTitle>pages</StyledTitle>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Blog
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Browse the Shop
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Category
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Pre-Built Pages
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              Visual Composer Elements
            </StyledLink>
          </Box>
          <Box>
            <StyledLink
              to="/hello"
              component={RouterLink}
              variant="subtitle1"
              textAlign={"center"}
            >
              WooCommerce Pages
            </StyledLink>
          </Box>
        </StyledBox>
      </ContentStyle>

      <Lottie
        style={{ marginTop: "-4em" }}
        options={animationSetter(animation)}
        width={"30%"}
        height={"100px"}
        isClickToPauseDisabled
      />
      <Divider
        sx={{
          width: "85%",
          filter: "drop-shadow(.5em)",
          borderRadius: "1em",
          boxShadow: (theme) => theme.shadows[24],
          marginTop: "-1.5em",
          marginRight: "auto",
          marginLeft: "auto",
          height: "5px",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      />
    </RootStyle>
  );
}
