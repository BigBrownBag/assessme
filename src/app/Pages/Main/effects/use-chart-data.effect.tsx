import {useEffect, useState} from 'react';
import DataRepository from "../../../../api/DataRepository";
import getHeader from "../../../../api/Auth/auth";

interface MonthChartDataParams {
    userId: string | number | undefined;
}

export interface ChartData {
    data: Data;
    error: boolean;
    monthPending: boolean;
    weekPending: boolean;
    ratesPending: boolean;
}

export interface WeekData {
    day: number;
    cnt: string;
}

export interface RatesData {
    id: number;
    rater: any;
    assessed: any;
    score: number;
    sphere_id: string;
    date: string;
}

interface Data {
    monthData: MonthData[] | null;
    weekData: WeekData[] | null;
    ratesData: RatesData[] | null;
}

interface MonthData {
    date: Date;
    score: number;
}

export const useChartData = (params: MonthChartDataParams): ChartData => {
    const [data, setData] = useState<Data>({ monthData: null, ratesData: null, weekData: null })
    const [monthPending, setMonthPending] = useState<boolean>(false)
    const [weekPending, setWeekPending] = useState<boolean>(false)
    const [ratesPending, setRatesPending] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (!params.userId) {
            return;
        }
        setMonthPending(true)
        setRatesPending(true)
        setWeekPending(true)

        DataRepository.get(
            `lastMonthRates/${params.userId}`,
            {},
            getHeader()
        )
            .then((res) => {
                const newData = res.data
                setData(d => ({ ...d, monthData: newData}))
            })
            .catch(err => setError(true))
            .finally(() => setMonthPending(false))

        DataRepository.get(
            `userRates/${params.userId}`,
            {},
            getHeader()
        )
            .then((res) => {
                const newData = res.data
                setData(d => ({ ...d, ratesData: newData}))
            })
            .catch(err => setError(true))
            .finally(() => setWeekPending(false))

        DataRepository.get(
            `scoresCountByDays/${params.userId}`,
            {},
            getHeader()
        )
            .then((res) => {
                const newData = res.data
                setData(d => ({ ...d, weekData: newData}))
            })
            .catch(err => setError(true))
            .finally(() => setRatesPending(false))
    }, [params.userId])

    return {
        data,
        error,
        monthPending,
        ratesPending,
        weekPending
    }
}