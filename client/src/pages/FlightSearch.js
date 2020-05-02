import React, {useState} from 'react'
import Navbar from '../components/Navbar'

import "../styles/search.scss"
import {Form, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import DatePicker from "react-datepicker";

 
import "react-datepicker/dist/react-datepicker.css";


export default () => {
    
    const[start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const[roundTrip, setRoundTrip] = useState(false)
    const[oneWay, setOneWay] = useState(false)
    const[departDate, setDepartDate] = useState("")
    const[returnDate, setReturnDate] = useState("")
    const[numFlyers, setNum] = useState(1)
    let history  = useHistory()



    var searchFlight = async () => {
        if(roundTrip == false && oneWay == false){
            window.alert("Please select type of flight")
        } else {

        console.log(returnDate) 
        history.push({
            pathname: "/flights", 
            state: {
                    start: start,
                    end: end,
                    roundTrip: roundTrip,
                    departDate:departDate,
                    returnDate: returnDate,
                    numFlyers:numFlyers,
                    direction:"departing"
                    }
        })
    }
    }


     var handleOneCheck = () =>  {
      
         setRoundTrip(false)
         setOneWay(true)
    }
    
    var handleRoundCheck = () =>  {
       setOneWay(false)
       setRoundTrip(true)
    }

    return(


        <body className = "search-body">

            <Navbar/>
        
            

        <div className = "search-container">


            <div className = "search-header">
                <h1>Search</h1>
            </div>
                

            <div className = "search-box">
                
                <div className = "flight-radios">
                    <Form>
                        <fieldset>
                            <Form.Group>
                    
                                <Form.Check
                                    type="switch"
                                    inline
                                    label="One Way "
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    onChange = {handleOneCheck}
                                    checked = {oneWay}
                                    
                                />
                                <Form.Check
                                    type="switch"
                                    inline
                                    label="Round Trip"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    onChange = {handleRoundCheck}
                                    checked = {roundTrip}
                                    
                                    />
              
                                </Form.Group>
                        </fieldset>


                        <fieldset>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Control 
                                            placeholder="Starting Airport" 
                                            onChange = {e => setStart(e.target.value)} 
                                            value = {start}
                                        />
                                        <br/>
                                        <div className = "depart-calendar">
                                            <DatePicker selected = {departDate} onChange = {date => setDepartDate(date)} placeholderText = "Departing date"/>
                                        </div>

                                    </Col>
                                    <Col>
                                        <Form.Control 
                                            placeholder="Ending Airport" 
                                            value = {end}
                                            onChange = {e => setEnd(e.target.value)}
                                        />
                                        <br/>
                                        <div className = "return-calendar">
                                            <DatePicker
                                                selected = {returnDate}
                                                onChange = {(d) => setReturnDate(d)} 
                                                placeholderText = "Returning date"/>
                                         </div>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </fieldset>


                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Travelers</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        value = {numFlyers}
                                        onChange = {e => setNum(e.target.value)}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        </Form.Control>
                                        </Form.Group>
                    </Form>
                </div>

               

               
                
                
                <div className = "search-footer">
                    <button type = "button" 
                        className = "update-btn"
                        onClick = {searchFlight}
                    >
                            Search
                    </button>
                 </div> 
                    
                    

            </div>

        
        </div>
        
    </body>

        
    )
}