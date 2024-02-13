import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// sections
import { CreateCoupenForm } from "../../../../sections/admin/coupen/create";

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
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function CreateCoupon() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Container>
        <ContentStyle>
          {" "}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ color: theme.palette.primary.main, textAlign: "center" }}
              variant="h4"
              gutterBottom
            >
              Create
            </Typography>
            <Typography variant="h4">&nbsp; Coupon</Typography>
          </Box>
          <CreateCoupenForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
