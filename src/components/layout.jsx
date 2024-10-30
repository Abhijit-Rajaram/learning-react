import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Layout = () => {
    return (
        <>
            <div className="row w-100">
                <div className="col-sm-12">
                    <nav>
                        <ul className='nav-bar'>
                            <li>
                                <Link to="/education">Education</Link>
                            </li>
                            <li>
                                <Link to="/skills">Skills</Link>
                            </li>
                            <li>
                                <Link to="/experience">Experience</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-sm-12"><Outlet /></div>
            </div>
        </>
    )
};

export default Layout;