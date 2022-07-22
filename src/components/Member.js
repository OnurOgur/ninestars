import { Col } from 'react-bootstrap';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function Member({ teamImg, teamAlt, name, title }) {
    return (
        <Col md={3}>
            <div className="member">
                <div className="img-wrapper">
                    <img src={teamImg} alt={teamAlt} className="img-fluid" />
                </div>
                <ul className="social-media">
                    <li><a href="/"><BsTwitter /></a></li>
                    <li><a href="/"><BsFacebook /></a></li>
                    <li><a href="/"><BsInstagram /></a></li>
                    <li><a href="/"><BsLinkedin /></a></li>
                </ul>
                <div className="member-info">
                    <h5>{ name }</h5>
                    <em>{ title }</em>
                </div>
            </div>
        </Col>
    )
}

export default Member