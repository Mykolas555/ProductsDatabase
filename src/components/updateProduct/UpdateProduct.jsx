import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './updateProduct.scss';
import { updateUserProduct } from '../../services/crudService';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: '',
    });

    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };
    



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting product data:', productData);
        
        try {
            await Promise.all([
                updateUserProduct(id, productData),
                handleClose()
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => {
        setShowModal(false);
        navigate('/ProductsDatabase/yourProducts');
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Update Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="addProductInput">
                        <input type="text" placeholder="Product Name" required
                            name="title" value={productData.title} onChange={ handleChange}/>
                    </div>
                    <div className="addProductInput">
                        <input type="text" placeholder="Product Description" required
                            name="description" value={productData.description} onChange={handleChange}/>
                    </div>
                    <div className="addProductInput">
                        <input type="number" placeholder="Product Price" required
                            name="price" value={productData.price} onChange={handleChange} />
                    </div>
                    <div className='addProductInput'>
                        <Button type="submit" className='btn btn-success'>Update Product</Button>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/ProductsDatabase/yourProducts/">
                    <Button variant="danger">Close</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateProduct