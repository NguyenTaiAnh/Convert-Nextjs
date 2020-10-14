import Head from 'next/head'
import React from 'react'

import {
    Container, Row, Col, Nav, NavItem, NavLink, Navbar, NavDropdown, NavbarBrand,
    Form, FormControl, Button
} from 'react-bootstrap'

export default function Header() {


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
                    <NavLink>091 9751079</NavLink>
                    <NavDropdown title="Mua" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Mua</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Thuê" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Dự án" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Thông tin" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavItem id="item-singup">
                        <NavLink className="singup">Đăng ký</NavLink>
                    </NavItem>

                    <NavLink className="login">Đăng Nhập</NavLink>


                    {/* <Nav.link></Nav.link> */}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
