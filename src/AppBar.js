import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignIn from './LoginForm.js'
import './App.css';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: '100%',
    
  },
  title: {

    
  },
  appBar: {
      justifyContent: 'space-between'
  },

  button: {

  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (credentials) => {
    setLoading(true)

    const body = JSON.stringify(credentials)

    const response = await fetch('https://tzipet-task-manager-server.herokuapp.com/users/login', {
      method: 'POST',
      body,
      headers: new Headers({'content-type': 'application/json'})
    })
    console.log(response)
    

    const data = await response.json()
    console.log(data)

    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('token', data.token)

    localStorage.getItem('token')

    setLoading(false)
    handleClose()
  }

  return (
    <div className={classes.root}>
      <SignIn open={open} onClose={handleClose} onSubmit={handleSubmit} />

      <AppBar color='primary' className={classes.bar} position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.title}>
            Task Manager 
          </Typography>
          <div>
          <Button className={classes.button} onClick={handleOpen} color="inherit">Login</Button>
          <Button className={classes.button} color='inherit'>Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
