import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    // To sign in with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // to keep the reference of the value in the text boxes
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    // To prevent the reload of the page
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center m-4 text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Login
                </Button>

            </Form>
            <p className='mt-3'>New to Enchantress Nature? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}> Please Register</Link> </p>
        </div>
    );
};

export default Login;