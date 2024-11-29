import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Slider.css"
import RecImg from '../img/RecImg';
import REcImgSlider from '../img/REcImgSlider';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <REcImgSlider imgUrl={"Sandwiches"}/>
                <Carousel.Caption>
                <h3>Plato del Dia</h3>
                <p>Todas las semanas contamos con diversos platos para degustar.</p>
                <Link to="/menu"><Button variant='dark' size='lg'>Conocer Menú</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <REcImgSlider imgUrl={"Burguers"}/>
                <Carousel.Caption>
                <h3>Eventos Away</h3>
                <p>Contamos con personal para llevar a cabo cualquier evento que desees</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <REcImgSlider imgUrl={"Entrantes"}/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider