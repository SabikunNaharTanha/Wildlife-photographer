import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.jpg';
import banner2 from '../../../Images/Banner/banner2.jpg';
import banner3 from '../../../Images/Banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="500px"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Chita in his Dream</h3>
                    <p>This dream loving chita were captured in Amazon forest.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="450px"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Elephants on a Tour</h3>
                    <p>A group of elephants is out on a tour in under the open sky.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="450px"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Naughty Siblings</h3>
                    <p>
                        These cuties are on the full mood to play and fight.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;