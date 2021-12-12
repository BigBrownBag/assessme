import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {makeStyles} from "@material-ui/core";
import {User} from "../../utils/interface";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    main: {
        marginLeft: 256,
        height: '100%'
    }
}))

export interface LayoutPageProps {
    children: React.ReactNode;
    isAuth: boolean;
    userData: User | null;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({children, ...otherProps}) => {
    const classes = useStyles()
    const {isAuth, userData} = otherProps

    return (
        <div className={classes.root}>
            <Navbar
                isAuth={isAuth}
                user={userData}
            />

            <main className={classes.main}>
                {children}
            </main>

            <Footer/>
        </div>
    )
}

export default LayoutPage;