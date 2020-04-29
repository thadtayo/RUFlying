import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import FlightList from '../components/FlightList'
import "../styles/search.scss"


export default () => {
    const [flights, setFlights] = useState([])
    const[start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const[roundTrip, setRoundTrip] = useState(false)



    var searchFlight = async (s, e) => {

        let flight = {
            start: s,
            end: e
        }

        let res = await axios.post("api/show-flights", flight)

        console.log(res.data)

        setFlights(res.data)
    }
    return(
        <body className = "search-body">
        
        
            

        <div className = "search-container">


            <div className = "search-header">
                <h1>Search</h1>
            </div>
                

                <div className = "search-box">
                    
                </div>


            <div className = "footer">
                    <button type = "button" 
                        className = "update-btn"
                        onClick = {searchFlight(start,end)}
                    >
                            Search
                    </button>

            </div>
                
        </div>
        </body>

        
    )
}