import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {LoginRegister, Home, CustomerProfile, EditUser, FlightSearch, Reservations, Flights} from "../pages";


export default () => {

    return (
        <Router>
            <Switch>
                <Route path = "/login"
                    component = {LoginRegister}>
                </Route>
                <Route path = "/profile" component = {CustomerProfile}></Route>
                <Route path = "/edit" component = {EditUser}></Route>
                <Route path = "/search" component ={FlightSearch}></Route>
                <Route path = "/flights" component ={Flights}></Route>
                <Route path = "/" component = {Home}></Route>
                
                
            </Switch>
        </Router>
    );
}