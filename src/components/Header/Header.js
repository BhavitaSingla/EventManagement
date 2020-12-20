import React from "react";
import {Navbar, NavDropdown, Nav} from "react-bootstrap";
const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="headerbg mb-20">
            <Navbar.Brand href="#home">Event Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    )


}
export default Header