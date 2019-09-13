import React from 'react';
import Divider from '@material-ui/core/Divider';
import './App.css';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        color: '#005DA0'
    }
}))



export default function DivideLine() {
    const classes = useStyles


    return (
        <div>
            <Divider className={classes.root} orientation='vertical'/>
        </div>
    )
}

