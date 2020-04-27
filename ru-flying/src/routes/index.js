import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {LoginRegister, Home, CustomerProfile, EditUser} from "../pages";
import EditUserInfo from "../pages/EditUserInfo";

export default () => {

    return (
        <Router>
            <Switch>
                <Route path = "/login">
                    <LoginRegister/>
                </Route>
                <Route path = "/profile">
                    <CustomerProfile/>
                </Route>
                <Route path = "/edit">
                    <EditUserInfo/>
                </Route>
                <Route path = "/">
                    <Home/>
                </Route>
                
                
            </Switch>
        </Router>
    );
}