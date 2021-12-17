import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./app/Pages/Main/MainPage";
import SettingsPage from "./app/Pages/Settings";
import SearchPage from "./app/Pages/Search";
import ProfilePage from "./app/Pages/Profile";
import MakeRatingPage from "./app/Pages/MakeRating";
import LayoutPage from "./app/LayoutPage";
import Login from './app/Pages/Signin';
import Registration from './app/Pages/Signup';
import ForgetPage from './app/Pages/ForgetPass';
import EventPage from './app/Pages/Event/EventPage';
import OrganizationPage from './app/Pages/Organization';
import {useAuth} from "./api/Auth/auth";

const App = () => {
    const [state, setState] = useState<{ username: string; password: string; }>({username: '', password: ''})
    const {isAuth, userData, onRegistration, onLogin, onLogout} = useAuth({...state})

    return (
        <LayoutPage isAuth={isAuth} userData={userData} onLogout={onLogout}>
            <Switch>
                {isAuth ?
                    <>
                        <Route exact path="/"  component={() => <MainPage userData={userData}/>}/>
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/settings" component={() => <SettingsPage userData={userData}/>}/>
                        <Route exact path="/profile/:userId" component={ProfilePage} />
                        <Route exact path={["/rate", "/rate/:userId"]} component={() => <MakeRatingPage userId={userData?.id}/>} />
                        <Route exact path="/event" component={() => <EventPage userId={userData?.id}/>} />
                        <Route exact path="/organization" component={OrganizationPage} />
                        <Redirect from="*" to="/" />
                    </>
                    :
                    <>
                        <Route exact path="/forget" component={() => <ForgetPage />} />
                        <Route exact path="/registration" component={() => <Registration onRegistration={onRegistration}/>}/>
                        <Route exact path="/login" component={() => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin}/>}/>
                        <Redirect from="*" to="/login" />
                    </>
                }
            </Switch>
        </LayoutPage>
    )
}

export default App;
