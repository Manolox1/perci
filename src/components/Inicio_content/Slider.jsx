import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import REcImgSlider from '../img/REcImgSlider';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <REcImgSlider imgUrl={"PlatoDia"}/>
                <Carousel.Caption>
                <h3>Plato del Dia</h3>
                <p>Todas las semanas contamos con diversos platos para degustar.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <REcImgSlider imgUrl={"EventosAway"}/>
                <Carousel.Caption>
                <h3>Eventos Away</h3>
                <p>Contamos con personal para llevar a cabo cualquier evento que desees</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <REcImgSlider imgUrl={"Viandas"}/>
                <Carousel.Caption>
                <h3>Nuestras Viandas</h3>
                <p>
                    Tambien ofrecemos, comida para llevar. <br />Vos pedis lo que mas te interese de la carta, Y cuando este listo lo pasas a buscar.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider