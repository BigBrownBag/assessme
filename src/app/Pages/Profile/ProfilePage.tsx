import React from 'react';
import {Avatar, Button, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import CustomButton from "../../components/CustomButton";
import {useHistory} from "react-router-dom";
import {Field} from "../Settings/SettingsPage";
import {BASE_URL} from "../../../utils/routes";
import withLayout from "../../HOC/withLayout";
import ShowRating from "../../components/ShowRating";

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
    },
    ratingWrapp: {
        height: 48,
        marginTop: 16,
        padding: '0px 25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}))

const fields: Field[] = [
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
    }
]

const ProfilePage: React.FC<any> = () => {
    const classes = useStyles()
    const history = useHistory()

    const handleProfileCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(BASE_URL + history.location.pathname)
    }

    const testUser: any = {
        name: 'Иван',
        role: 'Преподаватель',
        surname: 'Иванов',
        organization: 'Уральский федеральный университет имени первого Президента России Б. Н. Ельцина',
        email: 'IvanovUrfu@ivan.me',
        rating: 5.5
    }

    return(
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.header}><Typography className={classes.name}>{`${testUser.name} ${testUser.surname}`}</Typography></div>
                <div className={classes.body}>
                    <div className={classes.avatarWrapper}>
                        <Avatar alt={`${testUser.name} ${testUser.surname}`} src="https://v4.mui.com/static/images/avatar/2.jpg" className={classes.avatar}/>
                        <Button
                            className={classes.photoBtn}
                            onClick={handleProfileCopy}
                            disableRipple
                        >
                            Копировать профиль
                        </Button>

                        <div className={classes.ratingWrapp}>
                            <ShowRating
                                value={+testUser.rating}
                            />
                        </div>
                    </div>

                    <div className={classes.fieldList}>
                        <List>
                            {fields.map((item, idx) => (
                                <ListItem className={classes.field} key={idx}>
                                    <Typography className={classes.filedTitle}>{item.field}</Typography>
                                    <Typography className={classes.fieldDesc}>{testUser[item.fieldProperty]}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>

                <div className={classes.btnGroup}>
                    <div className="flex">
                        <CustomButton
                            className={classes.btn}
                            onClick={(event) => history.goBack()}
                        >
                            Назад
                        </CustomButton>
                        <CustomButton
                            onClick={(event) => history.push('/rate')}
                        >
                            Оценить
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLayout(ProfilePage)