import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./app/Pages/Main/MainPage";
import SettingsPage from "./app/Pages/Settings";
import SearchPage from "./app/Pages/Search";
import ProfilePage from "./app/Pages/Profile";
import MakeRatingPage from "./app/Pages/MakeRating";
import SigninPage from './app/Pages/Signin';
import SignupPage from './app/Pages/Signup';
import ForgetPassPage from './app/Pages/ForgetPass';
import EventPage from './app/Pages/Event/EventPage';

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Route exact path="/profile/:userId" component={ProfilePage} />
        <Route exact path="/rate" component={MakeRatingPage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/forgetPass" component={ForgetPassPage} />
        <Route exact path="/event" component={EventPage} />
        <Redirect from="*" to="/" />
      </Switch>
  );
}

export default App;
