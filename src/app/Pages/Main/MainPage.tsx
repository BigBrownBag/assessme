import React from 'react';
import {Avatar, IconButton, InputAdornment, List, ListItem, makeStyles, Typography, ListSubheader} from "@material-ui/core";
import withLayout from "../../HOC/withLayout";
import { FullscreenExitTwoTone } from '@material-ui/icons';
import avatars from '../../../img/avatars.svg' 
import notif from '../../../img/notif.svg' 
import problem from '../../../img/problem.svg' 
import Paper from '@material-ui/core/Paper';
import ShowRating from "../../components/ShowRating";
import {useHistory} from "react-router-dom";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
  LineSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

  interface SearchData {
        name: string;
        surname:string;
        role: string;
        rating: string;
        avatar: string;
    }

  const testData: SearchData[] = [
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

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '70%'
    },
    right: {
        width: '30%'
    },
    notifications: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#9E9E9E',
        border: '1px solid #2196F3',
        borderRadius: '32px 32px 32px 32px',
    },
    notificationsImg: {},
    notificationsValue: {},
    notificationsTitle: {},
    widjets: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    statistics: {
        //height: '248px',
    },
    paper: {
    },
    rowList: {
        padding: 0
    },
    avatarWrapp: {
        height: '100%',
        //padding: '0px 25px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        width: 98,
        height: 98
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
    infoWrapp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '16px 0'
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
    ratingWrapp: {
        height: '100%',
        //padding: '0px 25px',
        display: 'flex',
        alignItems: 'center'
    },
}))

export interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
    const classes = useStyles()
    const history = useHistory()
    const data = testData
    const chartData  = [
        { titleDay: 'Пн', countScore: 2 },
        { titleDay: 'Вт', countScore: 6 },
        { titleDay: 'Ср', countScore: 2 },
        { titleDay: 'Чт', countScore: 4},
        { titleDay: 'Пт', countScore: 5 },
        { titleDay: 'Сб', countScore: 6},
        { titleDay: 'Вс', countScore: 6},
      ];
    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <div className={classes.widjets}>
                    <div className={classes.notifications}>
                        <div className={classes.notificationsImg}>
                            <img src={avatars} /> 
                        </div>
                        <div className={classes.notificationsValue}>8</div>
                        <div className={classes.notificationsTitle}>Оценивших</div>
                    </div>
                    <div className={classes.notifications}>
                        <div className={classes.notificationsImg}>
                            <img src={notif} /> 
                        </div>
                        <div className={classes.notificationsValue}>2</div>
                        <div className={classes.notificationsTitle}>Уведомления</div>
                    </div>
                    <div className={classes.notifications}>
                        <div className={classes.notificationsImg}>
                            <img src={problem} /> 
                        </div>
                        <div className={classes.notificationsTitle}>Сообщить о проблеме</div>
                    </div>
                </div>
                <Paper>
                    <Chart
                    data={chartData}
                    >
                    <ArgumentAxis />
                    <ValueAxis />

                    <LineSeries
                        name="line"
                        valueField="countScore"
                        argumentField="titleDay"
                    />
                    <SplineSeries
                        name="spline"
                        valueField="countScore"
                        argumentField="titleDay"
                    />
                    </Chart>
                </Paper>
            </div>
            <div className={classes.right}>
                <div className={classes.statistics}>
                    <Paper>
                        <Chart
                        data={chartData}
                        height={200}
                        >
                        <ArgumentAxis />

                        <BarSeries
                            valueField="countScore"
                            argumentField="titleDay"
                        />
                        <Title
                            text="Статистика оценок (по дням недели)"
                        />
                        <EventTracker />
                        <Tooltip />
                        </Chart>
                    </Paper>
                </div> 
                <List className={classes.rowList}>
                        <ListSubheader component="div" id="nested-list-subheader">
                        Последние оценки
                        </ListSubheader>
                        {data.map((item, idx) => (
                            <ListItem
                                className={classes.rowData}
                                onClick={(event) => history.push('/profile/1')}
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

export default withLayout(MainPage);