import React from 'react'
import loginImg from '../../yeKcim-plane.svg'

export default (props) => {

        return (
            <div className = "base-container" ref= {props.containerRef}>
                <div className = "header">Register</div>
                <div className = "content">

                   <div className = "image">
                     <img src = {loginImg} />  
                    </div>

                    <div className = "form">
                        <div className = "form-group">
                            <label htmlFor = "username">First Name</label>
                            <input type="firstname"
                                required 
                                name =" firstname" 
                                placeholder = "First Name"

                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "username">Last Name</label>
                            <input type="lastname" 
                                name =" lastname" 
                                placeholder = "Last Name"
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "email">Email</label>
                            <input type="text"
                                required
                                name =" email" 
                                placeholder = "email"
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">Password</label>
                            <input type="password"
                                required 
                                name ="password" 
                                placeholder = "password"

                            />
                        </div>
                    </div> 
                </div>
                <div className = "footer">
                    <button type = "button" 
                        className = "btn"
                    >
                        
                        Register
                        
                    </button>
                </div>


            </div>
        )
    }

