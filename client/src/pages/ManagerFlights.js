import React, {useState} from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import axios from "axios";

export default () => {
    const [all, setAll] = useState(true);
    const [onTime, setOnTime] = useState(false);
    const [active, setActive] = useState(false);
    const [delayed, setDelayed] = useState(false);
    const [airport, setAirport] = useState(false);
    const [formDis, setFormDis] = useState(true);
    const [formVal, setFormVal] = useState("");
    const [haveData, setHaveData] = useState(false);
    const [flightData, setFlightData] = useState(null);

    const clickedMost = () => {
        setAll(false);
        setOnTime(false);
        setActive(true)
        setDelayed(false)
        setAirport(false)
        setFormDis(true);
    }
    const clickedOn = () => {
        setAll(false);
        setOnTime(true);
        setActive(false)
        setDelayed(false)
        setAirport(false)
        setFormDis(true);
    }
    const clickedDelayed = () => {
        setAll(false);
        setOnTime(false);
        setActive(false)
        setDelayed(true)
        setAirport(false)
        setFormDis(true);
    }
    const clickedAirport = () => {
        setAll(false);
        setOnTime(false);
        setActive(false)
        setDelayed(false)
        setAirport(true)
        setFormDis(false);
    }
    const clickedAll = () => {
        setAll(true);
        setOnTime(false);
        setActive(false)
        setDelayed(false)
        setAirport(false)
        setFormDis(true);
    }

    const getData = async () => {
        var response;
        if(all) {
            response = await axios.get("http://localhost:5000/api/manager/all_flights")

        }else if(active) {
            response = await axios.get("http://localhost:5000/api/manager/active_flights")

        }else if(onTime){
            response = await axios.get("http://localhost:5000/api/manager/on_time")
        }else if(delayed){
            response = await axios.get("http://localhost:5000/api/manager/delayed")
        }else {
            response = await axios.get("http://localhost:5000/api/manager/airport_flights", {airport_id: formVal})
        }

        setFlightData(response);
        console.log(flightData)
    }

    return (
        <div>
            <Form style = {{marginLeft: 20, marginTop: 20}}>
            <Form.Group as = {Row}>
                    
                    <Form.Check
                        type="checkbox"
                        inline
                        label="All"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        checked = {all}
                        onChange = {clickedAll}
                        
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        label="Most Active"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        checked = {active}
                        onChange = {clickedMost}
                        />

                    <Form.Check
                        type="checkbox"
                        inline
                        label="On Time"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        checked = {onTime}
                        onChange = {clickedOn}
                        />

                    <Form.Check
                        type="checkbox"
                        inline
                        label="Delayed"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        checked = {delayed}
                        onChange = {clickedDelayed}
                        
                        />

                    <Form.Check
                        type="checkbox"
                        inline
                        label="By Airport"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        checked = {airport}
                        onChange = {clickedAirport}
                        />

                    <Col sm={3}>
                         <Form.Control onChange = {(e) => setFormVal(e.target.value)} value = {formVal} placeholder="Airport ID" disabled = {formDis}/>
                    </Col>

                    <Col sm={3}>
                        <Button onClick = {getData}>Search</Button>
                    </Col>
    
                    </Form.Group>
                    </Form>

                    <div>
                        {flightData ? flightData.map((item, key) => (
                            <div>
                                <p>flight num: {item.flight_num}</p>
                                <p>Airline ID: {item.airline_id}</p>
                                <p>Num Seats: {item.num_seats}</p>
                                <p>Working Days: {item.working_days}</p>
                                <p>Fares: {item.fares}</p>
                                <p>On Scheduale: {item.on_schedule}</p>
                                <p>Occupany: {item.occupancy}</p>
                            </div>
                        )) : null}
                    </div>
        </div>
    );
}