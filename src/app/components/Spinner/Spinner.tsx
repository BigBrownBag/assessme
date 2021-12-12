import React from 'react';
import {CircularProgress, CircularProgressProps, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        color: '#2196F3'
    }
}))

const Spinner = (props: CircularProgressProps) => {
    const classes = useStyles()

    return (
        <CircularProgress
            {...props}
            className={classes.root}
        />
    )
}

export default Spinner