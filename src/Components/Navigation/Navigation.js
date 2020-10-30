import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
<Nav.Link>Home</Nav.Link>
<Nav.Link>About Me</Nav.Link>
<Nav.Link>My Projects</Nav.Link>
<Nav.Link>Contact Me</Nav.Link>
<Nav.Link>Blogs</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
        </div>
       
    );
};

export default Navigation;