import React from 'react';
import { Button, Card } from 'react-bootstrap';
import me from '../../Images/About/ab.jpg';

const About = () => {
    return (
        <div>
            <h2 className='m-3 text-secondary text-center'>About Enchantress Forest</h2>

            <Card className="text-center w-50 mx-auto m-4">
                <Card.Header>Owner Information</Card.Header>
                <Card.Img variant="top" height='550px' src={me} />
                <Card.Body>
                    <Card.Title>Sabikun Nahar Tanha</Card.Title>
                    <Card.Text>
                        Hello!
                        I am highly passionate to work with the wildlife photography. In this site, you will find several unique and chosen photography that were captured by me on different places of the world. <br /> I am passionate to work as a photographer, and explore more. If you are interested to work with Enchantress Forest or need to book such unique images for your company do contact!
                        <br /><br />
                        Thank you for visiting. Have a good day!
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">Created on 2022</Card.Footer>
            </Card>

        </div>
    );
};

export default About;