import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import StarsIcon from '@material-ui/icons/Stars';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    value: {
        marginRight: 16,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 32
    },
    icon: {
        fontSize: 38,
        color: 'rgba(33, 150, 243, 1)'
    }
}))

interface ShowRatingProps {
    value: number;
}

const ShowRating: React.FC<ShowRatingProps> = (props: ShowRatingProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography className={classes.value}>{props.value.toString().replace('.', ',')}</Typography>
            <StarsIcon className={classes.icon}/>
        </div>
    )
}

export default ShowRating