import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Col, Container, Row} from "react-bootstrap";
import Content from "./components/content/Content";
import css from './app.module.css';

function App() {
    return (
        <div className={css.container}>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>


                    <Content/>


            </Container>
        </div>
    );
}

export default App;
