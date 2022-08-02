import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='m-3 text-primary text-center'>Firebase Blogs</h2>
            {/* Question 01 */}
            <div className='w-75 mx-auto'>
                <h5 className='mt-5'> Q-1. Difference Between Authorization and Authentication </h5>
                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Authentication</th>
                            <th>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Authentication is checked for the identity of the user in order to provide access to the system</td>
                            <td>Authorization is checked for a user to give particular access to the particular resources.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>For example, when a person tries to login to the system, it checks if he is registered before to give access to the system. This is authentication of the user by the system.</td>
                            <td>For example, a user can be employee or visitor or admin, so the system needs to check the authorization of the person before giving access to specific resources.</td>
                        </tr>

                    </tbody>
                </Table>

            </div>
            {/* Question 02 */}

            <div className="mx-auto w-75 m-5">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Q-2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Firebase is used for authentication purpose in the system while using react. Using firebase the authorization and authentication of the users in the system can be performed. The users can be authenticated using several medias like Github, Facebook, Email-Password etc.
                            <br />
                            For authentication purpose, we can use React-Firebase-Hooks (Github site available online) which makes the authentication steps more easier.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Q-3. What other services does firebase provide other than authentication</Accordion.Header>
                        <Accordion.Body>
                            Firebase allows us to Host the site using Firebase Hosting. We can retrieve the user if the password is forgot by the user. It provides us storage for the contents. It also allows to cloud messaging for the users.

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* Question 03 */}



        </div>
    );
};

export default Blogs;