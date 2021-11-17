import React from 'react';
import {Avatar, Button, makeStyles, Typography} from "@material-ui/core";
import withLayout from "../../HOC/withLayout";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '120px 230px'
    },
    card: {
       border: '1px solid #2196F3',
        borderRadius: '0px 0px 32px 32px',

    },
    header: {
        height: 102,
        background: 'rgba(33, 150, 243, 0.64)',
        padding: 32
    },
    body: {
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    name: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 500
    },
    avatarWrapper: {
        height: 230,
        width: 220
    },
    avatar: {
        width: 128,
        height: 128
    },
    photoBtn: {

    }
}))

export interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (props: SettingsPageProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.header}><Typography className={classes.name}>Настройки</Typography></div>
                <div className={classes.body}>
                    <div className={classes.avatarWrapper}>
                        <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/2.jpg" className={classes.avatar}/>
                        <Button
                            className={classes.photoBtn}

                        >
                            Изменить фото
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLayout(SettingsPage);