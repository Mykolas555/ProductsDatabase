import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './updateProduct.scss';
import { updateUserProduct } from '../../services/crudService';
import { getProductByID } from '../../services/fetchService';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: '',
        image: null
    });

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const data = await getProductByID(id);
                setProductData(data);
            } catch (error) { console.error(error);}
        };
        fetchProductData();
    }, [id]);

    const handleChange = (e, field) => {
        const value = field === 'image' ? e.target.files[0] : e.target.value;
        setProductData((prevProductData) => ({
            ...prevProductData,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProduct(id, productData);
            handleClose();
        } catch (error) {console.error(error);}
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
                            name="title" value={productData.title} onChange={(e) => handleChange(e, 'title')}/>
                    </div>
                    <div className="addProductInput">
                        <input type="text" placeholder="Product Description" required
                            name="description" value={productData.description} onChange={(e) => handleChange(e, 'description')}/>
                    </div>
                    <div className="addProductInput">
                        <input type="number" placeholder="Product Price" required
                            name="price" value={productData.price} onChange={(e) => handleChange(e, 'price')} />
                    </div>
                    <div className="addProductInput">
                        <input type="file" onChange={(e) => handleChange(e, 'image')}/>
                    </div>
                    <div className="addProductInput">
                        <Button type="submit" className="btn btn-success">Update Product</Button>
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

export default UpdateProduct;
