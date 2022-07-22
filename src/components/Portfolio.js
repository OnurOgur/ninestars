import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import categoryList from './categoryList';
import { useTranslation } from 'react-i18next';

function Portfolio() {
    const { t } = useTranslation();

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
                        <h3>{t('portfolio')}</h3>
                        <h2>{t('portfolioH2')}</h2>
                        <div className="line"></div>
                        <ul className="categories">
                            <li><button onClick={() => setItems(categoryList)}>{t('all')}</button></li>
                            <li><button onClick={() => filter("app")}>{t('app')}</button></li>
                            <li><button onClick={() => filter("design")}>{t('design')}</button></li>
                            <li><button onClick={() => filter("web")}>{t('web')}</button></li>
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