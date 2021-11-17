import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        height: 45,
        width: '100%',
        background: '#2196F3',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'right'
    },
    logoWrapper: {
        background: '#2196F3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 32
    },
    logo: {
        fontSize: 48,
        fontFamily: '"Reenie Beanie"',
        color: '#FFF'
    },
}))

export interface FooterProps {}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <div className={classes.logoWrapper}>
                <div className={classes.logo}>
                    Assessme
                </div>
            </div>
        </footer>
    )
}

export default Footer;