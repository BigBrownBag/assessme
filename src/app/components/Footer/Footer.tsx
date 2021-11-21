import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        height: 45,
        width: '100%',
        background: '#FFF',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'right',
        borderTop: '2px solid #2196F3'
    },
    logoWrapper: {
        background: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 32
    },
    logo: {
        fontSize: 48,
        fontFamily: '"Reenie Beanie"',
        color: '#2196F3'
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