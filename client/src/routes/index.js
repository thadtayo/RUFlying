import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {LoginRegister, Home, CustomerProfile, EditUser} from "../pages";


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
                    <EditUser/>
                </Route>
                <Route path = "/">
                    <Home/>
                </Route>
                
                
            </Switch>
        </Router>
    );
}