import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    let errorElement;
    // To sign in with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Reset Password email
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
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
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center m-4 text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className='text-center'>
                    <Button className='w-50 mb-2' variant="primary" type="submit" >
                        Login
                    </Button>
                </div>


            </Form>

            {errorElement}

            <p className='mt-3'>New to Enchantress Nature? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}> Please Register</Link> </p>
            <p className='mt-3'>Forgot Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;