/* global fetch, localStorage, Headers */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignIn from './LoginForm';
import SignUp from './RegisterForm';
import LoadingSpinner from './Spinner';
import './App.css';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  appBar: {
    justifyContent: 'space-between',
  },
  spinnerContainer: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    width: 144,
    height: 144,
    marginTop: -72,
    marginLeft: -72,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 8,
    color: 'white',
    zIndex: 1500,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  // Login handling
  const handleSubmit = async credentials => {
    setLoading(true);

    const body = JSON.stringify(credentials);

    const response = await fetch(
      'https://tzipet-task-manager-server.herokuapp.com/users/login',
      {
        method: 'POST',
        body,
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    );

    const data = await response.json();

    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);

    setLoading(false);
    handleClose();
  };

  // Registration handling
  const handleSubmitRegister = async credentialsRegister => {
    setLoading(true);

    const body = JSON.stringify(credentialsRegister);

    const response = await fetch(
      'https://tzipet-task-manager-server.herokuapp.com/users/',
      {
        method: 'POST',
        body,
        headers: new Headers({ 'content-type': 'application/json' }),
      },
    );

    const data = await response.json();

    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);

    setLoading(false);
    handleCloseRegister();
  };

  return (
    <div className={classes.root}>
      <SignIn open={open} onClose={handleClose} onSubmit={handleSubmit} />

      <SignUp
        open={openRegister}
        onClose={handleCloseRegister}
        onSubmit={handleSubmitRegister}
      />

      {loading && (
        <div className={classes.spinnerContainer}>
          <LoadingSpinner />
        </div>
      )}

      <AppBar color="primary" className={classes.bar} position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.title}>
            Task Manager
          </Typography>
          <div>
            <Button
              className={classes.button}
              onClick={handleOpen}
              color="inherit"
            >
              Login
            </Button>
            <Button
              className={classes.button}
              onClick={handleOpenRegister}
              color="inherit"
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
