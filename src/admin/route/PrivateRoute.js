import React from "react";
import { Route, Redirect } from "react-router-dom";

const auth = localStorage.getItem("accessToken");

const PrivateRoute = ({ exact, component: Component, ...rest }) => (
  <Route
    exact={exact ? true : false}
    rest render={(props) => <Component {...props} {...rest}></Component>} ></Route>
  // <Route
  //   exact={exact ? true : false}
  //   rest
  //   render={(props) =>
  //     auth ? (
  //       <Component {...props} {...rest}></Component>
  //     ) : (
  //         <Redirect to="/login"></Redirect>
  //     )
  //   }
  // ></Route>
);

export default PrivateRoute;
