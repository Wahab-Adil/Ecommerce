import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  button: {
    width: '100%',
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Add your login logic here
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
      >
        Login
      </Button>
    </form>
  );
}