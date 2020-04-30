import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav,  NavDropdown, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default  () => {

    
        return(
            <Navbar bg="dark" expand="lg" variant = "dark">
            <Navbar.Brand href="/">RU Flying</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search For Flight</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        
        </Navbar.Collapse>
        </Navbar>
        )
    }
