import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Mapa_Nostros.css"

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
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Mapa_Nostros