import React from 'react';
import {Button, ButtonProps} from "@material-ui/core";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 32,
        color: '#FFF',
        background: '#2196F3',
        '&:hover': {
            background: '#2196F3'
        }
    }
}))

type StylesType = ReturnType<typeof useStyles>

const CustomButton: React.FC<ButtonProps> = ({className, children, ...otherProps}: ButtonProps) => {
    const classes: StylesType = useStyles()

    return (
        <Button
            className={clsx(classes.root, className)}
            disableRipple
            variant="contained"
            {...otherProps}
        >
            {children}
        </Button>
    )
}

export default CustomButton