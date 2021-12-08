import React from 'react';
import {Avatar, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import withLayout from "../../HOC/withLayout";
import avatars from '../../../img/avatars.svg';
import notif from '../../../img/notif.svg';
import problem from '../../../img/problem.svg';
import ShowRating from "../../components/ShowRating";
import {useHistory} from "react-router-dom";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

export interface UserData {
    name: string;
    surname:string;
    role: string;
    rating: string;
    avatar: string;
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 32,
        height: '100%'
    },
    left: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        marginRight: 32
    },
    right: {
        height: '100%',
        width: 368
    },
    notifications: {
        display: 'flex',
        width: 156,
        height: 140,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#9E9E9E',
        border: '1px solid #2196F3',
        borderRadius: 32,
        padding: 24,
        "&:hover:not(:first-child)": {
            background: 'rgba(33, 150, 243, 0.34)',
            cursor: 'pointer'
        }
    },
    notificationsTitle: {
        fontSize: 14,
        maxWidth: 108,
        textAlign: "center",
        marginTop: 8
    },
    widjets: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statistics: {
        width: 368,
        border: '1px solid #2196F3',
        borderRadius: 32,
        padding: 24,
        marginBottom: 32
    },
    rowList: {
        border: '1px solid #2196F3',
        borderRadius: 32,
        padding: '24px 0 0',
    },
    avatarWrapp: {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        width: 48,
        height: 48
    },
    rowData: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 80,
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
    infoWrapp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '8px 0'
    },
    infoName: {
        fontWight: 500,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.87)'
    },
    infoRole: {
        fontWight: 400,
        fontSize: 12,
        color: 'rgba(119, 119, 119, 0.7)'
    },
    ratingWrapp: {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    statisticsTitle: {
        maxWidth: '85%',
        color: 'rgba(0, 0, 0, 0.24)',
        margin: 'auto',
        textAlign: 'center'
    },
    gradeChart: {
        border: '1px solid #2196F3',
        padding: 24,
        borderRadius: 32,
        marginTop: 64
    },
    myGrade: {
        border: '1px solid #2196F3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 32,
        padding: 24,
        marginTop: 64,
        height: 150
    }
}))

export interface MainPageProps {}

const chartDataWeek  = [
    { titleDay: 'Пн', countScore: 2 },
    { titleDay: 'Вт', countScore: 6 },
    { titleDay: 'Ср', countScore: 2 },
    { titleDay: 'Чт', countScore: 4 },
    { titleDay: 'Пт', countScore: 5 },
    { titleDay: 'Сб', countScore: 6 },
    { titleDay: 'Вс', countScore: 6 },
]
const chartDataMonth = [
    {title: 1, score: 3},
    {title: 4, score: 4},
    {title: 8, score: 5},
    {title: 13, score: 3},
    {title: 21, score: 4},
    {title: 23, score: 5},
    {title: 25, score: 3},
    {title: 26, score: 4},
    {title: 29, score: 3},
    {title: 30, score: 4},
    {title: 31, score: 5}
]
const testData: UserData[] = [
    {
        name: 'Mark',
        surname: 'Out',
        role: 'Студент',
        rating: '5.5',
        avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
    },
    {
        name: 'Boss',
        surname: 'Out',
        role: 'Студент',
        rating: '5.9',
        avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
    },
    {
        name: 'Flesh',
        surname: 'Out',
        role: 'Студент',
        rating: '5.1',
        avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
    },
    {
        name: 'Mark',
        surname: 'Out',
        role: 'Студент',
        rating: '5.5',
        avatar: 'https://www.artmajeur.com/medias/standard/d/r/drashti9593/artwork/13493657_par11.jpg?v=1595320722'
    },
]

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
    const classes = useStyles()
    const history = useHistory()

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <div className={classes.widjets}>
                    <div className={classes.notifications}>
                        <div>
                            <img src={avatars} alt="avatar"/>
                        </div>
                        <Typography>8</Typography>
                        <Typography className={classes.notificationsTitle}>Оценивших</Typography>
                    </div>
                    <div className={classes.notifications}>
                        <div>
                            <img src={notif} alt="notif"/>
                        </div>
                        <Typography>2</Typography>
                        <Typography className={classes.notificationsTitle}>Уведомления</Typography>
                    </div>
                    <div className={classes.notifications}>
                        <div>
                            <img src={problem} alt="problem"/>
                        </div>
                        <Typography className={classes.notificationsTitle}>Сообщить о проблеме</Typography>
                    </div>
                </div>
                <div className={classes.myGrade}>
                    <Typography className={classes.statisticsTitle}>Моя оценка (средняя)</Typography>
                    <ShowRating
                        value={5.5}
                    />
                </div>
                <div className={classes.gradeChart}>
                    <Typography className={classes.statisticsTitle}>Динамика оценки (за месяц)</Typography>
                    <Chart
                    data={chartDataMonth}
                    height={300}
                    >
                        <ArgumentAxis />
                        <ValueAxis />
                        <SplineSeries
                            name="spline"
                            valueField="score"
                            argumentField="title"
                        />
                    </Chart>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.statistics}>
                    <Typography className={classes.statisticsTitle}>Статистика оценок (по дням недели)</Typography>
                    <Chart
                    data={chartDataWeek}
                    height={166}
                    >
                        <ArgumentAxis />

                        <BarSeries
                            valueField="countScore"
                            argumentField="titleDay"
                        />
                    </Chart>
                </div> 
                <List className={classes.rowList}>
                    <Typography className={classes.statisticsTitle}>Последние оценки</Typography>
                    {testData.map((item, idx) => (
                        <ListItem
                            className={classes.rowData}
                            onClick={() => history.push('/profile/1')}
                            key={idx}
                        >
                            <div className={classes.avatarWrapp}>
                                <Avatar alt={`${item.name} ${item.surname}`} src={item.avatar} className={classes.avatar}/>
                            </div>
                            <div className={classes.infoWrapp}>
                                <Typography className={classes.infoName}>{`${item.name} ${item.surname}`}</Typography>
                                <Typography className={classes.infoRole}>{item.role}</Typography>
                            </div>
                            <div className={classes.ratingWrapp}>
                                <ShowRating
                                    size="small"
                                    value={+item.rating}
                                />
                            </div>
                        </ListItem>
                    ))}
                    </List>
            </div>
        </div>
    )
}

export default withLayout(MainPage)