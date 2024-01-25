import React from 'react';
import { Card } from 'react-bootstrap';

const HomeProductCard = ({ product }) => {

    const symbolLengtCheck = (description, maxLength) => {
        return description.length > maxLength
            ? description.substring(0, maxLength) + '...'
            : description;
    };

    const shortDesc = symbolLengtCheck(product.description, 50);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image_url} alt={product.title} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{shortDesc}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default HomeProductCard;
