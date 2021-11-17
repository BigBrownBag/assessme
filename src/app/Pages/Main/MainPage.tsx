import React from 'react';
import {makeStyles} from "@material-ui/core";
import withLayout from "../HOC/withLayout";

const useStyles = makeStyles(theme => ({
    root: {},
}))

export interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = (props: MainPageProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default withLayout(MainPage);