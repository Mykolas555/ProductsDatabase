import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeProductCard from '../homeProductCard/HomeProductCard';
import { getAllDataForHomePage } from '../../services/fetchService'

const Home = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllDataForHomePage();
                if (response.status) {
                    setProductData(response.data.data);
                } else {
                    console.error('Error:', response.error);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, []);
    
    return (
        <Container className='home'>
            <Row>
                <Col className='home__article text-center mt-4'>
                    <h2>Welcome to Products Database</h2>
                </Col>
            </Row>
            <Row className='mt-3'>
                {productData.map(product => (
                    <Col key={product.id} lg={3} sm={12} className='d-flex justify-content-center mb-4'>
                        <HomeProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
