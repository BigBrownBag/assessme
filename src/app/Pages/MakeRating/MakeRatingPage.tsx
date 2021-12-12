import React, {useState} from 'react';
import {Avatar, CircularProgress, makeStyles, Typography} from "@material-ui/core";
import CustomButton from "../../components/CustomButton";
import {useHistory} from "react-router-dom";
import ShowRating from "../../components/ShowRating";
import {Autocomplete, Rating} from "@material-ui/lab";
import clsx from "clsx";
import CustomTextField from "../../components/CustomTextField";
import {Subject, useAutocomplete} from "./effects/use-autocomplete.effect";

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

const MakeRatingPage: React.FC<any> = () => {
    const classes = useStyles()
    const history = useHistory()
    const [valueRating, setValueRating] = useState<number | null>(0)
    const [currentSubject, setCurrentSubject] = useState<Subject | null>(null)
    const {loading, options, open, setOpen} = useAutocomplete()

    const testUser: any = {
        name: 'Иван',
        role: 'Преподаватель',
        surname: 'Иванов',
        rating: 5.5
    }

    const handleSend = (event: React.MouseEvent<HTMLButtonElement>) => {}

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.card}>
                    <div className={classes.header}><Typography className={classes.title}>Оценить</Typography></div>
                    <div className={classes.body}>
                        <div className={classes.avatarWrapper}>
                            <Avatar alt={`${testUser.name} ${testUser.surname}`} src="https://v4.mui.com/static/images/avatar/2.jpg" className={classes.avatar}/>
                            <Typography className={classes.primaryText}>{`${testUser.name} ${testUser.surname}`}</Typography>
                        </div>
                        <ShowRating
                            className={classes.currentRating}
                            value={+testUser.rating}
                        />
                        <Autocomplete
                            id="combo-box"
                            style={{width: 400}}
                            options={options}
                            open={open}
                            onOpen={() => {
                                setOpen(true);
                            }}
                            onClose={() => {
                                setOpen(false);
                            }}
                            noOptionsText='Нет доступных вариантов'
                            onChange={(event, option) => setCurrentSubject(option)}
                            getOptionLabel={(option) => option.title}
                            getOptionSelected={(option, value) => option.title === value.title}
                            loading={loading}
                            renderInput={(params) =>
                                <CustomTextField
                                    {...params}
                                    label="Событие"
                                    variant="standard"
                                    required={true}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment:
                                            <>
                                                {loading ? <CircularProgress color="inherit" size={20}/> : params.InputProps.endAdornment}
                                            </>
                                    }}
                                />
                            }
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