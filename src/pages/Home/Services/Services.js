import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div id='services' className='container'>
            <h2 className='services-title'>Explore the Gallery</h2>

            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default Services;