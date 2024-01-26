import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

const User = ( {userName} ) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const userToken = localStorage.getItem('UserToken');
        const loggedIn = !!userToken;
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLogout = () => {
        logout(navigate);
    };

    return (
        <>
            <li className="nav-item">
                {isLoggedIn ? (
                    <div className="dropdown nav-link">
                        <button className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {userName}
                        </button>
                        <ul className="dropdown-menu text-center">
                            <li><Link to="/ProductsDatabase/yourProducts"><h5 style={{ color: 'black' }}>Your products</h5></Link></li>
                            <li><Link to="/ProductsDatabase/home"><h5 onClick={handleLogout} style={{ color: 'black' }}>Logout</h5></Link></li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/ProductsDatabase/login" className="nav-link">
                        <button className='btn btn-outline-warning'>Login</button>
                    </Link>
                )}
            </li>
        </>
    );
};

export default User;
