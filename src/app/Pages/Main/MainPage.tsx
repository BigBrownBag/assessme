import React, {useMemo} from 'react';
import {Avatar, List, ListItem, makeStyles, Typography, Button,} from "@material-ui/core";
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
import {useChartData} from "./effects/use-chart-data.effect";
import Spinner from "../../components/Spinner";
import {User} from "../../../utils/interface";
import {BASE_URL} from "../../../api/DataRepository";

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
    },
    myWidjet: {
        border: '1px solid #2196F3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 32,
        padding: 24,
        marginTop: 64,
        height: 150
    },
    photoBtn: {
        marginTop: 16,
        '&:hover': {
            background: 'rgba(33, 150, 243, 0.34)'
        }
    },
    code: {
        marginTop: 16,
    }
}))

export interface MainPageProps {
    userData: User | null;
}

enum Week {
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Вс'
}

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
    const classes = useStyles()
    const history = useHistory()
    const {userData} = props
    const {data, monthPending, weekPending} = useChartData({userId: userData?.id})

    const monthData = useMemo(() => {
        return data.monthData?.map(item => ({date: new Date(item.date).getDate(), score: item.score}))
    }, [data.monthData])

    const weekData = useMemo(() => {
        return data.weekData?.map(item => ({date: Week[item.day], cnt: item.cnt}))
    }, [data.weekData])

    const handleProfileCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText('<iframe src="' + window.location.href + 'widjet/' + userData?.id + '" width="193" height="280"></iframe>')
    }

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <div className={classes.widjets}>
                    <div className={classes.notifications}>
                        <div>
                            <img src={avatars} alt="avatar"/>
                        </div>
                        <Typography>{data.ratesData?.length || '-'}</Typography>
                        <Typography className={classes.notificationsTitle}>Оценок</Typography>
                    </div>
                    <div className={classes.notifications}>
                        <div>
                            <img src={notif} alt="notif"/>
                        </div>
                        <Typography>-</Typography>
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
                        value={+(userData?.over_score.toFixed(2) || 0)}
                    />
                </div>
                <div className={classes.gradeChart}>
                    <Typography className={classes.statisticsTitle}>Динамика оценки (за месяц)</Typography>
                    {monthPending ?
                        <Spinner
                            size={300}
                            thickness={3}
                        />
                        :
                        data.monthData ?
                            <Chart
                                data={monthData}
                                height={300}
                            >
                                <ArgumentAxis />
                                <ValueAxis />
                                <SplineSeries
                                    name="spline"
                                    valueField="score"
                                    argumentField="date"
                                />
                            </Chart>
                            :
                            <Typography className={classes.statisticsTitle}>Оценок еще нет</Typography>
                    }
                </div>
                <div className={classes.myWidjet}>
                    <Typography className={classes.statisticsTitle}>Код для встраивания виджета</Typography>
                    <Typography className={classes.code}>{'<iframe src="' + window.location.href + 'widjet/' + userData?.id + '" width="193" height="280"></iframe>'}</Typography>
                    <Button
                                    className={classes.photoBtn}
                                    onClick={handleProfileCopy}
                                    disableRipple
                                >
                                    Копировать код виджета
                                </Button>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.statistics}>
                    <Typography className={classes.statisticsTitle}>Статистика оценок (по дням недели)</Typography>
                    {weekPending ?
                        <Spinner
                            size={166}
                            thickness={3}
                        />
                        :
                        data.weekData ?
                            <Chart
                                data={weekData}
                                height={166}
                            >
                                <ArgumentAxis />
                                <BarSeries
                                    valueField="cnt"
                                    argumentField="date"
                                />
                            </Chart>
                            :
                            <Typography className={classes.statisticsTitle}>Оценок еще нет</Typography>
                    }
                </div> 
                <List className={classes.rowList}>
                    <Typography className={classes.statisticsTitle}>Последние оценки</Typography>
                    {data.ratesData ?
                        data.ratesData?.map((item, idx) => (
                        <ListItem
                            className={classes.rowData}
                            onClick={() => history.push(`/profile/${item.rater.id}`)}
                            key={idx}
                        >
                            <div className={classes.avatarWrapp}>
                                <Avatar alt={`${item.rater.firstname} ${item.rater.surname}`} src={item.rater.avatar_url} className={classes.avatar}/>
                            </div>
                            <div className={classes.infoWrapp}>
                                <Typography className={classes.infoName}>{`${item.rater.firstname} ${item.rater.surname}`}</Typography>
                                <Typography className={classes.infoRole}>{item.rater.org_status}</Typography>
                            </div>
                            <div className={classes.ratingWrapp}>
                                <ShowRating
                                    size="small"
                                    value={+item.score}
                                />
                            </div>
                        </ListItem>))
                        :
                        <Typography className={classes.statisticsTitle}>Оценок еще нет</Typography>
                    }
                    </List>
            </div>
        </div>
    )
}

export default MainPage