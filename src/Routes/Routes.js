/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import AdminPage from "../pages/admin/AdminPageContainer";
import LoginPage from "../pages/login/LoginPageContainer";
import UserPage from "../pages/user/UserPageContainer";
import AuthorBook from '../pages/admin/authorBooks/AuthorBookContainer';

export default () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route path="/author/:id" component={AuthorBook} />
          <Route path="/user" component={UserPage} />
          <Route path="/author" component={AdminPage} />
          <Route path="/" component={LoginPage} />

        </Switch>
      </App>
    </Router>
  );
};
