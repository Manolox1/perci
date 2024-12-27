import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Menu from '../pages/Menu';
import Eventos from '../pages/Eventos';
import './NavBar.css'
import { useEffect,useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from '../firebase/config';

function BasicExample() {

    const [imageUrl, setImageUrl] = useState(null);
        
    useEffect(() => {
        const fetchImageUrl = async () => {
            // Reemplaza 'ruta/a/tu/carpeta/imagen.jpg' con la ruta exacta de tu archivo en Firebase Storage
        const imageRef = ref(storage, `Logo.png`);
            
        try {
            const url = await getDownloadURL(imageRef);
            setImageUrl(url);
        } catch (error) {
            console.error("Error al obtener la URL de la imagen:", error);
        }
        };
    
    fetchImageUrl();
    }, []);
    
    return (
        <>
            <Navbar expand="lg" bg='dark' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to="/"><img src={imageUrl} alt="" width="175" height="60"/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-toogle'/>
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