import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getAllDataForProductsPage } from '../../services/fetchService';
import ProductsItem from '../productsItem/ProductsItem';

const Products = () => {
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesCount, setPagesCount] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllDataForProductsPage(currentPage);
                if (response.status) {
                    setProductData(response.data.data);
                    setPagesCount(response.data.last_page);
                } else {console.error(response.error);}
            } catch (error) { console.error(error);}
        };
        fetchData();
    }, [currentPage]);

    const handlePageClick = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Container className="mt-3">
            <h2 className="text-center">All Products In Database</h2>
            {productData.map((product) => (
                <Row key={product.id} className='mt-3'>
                    <Col>
                        <ProductsItem product={product} />
                    </Col>
                </Row>
            ))}
            <Row>
                <Col>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {Array.from({ length: pagesCount }, (_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <p className="page-link" onClick={() => handlePageClick(index + 1)}>
                                        {index + 1}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Products;
