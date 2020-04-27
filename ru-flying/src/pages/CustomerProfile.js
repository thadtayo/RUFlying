import React, {useState, useEffect} from 'react'
import '../styles/profile.scss'
import { unstable_batchedUpdates } from 'react-dom'

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
    

    // useEffect(() => {
    //     //get account from local storage
    //     //get user info from db
    //     //update state
    // })

   var EditUserInfo = () => { 
        history.push("/edit")
    }
    
    
        return (
            <body className ="body">
            <div className = "prof-container">
                <h1 className = "prof-header">Customer Profile</h1>
                
                <div className = "firstname">
                    <p>First Name: </p>
                </div>

                <div className = "firstname">
                    <p>Last Name: </p>
                </div>
                <div className = "firstname">
                    <p>Email: </p>
                </div>
                <div className = "firstname">
                    <p>Phone:</p>
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
