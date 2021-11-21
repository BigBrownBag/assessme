import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./app/Pages/Main/MainPage";
import SettingsPage from "./app/Pages/Settings";
import SearchPage from "./app/Pages/Search";
import ProfilePage from "./app/Pages/Profile";
import MakeRatingPage from "./app/Pages/MakeRating";

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/profile/1" component={ProfilePage} />
        <Route exact path="/rate" component={MakeRatingPage} />
        <Redirect from="*" to="/" />
      </Switch>
  );
}

export default App;
