import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ref,getDownloadURL } from "firebase/storage";
import storage from "../../firebase/config";

const RecImgPeng = ({imgUrl}) => {
    const [imageUrl, setImageUrl] = useState(null);

    
    useEffect(() => {
        const fetchImageUrl = async () => {
            // Reemplaza 'ruta/a/tu/carpeta/imagen.jpg' con la ruta exacta de tu archivo en Firebase Storage
        const imageRef = ref(storage, `eventos_img/${imgUrl}.png`);
            
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
        <img src={imageUrl} alt="" className="image" style={{
            justifyContent:"space-between"
        }}/>
    )
        
}

RecImgPeng.propTypes = {
    imgUrl:PropTypes.string.isRequired,
};


export default RecImgPeng