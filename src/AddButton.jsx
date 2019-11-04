import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { addTask } from './services/postTask';

const useStyles = makeStyles(theme => ({
  cont: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '24px',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    width: '100%',
    alignItems: 'center',
    felxGrow: 1,
  },
  fab: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '100%',
  },

  textField: {
    marginLeft: theme.spacing(3),
    marginTop: 0,
    marginBottom: 0,
    flexGrow: 1,
  },
}));

export default function AddButton({ handleSubmit }) {
  const classes = useStyles();
  const [task, setTask] = useState({
    description: '',
    completed: false,
  });

  const handleChange = ev => {
    setTask({ ...task, [ev.target.id]: ev.target.value });
  };

  const onSubmit = () => {
    handleSubmit(task);
  };

  return (
    <div className={classes.cont}>
      <TextField
        onChange={handleChange}
        id="description"
        label="Add a task"
        rowsMax="4"
        className={classes.textField}
        margin="normal"
      />
      <Fab
        onClick={onSubmit}
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        className={classes.fab}
      >
        <AddIcon />
        Add
      </Fab>
    </div>
  );
}
