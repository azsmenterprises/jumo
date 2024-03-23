import React, { Suspense, lazy } from "react";
import "./assets/scss/dashlite.scss";
import "./assets/scss/style-email.scss";
import { Route, Switch } from 'react-router-dom';
import AdminApp from "./AdminApp";

const Error404Modern = lazy(() => import("./pages/error/404-modern"));

const Admin = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch basename={`/`}>
        <Route render={({ location }) => (location.state && location.state.is404 ? <Error404Modern /> : <AdminApp />)} />
      </Switch>
    </Suspense>
  );
}


export default Admin;