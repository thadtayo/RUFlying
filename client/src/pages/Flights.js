import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import FlightList from '../components/FlightList'

export default (props) => {

    

    const [flights, setFlights] = useState([])
    const[direction, setDirection] = useState("departing")
    const[state, setState] = useState(props.location.state)
    const[start, setStart] = useState(props.location.state.start)
    const[end, setEnd] = useState(props.location.state.end)
    const[departDate, setDepart] = useState(props.location.state.departDate)
    const[returnDate, setReturn] = useState(props.location.state.returnDate)
    const[roundtrip, setRound] = useState(props.location.state.roundTrip)
    const[roundtrip, setRound] = useState(props.location.state.numFlyers)

    useEffect(() => {
        let flight = {
            start:start,
            end:end 
        }

       async (() => {
        let res = await axios.post("api/flights/show-flights", flight)
       })()

       console.log(res.data)
    })
    
   

    return(
        <div>
            <h1>Select a {direction} flight </h1>
        </div>
        // <FlightList results = {flights}/>
    )
}