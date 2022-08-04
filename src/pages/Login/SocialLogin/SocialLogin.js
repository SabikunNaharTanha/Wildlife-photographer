import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../../../Images/logo/g1.png';
import Github from '../../../Images/logo/gittu1.png';
import Loading from '../../Shared/Loading/Loading';
// import Facebook from '../../../Images/logo/f1.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} </p>

    }
    if (loading || loading1) {
        return <Loading></Loading>
    }


    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='m-2 text-secondary'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
            </div>

            {/* To keep the button if the error occurs */}
            {errorElement}
            <div className='text-center m-3'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50'>
                    <img src={Google} style={{ width: '25px' }} alt="" />
                    <span className='px-2'>Google Sign In</span></button>
            </div>


            <div className='text-center m-3'>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50'>
                    <img src={Github} style={{ width: '25px' }} alt="" />
                    <span className='px-2'>Github Sign In</span></button>
            </div>


            {/* <div className='text-center m-3'>
                <button className='btn btn-info w-50'>
                    <img src={Facebook} style={{ width: '50px' }} alt="" />
                    <span className=''>Facebook Sign In</span></button>
            </div> */}




        </div>
    );
};

export default SocialLogin;