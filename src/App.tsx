import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from "./app/Pages/Main/MainPage";
import SettingsPage from "./app/Pages/Settings";

const App = () => {
  return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/settings" component={SettingsPage} />
        <Redirect from="*" to="/" />

      </Switch>
  );
}

export default App;
