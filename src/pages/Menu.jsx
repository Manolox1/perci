import CardsSelect from "../components/Menu_cards/CardsSelect";
import "./Menu.css"
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import Cards from "../components/Menu_cards/Cards";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";


const Menu = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [productos ,setProductos] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "platos"), (snapshot) => {
        const productosData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            }));
            setProductos(productosData);
        });
        
    
        return () => unsub();
    }, []);


    const categorias = ["Burguers","Ensaladas","Entrantes", "Sandwiches","Promos","Revueltos","Bebidas", "Tortas", "Milanesas"];


    const productosFiltrados = categoriaSeleccionada ? productos.filter(producto => producto.categoria === categoriaSeleccionada):[];

    return (
        <>
        <div className="all">
            <div className="btn-reset">
                {categoriaSeleccionada && (
                    <Button variant="dark" size="lg" onClick={() => setCategoriaSeleccionada("")}>Volver</Button>
                )}
            </div>
            <div className="menu-container">
                {!categoriaSeleccionada &&(
                    <div className="select-card">
                        {categorias.map((cat)=>(
                            <div 
                                key={cat}
                                className={`card-select categoria-item ${categoriaSeleccionada === cat ? 'active':''}`}
                                onClick={()=>setCategoriaSeleccionada(cat)}
                            >
                                <CardsSelect data={cat}/>
                            </div>
                        ))}
                    <div
                        className={`categoria-item ${categoriaSeleccionada === "" ? 'active' : ''}`}
                        onClick={() => setCategoriaSeleccionada("")}
                    >
                    </div>
        
                    
                </div>
                )}

                <div className="select-card">
                    {productosFiltrados.map((p) => (
                        <Cards key={p.id} data={p} />
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Menu