import React from 'react';
import withLayout from "../../HOC/withLayout";
import {Avatar, IconButton, InputAdornment, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import CustomInput from "../../components/CustomInput";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ShowRating from "../../components/ShowRating";

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
        padding: '16px 0'
    },
    ratingWrapp: {
        height: '100%',
        padding: '0px 25px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        width: 98,
        height: 98
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
    }
}))

const SearchPage = () => {
    const classes = useStyles()

    const testData = [
        {
            name: 'Mark',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.5',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Boss',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.9',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Flesh',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.1',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Mark',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.5',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Boss',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.9',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Flesh',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.1',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Mark',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.5',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Boss',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.9',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Flesh',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.1',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Mark',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.5',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Boss',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.9',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
        {
            name: 'Flesh',
            surname: 'Out',
            role: 'Преподаватель',
            rating: '5.1',
            avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
        },
    ]

    return (
        <div  className={classes.root}>
            <div className={classes.card}>
                <div className={classes.headerWrapper}>
                    <div className={classes.header}>
                        <CustomInput
                            fullWidth
                            InputProps={{
                                startAdornment:
                                    <InputAdornment position="start">
                                        <SearchIcon className={classes.inputIcon} fontSize="large"/>
                                    </InputAdornment>,
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => {}}
                                        >
                                            <CloseIcon className={classes.inputIcon} fontSize="large"/>
                                        </IconButton>
                                    </InputAdornment>
                            }}
                        />
                    </div>
                </div>
                <div className={classes.body}>
                    <List className={classes.rowList}>
                        {testData.map((item, idx) => (
                            <ListItem className={classes.rowData} onClick={() => {console.log(1)}}>
                                <div className={classes.avatarWrapp}>
                                    <Avatar alt={`${item.name} ${item.surname}`} src={item.avatar} className={classes.avatar}/>
                                </div>
                                <div className={classes.infoWrapp}>
                                    <Typography className={classes.infoName}>{`${item.name} ${item.surname}`}</Typography>
                                    <Typography className={classes.infoRole}>{item.role}</Typography>
                                </div>
                                <div className={classes.ratingWrapp}>
                                    <ShowRating
                                        value={+item.rating}
                                    />
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    )
}

export default withLayout(SearchPage)
