import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import TableItem from '../tableItem/TableItem';
import { getUserProducts, deleteUserProduct } from '../../services/crudService';
import { Link } from 'react-router-dom';

const Table = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserProducts();
                setProducts(data.data.data);
            } catch (error) { console.error( error); }
        };
        fetchData();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await deleteUserProduct(productId);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
        } catch (err) {console.error(err);}
    };

    return (
        <Container className='table mt-3'>
            <div className='table__header d-flex justify-content-between'>
                <h6 className='table__header' style={{ fontSize: '2rem' }}>Your products</h6>
                <Link to="/ProductsDatabase/yourProducts/addProduct">
                    <Button className='btn btn-success addButtonTable'>Add Product</Button>
                </Link>
            </div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {products.map((product) => (
                        <TableItem key={product.id} product={product} onDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default Table;
