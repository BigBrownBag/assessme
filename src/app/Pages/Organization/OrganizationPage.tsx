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
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton';

export interface OrganizationPageProps {}
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
    btnGroup: {
        display: 'flex',
        width: '100%',
        justifyContent: 'right',
        padding: 32
    },
    btn: {
        marginRight: '16px !important'
    },
}))

const columns = [
    { id: 'initials', label: 'ФИО сотрудника', minWidth: 170 },
    { id: 'role', label: 'Роль', minWidth: 100 },
    { id: 'score ', label: 'Оценка', minWidth: 100 },
    { id: 'btn ', label: '', minWidth: 20 },
  ];
  
  const rows = [
      {title: 'Лозинская Наталья Ярославовна', date: 'employee', score: 5},
      {title: 'Кондратов Павел Олегович', date: 'employee', score: 5},
  ];

export const OrganizationPage: React.FC<OrganizationPageProps> = (props: OrganizationPageProps) => {
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

    return (
        <div className={classes.root}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Отправить приглашение</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Почта сотрудника"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <CustomButton onClick={handleClose}>Отменить</CustomButton>
                <CustomButton onClick={handleClose}>Отправить</CustomButton>
                </DialogActions>
            </Dialog>

            <Dialog open={edit} onClose={handleCloseEdit}>
                <DialogTitle>Редактировать</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="initials"
                    label="ФИО сотрудника"
                    type="text"
                    value="Лозинская Наталья Ярославовна"
                    fullWidth
                    disabled={true}
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="role"
                    label="Роль"
                    type="text"
                    value="employee"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <CustomButton onClick={handleCloseEdit}>Отменить</CustomButton>
                <CustomButton onClick={handleCloseEdit}>Изменить</CustomButton>
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
                            <IconButton aria-label="edit" onClick={handleClickEdit}>
                                <EditIcon/>
                            </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>
            <div className={classes.btnGroup}>
                <CustomButton className={classes.btn} onClick={handleClickOpen}>
                 Отправить приглашение
                </CustomButton>
                <CustomButton>
                 Рейтинг
                </CustomButton>
            </div>
        </div>
    )
}

export default withLayout(OrganizationPage);