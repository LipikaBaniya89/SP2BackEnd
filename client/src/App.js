import React from 'react';
import { useState, useRef, useEffect } from "react";
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Button,
    Form,
  } from "react-bootstrap";
import { useLocalStorage } from "react-use";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Gallery from './components/Gallery';

const API_URI = "http//localhost:3500";

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Image Gallery</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/react-survey">Survey</Nav.Link>
                <Nav.Link href="#pricing">Profile</Nav.Link>
                {/* <Nav.Link href="/react-quotation/product-management">
                Product */}
                {/* </Nav.Link> */}
                </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                  path="/react-survey"
                  element={<Gallery/>}
                />
            </Routes>
        </Router>  
    );
}

export default App;