import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Mapa_Nostros.css"
import RecImgPeng from '../img/RecImgPeng';

const Mapa_Nostros = () => {
    return (
        <div className="Mapa_nosotros">
            <Row className='g-0'>
                <Col>
                    <h1>¿Donde nos encontras?</h1>
                    <div className="map">

                    </div>
                </Col>
                <Col>
                    <h1>Nosotros</h1>
                    <div className="nosotros">

                    </div>
                    <div className="btns">
                        <a href='mailto:perci@gmail.com?subject=Consulta%20de%20precios' target='blank'><RecImgPeng imgUrl='gmail'/></a>
                        <a href='https://www.instagram.com/percipilar/' target='blank'><RecImgPeng imgUrl='instagram'/></a>
                        <a href='https://wa.me/541140835332...?text=Consultas' target='blank'><RecImgPeng imgUrl='social'/></a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Mapa_Nostros