import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import {App, Home} from "../pages";

export default () => {

    return (
        <Router>

            <Switch>
                <Route path = "/login">
                    <App/>
                </Route>
                <Route path = "/">
                    <Home/>
                </Route>
            </Switch>

        </Router>
    );
}