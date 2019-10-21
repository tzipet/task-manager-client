/* global localStorage */
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AuthContext } from './context/AuthContext';
import './App.css';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  title: {
    flexGrow: 0,
  },
  foot: {
    justifyContent: 'space-between',
  },
}));

export default function FooterComp() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const { updateAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.clear();
    updateAuth({});
  };

  return (
    <div className={classes.root}>
      <AppBar color="primary" className={classes.footbar} position="static">
        <Toolbar className={classes.foot}>
          <Typography className={classes.title}>Copyright 2019</Typography>
          {user ? (
            <Button
              color="inherit"
              className={classes.title}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Typography className={classes.title}>tzipet</Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
