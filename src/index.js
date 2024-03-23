import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AdminApp from "./admin/AdminApp";

const Error404Modern = lazy(() => import("./admin/pages/error/404-modern"));

ReactDOM.render(
  <React.Fragment>
    <Suspense fallback={<div />}>
      <Router basename={`/`}>
        <Route render={({ location }) => (location.state && location.state.is404 ? <Error404Modern /> : <App />)} />
        {/* panel routes start*/}
        {/* <Route exact path={`/panel/auths/terms`} component={Terms}></Route> */}
        <Route path="/panel/*" component={AdminApp} />
        {/* panel routes end*/}
      </Router>
    </Suspense>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
