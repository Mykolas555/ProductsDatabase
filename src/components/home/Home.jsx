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
                } else {console.error(response.error);}
            } catch (error) { console.error(error); }
        } 
        fetchData();
    }, []);
    
    return (
        <Container className='home'>
            <Row>
                <Col className='home__article text-center mt-4'>
                    <h2>Welcome to Products Database</h2>
                    <article className='mt-5'>Welcome to our Products Database! Discover a vast array of products in one centralized hub. From detailed descriptions to pricing information, we've got you covered. Navigate effortlessly with our user-friendly interface and find what you need with powerful search options. Make informed decisions with product reviews. Dive into the world of products at your fingertips – explore, compare, and make smarter choices with our reliable database.</article>
                </Col>
            </Row>
            <Row className='mt-5'>
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
