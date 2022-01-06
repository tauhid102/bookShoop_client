import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../../Style/style.css';
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Books</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/books">All Books</Nav.Link>
                        </Nav>
                        <Nav className='ml-auto'>
                            <Navbar.Text className='me-2'>
                                {user?.displayName}
                            </Navbar.Text>
                            <NavDropdown title={<Image
                                className='user-image' src={user?.photoURL}
                            ></Image> || 'Login'} id="basic-nav-dropdown">

                                <NavDropdown.Item className='bg-dark' href="">
                                    {
                                        user?.email ?
                                            <button className="btn btn-dark logout-button" onClick={logout}>Logout</button>
                                            :
                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    }
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;
