import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {makeStyles} from "@material-ui/core";
import {useProfileData} from "../Pages/Profile/effects/use-profile-data.effect";
import {User} from "../../utils/interface";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    main: {
        marginLeft: 256,
        height: '100%'
    }
}))

export interface LayoutPageProps {
    children: any;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({children, ...otherProps}) => {
    const classes = useStyles()
    const {data} = useProfileData({id: "6"})
    const [userData, setUserData] = useState<User | null>(null)

    useEffect(() => {
        setUserData(data)
    }, [data])

    return (
        <div className={classes.root}>
            <Navbar
                user={userData}
            />

            <main className={classes.main}>
                {children}
            </main>

            <Footer/>
        </div>
    )
}

export default LayoutPage;