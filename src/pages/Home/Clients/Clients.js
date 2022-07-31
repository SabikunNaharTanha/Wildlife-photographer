import React from 'react';
import './Client.css';
import client1 from '../../../Images/Client/C1.jpg';
import client2 from '../../../Images/Client/C2.jpg';
import client3 from '../../../Images/Client/C3.jpg';
import client4 from '../../../Images/Client/C4.jpg';
import client5 from '../../../Images/Client/C5.jpg';
import client6 from '../../../Images/Client/C6.jpg';
import Client from '../Client/Client';

const clients = [
    { id: 1, name: 'William May', img: client1, ratings: 4 },
    { id: 2, name: 'August May', img: client2, ratings: 3 },
    { id: 3, name: 'June Kate', img: client3, ratings: 3.5 },
    { id: 4, name: 'William Smith', img: client4, ratings: 4.5 },
    { id: 5, name: 'Cagla Ulus', img: client5, ratings: 4 },
    { id: 6, name: 'Ema Watson', img: client6, ratings: 5 }
]


const Clients = () => {
    return (
        <div className='container'>
            <h2 className='client-title'>Client Reviews</h2>
            <div className="row" >
                {
                    clients.map(client => <Client
                        key={client.id}
                        client={client}
                    ></Client>)
                }
            </div>

        </div >
    );
};

export default Clients;