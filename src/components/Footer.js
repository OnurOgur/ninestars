import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronRight } from "react-icons/bs";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsSkype } from "react-icons/bs";

function Footer() {
    return (
		<footer id="footer" className="section-padding">
			<Container>
				<Row>
					<Col md={3}>
						<div className="logo">Ninestars</div>
						<span>
							A108 Adam Street
							<br />New York, NY 535022
							<br/>United States
						</span>
						<div className="mt-4">
							<strong>Phone:</strong><a href="tel:+155895548855"> +1 5589 55488 55</a>	
						</div>
						<div>
							<strong>Email:</strong><a href="mailto:info@example.com"> info@example.com</a>
						</div>
					</Col>
					<Col md={3}>
						<h5>Useful Links</h5>
						<ul className="footer-menu">
							<li><a href="/"><BsChevronRight />Home</a></li>
							<li><a href="/"><BsChevronRight />About Us</a></li>
							<li><a href="/"><BsChevronRight />Services</a></li>
							<li><a href="/"><BsChevronRight />Terms of Service</a></li>
							<li><a href="/"><BsChevronRight />Privacy Policy</a></li>
						</ul>
					</Col>
					<Col md={3}>
						<h5>Our Services</h5>
						<ul className="footer-menu">
							<li><a href="/"><BsChevronRight />Web Design</a></li>
							<li><a href="/"><BsChevronRight />Web Development</a></li>
							<li><a href="/"><BsChevronRight />Product Management</a></li>
							<li><a href="/"><BsChevronRight />Marketing</a></li>
							<li><a href="/"><BsChevronRight />Graphic Design</a></li>
						</ul>
					</Col>
					<Col md={3}>
						<h5>Our Social Networks</h5>
						<p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
						<ul className="social-media">
							<li><a href="/"><BsTwitter /></a></li>
							<li><a href="/"><BsFacebook /></a></li>
							<li><a href="/"><BsInstagram /></a></li>
							<li><a href="/"><BsLinkedin /></a></li>
							<li><a href="/"><BsSkype /></a></li>
						</ul>
					</Col>
				</Row>
			</Container>
			<section className="copyright py-4 bg-soft">
				<Container>
					<Row>
						<Col md={6}>© Copyright <strong>Ninestars</strong>. All Rights Reserved</Col>
						<Col md={6} className="text-md-end">Designed by <span className="text-orange">BootstrapMade</span></Col>
					</Row>
				</Container>
			</section>
		</footer>
    )
}

export default Footer