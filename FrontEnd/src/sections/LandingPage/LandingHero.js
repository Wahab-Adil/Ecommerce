import React from "react";
import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import styled, { keyframes } from "styled-components";
import img15 from "../../assets/img15.jpg";
import img5 from "../../assets/img5.jpg";
import img14 from "../../assets/img14.jpg";
import sunglasSImg from "../../assets/watch.jpg";

// text Transaction
import TextTransaction from "../../utils/textTransaction";

// lottie
import Lottie from "react-lottie";
import Arrow from "../../animations/old/shared/arrow-right.json";
import animationSetter from "../../animations/animationSetter";

// hook
//-------------------------------------------------------
const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FadeInFromLeftContainer = styled.div`
  animation: ${fadeInFromLeft} 2s;
`;

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    fontFamily: "Raleway",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    marginBottom: "1rem",
    marginTop: "-10rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: "5rem",
    },
  },
  welcomeText: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: 5,
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      marginTop: "10rem",
      marginLeft: "-7rem",
    },
    flex: 0.5,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      marginTop: "-1rem",
    },
  },
  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: theme.spacing(2),
  },
  image: {
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    width: "50%",
    height: "50%",
    height: "auto",
    marginBottom: theme.spacing(2),
  },
}));

const LandingHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <div className={classes.welcomeText}>
        <FadeInFromLeftContainer>
          <Typography className="fade-in-from-left" variant="h4">
            <span
              style={{
                whiteSpace: "nowrap",
                fontSize: isMdScreen ? "1.5rem" : "2.5rem",
              }}
            >
              {" "}
              <TextTransaction
                TEXTS={[
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: isMdScreen ? "1.5rem" : "2.5rem",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp; Welcome
                  </Typography>,
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: isMobile
                        ? "1.2rem"
                        : isMdScreen
                        ? "1.5rem"
                        : "1.8rem",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp; Let's Jump To!
                  </Typography>,
                ]}
                duration={4000}
              />
              &nbsp; &nbsp; to the Best{" "}
            </span>{" "}
            <br />
            <span
              style={{
                whiteSpace: "nowrap",
                color: theme.palette.primary.main,
                fontSize: isMdScreen ? "1.5rem" : "2rem",
              }}
            >
              &nbsp; &nbsp; Afghan
            </span>
          </Typography>
          <span style={{ fontSize: isMdScreen ? "1.5rem" : "2rem" }}>
            {" "}
            Ecommerce
          </span>
          <TextTransaction
            TEXTS={[
              <Typography variant="body2">
                Buy What You Need By Your Finger Tips
              </Typography>,
              <Typography variant="body1">For Mens & Femals</Typography>,
            ]}
            duration={9000}
          />

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
            sx={{
              px: 2,
              py: 1,
              mt: 3,
              borderRaduis: 2,
              backgroundColor: theme.palette.background.paper,
              color: "black",
              boxShadow: theme.shadows[20],
              fontSize: isMdScreen ? ".7rem" : "1.2rem",
              "&:hover": {
                color: "white",
              },
            }}
            endIcon={
              <Lottie
                options={animationSetter(Arrow)}
                width={"50px"}
                height="50px"
              />
            }
          >
            Login
          </Button>
        </FadeInFromLeftContainer>
      </div>
      <div style={{ flex: isMdScreen ? 1.5 : 1 }}>
        <TextTransaction
          TEXTS={[
            <div className={classes.imageContainer}>
              <TextTransaction
                TEXTS={[
                  <div className={classes.imageWrapper}>
                    <img
                      className={classes.image}
                      src={img15}
                      alt="Image 1"
                      style={{ boxShadow: theme.shadows[20] }}
                    />
                  </div>,
                  <div className={classes.imageWrapper}>
                    <img
                      className={classes.image}
                      style={{ boxShadow: theme.shadows[20] }}
                      src={img5}
                      alt="Image 2"
                    />
                    <img
                      className={classes.image}
                      style={{ boxShadow: theme.shadows[20] }}
                      src={img15}
                      alt="Image 1"
                    />
                  </div>,
                ]}
                duration={2000}
              />
              <img
                className={classes.image}
                style={{ boxShadow: theme.shadows[20] }}
                src={sunglasSImg}
                alt="Image 3"
              />
              ,
            </div>,

            <div className={classes.imageContainer}>
              <TextTransaction
                TEXTS={[
                  <div className={classes.imageWrapper}>
                    <img
                      className={classes.image}
                      style={{ boxShadow: theme.shadows[20] }}
                      src={img15}
                      alt="Image 1"
                    />
                  </div>,
                  <div className={classes.imageWrapper}>
                    <img
                      className={classes.image}
                      style={{ boxShadow: theme.shadows[20], width: "30vw" }}
                      src={img5}
                      alt="Image 2"
                    />
                    <img
                      className={classes.image}
                      style={{ boxShadow: theme.shadows[20] }}
                      src={img15}
                      alt="Image 1"
                    />
                  </div>,
                ]}
                duration={2000}
              />
              <img
                className={classes.image}
                style={{ boxShadow: theme.shadows[20], maxWidth: "30vw" }}
                src={img14}
                alt="Image 3"
              />
              ,
            </div>,
          ]}
          duration={8000}
        />
      </div>
    </div>
  );
};

export default LandingHero;
