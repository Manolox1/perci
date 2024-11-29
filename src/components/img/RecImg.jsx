import { useEffect, useState } from "react";
import storage from "../../firebase/config"
import { ref, getDownloadURL} from "firebase/storage";
import PropTypes from "prop-types";

const RecImg = ({imgUrl}) => {
    const [imageUrl, setImageUrl] = useState(null);

    console.log(imgUrl)

    useEffect(() => {
        const fetchImageUrl = async () => {
        // Reemplaza 'ruta/a/tu/carpeta/imagen.jpg' con la ruta exacta de tu archivo en Firebase Storage
        const imageRef = ref(storage, `cajas_img/${imgUrl}.jpeg`);
        
        try {
            const url = await getDownloadURL(imageRef);
            setImageUrl(url);
        } catch (error) {
            console.error("Error al obtener la URL de la imagen:", error);
        }
        };

        fetchImageUrl();
    }, [imgUrl]);

    
    return (
        <img src={imageUrl} alt="" className="image"/>
    )
    
}
RecImg.propTypes = {
    imgUrl:PropTypes.string.isRequired,
};
export default RecImg