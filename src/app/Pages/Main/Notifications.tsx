import React, {useState} from 'react';
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";
import clsx from "clsx";
import Spinner from "../../components/Spinner";
import {makeStyles, Modal, TableCell, TableHead, Typography, IconButton, Table, TableBody, TableRow} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: 450,
        height: 340,
        background: '#FFF',
        borderRadius: 32,
        border: '2px solid #2196F3',
        padding: 32,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate( -50%, -50% )'
    },
    title: {
        margin: 16,
        fontSize: 24,
        color: '#2196F3'
    },
    body: {
        //borderTop: '1px solid #2196F3',
    },
    paper: {
        boxShadow: 'none !important',
        display: 'flex',
        justifyContent: 'center'

    },
    footer: {
        marginTop: 32,
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },
    field: {
        margin: 16
    },
    fieldData: {
        maxWidth: 170
    },
    cancelBtn: {
        marginRight: 16
    }
}))

interface NotificationsProps {
    add?: boolean;
    onClose: () => void;
}

const columns = [
    { id: 'title', label: 'Название организации', minWidth: 170 },
    { id: 'status', label: '', minWidth: 100 },
];

const Notifications: React.FC<NotificationsProps> = React.forwardRef((props: NotificationsProps, ref) => {
    const classes = useStyles()
    const [state, setState] = useState<{title: string; date: string}>({title: '', date: ''})

    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onClose()
    }

    const handleApply = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onClose()
    }

    return (
        <div className={classes.root} ref={ref as any}>
            <Typography variant="body1" className={classes.title}>{'Ваши приглашения'}</Typography>
            <div className={classes.paper}>
                <Typography variant="body1">У вас нет приглашений</Typography>
            </div>
        </div>
    )
})

export default Notifications