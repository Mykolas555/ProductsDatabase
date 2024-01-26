import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { getProductByID } from '../../services/fetchService';
import './productInfo.scss';

const ProductInfo = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductByID(id);
                setProduct(data);
            } catch (error) {console.error(error);}
        };
        fetchData();
    }, [id]);
    
    return (
            <Container className="products">
                {product.data && (
                    <>
                        <Row className="products__row" >
                            <Col className="products__info text-center">
                                <h3>{product.data.title}</h3>
                            </Col>
                        </Row>
                        <Row className="products__row">
                            <Col className="products__info text-center">
                                <img src={product.data.image_url} alt={product.title} />
                            </Col>
                        </Row>
                        <Row className="products__row">
                            <Col className="products__info text-center">
                                <h4>Price: ${product.data.price}</h4>
                            </Col>
                        </Row>
                        <Row className="products__row">
                            <Col className="products__info text-center">
                                <p>Description: {product.data.description}</p>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        );
}

export default ProductInfo;
