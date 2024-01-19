import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { PATH_AUTH } from "../../../routes/path";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  button: {
    width: "100%",
  },
}));

export default function ForgetPasswordForm() {
  const theme = useTheme();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        fullWidth
      />      
      <Button variant="contained" type="submit" component={RouterLink}  to={PATH_AUTH.newPassword} className={classes.button}>
        Continue
      </Button>
    </form>
  );
}
