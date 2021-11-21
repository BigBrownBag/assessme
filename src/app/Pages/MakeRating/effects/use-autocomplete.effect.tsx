import React, {SetStateAction, useState} from 'react';

export interface Subject {
    title: string;
    date: string;
}

interface Autocomplete {
    open: boolean;
    loading: boolean;
    options: Subject[];
    setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const subjects: Subject[] = [
    {
        title: 'Вводное занятие в уральском федеральном университете имени первого президента России Б.Н. Ельцина',
        date: ''
    },
    {
        title: 'Вводное занятие в уральском федеральном университете имени первого президента России Б.Н. Ельцина',
        date: ''
    },
    {
        title: 'Вводное занятие в уральском федеральном университете имени первого президента России Б.Н. Ельцина',
        date: ''
    }
]

export const useAutocomplete = (): Autocomplete => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [options, setOptions] = useState<Subject[]>(subjects)

    setTimeout(() => {
        setLoading(false)
        setOptions(subjects)
    }, 2000)

    return {
        open,
        loading,
        options,
        setOpen
    }
}