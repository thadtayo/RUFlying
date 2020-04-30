import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import FlightList from '../components/FlightList'

export default (props) => {

    const [flights, setFlights] = useState([])
    const[direction, setDirection] = useState("departing")
    const[start, setStart] = useState("")
    const[state, setState] = useState(props.location.state)

    useEffect(() => {
        console.log(state)
    })
    
   

    return(
        <div>
            <h1>Select a {direction} flight </h1>
        </div>
        // <FlightList results = {flights}/>
    )
}