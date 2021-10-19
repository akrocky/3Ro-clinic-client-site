
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user, logOut}=useAuth()
  console.log(user);
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img className='w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAB9Ng7dJxKcpQ9Uixgol3zNToXHYxHI1NPw&usqp=CAU" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto  header-navlink">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/Doctors">Doctors</NavLink>
      <NavLink to="/services">Services</NavLink>
      
      <NavLink to="/appointment">Appointment</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      
      
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
    
      <Navbar.Text className='text-white'>
        
        {
          user.email ? <div>
          <span className='me-2'>{user.displayName}</span>
           <button onClick={logOut}>Log Out</button> 
           </div>
           : <button><Link className='text-black' to="/login">Sign In</Link></button>


        }
      </Navbar.Text>

    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;