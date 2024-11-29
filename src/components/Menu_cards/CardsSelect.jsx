import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import "./CardsSelect.css"
import { useState, useEffect } from 'react';
import { storage } from '../../firebase/config';
import { ref } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';


const CardsSelect = ({data}) => {
    const [imageUrl, setImageUrl] = useState("");


    useEffect(() => {
        const fetchImageUrl = async () => {
            const imageRef = ref(storage, `menu_select/${data}.jpg`); // Ajusta la extensión de la imagen si es diferente
            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
            } catch (error) {
                console.error("Error al obtener la URL de la imagen: ", error);
            }
        };

        fetchImageUrl();
    }, [data]);


    return (
        <Card style={{ width: '18rem' }} bg='dark' text='light'>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{data}</Card.Title>
            </Card.Body>
        </Card>
    )
}

CardsSelect.propTypes = {
    data:PropTypes.object.isRequired,
};

export default CardsSelect