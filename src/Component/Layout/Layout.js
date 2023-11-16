import {
  Outlet
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import './Layout.css';

  function Layout(){
    return(
<div>
<Navbar expand="lg" className="bg-body-tertiary">
<Container>
<FontAwesomeIcon icon="fa-regular fa-ice-cream" />
  <Navbar.Brand href="#home">The Cornetto Trilogy</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/job">Job</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
<br/>
<Outlet/>
</div>
    );
}
export default Layout;