import React from 'react';
import {makeStyles} from "@material-ui/core";
import withLayout from "../../HOC/withLayout";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomButton from "../../components/CustomButton";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


export interface EventPageProps {}
const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '100px',
        paddingLeft: '20px',
        paddingRight: '20px',
        height: '100%',
    },
    paper: {
        boxShadow: 'none !important',
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
}))

const columns = [
    { id: 'title', label: 'Название', minWidth: 170 },
    { id: 'date', label: 'Дата', minWidth: 100 },
    { id: 'score ', label: 'Оценка', minWidth: 100 },
    { id: 'btns', label: '', minWidth: 10 },
  ];
  
  const rows = [
      {title: 'Событие 1', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
      {title: 'Событие 2', date: '2021-01-01', score: 0, link: 'www', excel: 'trr' },
  ];

export const EventPage: React.FC<EventPageProps> = (props: EventPageProps) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleCloseEdit = () => {
        setEdit(false);
    };
    console.log(rows)
    return (
        <div className={classes.root}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавить событие</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Название события"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="date"
                    label="Дата"
                    type="date"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <CustomButton onClick={handleClose}>Отменить</CustomButton>
                <CustomButton onClick={handleClose}>Добавить</CustomButton>
                </DialogActions>
            </Dialog>

            <Dialog open={edit} onClose={handleCloseEdit}>
                <DialogTitle>Редактировать событие</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Название события"
                    type="text"
                    value="hello"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="date"
                    label="Дата"
                    type="date"
                    value="2020-01-01"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <CustomButton onClick={handleCloseEdit}>Отменить</CustomButton>
                <CustomButton onClick={handleCloseEdit}>Добавить</CustomButton>
                </DialogActions>
            </Dialog>

            <Paper className={classes.paper} sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 450 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        className={classes.tableCell} 
                        key={column.id}
                        align={'center'}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell className={classes.tableCell} align="center">{row.title}</TableCell>
                            <TableCell className={classes.tableCell} align="center">{row.date}</TableCell>
                            <TableCell className={classes.tableCell} align="center">{row.score}</TableCell>
                            <TableCell className={classes.tableCell} align="center">
                                <IconButton aria-label="download">
                                    <DownloadIcon/>
                                </IconButton>
                                <IconButton aria-label="copy">
                                    <CopyAllIcon/>
                                </IconButton>
                                <IconButton aria-label="edit" onClick={handleClickEdit}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>
            <div className={classes.btn}>
                <CustomButton onClick={handleClickOpen}>
                 Добавить событие
                </CustomButton>
            </div>
        </div>
    )
}

export default withLayout(EventPage);