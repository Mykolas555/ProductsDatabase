import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductsItem = ({ product }) => {
    const symbolLengtCheck = (description, maxLength) => {
        // Check if the description is not null or undefined
        if (description && description.trim) {
            // Check if the description is not empty
            const hasData = description.trim().length > 0;

            // If there is data, substring the description and add '...'
            return hasData ? description.substring(0, maxLength) + '...' : description;
        } else {
            // Handle the case where description is null or undefined
            return '';
        }
    };

    const shortDesc = symbolLengtCheck(product.description, 100);

    return (
        <Card>
            <Card.Header style={{fontSize: '1.5rem'}}>{product.title}</Card.Header>
            <Card.Body>
                <Card.Text>{shortDesc}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProductsItem;
