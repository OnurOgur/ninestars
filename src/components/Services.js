import { Container, Row, Col } from 'react-bootstrap';
import { FaDribbble } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();

    return (
        <section id="services" className="services section-padding bg-soft">
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3>{t('services')}</h3>
                        <h2>{t('servicesH2')}</h2>
                        <div className="line"></div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>{t('service1')}</h5>
                            <p className="lead">{t('service1Desc')}</p>
                        </div>            
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>{t('service2')}</h5>
                            <p className="lead">{t('service2Desc')}</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>{t('service3')}</h5>
                            <p className="lead">{t('service3Desc')}</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>{t('service4')}</h5>
                            <p className="lead">{t('service4Desc')}</p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

export default Services