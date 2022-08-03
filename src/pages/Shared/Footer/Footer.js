import React from 'react';
import { Card } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5 w-100 bg-secondary p-4 text-center'>
            <Card.Footer className="text-white">Copyright @ {year}</Card.Footer>
        </div>

    );
};

export default Footer;