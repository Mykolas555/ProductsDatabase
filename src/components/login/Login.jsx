import { Container } from 'react-bootstrap';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../../services/authService';

const Login = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/ProductsDatabase/register')
    };

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        loginUser(credentials, navigate);        
    }

  return (
    <Container className="login">
        <div className='login__content'>
            <h3>Login</h3>
            <form className='login__form' onSubmit={submitHandler}>
                <div>
                    <input type="text" placeholder='Email' className='border-0 rounded-pill text-center mb-2'
                    name='email' value={credentials.email} onChange={handleInputChange}/>
                </div>
                <div>
                    <input type="password" placeholder='Password' className='border-0 rounded-pill text-center mb-2'
                    name="password" value={credentials.password} onChange={handleInputChange} />
                </div>
                <div className='d-flex align-items-center justify-content-center mb-2'> 
                    <button type='submit' className='btn btn-success'>Login</button>
                </div>
                <div className='d-flex align-items-center justify-content-center registerLink'>
                    <p>Dont have account? <span onClick={handleRegisterClick}>Register</span></p>
                </div>
            </form>
        </div>        
    </Container>
  );
};

export default Login;
