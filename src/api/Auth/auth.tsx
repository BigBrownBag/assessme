import {useCallback, useEffect, useState} from "react";
import DataRepository from "../DataRepository";
import {User} from "../../utils/interface";

interface AuthParams {
    login: string;
    password: string;
}

interface Auth {
    isAuth: boolean;
    error: boolean;
    userData: User | null;
    onRegistration: (body: any) => void;
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
    }, [params])

    const onRegistration = useCallback((body: any) => {
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
    }, [])

    const onPasswordForget = useCallback((email: string) => {

    }, [])

    return {
        isAuth,
        userData,
        error,
        onRegistration
    }
}
