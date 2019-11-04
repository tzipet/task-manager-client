import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Moment from 'react-moment';
import { getTasks } from './services/getTasks';
import { addTask } from './services/postTask';
import AddButton from './AddButton';
import LoadingSpinner from './Spinner';
import { AuthContext } from './context/AuthContext';
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
  noUser: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TaskList() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getTasks();
      setTasks(result);
      setLoading(false);
    };

    fetchData();
  }, [update, user]);

  const handleSubmit = task => {
    setLoading(true);
    addTask(task);
    setUpdate(true);
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      {loading && (
        <div className={classes.spinnerContainer}>
          <LoadingSpinner />
        </div>
      )}
      {/* // Customise when there is no logged user and user's tasks */}
      {!tasks.length ? (
        <div className={classes.noUser}>
          <p>Welcome to the task manager App </p>
          <p>Please Login or Sign up to add tasks</p>
        </div>
      ) : (
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
            <AddButton
              classes={{ root: classes.add }}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}
