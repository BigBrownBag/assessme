import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import StarsIcon from '@material-ui/icons/Stars';
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    value: {
        marginRight: 16,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 32,
        '&$small': {
            fontSize: 18,
            marginRight: 8
        }
    },
    icon: {
        fontSize: 38,
        color: 'rgba(33, 150, 243, 1)',
        '&$small': {
            fontSize: 21
        }
    },
    small: {}
}))

interface ShowRatingProps {
    value: number;
    className?: string | object;
    size?: "normal" | "small";
}

const ShowRating: React.FC<ShowRatingProps> = (props: ShowRatingProps) => {
    const classes = useStyles()

    return (
        <div className={clsx(classes.root, props.className)}>
            <Typography className={clsx(classes.value, {[classes.small]: props.size === "small"})}>
                {props.value.toString().replace('.', ',')}
            </Typography>
            <StarsIcon className={clsx(classes.icon, {[classes.small]: props.size === "small"})}/>
        </div>
    )
}

export default ShowRating