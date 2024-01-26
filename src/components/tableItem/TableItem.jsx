import React from 'react';
import './tableItem.scss';
import { useNavigate } from 'react-router-dom';

const TableItem = ({ product, onDelete }) => {
    const navigate = useNavigate();
    const handleDelete = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete the product?");
        if (isConfirmed) {
            onDelete(product.id);
        }
    };

    const handleUpdate = async () => {
        navigate(`/ProductsDatabase/yourProducts/updateProduct/${product.id}`);
    };

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.image_url}</td>
            <td><button onClick={handleUpdate} className='btn btn-outline-warning'>Update</button></td>
            <td><button onClick={handleDelete} className='btn btn-outline-danger'>Delete</button></td>
        </tr>
    );
};

export default TableItem;
