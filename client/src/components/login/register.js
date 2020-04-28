import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import loginImg from '../../yeKcim-plane.svg'
import axios from 'axios';

export default (props) => {
    let history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const[resp, setResp] = useState("")

    const register = async () => {
        let user = {
            first: firstName,
            last: lastName,
            email: email,
            password:password,
            address: address,
            zip: zip,
            state: state,
            phone: phone 
        }
       let res = await axios.post("/api/customers/register", user)
        
        

        history.push("/login");
    }

        return (
            
            <div className = "base-container" ref= {props.containerRef}>
                <div className = "header">Register</div>
                <div className = "content">

                   <div className = "image">
                     <img src = {loginImg} />  
                    </div>

                    <div>{resp}</div>

                    <div className = "form">
                        <div className = "form-group">
                            <label htmlFor = "username">First Name</label>
                            <input type="text"
                                required 
                                name =" firstname" 
                                placeholder = "First Name"
                                value = {firstName}
                                onChange = {e => setFirstName(e.target.value)}

                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "username">Last Name</label>
                            <input type="text" 
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
                        <div className = "form-group">
                            <label htmlFor = "Address">Address</label>
                            <input type="text"
                                required 
                                name ="Address" 
                                placeholder = "Address"
                                value = {address}
                                onChange = {e => setAddress(e.target.value)}

                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "Zip">Zip</label>
                            <input type="text"
                                required 
                                name ="zip" 
                                placeholder = "Zip"
                                value = {zip}
                                onChange = {e => setZip(e.target.value)}

                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "State">State</label>
                            <input type="text"
                                required 
                                name ="state" 
                                placeholder = "State"
                                value = {state}
                                onChange = {e => setState(e.target.value)}

                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "phone">Phone</label>
                            <input type="text"
                                required 
                                name ="phone" 
                                placeholder = "Phone"
                                value = {phone}
                                onChange = {e => setPhone(e.target.value)}

                            />
                        </div>

                        
                    </div> 
                </div>
                <div className = "footer">
                    <button type = "button" 
                        className = "butn"
                        onClick = {register}
                    >
                        Register
                    </button>
                </div>


            </div>
            
        )
    }

