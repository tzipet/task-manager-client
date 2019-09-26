import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  cont: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '24px',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    width: "100%",
    alignItems: 'center',
    felxGrow: 1


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
    flexGrow: 1

  }

}));


export default function AddButton() {
  const classes = useStyles()

  return (
    <div className={classes.cont}>
      <TextField
        id="standard-multiline-flexible"
        label="Add a task"

        rowsMax="4"
        className={classes.textField}
        margin="normal"
      />
      <Fab
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
  )
}

