import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contenedor.css'
import RecImg from '../img/RecImg';

function Contenedor() {
    return (
        <div className='opciones'>
            <Row className='g-0'>
                <Col className='colu'>
                    <RecImg imgUrl='Cervezas'/>
                </Col>
                <Col className='colu'>
                    <div className="texto">
                        <h1>Plato Sugerido</h1>
                        <p>Una opción más que se suma a todos los platos que ofrece nuestro menú. Enterate de los platos sugeridos de cada día en las stories de nuestras redes sociales!</p>
                        <p>Más info en nuestro <a href="https://www.instagram.com/percipilar/"> Instagram</a></p>
                    </div>
                </Col>
                <Col className='colu'>
                    <RecImg imgUrl='PromoMtr'/>
                </Col>
            </Row>
            <Row className='g-0'>
                <Col className='colu'>
                    <div className="texto">
                        <h1>VIANDAS</h1>
                        <p>Para empresas, oficinas y particulares, Perci ofrece el servicio de Viandas para poder organizar las comidas del mes con anticipación y tener la seguridad de disfrutar cada día un plato elaborado. Presupuestos armados a medida, de acuerdo a la cantidad de personas.</p>
                        <p className='sobre'>Por consultas y presupuestos<a href="">hola@gmail.com</a></p>
                    </div>
                </Col>
                <Col className='colu'>
                    <RecImg imgUrl='ParaLlevar'/>
                </Col>
                <Col className='colu'>
                    <div className="texto">
                    <h1>EVENTOS <br />AWAY</h1>
                        <ol>
                            <li>DEFINÍS cantidad de comensales.</li>
                            <li>ELEGÍS si querés ternera braseada sóla o lo combinás con picada, empanadas, pastelería y/o bebida.</li>
                            <li>PEDÍS con un mínimo de 48 horas de anticipación.</li>
                            <li>RETIRÁS todo tu pedido por Perci!</li>
                        </ol>
                    </div>
                </Col>
            </Row>
            <Row className='g-0'>
                <Col className='colu'>
                    <RecImg imgUrl='Postrecitos'/>
                </Col>
                <Col className='colu'>
                    <div className="texto">
                    <h1>DESAYUNOS,  ALMUERZOS, MERIENDAS Y CENAS!</h1>
                    </div>
                </Col>
                <Col className='colu'>
                    <RecImg imgUrl='Trago'/>
                </Col>
            </Row>
        </div>
    );
}

export default Contenedor;