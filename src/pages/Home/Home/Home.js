import React from 'react';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Services></Services>
            <Clients></Clients>
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Home;