import React from 'react'
import {Navbar, Nav,  NavDropdown, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default  () => {

    
        return(
            <Navbar bg="dark" expand="lg" variant = "dark">
            <Navbar.Brand href="/">RU Flying</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/logout">Logout</Nav.Link>
            <Nav.Link href="/search">Search For Flight</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/active-reservations"> My Active Reservations</NavDropdown.Item>
            <NavDropdown.Item href="/all-reservations"> All Reservations</NavDropdown.Item>
          
            </NavDropdown>
            </Nav>
        
        </Navbar.Collapse>
        </Navbar>
        )
    }
