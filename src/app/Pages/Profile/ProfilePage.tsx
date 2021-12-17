import React, {useEffect, useState} from 'react';
import {Avatar, Button, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import CustomButton from "../../components/CustomButton";
import {useHistory, useParams} from "react-router-dom";
import {Field} from "../Settings/SettingsPage";
import {BASE_URL} from "../../../api/DataRepository";
import ShowRating from "../../components/ShowRating";
import {useProfileData} from "./effects/use-profile-data.effect";
import {User} from "../../../utils/interface";
import Spinner from "../../components/Spinner";

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
        justifyContent: 'space-around',
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
        //height: 230,
        width: 220,
        padding: '64px 32px 0 0'
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
        fieldProperty: 'org_status'
    }
]

const ProfilePage: React.FC<any> = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const params = useParams() as any
    const {error, loading, data: userData} = useProfileData({ id: params['userId'] })
    const [data, setData] = useState<User>()

    useEffect(() => {
        if (userData) {
            setData(userData)
        }
    }, [userData])

    const handleProfileCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(BASE_URL + history.location.pathname)
    }

    if (error) {
        return <div></div>
    }

    return(
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.header}><Typography className={classes.name}>{`${data?.firstname || ''} ${data?.surname || ''}`}</Typography></div>
                <div className={classes.body}>
                    {loading ?
                        <Spinner
                            size={200}
                            thickness={3}
                        />
                        :
                        <>
                            <div className={classes.avatarWrapper}>
                                <Avatar alt={`${data?.firstname} ${data?.surname}`} src={data?.avatar_url} className={classes.avatar}/>
                                <Button
                                    className={classes.photoBtn}
                                    onClick={handleProfileCopy}
                                    disableRipple
                                >
                                    Копировать профиль
                                </Button>

                                <div className={classes.ratingWrapp}>
                                    <ShowRating
                                        value={+(data?.over_score || 0)}
                                    />
                                </div>
                            </div>

                            <div className={classes.fieldList}>
                                <List>
                                    {fields.map((item, idx) => (
                                        <ListItem className={classes.field} key={idx}>
                                            <Typography className={classes.filedTitle}>{item.field}</Typography>
                                            <Typography className={classes.fieldDesc}>{data?.[item.fieldProperty as keyof User]}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </>
                    }
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
                            onClick={(event) => history.push(`/rate`)}
                        >
                            Оценить
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage