import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from '../../assets/img/bblogo.jpg';
import css from './header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (<div>
            <Container fluid>
                <Row>
                    <Col xs={1}>
                        <img src={logo} alt="Logo" className={css.logoImage}/>
                    </Col>


                    <Col>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <span className="navbar-brand">
                                <Link to="/" className={css.linkTo}><h1>BoostBrain Java Incubator</h1></Link>
                            </span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarColor02">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link">
                                            <Link to="/users"  className={css.linkTo}>
                                            Students
                                            </Link>
                                            <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Tasks</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Messages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>


                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Header;
