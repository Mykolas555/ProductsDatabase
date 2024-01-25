import React, { useState, useEffect } from 'react';
import { TextCenter } from 'react-bootstrap-icons';
import './header.scss';
import { Link } from 'react-router-dom';
import User from '../user/User';

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const userName = localStorage.getItem('UserName');

    const handleToggleClick = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleLinkClick = () => {
        setIsNavbarOpen(false);
    };

    const handleClickOutside = (event) => {
        const navbar = document.querySelector('.navbar');
        if (navbar && !navbar.contains(event.target)) {
            setIsNavbarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${isNavbarOpen ? 'show' : ''}`}>
            <div className="container-fluid">
                <h6 className="navbar-brand">Products Database</h6>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-controls="navbarNav"
                    data-bs-target="#navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleToggleClick}
                >
                    <TextCenter />
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/ProductsDatabase/home" className="nav-link" onClick={handleLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ProductsDatabase/products" className="nav-link" onClick={handleLinkClick}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <form class="d-flex headerForm" role="search">
                                <input class="form-control me-2" type="search" placeholder="Enter product name" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </li>
                        <User userName={userName} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;