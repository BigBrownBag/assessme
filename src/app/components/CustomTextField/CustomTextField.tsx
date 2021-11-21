import React from 'react';
import {makeStyles, TextField, TextFieldProps} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiInput-underline': {
            //borderBottomColor: 'rgba(33, 150, 243, 1)', // Solid underline on focus
            '&:after': {
                borderBottomColor: 'rgba(33, 150, 243, 1)', // Solid underline on focus
            },
            '&:hover:before': {
                borderBottomColor: 'rgba(33, 150, 243, 1)', // Solid underline on hover
            },
        },
        '& .Mui-error': {
            '&.MuiInput-underline:after': {
                borderBottomColor: '#ff0000'
            }
        }
        // '& .MuiInput-underline:hover:before': {
        //     borderBottomColor: 'rgba(33, 150, 243, 1)', // Solid underline on hover
        // },
    }
}))

const CustomTextField: React.FC<TextFieldProps> = ({className, ...otherProps}: TextFieldProps) => {
    const classes = useStyles()

    return (
        <TextField
            className={clsx(classes.root, className)}
            fullWidth
            {...otherProps}
        />
    )
}

export default CustomTextField
