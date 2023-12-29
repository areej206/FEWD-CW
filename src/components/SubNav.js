import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


const SubNav = () => {
    return (
        <>
            <Navbar bg="#dark" expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="hostel-sub-nav" />
                    <Navbar.Collapse id="hostel-sub-nav">
                        <Nav className="me-auto small">
                            <Nav.Link href="/hostels/cafe">Cafe</Nav.Link>
                            <Nav.Link href="/hostels/search">Search</Nav.Link>
                            <Nav.Link href="/hostels/rate">Rate</Nav.Link>
                            <Nav.Link href="/hostels/review">Review</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default SubNav;
