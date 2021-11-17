import React from 'react';
import {Drawer, List, ListItem, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import clsx from 'clsx';

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
        height: 140
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
    }
}))

export interface NavbarProps {
    user: any;
}

interface link {
    title: string;
    icon: string;
    to: string;
    admin: boolean;
}

const links: link[] = [
    {
        title: 'Профиль',
        icon: 'people',
        to: '/',
        admin: false
    },
    {
        title: 'Поиск',
        icon: 'search',
        to: '/',
        admin: false
    },
    {
        title: 'Изменить критерии',
        icon: 'event_note',
        to: '/',
        admin: true
    },
    {
        title: 'Настройки',
        icon: 'settings',
        to: '/settings',
        admin: false
    },
    {
        title: 'Уведомления',
        icon: 'notifications',
        to: '/',
        admin: false
    },
    {
        title: 'Выйти',
        icon: 'logout',
        to: '/',
        admin: false
    }
];

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const classes = useStyles()

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

                <div className={classes.avatarWrapper}>

                </div>

                <List>
                    { links.map((item, idx) => (
                        item.admin ?
                            props.user.admin && (
                                <ListItem key={idx} className={classes.link}>
                                    <Link to={item.to} className="w-full flex flex-row">
                                        <span className={clsx("material-icons", "pr-4", classes.icon)}>
                                            {item.icon}
                                        </span>
                                        <Typography variant="body1" className={classes.title}>{item.title}</Typography>
                                    </Link>
                                </ListItem>
                            )
                            :
                            (<ListItem key={idx} className={classes.link}>
                                <Link to={item.to} className="w-full flex flex-row">
                                        <span className={clsx("material-icons", "pr-4", classes.icon)}>
                                            {item.icon}
                                        </span>
                                    <Typography variant="body1" className={classes.title}>{item.title}</Typography>
                                </Link>
                            </ListItem>)
                        )
                    )}
                </List>
            </div>
        </Drawer>
    )
}

export default Navbar;