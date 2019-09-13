import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    cont: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '16px',
        marginLeft: '4px',
        justifyContent: 'center'
    },
    text: {
        marginTop: '0px'
    }
  }));


export default function AddButton() {
    const classes = useStyles()

    return (
       <div className={classes.cont}> 
        <Fab size='small' color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
        </Fab>
        <TextField
            className={classes.text}
             id="standard-with-placeholder"
             label="Type your task and press the add Button"
             placeholder="Type here..."
             margin="normal"
             width='100%'
            >
        </TextField>
      </div>
    )
}