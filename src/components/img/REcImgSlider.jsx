import { useEffect, useState } from "react";
import storage from "../../firebase/config"
import { ref, getDownloadURL} from "firebase/storage";
import PropTypes from "prop-types";    
const REcImgSlider = ({imgUrl}) => {
    const [imageUrl, setImageUrl] = useState(null);

    
    useEffect(() => {
        const fetchImageUrl = async () => {
            // Reemplaza 'ruta/a/tu/carpeta/imagen.jpg' con la ruta exacta de tu archivo en Firebase Storage
        const imageRef = ref(storage, `slider_img/${imgUrl}.jpg`);
            
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
REcImgSlider.propTypes = {
    imgUrl:PropTypes.string.isRequired,
};
export default REcImgSlider