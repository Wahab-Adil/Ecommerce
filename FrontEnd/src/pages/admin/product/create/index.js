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
import {
  CreateProductRightForm,
  CreateProductLeftForm,
} from "../../../../sections/admin/product/create";

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

export default function CreateProduct() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

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
            <Typography variant="h4">&nbsp; Product</Typography>
          </Box>
          <CreateProductLeftForm />
        </ContentStyle>
      </Container>
      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ color: "text.secondary" }}>
                Please Select & Fill The Blanks
              </Typography>
            </Box>
          </Box>

          <CreateProductRightForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
