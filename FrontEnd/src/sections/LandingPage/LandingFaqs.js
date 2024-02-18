import React from "react";
import { makeStyles } from "@mui/styles";
import { FaqsAccordion, FaqsForm } from "../faqs";
import { Faqs } from "../../_mock";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100vw",
      border: "2px solid blue",
    },
  },
  componentContainer: {
    flex: 1,
    boxShadow: theme.shadows[7],
    padding: theme.spacing(2),
    // border: "1px solid #ccc",
    borderRadius: theme.spacing(1),
    // marginLeft: theme.spacing(2), // Add left margin for spacing
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },
}));

const LandingFaqs = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.componentContainer}>
        <FaqsAccordion faqs={Faqs} />
      </div>
      <div className={classes.componentContainer}>
        <FaqsForm />
      </div>
    </div>
  );
};

export default LandingFaqs;
