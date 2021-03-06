import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TaskList from './List';
import DivideLine from './Divider';

const useStyles = makeStyles(() => ({
  root: {
    flex: 'auto',
    width: '100%',
    flexDirection: 'row',
    overflow: 'auto',
    alignItems: 'stretch',
  },
  gridList: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    color: 'black',
    height: '100%',
  },
  gridDetails: {
    flex: 2,
    backgroundColor: '#fafafa',
    color: 'black',
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.gridList}>
        <TaskList />
      </Grid>
      <DivideLine />
      <Grid item className={classes.gridDetails}></Grid>
    </Grid>
  );
}
