/* global fetch, Headers */
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignIn from './LoginForm';
import SignUp from './RegisterForm';
import LoadingSpinner from './Spinner';
import './App.css';
import { AuthContext } from './context/AuthContext';

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
  const { updateAuth } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  // console.log(user.name);

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

    // Success - New user object! data.user, data.token
    updateAuth(data);

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

    updateAuth(data);

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
          {user ? (
            <div className={classes.authContainer}>
              <Typography color="inherit">
                Welcome {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
              </Typography>
            </div>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
