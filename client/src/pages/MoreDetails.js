import React, {useState} from 'react'
import Navbar from '../components/Navbar'

export default (props) => {
    


return(

    <body className ="body">
    <Navbar/>
<   div className = "prof-container">
    <h1 className = "prof-header">More Details</h1>
    
    <div className = "firstname">
        <p>Reservation Number: {props.location.state.reservation_num} </p>
    </div>

    <div className = "firstname">
        <p>Restrictions: {props.location.state.restrictions} </p>
    </div>
    <div className = "firstname">
        <p>Customer Rep: {props.location.state.customer_rep} </p>
    </div>
    <div className = "firstname">
        Type Of Flight: {props.location.state.isDomestic ? 'Domestic' : 'International'}            

        
        
    </div>

    

   

   
 
    </div>
    </body>
)

    }
