import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/ProfilePics/personal-photo.jpg/100px180" />
                    <Card.Body>
                        <Card.Title>Mohammad Harb</Card.Title>
                        <Card.Text>
                            28 years old. Holding a bachelor's degree in industrial engineering from Jordan university of
                            science & technology. Passionate about environment, logistics, and technology. Being well-equipped
                            in these three majors is reason behind learning programming.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/ProfilePics/personal-photo.jpg/100px180" />
                    <Card.Body>
                        <Card.Title>Jamal Eldeen Wari </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/ProfilePics/personal-photo.jpg/100px180" />
                    <Card.Body>
                        <Card.Title>Bashar Aqel</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/ProfilePics/personal-photo.jpg/100px180" />
                    <Card.Body>
                        <Card.Title>Yazeed Al-Shami</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default AboutUs
