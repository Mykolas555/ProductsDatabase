import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './addProduct.scss';
import { postUserProducts } from '../../services/crudService';

const AddProduct = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);
    const [addProduct, setAddProduct] = useState({
        title: '',
        description: '',
        price: '',
        image: null
    });

    const handleChange = (e, field) => {
        const value = field === 'image' ? e.target.files[0] : e.target.value;
        setAddProduct((prevProduct) => ({
            ...prevProduct,
            [field]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postUserProducts(addProduct);
            setShowModal(false);
            navigate("/ProductsDatabase/yourProducts");
        } catch (err) {console.error(err);}
    };

    const handleClose = () => {
        setShowModal(false);
        navigate("/ProductsDatabase/yourProducts");
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className='addProductInput'>
                        <input type="text" placeholder='Products Name' required
                            name='title' value={addProduct.title} onChange={(e) => handleChange(e, 'title')}/>
                    </div>
                    <div className='addProductInput'>
                        <input type="text" placeholder='Products Description' required
                            name='description' value={addProduct.description} onChange={(e) => handleChange(e, 'description')}/>
                    </div>
                    <div className='addProductInput'>
                        <input type="number" placeholder='Products Price' required
                            name='price' value={addProduct.price} onChange={(e) => handleChange(e, 'price')}/>
                    </div>
                    <div className='addProductInput'>
                        <input type="file" accept=".png, .jpg, .jpeg, .gif, .webp" required
                            onChange={(e) => handleChange(e, 'image')}/>
                    </div>
                    <div className='addProductInput'>
                        <Button type="submit" className='btn btn-success'>Place Product</Button>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Link to={`/ProductsDatabase/yourProducts/`}>
                    <Button variant="danger">Close</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

export default AddProduct;
