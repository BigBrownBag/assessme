import React from 'react';
import {makeStyles} from "@material-ui/core";
import SignIn from "../../components/Signin";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '80px 230px'
    },
}))

export interface SigninPageProps {}

export const SigninPage: React.FC<SigninPageProps> = (props: SigninPageProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <SignIn/>
        </div>
    )
}

export default SigninPage;