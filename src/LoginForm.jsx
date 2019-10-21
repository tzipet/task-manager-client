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

export default function SignIn({ open, onClose, onSubmit }) {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = ev => {
    setCredentials({ ...credentials, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = () => {
    onSubmit(credentials);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent className={classes.root}>
          <TextField
            onChange={handleChange}
            autoFocus
            id="email"
            label="Email"
            type="e-mail"
            autoComplete="current-email"
            margin="normal"
            variant="outlined"
            required="true"
          />
          <TextField
            onChange={handleChange}
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            required="true"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
