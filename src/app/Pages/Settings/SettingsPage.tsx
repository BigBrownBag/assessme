import React, {useState} from 'react';
import {Avatar, Button, List, ListItem, makeStyles, TextField, Typography} from "@material-ui/core";
import withLayout from "../../HOC/withLayout";
import CustomButton from "../../components/CustomButton";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '80px 230px'
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 230,
        width: 220
    },
    avatar: {
        width: 128,
        height: 128
    },
    photoBtn: {
        marginTop: 16,
        '&:hover': {
            background: 'rgba(33, 150, 243, 0.34)'
        }
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16,
        alignItems: 'start'
    },
    filedTitle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'rgba(119, 119, 119, 0.7)',
        marginBottom: 16,
    },
    fieldDesc: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: 16,
        textAlign: 'start',
        width: 300,
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.87)',
        '&:first-letter': {
            textTransform: 'capitalize'
        }
    },
    fieldList: {
        width: 300
    },
    btnGroup: {
        display: 'flex',
        width: '100%',
        justifyContent: 'right',
        padding: 32
    },
    btn: {
        marginRight: '16px !important'
    }
}))

export interface SettingsPageProps {}

type field = { field: string, fieldProperty: string }

const fields: field[] = [
    {
        field: 'Имя',
        fieldProperty: 'name'
    },
    {
        field: 'Фамилия',
        fieldProperty: 'surname'
    },
    {
        field: 'Email',
        fieldProperty: 'email'
    },
    {
        field: 'Роль',
        fieldProperty: 'role'
    },
    {
        field: 'Организация',
        fieldProperty: 'organization'
    },
    {
        field: 'Разрешeния',
        fieldProperty: 'permissions'
    }
]

export const SettingsPage: React.FC<SettingsPageProps> = (props: SettingsPageProps) => {
    const classes = useStyles()
    const [editMode, setEditMode] = useState<boolean>(false)

    const testUser: any = {
        name: 'Иван',
        role: 'Преподаватель',
        surname: 'Иванов',
        organization: 'Уральский федеральный университет имени первого Президента России Б. Н. Ельцина',
        email: 'IvanovUrfu@ivan.me',
        permissions: 'пользователь',
    }

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.header}><Typography className={classes.name}>Настройки</Typography></div>
                <div className={classes.body}>
                    <div className={classes.avatarWrapper}>
                        <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/2.jpg" className={classes.avatar}/>
                        <Button
                            className={classes.photoBtn}
                            disableRipple
                        >
                            Изменить фото
                        </Button>
                    </div>

                    <List className={classes.fieldList}>
                        {fields.map((item, idx) => (
                            <ListItem className={classes.field}>
                                <Typography className={classes.filedTitle}>{item.field}</Typography>
                                {editMode ?
                                    <TextField
                                        fullWidth
                                    />
                                    :
                                    <Typography className={classes.fieldDesc}>{testUser[item.fieldProperty]}</Typography>
                                }
                            </ListItem>
                        ))}
                    </List>
                </div>

                <div className={classes.btnGroup}>
                    <div className="flex">
                        {editMode ?
                            <>
                                <CustomButton
                                    className={classes.btn}
                                    onClick={(event) => {
                                        setEditMode(false);
                                    }}
                                >
                                    Отменить
                                </CustomButton>
                                <CustomButton
                                    onClick={(event) => {
                                        setEditMode(false);
                                    }}
                                >
                                    Сохранить
                                </CustomButton>
                            </>
                            :
                            <CustomButton
                                onClick={(event) => {
                                    setEditMode(true);
                                }}
                            >
                                Изменить
                            </CustomButton>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLayout(SettingsPage);