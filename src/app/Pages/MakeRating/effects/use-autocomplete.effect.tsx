import React, {SetStateAction, useState} from 'react';

export interface Subject {
    title: string;
    date: string;
}

interface Autocomplete {
    open: boolean;
    pending: boolean;
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
    const [pending, setPending] = useState<boolean>(true)
    const [options, setOptions] = useState<Subject[]>(subjects)

    setTimeout(() => {
        setPending(false)
        setOptions(subjects)
    }, 2000)

    return {
        open,
        pending,
        options,
        setOpen
    }
}