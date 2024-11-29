import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';
import Modals from './Modals';

const Cards = ({data}) => {
    const [imageUrl, setImageUrl] = useState("")
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        const fetchImageUrl = async () => {
            const imageRef = ref(storage, `platos/${data.titulo}`); // Ajusta la extensión de la imagen si es diferente
            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error("Error al obtener la URL de la imagen: ", error);
            }
        };

        fetchImageUrl();
    }, [data.titulo]);


    return (
    
    <>
        <Card style={{ width: '18rem' }} bg='dark' text='light' className='card-select' onClick={() => setModalShow(true)}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{data.titulo}</Card.Title>
                <div className="sub">${data.precio}</div>
            </Card.Body>
        </Card>

        <Modals
            data={data}
            img={imageUrl}
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </>
        
    )
}

Cards.propTypes = {
    data:PropTypes.object.isRequired,
};

export default Cards