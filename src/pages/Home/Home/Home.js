import React from 'react';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Clients></Clients>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Home;