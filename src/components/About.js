import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../assets/img/about-img.svg';
import { BsReceipt } from 'react-icons/bs';
import { IoCubeOutline } from "react-icons/io5";
import "animate.css";
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    
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
                                    <h2>{t('aboutUs')}</h2>
                                    <p className="lead">{t('aboutText')}</p>
                                    <Row>
                                        <Col md={6}>
                                            <BsReceipt className="icon" />
                                            <h5>{t('design')}</h5>
                                            <p className="lead">{t('designDesc')}</p>
                                        </Col>
                                        <Col md={6}>
                                            <IoCubeOutline className="icon" />
                                            <h5>{t('development')}</h5>
                                            <p className="lead">{t('developmentDesc')}</p>
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