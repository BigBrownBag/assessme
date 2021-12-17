import {useCallback, useEffect, useState} from "react";
import DataRepository from "../DataRepository";
import {User} from "../../utils/interface";
import {useHistory} from "react-router-dom";

export interface AuthParams {
    username: string;
    password: string;
}

interface Auth {
    isAuth: boolean;
    error: boolean;
    userData: User | null;
    onLogout: () => void;
    onLogin: (params: AuthParams) => void;
    onRegistration: (body: RegistrationForm) => void;
    onPasswordForget: (email: string) => void;
}

export interface RegistrationForm {
    surname: string;
    firstname: string;
    email: string;
    username: string;
    password: string;
    repeatPassword: string;
}

const USER_DATA: string = 'userData'

export default function getHeader() {
    const token = JSON.parse(localStorage.getItem(USER_DATA) || '').token;

    if (token) {
        return { headers: { Authorization: 'Bearer ' + token } }
    } else {
        return {}
    }
}

export const useAuth = (params: AuthParams): Auth => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [userData, setUserData] = useState<User | null>(null)
    const [error, setError] = useState<boolean>(false)
    const history = useHistory()
    const userSettings: any = localStorage.getItem(USER_DATA)

    useEffect(() => {
        if (userSettings) {
            setIsAuth(true)
            const id = JSON.parse(userSettings)?.id

            DataRepository.get(
                `user/${id}`,
                {},
                getHeader()
            )
                .then((res) => {
                    const data = res.data
                    setIsAuth(true)
                    setUserData(data)
                    console.log(history)
                })
                .catch(err => setError(true))
        }
    }, [isAuth])

    const onLogin = useCallback((body: AuthParams) => {
        DataRepository.post(
            'signin',
            {...body}
        )
            .then(res => {
                if (res.data) {
                    localStorage.setItem(USER_DATA, JSON.stringify(res.data))
                }
                setIsAuth(true)
            })
    }, [])

    const onLogout= () => {
        localStorage.removeItem(USER_DATA)
        setIsAuth(false)
        history.push('/login')
    }

    const onRegistration = useCallback((body: RegistrationForm) => {
        DataRepository.post(
            'signup',
            {
                surname: body.surname,
                firstname: body.firstname,
                middlename: '',
                email: body.email,
                username: body.username,
                password: body.password
            }
        )
            .then(res => {
                if (res.data) {
                    localStorage.setItem(USER_DATA, JSON.stringify(res.data))
                }
                setIsAuth(true)
            })
    }, [])

    const onPasswordForget = useCallback((email: string) => {

    }, [])

    return {
        isAuth,
        userData,
        error,
        onLogout,
        onLogin,
        onRegistration,
        onPasswordForget
    }
}
