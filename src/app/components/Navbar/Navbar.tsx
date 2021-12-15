import React from 'react';
import {Avatar, Button, Drawer, List, ListItem, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {User} from "../../../utils/interface";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: 256
    },
    logoWrapper: {
        height: 105,
        background: '#2196F3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontSize: 48,
        fontFamily: '"Reenie Beanie"',
        color: '#FFF'
    },
    avatarWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 200,
        width: '100%'
    },
    avatar: {
        width: 98,
        height: 98
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
    },
    link: {
        '&:hover': {
            background: '#E3F2FD',
            '& $icon': {
                color: '#2196F3'
            },
            '& $title': {
                color: '#2196F3'
            }
        }
    },
    avatarTitle: {
        marginTop: 12,
        fontWeight: 500,
        fontSize: 16
    },
    btn: {}
}))

export interface NavbarProps {
    user: User | null;
    isAuth: boolean;
    onLogout: () => void;
}

interface Lnk {
    title: string;
    icon: string;
    to: string;
    admin: boolean;
}

const links: Lnk[] = [
    {
        title: 'Профиль',
        icon: 'people',
        to: '/',
        admin: false
    },
    {
        title: 'Поиск',
        icon: 'search',
        to: '/search',
        admin: false
    },
    // {
    //     title: 'Изменить критерии',
    //     icon: 'event_note',
    //     to: '/',
    //     admin: true
    // },
    {
        title: 'События',
        icon: 'event',
        to: '/event',
        admin: false
    },
    {
        title: 'Моя организация',
        icon: 'home',
        to: '/organization',
        admin: true
    },
    {
        title: 'Настройки',
        icon: 'settings',
        to: '/settings',
        admin: false
    },
    // {
    //     title: 'Уведомления',
    //     icon: 'notifications',
    //     to: '/',
    //     admin: false
    // },
    {
        title: 'Выйти',
        icon: 'logout',
        to: '/logout',
        admin: false
    },
    {
        title: 'Виджет',
        icon: 'logout',
        to: '/widjet',
        admin: false
    }
];

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const classes = useStyles()
    const { user, onLogout, isAuth } = props

    return (
        <Drawer
            anchor='left'
            open={true}
            variant='permanent'
        >
            <div className={classes.wrapper}>
                <div className={classes.logoWrapper}>
                    <div className={classes.logo}>
                        Assessme
                    </div>
                </div>

                {isAuth ?
                    <>
                        <div className={classes.avatarWrapper}>
                            <Avatar alt="Remy Sharp" src={user?.avatar_url} className={classes.avatar}/>

                            <Typography className={classes.avatarTitle}>{`${user?.firstname} ${user?.surname}`}</Typography>
                        </div>

                        <List>
                            { links.map((item, idx) => (
                                    <ListItem key={idx} className={classes.link}>
                                        {item.to !== '/logout' ?
                                            <Link to={item.to} className="w-full flex flex-row">
                                                <span className={clsx("material-icons", "pr-4", classes.icon)}>
                                                    {item.icon}
                                                </span>
                                                <Typography variant="body1" className={classes.title}>{item.title}</Typography>
                                            </Link>
                                            :
                                            <Button
                                                onClick={event => onLogout()}
                                                className={classes.btn}
                                            >
                                                {item.title}
                                            </Button>
                                        }
                                    </ListItem>
                                )
                            )}
                        </List>
                    </>
                    :
                    <div>

                    </div>
                }
            </div>
        </Drawer>
    )
}

export default Navbar;