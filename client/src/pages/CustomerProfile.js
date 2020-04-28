import React, {useState, useEffect} from 'react'
import '../styles/profile.scss'

import Navbar from '../components/Navbar'

import {useHistory} from "react-router-dom"

export default () => {
    let history = useHistory()
    
   
    
    
    const [firstname, setFirstname ] = useState(" ")
    const [lastname, setLastname ] = useState(" ")
    const [email, setEmail ] = useState(" ")
    const [address, setAddress ] = useState(" ")
    const [zip, setZip ] = useState(" ")
    const [phone, setPhone ] = useState(" ")
    const [state, setState ] = useState(" ")
    const [credit, setCredit ] = useState(" ")
    

    useEffect(() => {
         
     })

   var EditUserInfo = () => { 
        history.push("/edit")
    }
    
    
        return (
            <body className ="body">
                <Navbar/>
            <div className = "prof-container">
                <h1 className = "prof-header">Customer Profile</h1>
                
                <div className = "firstname">
                    <p>First Name: {firstname} </p>
                </div>

                <div className = "firstname">
                    <p>Last Name:{lastname} </p>
                </div>
                <div className = "firstname">
                    <p>Email:{email} </p>
                </div>
                <div className = "firstname">
                    <p>Phone:{phone}</p>
                </div>

                <div className = "firstname">
                    <p>Address:</p>
                </div>

                <div className = "firstname">
                    <p>Zip: </p>
                </div>

                <div className = "firstname">
                    <p>State: </p>
                </div>

                <div className = "footer">
                    <button type = "button" 
                        className = "update-btn"
                        onClick = {EditUserInfo}
                    >
                            Update
                        </button>

                </div>

               
             
                </div>
                </body>
           

        )
    }
