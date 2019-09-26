import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import './App.css';

const useStyles = makeStyles(() => ({
  root: {
    color: '#005DA0',
  },
}));

export default function DivideLine() {
  const classes = useStyles();

  return (
    <div>
      <Divider className={classes.root} orientation="vertical" />
    </div>
  );
}
