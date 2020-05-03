import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {LoginRegister, Home, CustomerProfile, EditUser, FlightSearch, Reservations, Flights, logout} from "../pages";


export default () => {

    return (
        <Router>
            <Switch>
                
                <Route path = "/profile" component = {CustomerProfile}></Route>
                <Route path = "/edit" component = {EditUser}></Route>
                <Route path = "/search" component ={FlightSearch}></Route>
                <Route path = "/flights" component ={Flights}></Route>
                <Route path = "/reservations" component = {Reservations}></Route>
                <Route path = "/logout" component = {logout}></Route>
                <Route path = "/" component = {LoginRegister}></Route>
                
                
            </Switch>
        </Router>
    );
}