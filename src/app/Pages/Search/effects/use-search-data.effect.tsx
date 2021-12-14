import {useEffect, useState} from 'react';
import DataRepository from "../../../../api/DataRepository";
import {abortController} from "../../../../utils/abort";
import {User} from "../../../../utils/interface";
import getHeader from "../../../../api/Auth/auth";

interface SearchData {
    data: User[];
    error: boolean;
    loading: boolean;
}

export const useSearchData = (): SearchData => {
    const [data, setData] = useState<User[]>([])
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const controller = abortController()
        setLoading(true)

        DataRepository.get(
            'users',
            {},
            getHeader()
        )
            .then(res => {
                const data = res.data
                setData(data);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        return () => controller.abort()
    }, [])

    return {
        data,
        error,
        loading
    }
}