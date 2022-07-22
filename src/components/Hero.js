import { Container, Row, Col } from 'react-bootstrap';
import heroImg from '../assets/img/hero-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero section-padding bg-soft pt-0" id="hero">
            <Container>
                <Row>
                    <Col md={6} className="hero-content order-1 order-md-0">
                        <TrackVisibility once>
                        {({ isVisible }) => isVisible &&
                            <div className={isVisible ? "animate__animated animate__fadeInLeft" : null}>
                                <h1>{t('mainHeader')}</h1>
                                <p className="lead">{t('mainP')}</p>
                                <button id="#getStarted" className="btn btn-md-lg">{t('getStarted')}</button>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col md={6} className="hero-img order-0 order-md-1">
                        <img src={heroImg} alt="Hero" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero