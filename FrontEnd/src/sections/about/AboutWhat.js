import PropTypes from "prop-types";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  LinearProgress,
  useMediaQuery,
} from "@mui/material";
// lottie
import Lottie from "react-lottie";
// animtion
import growth from "../../animations/old/about/welcome.json";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  // lottie configration
  const growthAnimationConfig = {
    loop: true,
    autoplay: true,
    animationData: growth,
  };

  const isDesktop = useMediaQuery("up", "md");
  const isMobile = useMediaQuery("down", "sm");

  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={3}
          flexDirection={isMobile ? "column-reverse" : "undefiend"}
        >
          <Grid item xs={12} md={6} lg={5}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Join With Us
            </Typography>

            <Typography
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "text.secondary"
                    : "common.white",
              }}
            >
              We Have Love With Our Respected Customers
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Lottie
              options={growthAnimationConfig}
              width={isMobile ? "200px" : "400px"}
              height={isMobile ? "200px" : "400px"}
              isClickToPauseDisabled
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {value}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          "& .MuiLinearProgress-bar": { bgcolor: "grey.700" },
          "&.MuiLinearProgress-determinate": { bgcolor: "divider" },
        }}
      />
    </Box>
  );
}
