import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import brand1 from '../assets/img/brands/client-1.png';
import brand2 from '../assets/img/brands/client-2.png';
import brand3 from '../assets/img/brands/client-3.png';
import brand4 from '../assets/img/brands/client-4.png';
import brand5 from '../assets/img/brands/client-5.png';
import brand6 from '../assets/img/brands/client-6.png';
import brand7 from '../assets/img/brands/client-7.png';
import brand8 from '../assets/img/brands/client-8.png';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

function Brands() {
    return (
        <section id="brands" className="brands section-padding">
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <h3>Clients</h3>
                        <h2>They trusted us</h2>
                        <div className="line"></div>
                    </Col>
                    <Col sm={12}>
                        <Carousel 
                            arrows={false} 
                            showDots={true}
                            autoPlay={true}
                            autoPlaySpeed={2000} 
                            responsive={responsive} 
                            infinite={true}
                        >
                            <div><img src={brand1} alt="Brand 1" className="img-fluid" /></div>
                            <div><img src={brand2} alt="Brand 2" className="img-fluid" /></div>
                            <div><img src={brand3} alt="Brand 3" className="img-fluid" /></div>
                            <div><img src={brand4} alt="Brand 4" className="img-fluid" /></div>
                            <div><img src={brand5} alt="Brand 5" className="img-fluid" /></div>
                            <div><img src={brand6} alt="Brand 6" className="img-fluid" /></div>
                            <div><img src={brand7} alt="Brand 7" className="img-fluid" /></div>
                            <div><img src={brand8} alt="Brand 8" className="img-fluid" /></div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Brands