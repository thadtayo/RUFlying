import React from 'react';
import logo from './logo.svg';
// import './App.scss';
// import { Login, Register } from "./components/login/index"

import{ BrowserRouter, Route, Switch, Link, Redirect,} from 'react-router-dom'

import loginRegister from './components/login/loginRegister'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerProfile from './components/customer/CustomerProfile'


class App extends React.Component {

  render() {
    const DefaultRoutes = () => {
      return (
        <div>
          <Navbar />
          <Switch>
            <Route path="/profile" component={CustomerProfile} />   
          </Switch>
        </div>
      );
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route component={loginRegister} path="/" />
          <Route component={DefaultRoutes} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
