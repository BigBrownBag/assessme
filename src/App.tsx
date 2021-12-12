import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./app/Pages/Main/MainPage";
import SettingsPage from "./app/Pages/Settings";
import SearchPage from "./app/Pages/Search";
import ProfilePage from "./app/Pages/Profile";
import MakeRatingPage from "./app/Pages/MakeRating";
import LayoutPage from "./app/LayoutPage";
import SigninPage from './app/Pages/Signin';
import SignupPage from './app/Pages/Signup';
import ForgetPassPage from './app/Pages/ForgetPass';
import EventPage from './app/Pages/Event/EventPage';
import OrganizationPage from './app/Pages/Organization';

const App = () => {


    return (
        <LayoutPage>
            <Switch>
                <Route exact path="/" component={() => <MainPage userId={6}/>}/>
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/settings" component={() => <SettingsPage userId={6}/>} />
                <Route exact path="/profile/:userId" component={ProfilePage} />
                <Route exact path="/rate" component={MakeRatingPage} />
                <Route exact path="/signin" component={SigninPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/forgetPass" component={ForgetPassPage} />
                <Route exact path="/event" component={EventPage} />
                <Route exact path="/organization" component={OrganizationPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </LayoutPage>
    )
}

export default App;
