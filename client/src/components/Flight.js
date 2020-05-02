import React, {useState, useEffect} from "react";
import '../styles/flight.scss'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default ({ flight, state}) => {
   
    const[returnState, setReturn] = useState({})
    let history = useHistory()


    useEffect( () => {
        
         setReturn({
            start: state.end,
            end: state.start,
            roundTrip:false,
            departDate: state.returnDate,
            direction: "Returning"

            
        })
    }, [1])
        
    var handleSelect = async () => {
        let book = {
            start: state.start,
            end: state.end,
            flight_num: flight.flight_num,
            total_fare: flight.total_fare,
            depart_time: flight.depart_time,
            arrive_time: flight.arrive_time,
            num_stops: flight.num_stops,
        }

       let res = await axios.post("api/flights/purchase-flight", book)

         console.log(res)

        navigateTo()

    }

    var navigateTo = () => {

        if(state.roundTrip){
            console.log(returnState)
            history.push({
                pathname: "/flights", 
                state: returnState
            })
        } else {
            history.push("/profile")
        }
    }
    




    return (
        <div className = "flight-container">
            
                <div className = "flight-date">
                    {flight.depart_time} - {flight.arrive_time}
                </div>

                <div className="stops">
                       Stops: {flight.num_stops}
                    </div>

                    <div className="fare">
                        Total Fare: {flight.total_fare}
                    </div>

                <div className = "footer">
                    <button type = "button" className = "flight-button" onClick= {handleSelect} >Select</button>
                </div>


        </div>
        
    )
}