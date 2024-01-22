import React from "react";
import { Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
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
    marginBottom: "10rem",
    marginTop: "-10rem",
  },
  welcomeText: {
    padding: theme.spacing(2),
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
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
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <div className={classes.welcomeText}>
        <FadeInFromLeftContainer>
          <Typography className="fade-in-from-left" variant="h4">
            <span style={{ whiteSpace: "nowrap" }}>
              {" "}
              <TextTransaction
                TEXTS={[
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "2.5rem",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp; Welcome
                  </Typography>,
                  <Typography
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "1.8rem",
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
              }}
            >
              &nbsp; &nbsp; Afghan
            </span>
          </Typography>
          <span style={{ fontSize: "2rem" }}> Ecommerce</span>
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
  );
};

export default LandingHero;
