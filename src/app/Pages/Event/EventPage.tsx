import React, {useEffect, useState}  from 'react';
import {makeStyles, Modal, TableCell, TableHead, Typography, IconButton, Table, TableBody, TableRow} from "@material-ui/core";
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import CustomButton from "../../components/CustomButton";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DownloadIcon from '@mui/icons-material/Download';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import {useSearchData} from "./effects/use-search-data.effect";
import {Event} from "../../../utils/interface";
import dateFormat from 'dateformat';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddEvent from "./AddEvent";
import {useEventData} from "./effects/use-event-data.effect";
import Spinner from "../../components/Spinner";
import {BASE_URL} from "../../../api/DataRepository";

export interface EventPageProps {
    userId: number | undefined;
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '100px 32px',
        height: '100%'
    },
    paper: {
        boxShadow: 'none !important',
        display: 'flex',
        justifyContent: 'center'

    },
    tableCell: {
        fontSize: '16px !important',
    },
    btn: {
        display: 'flex',
        width: '100%',
        justifyContent: 'right',
        padding: '20px'
    },
    text: {

    }
}))

const columns = [
    { id: 'title', label: 'Название', minWidth: 170 },
    { id: 'date', label: 'Дата', minWidth: 100 },
    { id: 'over_score ', label: 'Оценка', minWidth: 100 },
    { id: 'scores_count ', label: 'Количество оценок', minWidth: 100 },
    { id: 'btns', label: '', minWidth: 10 },
];
  

export const EventPage: React.FC<EventPageProps> = (props: EventPageProps) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [state, setState] = useState<Event[]>([])
    const [createOpen, setCreateOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const {data, loading, onAddEvent, onExportEvent} = useEventData({userId: props.userId})

    useEffect(() => {
        setState(data)
    }, [data])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const onCreateClose = () => {
        setCreateOpen(false)
    }

    const onEditClose = () => {}
        
    const handleCloseEdit = () => {
        setEdit(false);
    };

    const onEventCopy = (id: number) => {
        navigator.clipboard.writeText(BASE_URL + `/rate/${id}`)
    }

    console.log(data)
    return (
        <div className={classes.root}>
            <div className={classes.btn}>
                <CustomButton
                    onClick={() => {
                        setCreateOpen(true);
                    }}
                >
                    + Добавить событие
                </CustomButton>
            </div>
            <div className={classes.paper}>
                {loading ?
                    <Spinner
                        size={300}
                    />
                    :
                    data?.length ?
                    <Table aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        className={classes.tableCell}
                                        key={column.id}
                                        align="center"
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className={classes.tableCell} align="center">{row.title}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.date.slice(0, 10)}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">{row.over_score}</TableCell>
                                    <TableCell className={classes.tableCell} align="center">
                                        <IconButton
                                            disableRipple
                                            onClick={(e) => onExportEvent(row.id)}
                                        >
                                            <GetAppIcon/>
                                        </IconButton>
                                        <IconButton
                                            disableRipple
                                            onClick={(e) => onEventCopy(row.id)}
                                        >
                                            <FileCopyIcon/>
                                        </IconButton>
                                        <IconButton
                                            disableRipple
                                            onClick={(e) => setEditOpen(true)}
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton
                                            disableRipple
                                        >
                                            <DeleteOutlineIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                        :
                        <Typography variant="body1" className={classes.text}>У вас еще нет событий</Typography>
                }
            </div>
            <Modal
                open={createOpen}
                onClose={onCreateClose}
            >
                <AddEvent
                    add
                    onAddEvent={onAddEvent}
                    onClose={onCreateClose}
                />
            </Modal>

            <Modal
                open={editOpen}
                onClose={onEditClose}
            >
                <AddEvent
                    onAddEvent={onAddEvent}
                    onClose={onEditClose}
                />
            </Modal>
        </div>
    );
}

export default EventPage;