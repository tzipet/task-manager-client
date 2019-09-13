import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    width: '50%',
  },
  title: {
    flexGrow: 0, 
 
  },
  foot: {
      justifyContent: 'space-between'
  },
}));




export default function FooterComp() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar color='primary' className={classes.footbar} position="static">
        <Toolbar className={classes.foot}>
          <Typography className={classes.title}>
            Copyright 2019 
          </Typography>
          <Typography className={classes.title}>
            tzipet 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
