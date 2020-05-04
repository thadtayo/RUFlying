import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


import '../styles/reservation.scss'
import { FiArrowRight } from "react-icons/fi"


export default ({ reservation }) => {
    let history = useHistory()
const [departDate, setDepartDate] = useState(reservation.depart_time.substring(0,10))
const[departTime, setDepartTime] = useState(reservation.depart_time.substring(11,19))
const [arriveDate, setArriveDate] = useState(reservation.arrive_time.substring(0,10))
const[arriveTime, setArriveTime] = useState(reservation.arrive_time.substring(11,19))


    var moreDetails = () => {

        history.push({
            pathname:"/moredetails",
            state: reservation
        })
    }




return(

    
        <div className = "reservation-container">
              <div className = "depart-date" >
                    <h2>{departDate}</h2>
               </div>


            <div className = "res-info"> 


                <div className = "num-passengers ">
                    Passengers:

                    <div className = "num">
                        {reservation.num_travelers}
                    </div>

                </div>

               <div className = "depart-info">
                   <div className = "depart-time">
                        {departTime}
                   </div>
                   <div className = "depart-airport">
                        {reservation.start_airport}
                   </div>

                    

                   <div className = "arrw">
                       <FiArrowRight size = "40px"/>
                   </div>
                   </div>

                   <div className = "arrive-info">
                        <div className = "arive-time">
                            {arriveTime}
                        </div>
                        <div className = "arrive-airport">
                            {reservation.end_airport}
                        </div>
                   </div>

                   <div className = "tot-fare ">
                        Total Fare:
                        <div className = "fare">
                            {reservation.total_fare}
                        </div>


                                        
                <div className = "details-footer">
                    <button type = "button" 
                        className = "details-btn"
                        onClick= {moreDetails}
                    >
                            More Details
                    </button>
                 </div> 

                    </div>
            

                


            </div>



                
        </div>
)

}