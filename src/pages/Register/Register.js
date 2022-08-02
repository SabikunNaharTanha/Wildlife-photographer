import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center m-4 text-primary'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Register" >
                    Register
                </Button>

            </Form>
            <p className='mt-3'>Already Registered? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}> Please Login</Link> </p>
        </div>
    );
};

export default Register; 