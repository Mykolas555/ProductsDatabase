import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ProductsItem = ({ product }) => {
    const symbolLengthCheck = (description, maxLength) => {
        if (description && description.trim) {
            const hasData = description.trim().length > 0;
            return hasData ? description.substring(0, maxLength) + '...' : description;
        } else {
            return '';
        }
    };

    const shortDesc = symbolLengthCheck(product.description, 100);

    return (
        <Card>
            <Link to={`/ProductsDatabase/productInfo/${product.id}`}>
                <Card.Header style={{ fontSize: '1.5rem', textDecoration: "none" }}>#{product.id} {product.title}</Card.Header>
            </Link>
            <Card.Body>
                <Card.Text>{shortDesc}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductsItem;
