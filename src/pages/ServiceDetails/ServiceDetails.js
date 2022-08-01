import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <p>CheckOut :{serviceId}</p>
        </div>
    );
};

export default ServiceDetails;