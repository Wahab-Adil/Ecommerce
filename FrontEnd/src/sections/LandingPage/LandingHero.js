import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { makeStyles  } from "@material-ui/core/styles";
import styled, { keyframes } from 'styled-components';
import img15 from "../../assets/img15.jpg";
import img5 from "../../assets/img5.jpg";
import img14 from "../../assets/img14.jpg";


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
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f6f9ff",
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
    height: "auto",
    marginBottom: theme.spacing(2),
  },
}));

const LandingHero = () => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <div className={classes.welcomeText}>
        <FadeInFromLeftContainer>
        <Typography className="fade-in-from-left" variant="h4">
          <span style={{ whiteSpace: "nowrap" }}> Welcome to the Best </span>{" "}
          <br />
          <span style={{ whiteSpace: "nowrap" }}>E-commerce Website!</span>
        </Typography>
     
        <Typography variant="body1">
          Buy What You Need By Your Finger Tips
        </Typography>
        <Button
          color="primary"
          component={Link}
          to="/login"
          endIcon={<EastIcon />}
          >
          Login
        </Button>
          </FadeInFromLeftContainer>
      </div>
      <div className={classes.imageContainer}>

        <div className={classes.imageWrapper}>
          <img className={classes.image} src={img15} alt="Image 1" />
          <img className={classes.image} src={img5} alt="Image 2" />
        </div>
        <img className={classes.image} src={img14} alt="Image 3" />
      </div>
    </div>
  );
};

export default LandingHero;
