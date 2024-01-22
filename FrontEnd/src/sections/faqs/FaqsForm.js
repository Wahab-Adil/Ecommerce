import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, AccordionDetails } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    border: "1px solid #ccc",
    borderRadius: theme.spacing(1),
    maxWidth: 400,
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const FaqsForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.includes("@") && email.includes(".")) {
      // submit form data
      console.log("Form submitted");
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Still Need Help?</h1>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        <TextField
          label="Message"
          multiline
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          sx={{ mt: 1 }}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FaqsForm;
