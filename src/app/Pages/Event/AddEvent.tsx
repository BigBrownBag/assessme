import React, {useState} from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";
import clsx from "clsx";

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

interface AddEventProps {
    add?: boolean;
    onClose: () => void;
    onAddEvent: (title: string, date: string) => void;
}

const AddEvent: React.FC<AddEventProps> = React.forwardRef((props: AddEventProps, ref) => {
    const classes = useStyles()
    const [state, setState] = useState<{title: string; date: string}>({title: '', date: ''})

    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onClose()
    }

    const handleApply = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onAddEvent(state.title, state.date)
        props.onClose()
    }

    return (
        <div className={classes.root} ref={ref as any}>
            <Typography variant="body1" className={classes.title}>{!props.add ? 'Редактировать событие' : 'Добавить событие'}</Typography>
            <form className={classes.body} onSubmit={handleApply}>
                <CustomTextField
                    required
                    className={classes.field}
                    autoFocus
                    fullWidth
                    id="title"
                    label="Название события"
                    type="text"
                    value={state.title}
                    onChange={(e) => setState({...state, title: e.target.value})}
                />
                <CustomTextField
                    className={clsx(classes.field, classes.fieldData)}
                    required
                    id="date"
                    label=""
                    type="date"
                    value={state.date}
                    onChange={(e) => setState({...state, date: e.target.value})}
                />
                <div className={classes.footer}>
                    <CustomButton
                        className={classes.cancelBtn}
                        onClick={handleClose}
                    >
                        Отменить
                    </CustomButton>
                    <CustomButton
                        type="submit"
                    >
                        Добавить
                    </CustomButton>
                </div>
            </form>
        </div>
    )
})

export default AddEvent