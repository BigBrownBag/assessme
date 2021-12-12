import React from 'react';
import {makeStyles} from "@material-ui/core";
import SignUp from '../../components/Signup';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '80px 230px'
    },
}))

export interface SigninPageProps {}

export const SignupPage: React.FC<SigninPageProps> = (props: SigninPageProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <SignUp/>
        </div>
    )
}

export default SignupPage;