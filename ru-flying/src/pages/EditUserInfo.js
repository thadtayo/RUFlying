import React, {useState, useEffect} from 'react'
import loginImg from '../yeKcim-plane.svg'

export default (props) => {
    const [firstname, setFirstname ] = useState(" ")
    const [lastname, setLastname ] = useState(" ")
    const [email, setEmail ] = useState(" ")
    const [address, setAddress ] = useState(" ")
    const [zip, setZip ] = useState(" ")
    const [phone, setPhone ] = useState(" ")
    const [state, setState ] = useState(" ")
    const [credit, setCredit ] = useState(" ")


  const onUpdate = () => {
       //get user account num from local storage 
       var user = {
           first: firstname,
           last: lastname,
           email: email,
           address: address,
           zip: zip,
           phone: phone,
           state: state,
           credit: credit
       }

       //get account num from local storage
       //update account with user obj
    }
    
        return (
            <div className = "base-container" ref= {this.props.containerRef}>
                <div className = "header">Edit User Information</div>
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
                                value = {firstname}
                                onChange = {e => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "username">Last Name</label>
                            <input type="lastname" 
                                name =" lastname" 
                                placeholder = "Last Name"
                                value = {lastname}
                                onChange = {e => setLastname(e.target.value)}
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
                            <label htmlFor = "address">Address</label>
                            <input type="text"
                                required 
                                name ="address" 
                                placeholder = "address"
                                value = {address}
                                onChange = {e => setAddress(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "zip">Zip</label>
                            <input type="text"
                                required 
                                name ="zip" 
                                placeholder = "zip"
                                value = {zip}
                                onChange = {e => setZip(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "phone">Phone</label>
                            <input type="text"
                                required 
                                name ="phone" 
                                placeholder = "phone"
                                value = {phone}
                                onChange = {e => setPhone(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "state">State</label>
                            <input type="text"
                                required 
                                name ="state" 
                                placeholder = "State"
                                value = {state}
                                onChange = {e => setState(e.target.value)}
                            />
                        </div>
                        
                        <div className = "form-group">
                            <label htmlFor = "creditcard">Credit Card</label>
                            <input type="text"
                                required 
                                name ="creditcard" 
                                placeholder = "Credit Card"
                                value = {credit}
                                onChange = {e => setCredit(e.target.value)}
                            />
                        </div>
                        
                    </div> 
                </div>
                <div className = "footer">
                    <button type = "button" 
                        className = "btn"
                        onClick = {this.onUpdate}
                    >
                        
                        Save
                        
                    </button>
                </div>


            </div>
        )
    }

