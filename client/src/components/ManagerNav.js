import React from 'react'
import {Navbar, Nav,  NavDropdown, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default  () => {

    
        return(
            <Navbar bg="dark" expand="lg" variant = "dark">
            <Navbar.Brand href="/">RU Flying Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Logout</Nav.Link>
            <Nav.Link href="/manager">Flights</Nav.Link>
            <Nav.Link href="/manager/revenue">Revenue</Nav.Link>
            <Nav.Link href="/manager/addCostumer">Add Customer</Nav.Link>
            <Nav.Link href="/manager/editCustomer">Edit Customer</Nav.Link>
            </Nav>
        
        </Navbar.Collapse>
        </Navbar>
        )
    }