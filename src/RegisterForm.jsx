import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function SignUp({ open, onClose, onSubmit }) {
  const classes = useStyles();
  const [credentialsRegister, setCredentials] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
  });

  const handleChange = ev => {
    setCredentials({ ...credentialsRegister, [ev.target.id]: ev.target.value });
  };

  const handleSubmitRegister = () => {
    onSubmit(credentialsRegister);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent className={classes.root}>
          <TextField
            onChange={handleChange}
            autoFocus
            id="email"
            label="E-mail"
            type="e-mail"
            margin="normal"
            variant="outlined"
            required="true"
          />
          <TextField
            onChange={handleChange}
            id="password"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            required="true"
          />
          <TextField
            onChange={handleChange}
            id="name"
            label="Name"
            type="name"
            margin="normal"
            variant="outlined"
            required="true"
          />
          <TextField
            onChange={handleChange}
            id="age"
            label="Age"
            type="age"
            margin="normal"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitRegister} color="primary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
