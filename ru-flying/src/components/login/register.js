import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import loginImg from '../../yeKcim-plane.svg'

export default (props) => {
    let history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        //validation code
        history.push("/");
    }

<<<<<<< HEAD
    onChangePassword(e){

        this.setState({
            password: e.target.value
        })
    }

    onRegister(e) {
        e.preventDefault();

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        //add user to database

        //send user to login page
        
    }


    render() {
=======
>>>>>>> e6baf05e5cfd7261652a4766ef54a7b0008014f8
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
                                value = {firstName}
                                onChange = {e => setFirstName(e.target.value)}

                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "username">Last Name</label>
                            <input type="lastname" 
                                name =" lastname" 
                                placeholder = "Last Name"
                                value = {lastName}
                                onChange = {e => setLastName(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "email">Email</label>
                            <input type="text"
                                required
                                name =" email" 
                                placeholder = "email"
                                value = {email}
                                onChange = {e => setEmail(e.target.value)}
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
                    <button type = "button" 
                        className = "btn"
                        onClick = {register}
                    >
                        Register
                    </button>
                </div>


            </div>
        )
    }

