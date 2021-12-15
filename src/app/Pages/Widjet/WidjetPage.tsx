import React, {useEffect, useState} from 'react';
import {Avatar, IconButton, InputAdornment, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import {useProfileData} from "./effects/use-profile-data.effect";
import {User} from "../../../utils/interface";
import {useHistory, useParams} from "react-router-dom";
import Spinner from "../../components/Spinner";
import ShowRating from "../../components/ShowRating";
import CustomButton from "../../components/CustomButton";

const useStyles = makeStyles(theme => ({
    root: {},
    widjet: {
        display: 'flex',
        width: 193,
        height: 280,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#9E9E9E',
        border: '1px solid #2196F3',
        borderRadius: 32,
        padding: 24,
        "&:hover:not(:first-child)": {
            background: 'rgba(33, 150, 243, 0.34)',
            cursor: 'pointer'
        }
    },
    header: {
        fontSize: 18,
        maxWidth: 108,
        textAlign: "center",
        marginTop: 8,
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.87)'
    },
    org: {
        fontSize: 14,
        maxWidth: 108,
        textAlign: "center",
        marginTop: 8
    },
    avatar: {
        width: 70,
        height: 70,
    },
    ratingWrapp: {
        height: 48,
        marginTop: 8,
        padding: '0px 25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}))

const WidjetPage: React.FC<any> = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const params = useParams() as any
    const {error, loading, data: userData} = useProfileData({ id: params['id'] })
    const [data, setData] = useState<User>()

    useEffect(() => {
        if (userData) {
            setData(userData)
        }
    }, [userData])

    if (error) {
        return <div></div>
    }

    return (
        <div  className={classes.root}>
            {loading ?
                <Spinner
                size={200}
                thickness={3}
            />
            :
            <>
                <div className={classes.widjet}>
                            <Avatar alt={`${data?.firstname} ${data?.surname}`} src={data?.avatar_url} className={classes.avatar}/>
                            <Typography className={classes.header}>{`${data?.firstname || ''} ${data?.surname || ''}`}</Typography>
                            <Typography className={classes.org}>{`${data?.org || '-'}`}</Typography>
                            <div className={classes.ratingWrapp}>
                                    <ShowRating
                                        value={+(data?.over_score || 0)}
                                    />
                            </div>
                            <CustomButton
                            onClick={(event) => history.push(`/rate/${params['id']}`)}
                            >
                                Оценить
                            </CustomButton>
                </div>
            </>
            }
        </div>
    )
}

export default WidjetPage
