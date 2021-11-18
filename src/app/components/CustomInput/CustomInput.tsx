import React from 'react';
import {makeStyles, TextField, TextFieldProps} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#FFF',
        borderColor: 'transparent',
        borderRadius: 32,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
        }
    }
}))

type StylesType = ReturnType<typeof useStyles>

const CustomInput: React.FC<TextFieldProps> = ({className, ...otherProps}: TextFieldProps) => {
    const classes: StylesType = useStyles()

    return (
        <TextField
            className={clsx(classes.root, className)}
            variant="outlined"
            {...otherProps}
        />
    )
}

export default CustomInput