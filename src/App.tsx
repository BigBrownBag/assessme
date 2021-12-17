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
import WidjetPage from './app/Pages/Widjet';

const App = () => {
    const [state, setState] = useState<{ username: string; password: string; }>({username: '', password: ''})
    const {isAuth, userData, onRegistration, onLogin, onLogout, error} = useAuth({...state})

    return (
        <LayoutPage isAuth={isAuth} userData={userData} onLogout={onLogout}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={
                        isAuth ?
                        () => <MainPage userData={userData}/>
                        :
                        () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                    }
                />
                <Route
                    exact
                    path="/search"
                    component={
                        isAuth ?
                            () => <SearchPage/>
                            :
                            () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                    }
                />
                <Route
                    exact
                    path="/settings"
                    component={
                        isAuth ?
                            () => <SettingsPage userData={userData}/>
                            :
                            () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                    }
                />
                <Route
                    exact
                    path="/profile/:userId"
                    component={
                        isAuth ?
                            () => <ProfilePage/>
                            :
                            () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                    }
                />
                <Route
                    exact
                    path={["/rate/:userId", "/rate/:userId/:eventId"]}
                    component={
                        isAuth ?
                            () => <MakeRatingPage userId={userData?.id}/>
                            :
                            () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                    }
                />
                <Route
                    exact
                    path="/event"
                    component={
                        isAuth ?
                            () => <EventPage userId={userData?.id}/>
                            :
                            () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                    }
                />
                <Route
                    exact
                    path="/organization"
                    component={
                        isAuth ?
                            OrganizationPage
                            :
                            () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                    }
                />
                <Route
                    exact
                    path="/forget"
                    component={
                        !isAuth ?
                            () => <ForgetPage />
                            :
                            () => <MainPage userData={userData}/>
                    }
                />
                <Route
                    exact
                    path="/registration"
                    component={
                        !isAuth ?
                            () => <Registration onRegistration={onRegistration}/>
                            :
                            () => <MainPage userData={userData}/>
                    }
                />
                <Route
                    exact
                    path="/login"
                    component={
                        !isAuth ?
                            () => <Login state={state} onChange={(value) => setState(value)} onLogin={onLogin} error={error}/>
                            :
                            () => <MainPage userData={userData}/>
                    }
                />
                <Route path="/widjet/:id" component={WidjetPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </LayoutPage>
    )
}

export default App;
