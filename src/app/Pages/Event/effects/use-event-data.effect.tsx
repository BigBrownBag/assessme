import {useCallback, useEffect, useState} from "react";
import DataRepository from "../../../../api/DataRepository";
import getHeader from "../../../../api/Auth/auth";
import {Event} from '../../../../utils/interface'

interface EventDataParams {
    userId: string | number | undefined;
}

interface EventData {
    data: Event[] | undefined;
    loading: boolean;
    error: boolean;
    onAddEvent: (title: string, date: string) => void;
    onExportEvent: (eventId: number) => void;
}

export const useEventData = (params: EventDataParams): EventData => {
    const [data, setData] = useState<Event[]>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [syncTime, setSyncTime] = useState<number>()

    useEffect(() => {
        if (!params.userId) {
            return;
        }
        setLoading(true)

        DataRepository.get(
            `getEvents`,
            {},
            getHeader()
        )
            .then(res => {
                const newData = res.data
                setData(newData)
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }, [params.userId, syncTime])

    const onAddEvent = useCallback((title: string, date: string) => {
        DataRepository.post(
            `addEvent`,
            {
                title: title,
                date: date
            },
            getHeader()
        )
            .then(res => setSyncTime(Date.now()))
    }, [params.userId])

    const onExportEvent = (eventId: number) => {
        DataRepository.get(
            `exportEvent/${eventId}`,
            {},
            getHeader()
        )
    }

    return {
        data,
        loading,
        error,
        onAddEvent,
        onExportEvent
    }
}