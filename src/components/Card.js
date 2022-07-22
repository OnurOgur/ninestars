import { Col } from 'react-bootstrap'
import { FaLink, FaPlus } from "react-icons/fa";

function Card( { portfolioImg, portfolioAlt, title, description }) {
    return (
        <Col md={4} className="filter-item">
            <div className="portfolio-card">
                <img src={portfolioImg} alt={portfolioAlt} className="img-fluid" />
                <div className="icons">
                    <a href="/"><FaLink /></a>
                    <a href="/"><FaPlus /></a>
                </div>
                <div className="content">
                    <h5>{ title }</h5>
                    <p>{ description }</p>
                </div>
            </div>
        </Col>
    )
}

export default Card