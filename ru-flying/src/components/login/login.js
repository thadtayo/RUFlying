import React from 'react'
import {useHistory} from "react-router-dom"

import loginImg from '../../yeKcim-plane.svg'

export default (props) => {
    let history = useHistory()

    var loggedIn = () => {
        
        

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
                            <input type="text" name =" username" placeholder = "username"/>
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">Password</label>
                            <input type="password" name ="password" placeholder = "password"/>
                        </div>
                    </div> 
                </div>
                <div className = "footer">
                    <button type = "button" className = "btn" onClick = {loggedIn}>Login</button>
                </div>
            </div>
        )
    }



