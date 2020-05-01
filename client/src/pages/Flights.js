import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import FlightList from '../components/FlightList'

export default (props) => {

    // const depart =(props.location.state.departDate)

    const [flights, setFlights] = useState([])
    const[direction, setDirection] = useState("departing")
    const[state, setState] = useState(props.location.state)
    const[start, setStart] = useState(props.location.state.start)
    const[end, setEnd] = useState(props.location.state.end)
    const[departDate, setDepart] = useState(props.location.state.departDate)
    const[returnDate, setReturn] = useState(props.location.state.returnDate)
    const[roundtrip, setRound] = useState(props.location.state.roundTrip)
    const[numFlyers, setNum] = useState(props.location.state.numFlyers)
    const [flight, setFlight] = useState({start: start, end:end, date:departDate})

    useEffect(() => {

        ( async () => {
        let res = await axios.get("api/flights/show-flights", flight)
        console.log(res.data)
        setFlights(res)

       })()

     
    })
    
   

    return(
        <div>

            <div>
                <h1>Select a {direction} flight </h1>
            
            </div>

            <div>
                <FlightList result = {flights} numFlyers = {numFlyers}/>
            </div>

        </div>
       
    )
}