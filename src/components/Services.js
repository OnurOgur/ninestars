import { Container, Row, Col } from 'react-bootstrap';
import { FaDribbble } from "react-icons/fa";

function Services() {
    return (
        <section id="services" className="services section-padding bg-soft">
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3>Services</h3>
                        <h2>Check out the great services we offer</h2>
                        <div className="line"></div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>Service 1</h5>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et quo provident sint, minus nisi.</p>
                        </div>            
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>Service 2</h5>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et quo provident sint, minus nisi.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>Service 3</h5>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et quo provident sint, minus nisi.</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className="service">
                            <FaDribbble className="icon" />
                            <h5>Service 4</h5>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et quo provident sint, minus nisi.</p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

export default Services