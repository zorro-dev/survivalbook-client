import React from 'react';
import {Container, Navbar } from "react-bootstrap";
import {NavLink } from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color : 'white' }} to={MAIN_ROUTE}>Survival Book</NavLink>
            </Container>
        </Navbar>
    );
};

export default NavBar;
