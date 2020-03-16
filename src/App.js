import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Col, Container, Row} from "react-bootstrap";
import Content from "./components/content/Content";

function App() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>

                <Row>
                    <Content/>
                </Row>

            </Container>
        </div>
    );
}

export default App;
