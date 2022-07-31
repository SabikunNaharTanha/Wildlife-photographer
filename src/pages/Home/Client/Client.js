import React from 'react';

const Client = ({ client }) => {
    const { name, img, ratings } = client;
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card p-2 " style={{ width: "18rem" }}>
                <img src={img} height='250px' width='350px' className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className="card-text m-0"><small>Satisfactory to work with Enchantress Nature</small></p>
                    <p > <small>Ratings: {ratings}</small> </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>






    );
};

export default Client;