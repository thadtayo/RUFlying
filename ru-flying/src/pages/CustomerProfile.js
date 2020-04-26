import React, {useState, useEffect} from 'react'
import './Profile.scss'

export default (props) => {
    const [firstname, setFirstname ] = useState(" ")
    const [lastname, setLastname ] = useState(" ")
    const [email, setEmail ] = useState(" ")
    const [address, setAddress ] = useState(" ")
    const [zip, setZip ] = useState(" ")
    const [phone, setPhone ] = useState(" ")
    const [state, setState ] = useState(" ")
    const [credit, setCredit ] = useState(" ")
    

    useEffect(() => {
        //get account from local storage
        //get user info from db
        //update state
    })

    
    
    
        return (
            <body className ="body">
            <div className = "container">
                <h1 className = "header">Customer Profile</h1>
                
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
                        className = "btn"
                        // onClick = send to update page
                    >
                            Update
                        </button>

                </div>

               
             
                </div>
                </body>
           

        )
    }
