import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, picture, description } = service;
    return (
        <div className='service'>
            <img src={picture} width='300px' height='220px' alt="" />
            <h5 className='text-primary'>{name}</h5>
            <p>Price: ${price}</p>
            <p><small>Description: {description}</small></p>
            <a href="#" className="btn btn-primary m-3">Explore {name}</a>


        </div>
    );
};

export default Service;