import React, {useState, useEffect} from "react"
import axios from "axios"

import {InputGroup, DropdownButton, Dropdown, FormControl, Button, Col} from "react-bootstrap";

export default () => {

    const [searchType, setSearchType] = useState("Flight")
    const [formData, setFormData] = useState("");
    const [flightData, setFlightData] = useState(null)
    const [topData, setTopData] = useState(null)

    const getData = async () => {
        var response;
        if(searchType === "Flight") {
            response = await axios.get("../api/manager/flight_summary", {flight_num: formData})

        }else if(searchType === "Destination") {
            response = await axios.get("../api/manager/city_summary", {city: formData})

        }else {
            response = await axios.get("../api/manager/customer_summary", {email: formData})
        }

        setFlightData(response);
        console.log(flightData)
    }

    const display = (type, data) => {
        if(type === "Flight") {
            return (
                <div>
                {data.map((item, key) => (
                    <div>
                        <p>flight num: {item.flight_num}</p>
                        <p>Total Fare: {item.total_fare}</p>
                        <p>Total Revenue: {item.total_revenue}</p>
                    </div>
                ))}
                </div>
            )
        }else if(type === "Destination") {
            return (
                <div>
                {data.map((item, key) => (
                    <div>
                        <p>City Name: {item.city_name}</p>
                        <p>Total Revenue: {item.total_revenue}</p>
                    </div>
                ))}
                </div>
            )
        }else {
            return (
                <div>
                {data.map((item, key) => (
                    <div>
                        <p>Account num: {item.account_num}</p>
                        <p>First Name: {item.first_name}</p>
                        <p>Last Name: {item.last_name}</p>
                        <p>Email: {item.email}</p>
                        <p>Total Revenue: {item.total_revenue}</p>
                    </div>
                ))}
                </div>
            )
        }
    }

    useEffect( () => {
        async function getStuff() {
            const top = await axios.get("../api/manager/customer_max_rev")
            setTopData(top)
        }
        getStuff()
    })

    return(
        <div style = {{marginLeft: 30}}>
            <h1>Most Total Revenue</h1>
            
            {topData ? 
            <div>
                <p>Account Num: {topData.account_num}</p>
                <p>Name: {topData.first_name} {topData.last_name}</p>
                <p>Email: {topData.email}</p>
                <p>Total Revenue: {topData.total_revenue}</p>
            </div>
            : null}
            <hr/>
            <hr/>
            <h1>Search Revenue</h1>
            <InputGroup style = {{width: 450}}>
                <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title={searchType}
                id="input-group-dropdown-1"
                >
                <Dropdown.Item onClick = {() => setSearchType("Flight")}>Flight</Dropdown.Item>
                <Dropdown.Item onClick = {() => setSearchType("Destination")}>Destination</Dropdown.Item>
                <Dropdown.Item onClick = {() => setSearchType("Costumer")}>Costumer</Dropdown.Item>
                </DropdownButton>
                <FormControl value = {formData} onChange = {(e) => setFormData(e.target.value)} placeholder = {`${searchType} ID`} />
                <Col sm={3}>
                    <Button onClick = {getData}>Search</Button>
                </Col>
            </InputGroup>
            {flightData ? display(searchType, flightData) : null}
        </div>
    );
}