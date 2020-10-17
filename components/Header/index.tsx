import Head from 'next/head'
import React, { useState } from 'react'

import {
    Container, Row, Col, Nav, NavItem, NavLink, Navbar, NavDropdown, NavbarBrand,
    Form, FormControl, Button
} from 'react-bootstrap'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Navbar className="nav-menu" bg="dar" expand="lg">
            <Navbar.Brand href="#home">
                <img src="/img/logo.png" alt="" className="edit-logo" />
            </Navbar.Brand>
            <Form inline className="mr-auto my-auto d-inline w-25 " >
                {/* <FormControl type="text" placeholder="Search" className="ml-auto" style={{}} /> */}
                <div className="input-group">
                    <select>
                        <option value="0">Mua nhà</option>
                        <option value="1">Thuê nhà</option>
                    </select>
                    <input type="text" className="form-control" placeholder="Search" />

                </div>
            </Form>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink><i className="fas fa-phone-alt"></i> 091 9751079</NavLink>
                    <NavLink className="dropdown">
                        Mua <i className="fas fa-chevron-down"></i>
                        <div className="dropdown-content">
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                        </div>
                    </NavLink>
                    <NavLink className="dropdown">
                        Thuê <i className="fas fa-chevron-down"></i>
                        <div className="dropdown-content">
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                        </div>
                    </NavLink>
                    <NavLink className="dropdown">
                        Dự án <i className="fas fa-chevron-down"></i>
                        <div className="dropdown-content">
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                        </div>
                    </NavLink>
                    <NavLink className="dropdown">
                        Thông tin <i className="fas fa-chevron-down"></i>
                        <div className="dropdown-content">
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                            <a href="#">Test1</a>
                        </div>
                    </NavLink>
                    <p style={{borderLeft:"1px solid "}}></p>
                    <NavLink className="singup">Đăng ký</NavLink>

                    <NavLink className="login">Đăng Nhập</NavLink>


                    {/* <Nav.link></Nav.link> */}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
