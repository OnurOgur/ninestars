import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronRight } from "react-icons/bs";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsSkype } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

function Footer() {
	const { t } = useTranslation();

    return (
		<footer id="footer" className="section-padding">
			<Container>
				<Row>
					<Col md={3}>
						<div className="logo"><a href="#hero">Ninestars</a></div>
						<span>
							A108 Adam Street<br/>
							New York, NY 535022<br/>
							United States
						</span>
						<div className="mt-4">
							<strong>{t('phone')} </strong><a href="tel:+155895548855">{t('callNumber')}</a>	
						</div>
						<div>
							<strong>{t('email')}: </strong><a href="mailto:info@example.com">{t('emailDesc')}</a>
						</div>
					</Col>
					<Col md={3}>
						<h5>{t('usefulLinks')}</h5>
						<ul className="footer-menu">
							<li><a href="#hero"><BsChevronRight />{t('home')}</a></li>
							<li><a href="#aboutUs"><BsChevronRight />{t('aboutUs')}</a></li>
							<li><a href="#services"><BsChevronRight />{t('services')}</a></li>
							<li><a href="#hero"><BsChevronRight />{t('termsOfService')}</a></li>
							<li><a href="#hero"><BsChevronRight />{t('privacyPolicy')}</a></li>
						</ul>
					</Col>
					<Col md={3}>
						<h5>{t('ourServices')}</h5>
						<ul className="footer-menu">
							<li><a href="#hero"><BsChevronRight />{t('webDesign')}</a></li>
							<li><a href="#hero"><BsChevronRight />{t('webDevelopment')}</a></li>
							<li><a href="#hero"><BsChevronRight />{t('productManagement')}</a></li>
							<li><a href="#hero"><BsChevronRight />{t('marketing')}</a></li>
							<li><a href="#hero"><BsChevronRight />{t('graphicDesign')}</a></li>
						</ul>
					</Col>
					<Col md={3}>
						<h5>{t('ourSocialNetworks')}</h5>
						<p>{t('ourSocialNetworksDesc')}</p>
						<ul className="social-media">
							<li><a href="#hero"><BsTwitter /></a></li>
							<li><a href="#hero"><BsFacebook /></a></li>
							<li><a href="#hero"><BsInstagram /></a></li>
							<li><a href="#hero"><BsLinkedin /></a></li>
							<li><a href="#hero"><BsSkype /></a></li>
						</ul>
					</Col>
				</Row>
			</Container>
			<section className="copyright py-4 bg-soft">
				<Container>
					<Row>
						<Col md={6}>{t('copyright')}</Col>
						<Col md={6} className="text-md-end">{t('designedBy')}</Col>
					</Row>
				</Container>
			</section>
		</footer>
    )
}

export default Footer