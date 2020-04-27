import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import axios from 'axios'

import loginImg from '../../yeKcim-plane.svg'

export default (props) => {
    let history = useHistory()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginResp, setLoginResp] = useState("");

    var loggedIn = async () => {

        const body = {
            email: userName,
            password: password
        }
       let res = await axios.post('http://localhost:5000/login', body)


       

        history.push("/");
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



