import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p className='p-4 mt-5 bg-dark text-white text-center'>Copyright @ {year}</p>
        </div>
    );
};

export default Footer;