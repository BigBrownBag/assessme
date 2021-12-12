import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./app/Pages/Main/MainPage";
import SettingsPage from "./app/Pages/Settings";
import SearchPage from "./app/Pages/Search";
import ProfilePage from "./app/Pages/Profile";
import MakeRatingPage from "./app/Pages/MakeRating";
import LayoutPage from "./app/LayoutPage";

const App = () => {


    return (
        <LayoutPage>
            <Switch>
                <Route exact path="/" component={() => <MainPage userId={6}/>}/>
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/settings" component={() => <SettingsPage userId={6}/>} />
                <Route exact path="/profile/:userId" component={ProfilePage} />
                <Route exact path="/rate" component={MakeRatingPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </LayoutPage>
    )
}

export default App;
