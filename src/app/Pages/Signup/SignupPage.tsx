import React from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";

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
        marginBottom: 16
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
        id: 'middlename',
        label: 'Отчество',
        name: 'middlename',
        autoComplete: 'middlename',
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
        id: 'passwordRepeat',
        label: 'Повторите пароль',
        name: 'passwordRepeat',
        autoComplete: 'current-password',
        type: 'password'
    }
]

export const RegistrationPage: React.FC<RegistrationProps> = (props: RegistrationProps) => {
    const classes = useStyles()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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

                    <form onSubmit={handleSubmit} noValidate className={classes.form}>
                        {fields.map((field, idx) => (
                            <CustomTextField
                                key={idx}
                                className={classes.field}
                                required
                                fullWidth
                                id={field.id}
                                label={field.label}
                                name={field.name}
                                autoComplete={field.autoComplete}
                                autoFocus={idx === 0}
                                type={field.type}
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