import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {},
    main: {
        marginLeft: 256,
    }
}))

export interface LayoutPageProps {
    children: any;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({children, ...otherProps}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Navbar
                user={{}}
            />

            <main className={classes.main}>
                {children}
            </main>

            <Footer/>
        </div>
    )
}

export default LayoutPage;