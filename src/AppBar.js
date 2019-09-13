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
    width: '50%',
    // height: '30px'
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


    setLoading(false)
    handleClose()
  }

  return (
    <div className={classes.root}>
      <AppBar color='primary' className={classes.bar} position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.title}>
            Task Manager 
          </Typography>
          <Button className={classes.button} onClick={handleOpen} color="inherit">Login</Button>
          <SignIn open={open} onClose={handleClose} onSubmit={handleSubmit} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
