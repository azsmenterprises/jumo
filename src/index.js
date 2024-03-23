import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AdminApp from "./admin/AdminApp";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";

const Error404Modern = lazy(() => import("./admin/pages/error/404-modern"));

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Suspense fallback={<div />}>
        <Switch>
          <AuthLayout>
            <AdminLayout>
              <Route path="/panel*" component={AdminApp} />
            </AdminLayout>
            {/* panel routes end*/}
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404Modern /> : <App />)} />
          </AuthLayout>
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
