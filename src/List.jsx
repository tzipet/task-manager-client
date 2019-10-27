import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Moment from 'react-moment';
import { getTasks } from './services/getTasks';
import AddButton from './AddButton';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    height: '100%',
    fontSize: '16px',
  },
  listItemLinkRoot: {
    paddingLeft: theme.spacing(3),
    width: '100%',
    '&:hover': {
      backgroundColor: '#212121',
      color: 'white',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  buttonContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  list: {
    flexGrow: 1,
    overflow: 'auto',
  },

  listItemText: {
    marginBottom: 8,
    // fontSize: 20,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TaskList() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTasks();
      // console.log(result);
      setTasks(result);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <List classes={{ root: classes.list }}>
        {tasks.map(task => (
          <ListItemLink
            divider
            key={task.id}
            classes={{ root: classes.listItemLinkRoot }}
            href="simple-list"
          >
            <ListItemText
              classes={{ root: classes.listItemText }}
              primary={task.description}
            />
            <Moment
              classes={{ root: classes.listItemDate }}
              format="DD/MM/YYYY"
            >
              {task.createdAt}
            </Moment>
          </ListItemLink>
        ))}
      </List>
      <div className={classes.buttonContainer}>
        <AddButton classes={{ root: classes.add }} />
      </div>
    </div>
  );
}
