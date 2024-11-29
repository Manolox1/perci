import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import "./Modals.css"


const Modals = ({data, show, onHide, img}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.titulo}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={img} alt="" />
                <h4>${data.precio}</h4>
                <p>
                {data.ingredientes}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
    )
}

Modals.propTypes = {
    data:PropTypes.object.isRequired,
    onHide:PropTypes.func.isRequired,
    show:PropTypes.bool.isRequired,
    img:PropTypes.string.isRequired,
};

export default Modals