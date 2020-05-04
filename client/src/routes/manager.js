import React from "react";
import {Switch, Route} from "react-router-dom"

import ManNav from "../components/ManagerNav"
import {ManagerFlights, Revenue, AddCostumer} from "../pages"

export default () => {
    return(
        <div>
            <ManNav/>
        <Switch>
            <Route exact path = "/manager"><ManagerFlights/></Route>
            <Route path = "/manager/revenue"><Revenue/></Route>
            <Route path = "/manager/addCostumer"><AddCostumer/></Route>
        </Switch>
        </div>
    );
}