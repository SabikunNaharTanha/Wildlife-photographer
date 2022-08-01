import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, picture, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={picture} width='300px' height='220px' alt="" />
            <h5 className='text-primary'>{name}</h5>
            <p>Price: ${price}</p>
            <p><small>Description: {description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary m-3">Explore {name}</button>


        </div>
    );
};

export default Service;