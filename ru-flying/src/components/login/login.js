<<<<<<< HEAD
import React from 'react'
import loginImg from '../../yeKcim-plane.svg'
import {useHistory} from 'react-router-dom'

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSignIn = this.onSignIn.bind(this)

        this.state = {
            username: '',
            password: ''
        }
    }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })

    }
=======
import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
>>>>>>> e6baf05e5cfd7261652a4766ef54a7b0008014f8

import loginImg from '../../yeKcim-plane.svg'

<<<<<<< HEAD
        console.log(user)
       
        // check username/ password
        //if valid check manager or customer
        //get user account number and add user to local storage and navigate to customer dashboard or manager dashboard

    


=======
export default (props) => {
    let history = useHistory()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    var loggedIn = () => {
        //validation code
        history.push("/");
>>>>>>> e6baf05e5cfd7261652a4766ef54a7b0008014f8
    }

        return (
            <div className = "base-container" ref= {props.containerRef}>
                <div className = "header">Login</div>
                <div className = "content">

                   <div className = "image">
                     <img src = {loginImg} />  
                    </div>

                    <div className = "form">
                        <div className = "form-group">
                            <label htmlFor = "username">Username</label>
                            <input type="text"
                                required 
                                name =" username" 
                                placeholder = "username"
                                value = {userName}
                                onChange = {e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">Password</label>
                            <input type="password" 
                                required
                                name ="password" 
                                placeholder = "password"
                                value = {password}
                                onChange = {e => setPassword(e.target.value)}

                            />
                        </div>
                    </div> 
                </div>


                <div className = "footer">
                    <button type = "button" className = "btn" onClick = {loggedIn}>Login</button>
                </div>
            </div>
        )
    }



