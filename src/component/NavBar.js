import React from 'react';
import {Container, Navbar } from "react-bootstrap";
import {MAIN_ROUTE} from "../utils/consts";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={MAIN_ROUTE}>Survival Book</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;
