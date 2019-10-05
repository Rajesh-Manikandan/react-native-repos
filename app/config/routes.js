import React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Router, Scene, Stack } from "react-native-router-flux";

export const PublicRoutes = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="login" component={Login} title="Login" initial />
      <Scene key="signup" component={Signup} title="Register" />
    </Stack>
  </Router>
);
