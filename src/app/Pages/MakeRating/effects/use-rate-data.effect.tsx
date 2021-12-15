import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import DataRepository from "../../../../api/DataRepository";
import getHeader from "../../../../api/Auth/auth";
import {User} from "../../../../utils/interface";

interface RateDataParams {
    userId: string;
}

export interface RateData {
    data: User | null;
    loading: boolean;
    onMakeRate: (score: number, id: number) => void;
}

export const useRateData = (params: RateDataParams): RateData => {
    const history = useHistory()
    const [data, setData] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [syncTime, setSyncTime] = useState<number>()

    useEffect(() => {
        if (!params.userId) {
            return;
        }
        setLoading(true)

        DataRepository.get(
            `user/${params.userId}`,
            {},
            getHeader()
        )
            .then(res => {
                const data = res.data
                const newData = {
                    ...data,
                    org_title: data?.org?.title || null,
                    org_id: data?.org?.id || null,
                }
                setData(newData);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [params.userId, syncTime])

    const onMakeRate = useCallback((score: number, id: number) => {
        DataRepository.post(
            'rate',
            {
                assessed_id: id,
                score: score,
                rater_id: +params.userId
            },
            getHeader()
        )
            .then(res => {
                setSyncTime(Date.now())
                history.push(`/profile/${params.userId}`)
            })
    }, [setSyncTime, history.push])

    return {
        data,
        loading,
        onMakeRate
    }
}