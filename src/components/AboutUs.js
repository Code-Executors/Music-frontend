import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class AboutUs extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Mohammad Harb</Card.Title>
                                    <Card.Text>
                                        28 years old. Holding a bachelor's degree in industrial engineering from Jordan university of science & technology. Passionate about environment, logistics, and technology.
                                        Being well-equipped in these three majors is the reason behind learning programming.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default AboutUs
