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
    width: '100%',    
  },
  listItemLinkRoot: {
    paddingLeft: theme.spacing(3),
    secondaryTypographyProps: {
      color: 'white'
    },
    '&:hover': {
      borderLeftStyle: 'solid',
      borderColor: '#212121',
      backgroundColor: "#212121",
      color: 'white',
    
    },
  },
 
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TaskList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <List className={classes.list} component="nav">
          {tasks.map(task => (
          <ListItemLink divider key={task.id} classes={{ root: classes.listItemLinkRoot }} href="simple-list">
           
            <ListItemText primary={task.description} secondary={task.timestamps} />
          </ListItemLink>
           
            ))}
            {/* <AddButton className={classes.add}/> */}
           
        </List>
      
    </div>
  );
}