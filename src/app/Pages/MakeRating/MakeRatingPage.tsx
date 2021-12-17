import {useState} from 'react';
import {Avatar, CircularProgress, makeStyles, Typography} from "@material-ui/core";
import CustomButton from "../../components/CustomButton";
import {useHistory, useParams} from "react-router-dom";
import ShowRating from "../../components/ShowRating";
import {Autocomplete, Rating} from "@material-ui/lab";
import clsx from "clsx";
import CustomTextField from "../../components/CustomTextField";
import {Subject, useAutocomplete} from "./effects/use-autocomplete.effect";
import {useRateData} from "./effects/use-rate-data.effect";
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
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
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
    btnGroup: {
        display: 'flex',
        width: '100%',
        justifyContent: 'right',
        padding: 32
    },
    btn: {
        marginRight: '16px !important'
    },
    primaryText: {
        fontSize: 16,
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.87)',
        marginTop: 16,
        maxWidth: 500,
        textAlign: 'center'
    },
    secondaryText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'rgba(119, 119, 119, 0.7)',
    },
    currentRating: {
        marginBottom: 32
    },
    ratingIcon: {
        marginTop: 16,
        '& .MuiRating-iconHover, .MuiRating-iconFilled': {
            color: 'rgba(33, 150, 243, 1)'
        }
    }
}))

interface MakeRatingProps {
    userId: number | undefined;
}

const MakeRatingPage: React.FC<any> = (props: MakeRatingProps) => {
    const classes = useStyles()
    const history = useHistory()
    const {userId} = useParams() as any
    const [valueRating, setValueRating] = useState<number | null>(0)
    const [currentSubject, setCurrentSubject] = useState<Subject | null>(null)
    const {data, loading, onMakeRate} = useRateData({userId: props.userId, eventId: userId})
    const {pending, options, open, setOpen} = useAutocomplete()

    const handleSend = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (valueRating && data) {
            onMakeRate(valueRating, data.id)
        }
    }

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.card}>
                    <div className={classes.header}><Typography className={classes.title}>Оценить</Typography></div>
                    <div className={classes.body}>
                        {loading ?
                            <Spinner
                                size={150}
                            />
                            :
                            <>
                                <div className={classes.avatarWrapper}>
                                    <Avatar alt={`${data?.firstname} ${data?.surname}`} src={data?.avatar_url} className={classes.avatar}/>
                                    <Typography className={classes.primaryText}>{`${data?.firstname} ${data?.surname}`}</Typography>
                                </div>
                                <ShowRating
                                    className={classes.currentRating}
                                    value={+(data?.over_score.toFixed(2) || 0)}
                                />
                                <Typography className={clsx('pt-4', classes.secondaryText)}>Оценить</Typography>
                                <Rating
                                    className={classes.ratingIcon}
                                    name="simple-controlled"
                                    size="large"
                                    max={5}
                                    value={valueRating}
                                    onChange={(event, newValue) => setValueRating(newValue)}
                                />
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
                                disabled={!valueRating}
                                onClick={handleSend}
                            >
                                Отправить
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeRatingPage