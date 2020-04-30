import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import FlightList from '../components/FlightList'
import "../styles/search.scss"
import {Form, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


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
                                    type="radio"
                                    inline
                                    label="One Way "
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    inline
                                    label="Round Trip"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
              
                                </Form.Group>
                        </fieldset>


                        <fieldset>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </fieldset>
 
                </Form>
            </div>

               

                    
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