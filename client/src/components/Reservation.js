import React, {useState} from 'react'

import '../styles/flight.scss'



export default ({ reservation }) => {
const [departDate, setDepartDate] = useState(reservation.depart_time.substring(0,9))
const[departTime, setDepartTime] = useState(reservation.depart_time.substring(11,18))
const [arriveDate, setArriveDate] = useState(reservation.arrive_time.substring(0,9))
const[arriveTime, setArriveTime] = useState(reservation.arrive_time.substring(11,18))







return(

    <div>
        {departDate}
        {departTime}
        {arriveDate}
        {arriveTime}
    </div>
)

}