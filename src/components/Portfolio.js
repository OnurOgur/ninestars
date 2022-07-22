import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import categoryList from './categoryList';

function Portfolio() {

    const [items, setItems] = useState(categoryList); 

    const filter = (categItem) => {
        const updatedItems = categoryList.filter((curItem) => {
            return curItem.category === categItem
        });
        setItems(updatedItems)
    }

    return (
        <section id="portfolio" className="portfolio section-padding">
            <Container>
                <Row>
                    <Col sm={12}>
                        <h3>Portfolio</h3>
                        <h2>Check out our beautifull portfolio</h2>
                        <div className="line"></div>
                        <ul className="categories">
                            <li><button onClick={() => setItems(categoryList)}>All</button></li>
                            <li><button onClick={() => filter("app")}>App</button></li>
                            <li><button onClick={() => filter("design")}>Design</button></li>
                            <li><button onClick={() => filter("web")}>Web</button></li>
                        </ul>
                    </Col>
                    {
                        items.map((item, i) => {
                            const { image, portfolioAlt, title, description } = item

                            return (
                                <Card key={i} portfolioImg={image} alt={portfolioAlt} title={title} description={description} />
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio