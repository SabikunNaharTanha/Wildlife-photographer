import React from 'react';
import Google from '../../../Images/logo/g1.png';
import Github from '../../../Images/logo/gittu1.png';
import Facebook from '../../../Images/logo/f1.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='m-2 text-secondary'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
            </div>

            <div className='text-center m-3'>
                <button className='btn btn-info w-50'>
                    <img src={Google} style={{ width: '25px' }} alt="" />
                    <span className='px-2'>Google Sign In</span></button>
            </div>
            <div className='text-center m-3'>
                <button className='btn btn-info w-50'>
                    <img src={Github} style={{ width: '25px' }} alt="" />
                    <span className='px-2'>Github Sign In</span></button>
            </div>
            <div className='text-center m-3'>
                <button className='btn btn-info w-50'>
                    <img src={Facebook} style={{ width: '50px' }} alt="" />
                    <span className=''>Facebook Sign In</span></button>
            </div>




        </div>
    );
};

export default SocialLogin;