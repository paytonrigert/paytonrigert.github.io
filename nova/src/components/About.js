import React, { useState } from 'react';
import './Css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import publicHealthImage from '../images/publicHealth.jpeg';

const About = () => {
    const [selectedBullet, setSelectedBullet] = useState(1);

    const handleClick = (bulletNumber) => {
        setSelectedBullet(selectedBullet === bulletNumber ? 0 : bulletNumber);
    };

    return (
        <section className="about" id="about">
            <Container>
                <h3>About</h3>
                <Row>
                    <Col md={6} className="bullet-points">
                        <div className="bullet-point" onClick={() => handleClick(1)}>
                            <h5>
                                {selectedBullet === 1 ? <MdExpandLess /> : <MdExpandMore />}
                                Bullet Point 1
                            </h5>
                            {selectedBullet === 1 && (
                                <p>
                                    This is the description for bullet point 1. Add your content
                                    here.
                                </p>
                            )}
                        </div>
                        <div className="bullet-point" onClick={() => handleClick(2)}>
                            <h5>
                                {selectedBullet === 2 ? <MdExpandLess /> : <MdExpandMore />}
                                Bullet Point 2
                            </h5>
                            {selectedBullet === 2 && (
                                <p>
                                    This is the description for bullet point 2. Add your content
                                    here.
                                </p>
                            )}
                        </div>
                        <div className="bullet-point" onClick={() => handleClick(3)}>
                            <h5>
                                {selectedBullet === 3 ? <MdExpandLess /> : <MdExpandMore />}
                                Bullet Point 3
                            </h5>
                            {selectedBullet === 3 && (
                                <p>
                                    This is the description for bullet point 3. Add your content
                                    here.
                                </p>
                            )}
                        </div>
                    </Col>
                    <Col md={6} className="image-col">
                        <img
                            src={publicHealthImage}
                            alt="publicHealth"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
