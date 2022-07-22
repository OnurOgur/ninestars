import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

function Faq() {
    const { t } = useTranslation();
    const $ddBtn = $('.accordion-header')
    const $dd = $($ddBtn.data('bs-toggle'))
    $ddBtn.on('click', () => {
        $dd.toggleClass('d-none')
    })
  return (
    <section className="faq section-padding bg-soft">
        <Container>
            <Row>
                <Col>
                    <h3 className='text-center'>{t('faq')}</h3>
                    <h2 className='text-center'>{t('faqH2')}</h2>
                    <div className="line"></div>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('faq1')}</Accordion.Header>
                            <Accordion.Body>{t('faq1Desc')}</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>{t('faq2')}</Accordion.Header>
                            <Accordion.Body>{t('faq2Desc')}</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>{t('faq3')}</Accordion.Header>
                            <Accordion.Body>{t('faq3Desc')}</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>{t('faq4')}</Accordion.Header>
                            <Accordion.Body>{t('faq4Desc')}</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>{t('faq5')}</Accordion.Header>
                            <Accordion.Body>{t('faq5Desc')}</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Faq