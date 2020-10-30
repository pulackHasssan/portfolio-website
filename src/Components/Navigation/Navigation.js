import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css";
const Navigation = () => {
    return (
        <div className="nav-text">
 <Navbar className="container" expand="lg" fixed>
        <Navbar.Brand className="text-success"> 
            <span>Pulack Hassan</span>
        </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav justify className="ml-auto">
<Nav.Link><Link className='nav-link-style' to='/home'>Home</Link></Nav.Link>
<Nav.Link><Link className='nav-link-style' to='/about'>About Me</Link></Nav.Link>
<Nav.Link><Link className='nav-link-style' to='/myproject'>My Projects</Link></Nav.Link>
<Nav.Link><Link className='nav-link-style' to='/contact'>Contact Me</Link></Nav.Link>
<Nav.Link><Link className='nav-link-style' to='/blog'>Blogs</Link></Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
        </div>
       
    );
};

export default Navigation;