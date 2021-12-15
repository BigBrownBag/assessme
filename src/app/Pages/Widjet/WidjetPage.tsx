import React from 'react';
import {CircularProgress, CircularProgressProps, makeStyles, Typography} from "@material-ui/core";
import avatars from '../../../img/avatars.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '80px 230px'
    },
    notifications: {
        
        width: 156,
        height: 140,
    },
    notificationsTitle: {
        fontSize: 14,
        maxWidth: 108,
        textAlign: "center",
        marginTop: 8
    }
}))

const WidjetPage: React.FC<any> = (props) => {
    const classes = useStyles()
    console.log(props.id)

    return (
        <div className={classes.root}>
                <div className={classes.notifications}>
                            <div>
                                <img src={avatars} alt="problem"/>
                            </div>
                            <Typography className={classes.notificationsTitle}>Сообщить о проблеме</Typography>
            </div>
        </div>
    )
}

export default WidjetPage;