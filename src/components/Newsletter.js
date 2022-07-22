import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

function Newsletter() {
    const { t } = useTranslation();
  return (
    <section id="newsletter" className="newsletter section-padding bg-soft">
        <Container>
            <Row>
                <Col sm={7} className="m-auto">
                    <h3>{t('joinOurNewsletter')}</h3>
                    <p className='lead'>{t('joinOurNewsletterDesc')}</p>
                    <form action="">
                        <Form.Group>
                            <Form.Control type="email" placeholder={t('yourEmail')} className="form-control-lg" />
                        </Form.Group>
                        <Button className="btn" type="submit">{t('submit')}</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter