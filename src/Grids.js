import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TaskList from './List.js'
import DivideLine from './Divider.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    
    
  },
  grids: {
      width: '30%',
      backgroundColor: '#e5f4f3',
      color: 'black',
      
      
  },
  grids1: {
    width: '70%',
    backgroundColor: '#e5f4f3',
    color: 'black',
  }
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} >
      
        <Grid className={classes.grids}>
          <TaskList />
        </Grid>
        <DivideLine/>
        <Grid className={classes.grids1}>
         
        </Grid>
      
    </Grid>
  );
}