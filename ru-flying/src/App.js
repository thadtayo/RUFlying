import React from 'react';
import logo from './logo.svg';
// import './App.scss';
// import { Login, Register } from "./components/login/index"

import{ BrowserRouter as Router, Route, Switch, Link, Redirect,} from 'react-router-dom'

import loginRegister from './components/login/loginRegister'



class App extends React.Component {

    render() {
      return (
        <Router>
          <Route path = "/" component = {loginRegister}/>
        </Router>
      )
    }
}
export default App;
