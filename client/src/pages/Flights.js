import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

import "../styles/flight.scss"
import Flight from '../components/Flight'

export default (props) => {

    // const depart =(props.location.state.departDate)

    const[flights, setFlights] = useState([])
    
    const[state, setState] = useState(props.location.state)
    const[start, setStart] = useState(props.location.state.start)
    const[end, setEnd] = useState(props.location.state.end)
    const[departDate, setDepart] = useState((props.location.state.departDate).toString())
    const[returnDate, setReturn] = useState(props.location.state.returnDate)
    const[roundtrip, setRound] = useState(props.location.state.roundTrip)
    const[numFlyers, setNum] = useState(props.location.state.numFlyers)
    const [flight, setFlight] = useState({start: start, end:end, pref_date:departDate, num_travelers:numFlyers})


    useEffect( () => {
        
           console.log(departDate)
        async function getFlights(){
        
        const res = await axios.post("api/flights/show-flights", flight)
            setFlights(res.data)
            console.log(res.data)

    }

    getFlights()
  }, [1])

  
    
    console.log(flight)
   

    return (
        <body>

          <Navbar/>

        <div className = "flights-header">
            <h1>Select {props.location.state.direction} flight</h1>
        </div>

          
          <div className = "x">

            {flights.map((x) => 
              
              <Flight flight = {x} state = {state} />
          )}
          </div>
        

            
        </body>
        
    )
}