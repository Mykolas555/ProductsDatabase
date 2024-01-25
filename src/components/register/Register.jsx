import { Container } from 'react-bootstrap';
import './register.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../services/authService';

const Register = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/ProductsDatabase/login')
    };

    const [credentials, setCredentials] = useState({
        name : '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if (credentials.password !== credentials.password_confirmation) {
            alert("Passwords don't match");
            return;
        }
        registerUser( credentials, navigate )
    }

  return (
    <Container className="register">
        <div className='register__content'>
            <h3>Register</h3>
            <form className='register__form' onSubmit={submitHandler}>
                <div>
                    <input type="text" placeholder='Name' className='border-0 rounded-pill text-center mb-2'
                    name="name" value={credentials.name} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" placeholder='Email' className='border-0 rounded-pill text-center mb-2'
                    name="email" value={credentials.email} onChange={handleChange} />
                </div>
                <div>
                    <input type="password" placeholder='Password'  className='border-0 rounded-pill text-center mb-2'
                    name="password" value={credentials.password} onChange={handleChange} />
                </div>
                <div>
                    <input type="password" placeholder='Repeat password' className='border-0 rounded-pill text-center mb-2'
                    name="password_confirmation" value={credentials.password_confirmation} onChange={handleChange} />
                </div>
                <div className='d-flex align-items-center justify-content-center mb-2'> 
                    <button type='submit' className='btn btn-success'>Register</button>
                </div>
                <div className='d-flex align-items-center justify-content-center loginLink'>
                    <p>Have an account? <span onClick={handleLoginClick}>Login</span></p>
                </div>
            </form>
        </div>        
    </Container>
  );
};

export default Register;
