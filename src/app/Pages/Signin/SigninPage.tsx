import React, {useState} from 'react';
import {Box, Button, Container, makeStyles, Typography} from "@material-ui/core";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";
import {useHistory} from "react-router-dom";
import {AuthParams} from "../../../api/Auth/auth";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '80px 230px'
    },
    logoWrapper: {
        width: '100%',
        borderBottom: '1px solid #2196F3',
        height: 105,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontSize: 48,
        fontFamily: '"Reenie Beanie"',
        color: '#2196F3'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 64
    },
    btn: {
        marginTop: 32
    },
    secondaryBtn: {
        marginTop: 16,
        '&:hover': {
            background: 'rgba(33, 150, 243, 0.34)'
        }
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        marginBottom: 16
    }
}))

export interface LoginPageProps {
    error: string | null;
    state: { username: string; password: string; };
    onLogin: (params: AuthParams) => void;
    onChange: (value: { username: string; password: string; }) => void;
}

const defaultState: AuthParams = {username: '', password: ''}

const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps) => {
    const classes = useStyles()
    const history = useHistory()
    const [state, setState] = useState<AuthParams>(defaultState)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onLogin(state)
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const username = event.target.value
        setState(s => ({...s, username: username}))
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value
        setState(s => ({...s, password: password}))
    }

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <Box
                    className={classes.card}
                >
                    <div className={classes.logoWrapper}>
                        <div className={classes.logo}>
                            Assessme
                        </div>
                    </div>

                    {props.error && <Typography>Неправильное имя ползователя или пароль</Typography>}

                    <form onSubmit={handleSubmit} className={classes.form}>
                        <CustomTextField
                            className={classes.field}
                            required
                            fullWidth
                            id="username"
                            label="Логин"
                            autoComplete="username"
                            autoFocus
                            value={state.username}
                            onChange={handleLoginChange}
                        />
                        <CustomTextField
                            className={classes.field}
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={state.password}
                            onChange={handlePasswordChange}
                        />
                        <CustomButton
                            className={classes.btn}
                            type="submit"
                        >
                            Войти
                        </CustomButton>
                    </form>
                    <Button
                        className={classes.secondaryBtn}
                        disableRipple
                        onClick={() => history.push('/forget')}
                    >
                        Забыли пароль?
                    </Button>
                    <Button
                        className={classes.secondaryBtn}
                        disableRipple
                        onClick={() => history.push('/registration')}
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default LoginPage