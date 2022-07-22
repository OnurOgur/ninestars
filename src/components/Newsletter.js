import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Newsletter() {
  return (
    <section id="newsletter" className="newsletter section-padding bg-soft">
        <Container>
            <Row>
                <Col sm={7} className="m-auto">
                    <h3>Join Our Newsletter</h3>
                    <p className='lead'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action="">
                        <Form.Group>
                            <Form.Control type="email" placeholder="Your Email" className="form-control-lg" />
                        </Form.Group>
                        <Button className="btn" type="submit">Submit</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter