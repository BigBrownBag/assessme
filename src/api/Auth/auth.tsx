import {useCallback, useEffect, useState} from "react";
import DataRepository from "../DataRepository";
import {User} from "../../utils/interface";

export interface AuthParams {
    login: string;
    password: string;
}

interface Auth {
    isAuth: boolean;
    error: boolean;
    userData: User | null;
    onAuth: (params: AuthParams) => void;
    onRegistration: (body: RegistrationForm) => void;
}

export interface RegistrationForm {
    surname: string;
    firstname: string;
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}

export const useAuth = (params: AuthParams): Auth => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [userData, setUserData] = useState<User | null>(null)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        DataRepository.get(
            'signin',
            {
                username: params.login,
                password: params.password
            }
        )
            .then((res) => {
                const data = res.data
                setIsAuth(true)
                setUserData(data)
            })
            .catch(err => setError(true))
    }, [])

    const onAuth = useCallback((body: AuthParams) => {
        DataRepository.post(
            'signin',
            {...body}
        )
            .then(res => {
                console.log(res)
                setIsAuth(true)
            })
    }, [])

    const onRegistration = useCallback((body: RegistrationForm) => {
        DataRepository.post(
            'signup',
            {
                surname: body.surname,
                firstname: body.firstname,
                email: body.email,
                username: body.username,
                password: body.password
            }
        )
            .then(res => console.log(res))
    }, [])

    const onPasswordForget = useCallback((email: string) => {

    }, [])

    return {
        isAuth,
        userData,
        error,
        onAuth,
        onRegistration
    }
}
