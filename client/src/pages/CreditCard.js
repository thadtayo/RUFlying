import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

import axios from 'axios';

export default (props) => {
    let history = useHistory();
    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [exp, setExp] = useState("");
    const [cvv, setCVV] = useState("");
   
    

    const purchase = async () => {
        
            let book = {
                start: props.location.state.start,
                end: props.location.state.end,
                flight_num: props.location.state.flight_num,
                total_fare: props.location.state.total_fare,
                depart_time: props.location.state.depart_time,
                arrive_time: props.location.state.arrive_time,
                num_stops: props.location.state.num_stops,
                num_travelers: props.location.state.num_travelers
            }
    
           let res = await axios.post("api/flights/purchase-flight", book)
    
             console.log(res)
    
            navigateTo()
    
        }
    
        var navigateTo = () => {
    
        
    
    
            if(props.location.state.roundTrip){
                console.log(props.location.state.roundTrip)
                history.push({
                    pathname: "/flights", 
                    state: props.location.state.returnState
                })
            } else {
                history.push("/reservations")
            }
        }

        

        return (
            
            <div className = "base-container" ref= {props.containerRef}>
                <div className = "header">Input Credit Card Information</div>
                <div className = "content">

                
                    

                    <div className = "form">
                        <div className = "form-group">
                            <label htmlFor = "username">Card Number</label>
                            <input type="text"
                                required 
                                name =" card number" 
                                placeholder = "Card Number"
                                value = {cardNumber}
                                onChange = {e => setCardNumber(e.target.value)}

                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "username">Name</label>
                            <input type="text" 
                                name =" name" 
                                placeholder = "Name"
                                value = {name}
                                onChange = {e => setName(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "email">Expiration Date</label>
                            <input type="text"
                                required
                                name =" expiration" 
                                placeholder = "Exp Date"
                                value = {exp}
                                onChange = {e => setExp(e.target.value)}
                            />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "password">CVV</label>
                            <input type="password"
                                required 
                                name ="CVV" 
                                placeholder = "CVV"
                                value = {cvv}
                                onChange = {e => setCVV(e.target.value)}

                            />
                        </div>
                       

                        
                    </div> 
                </div>
                <div className = "footer">
                    <button type = "button" 
                        className = "butn"
                        onClick = {purchase}
                    >
                        Purchase
                    </button>
                </div>


            </div>
            
        )
    }

