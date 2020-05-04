import React, {useState} from 'react'

import '../styles/reservation.scss'
import { FiArrowRight } from "react-icons/fi"


export default ({ reservation }) => {
const [departDate, setDepartDate] = useState(reservation.depart_time.substring(0,10))
const[departTime, setDepartTime] = useState(reservation.depart_time.substring(11,19))
const [arriveDate, setArriveDate] = useState(reservation.arrive_time.substring(0,10))
const[arriveTime, setArriveTime] = useState(reservation.arrive_time.substring(11,19))







return(

    
        <div className = "reservation-container">
              <div className = "depart-date" >
                    <h2>{departDate}</h2>
               </div>

               
            <div className = "res-info"> 


                <div className = "num-passengers ">
                    <h3>Passengers:</h3>

                    <div className = "num">
                        {reservation.num_travelers}
                    </div>

                </div>

               <div className = "depart-info">
                   <div className = "depart-time">
                       <h3>{departTime}</h3>
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
                            <h3>{arriveTime}</h3>
                        </div>
                        <div className = "arrive-airport">
                            {reservation.end_airport}
                        </div>
                   </div>

                   <div className = "tot-fare ">
                    <h3>Total Fare:</h3>

                    
                        {reservation.total_fare}
            

                </div>
                </div>

                   
              


        </div>
)

}