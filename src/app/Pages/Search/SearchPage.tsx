import React, {useEffect, useState} from 'react';
import {Avatar, IconButton, InputAdornment, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import CustomInput from "../../components/CustomInput";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ShowRating from "../../components/ShowRating";
import {useHistory} from "react-router-dom";
import {useSearchData} from "./effects/use-search-data.effect";
import {User} from "../../../utils/interface";
import Spinner from "../../components/Spinner";
import {orgStatus} from "../../../utils/dictOrgStatus";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '80px 230px'
    },
    card: {
        border: '1px solid #2196F3',
        borderRadius: '0px 0px 32px 32px',

    },
    headerWrapper: {
        height: 106,
        background: '#FFF',
        position: 'sticky',
        top: 0,
        zIndex: 10
    },
    header: {
        background: 'rgba(33, 150, 243, 0.64)',
        padding: '25px 32px',
    },
    body: {
    },
    inputIcon: {
        color: 'rgba(33, 150, 243, 1)',
    },
    rowData: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 130,
        borderBottom: '1px solid rgba(33, 150, 243, 1)',
        '&:last-child': {
            borderBottom: 'none',
            borderRadius: '0px 0px 28px 28px'
        },
        '&:hover': {
            background: 'rgba(33, 150, 243, 0.34)',
            cursor: 'pointer'
        }
    },
    avatarWrapp: {
        height: '100%',
        padding: '0px 25px',
        display: 'flex',
        alignItems: 'center'
    },
    infoWrapp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '16px 0',
        marginRight: 'auto',
        marginLeft: 20
    },
    ratingWrapp: {
        height: '100%',
        padding: '0px 25px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        width: 98,
        height: 98,
    },
    infoName: {
        fontWight: 500,
        fontSize: 24,
        color: 'rgba(0, 0, 0, 0.87)'
    },
    infoRole: {
        fontWight: 400,
        fontSize: 16,
        color: 'rgba(119, 119, 119, 0.7)'
    },
    rowList: {
        padding: 0
    },
    pending: {
        width: '100%',
        display: 'flex',
        justifyContent: "center"
    }
}))

const SearchPage: React.FC<any> = () => {
    const classes = useStyles()
    const history = useHistory()
    const [state, setState] = useState<User[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')
    const {data, error, loading} = useSearchData()

    useEffect(() => {
        setState(data)
    }, [data])

    const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        if (value) {
            setSearchTerm(value)
            setState(state.filter(item =>
                `${item.firstname} ${item.surname} ${item.org_status}`.toLowerCase().includes(value.toLowerCase())
            ))
        } else {
            setSearchTerm('')
            setState(data)
        }
    }

    const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearchTerm('')
        setState(data)
    }

    if (error) {
        return <div></div>
    }

    return (
        <div  className={classes.root}>
            <div className={classes.card}>
                <div className={classes.headerWrapper}>
                    <div className={classes.header}>
                        <CustomInput
                            fullWidth
                            value={searchTerm}
                            onChange={handleSearch}
                            InputProps={{
                                startAdornment:
                                    <InputAdornment position="start">
                                        <SearchIcon className={classes.inputIcon} fontSize="large"/>
                                    </InputAdornment>,
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleReset}
                                        >
                                            <CloseIcon className={classes.inputIcon} fontSize="large"/>
                                        </IconButton>
                                    </InputAdornment>
                            }}
                        />
                    </div>
                </div>
                <div className={classes.body}>
                    {loading ?
                        <div className={classes.pending}>
                            <Spinner
                                size={130}
                            />
                        </div>
                        :
                        <List className={classes.rowList}>
                            {state.map((item, idx) => (
                                <ListItem
                                    className={classes.rowData}
                                    onClick={(event) => history.push(`/profile/${item.id}`)}
                                    key={idx}
                                >
                                    <div className={classes.avatarWrapp}>
                                        <Avatar alt={`${item.firstname} ${item.surname}`} src={item.avatar_url} className={classes.avatar}/>
                                    </div>
                                    <div className={classes.infoWrapp}>
                                        <Typography className={classes.infoName}>{`${item.firstname} ${item.surname}`}</Typography>
                                        <Typography className={classes.infoRole}>{orgStatus.get(item.org_status)}</Typography>
                                    </div>
                                    <div className={classes.ratingWrapp}>
                                        <ShowRating
                                            value={+item.over_score.toFixed(2)}
                                        />
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
