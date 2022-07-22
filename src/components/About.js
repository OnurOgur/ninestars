import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../assets/img/about-img.svg';
import { BsReceipt } from 'react-icons/bs';
import { IoCubeOutline } from "react-icons/io5";
import "animate.css";
import TrackVisibility from 'react-on-screen';

function About() {
    return (
        <section id="about" className="about section-padding">
            <Container>
                <Row>
                    <Col md={6}>
                        <TrackVisibility once>
                        {({ isVisible }) => isVisible &&
                            <div className={isVisible ? "animate__animated animate__fadeIn" : null}>
                                <img src={aboutImg} alt="About" className="img-fluid" />
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible &&
                                <div className={isVisible ? "animate__animated animate__fadeInUp" : null}>
                                    <h2>About Us</h2>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                                    <Row>
                                        <Col md={6}>
                                            <BsReceipt className="icon" />
                                            <h5>Corporis voluptates sit</h5>
                                            <p className="lead">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </Col>
                                        <Col md={6}>
                                            <IoCubeOutline className="icon" />
                                            <h5>Ullamco laboris nisi</h5>
                                            <p className="lead">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </Col>
                                    </Row>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About