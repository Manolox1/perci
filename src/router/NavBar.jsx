import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Menu from '../pages/Menu';
import Eventos from '../pages/Eventos';
import './NavBar.css'

function BasicExample() {
    return (
        <>
            <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Perci-Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/">Inicio</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/menu">Menu</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/eventos">Eventos</Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/eventos" element={<Eventos/>}/>
            </Routes>
        </>
    );
}

export default BasicExample;