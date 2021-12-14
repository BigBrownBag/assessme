import React, {useState} from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";
import {RegistrationForm} from "../../../api/Auth/auth";

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
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        marginBottom: 32
    }
}))

export interface RegistrationProps {
    onRegistration: (body: any) => void;
}

const fields = [
    {
        id: 'surname',
        label: 'Фамилия',
        name: 'surname',
        autoComplete: 'surname',
        type: 'text'
    },
    {
        id: 'firstname',
        label: 'Имя',
        name: 'firstname',
        autoComplete: 'firstname',
        type: 'text'
    },
    {
        id: 'username',
        label: 'Логин',
        name: 'username',
        autoComplete: 'username',
        type: 'text'
    },
    {
        id: 'email',
        label: 'Email',
        name: 'email',
        autoComplete: 'email',
        type: 'email'
    },
    {
        id: 'password',
        label: 'Пароль',
        name: 'password',
        autoComplete: 'current-password',
        type: 'password'
    },
    {
        id: 'repeatPassword',
        label: 'Повторите пароль',
        name: 'repeatPassword',
        autoComplete: 'current-password',
        type: 'password'
    }
]

const defaultForm: RegistrationForm = {
    surname: '',
    firstname: '',
    email: '',
    password: '',
    repeatPassword: '',
    username: ''
}

export const RegistrationPage: React.FC<RegistrationProps> = (props: RegistrationProps) => {
    const classes = useStyles()
    const [form, setForm] = useState<RegistrationForm>(defaultForm);
    const [error, setError] = useState<boolean>(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(form.password, form.repeatPassword)
        if (form.password === form.repeatPassword) {
            props.onRegistration(form)
        } else {
            setError(true)
        }
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

                    <form onSubmit={handleSubmit} className={classes.form}>
                        {fields.map((field, idx) => (
                            <CustomTextField
                                key={idx}
                                className={classes.field}
                                required
                                fullWidth
                                id={field.id}
                                label={field.label}
                                name={field.name}
                                value={form[field.name as keyof RegistrationForm]}
                                onChange={(event) => setForm(f => ({...f, [field.name]: event.target.value}))}
                                autoComplete={field.autoComplete}
                                autoFocus={idx === 0}
                                type={field.type}
                                error={field.type === 'password' ? error : false}
                            />
                        ))}
                        <CustomButton
                            className={classes.btn}
                            type="submit"
                        >
                            Зарегестрироваться
                        </CustomButton>
                    </form>
                </Box>
            </Container>
        </div>
    )
}

export default RegistrationPage;