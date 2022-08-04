import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    // To toggle the state of the checkbox
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        console.log('Updated profile');
        navigate('/home');
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

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Check className={agree ? '' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" name="terms" label="Accept Enchantress Nature Terms and Conditions" />
                </Form.Group>
                <div className='text-center'>
                    <Button className='w-50' disabled={!agree} variant="primary" type="submit" value="Register" >
                        Register
                    </Button>
                </div>


            </Form>
            <p className='mt-3'>Already Registered? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}> Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register; 