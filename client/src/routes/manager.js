import React from "react";
import {Switch, Route} from "react-router-dom"

import ManNav from "../components/ManagerNav"
import {ManagerFlights} from "../pages"

export default () => {
    return(
        <div>
            <ManNav/>
        <Switch>
            <Route path = "/manager"><ManagerFlights/></Route>
        </Switch>
        </div>
    );
}