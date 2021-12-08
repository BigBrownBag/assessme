import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {makeStyles} from "@material-ui/core";

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
    children: any;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({children, ...otherProps}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Navbar
                user={{admin: true}}
            />

            <main className={classes.main}>
                {children}
            </main>

            <Footer/>
        </div>
    )
}

export default LayoutPage;