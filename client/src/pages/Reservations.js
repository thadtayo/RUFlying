import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

import "../styles/flight.scss"
import Reservation from '../components/Reservation'

export default (props) => {

    const[reservations, setReservations] = useState([])
    
  


    useEffect( () => {
        
           
        async function getReservations(){
        
        const res = await axios.get('/api/reservations/customer_reservation')
            setReservations(res.data)
            console.log(res.data)

    }

    getReservations()
  }, [1])

  
    
   

    return (
        <body>

          <Navbar/>

        <div className = "flights-header">
            <h1> Reservations </h1>
        </div>

          
          <div className = "x">

            {reservations.map((x) => 
              
              <Reservation reservation = {x} />
          )}
          </div>
        

            
        </body>
        
    )
}