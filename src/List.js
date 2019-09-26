import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddButton from './AddButton';
import './App.css';
import tasks from './tasks.js'




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%', 
    // height: 'calc(100vh - 2 * 64px)',
    justifyContent: 'space-between',
    height: '100%',
    
    
  },
  listItemLinkRoot: {
    paddingLeft: theme.spacing(3),
    width: '100%',
    '&:hover': {
      backgroundColor: "#212121",
      color: 'white',
    },
  },

  buttonContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // height: '100%',
    // position: 'fixed',
    // left: 0,
    // bottom: 64

  },

  list: {
    // height: '100%',
    // display: 'block',
    flexGrow: 1,
    overflow: 'auto'
    
  }
 
}));



function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TaskList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <List classes={{ root: classes.list}} >
          {tasks.map(task => (
          <ListItemLink divider key={task.id} classes={{ root: classes.listItemLinkRoot }} href="simple-list">
            <ListItemText primary={task.description} secondary={task.timestamps} />
          </ListItemLink>
            ))}
        </List>
        <div className={classes.buttonContainer}>
        <AddButton classes={{ root: classes.add }}/>
        </div>
        
    </div>
  );
}