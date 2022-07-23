import { Container, Row, Col } from 'react-bootstrap'
import { BsList, BsChevronDown, BsX } from "react-icons/bs";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import englishFlag from '../assets/img/flags/english.png';
import spanishFlag from '../assets/img/flags/spanish.png';
import turkishFlag from '../assets/img/flags/turkish.png';

function NavBar() {
	const { t, i18n} = useTranslation();
	const [isActive, setActive] = useState(false);
	const [dropdownActive, setDropdownActive] = useState(false);
	const [showLangOptions, setShowLangOptions] = useState(false);
	const [selectedFlag, setSelectedFlag] = useState(englishFlag);
	const [langText, setLangText] = useState('EN');

	const toggleLangOptions = () => {
		setShowLangOptions(!showLangOptions)
	}

	const toggleClass = () => {
		setActive(!isActive)
	}
	const toggleDropdown = () => {
		if (window.innerWidth < 768) {
			setDropdownActive(!dropdownActive)
		}	
	}
	const changeLanguage = (lng, flag, text) => {
		i18n.changeLanguage(lng);
		setSelectedFlag(flag);
		setLangText(text);
	}

	return (
		<header>
			<Container>
				<Row>
					<Col xs={6} md={3}>
						<div className="logo"><a href="#hero">Ninestars</a></div>						
					</Col>
					<Col xs={6} className="d-flex justify-content-between d-md-none">
						<div className="lang-menu" onClick={toggleLangOptions}>
							<span>
								<img src={selectedFlag} alt={langText} className="img-fluid" />{langText}
							</span>
							<ul className={showLangOptions ? "active" : null}>
								<li onClick={() => changeLanguage('en', englishFlag, 'EN')}><img src={englishFlag} alt="English" className="img-fluid" />EN</li>
								<li onClick={() => changeLanguage('es', spanishFlag, 'ES')}><img src={spanishFlag} alt="Spanish" className="img-fluid" />ES</li>
								<li onClick={() => changeLanguage('tr', turkishFlag, 'TR')}><img src={turkishFlag} alt="Turkish" className="img-fluid" />TR</li>
							</ul>	
						</div>
						<div className="menu-toggler" onClick={toggleClass}>
							<BsList />
						</div>
					</Col>
					<Col md={9}>
						<nav className={isActive ? "active" : null}>
							<BsX className="menu-close d-block d-md-none" onClick={toggleClass} />
							<ul>
								<li><a href="#hero">{t('home')}</a></li>
								<li><a href="#aboutUs">{t('aboutUs')}</a></li>
								<li><a href="#services">{t('services')}</a></li>
								<li><a href="#portfolio">{t('portfolio')}</a></li>
								<li><a href="#team">{t('team')}</a></li>
								<li>
									<span onClick={toggleDropdown}>{t('dropdown')} <BsChevronDown /></span>
									<ul className={dropdownActive ? "active dropdown-list" : "dropdown-list"}>
										<li><a href="#hero">{t('subDropdown')}</a></li>
										<li><a href="#hero">{t('subDropdown')}</a></li>
										<li><a href="#hero">{t('subDropdown')}</a></li>
										<li><a href="#hero">{t('subDropdown')}</a></li>
										<li><a href="#hero">{t('subDropdown')}</a></li>
									</ul>
								</li>
								<li><a href="#contact">{t('contact')}</a></li>
								<li><a href="#about" className='btn rounded-pill'>{t('getStarted')}</a></li>
							</ul>
							<div className="lang-menu d-none d-md-block">
								<span>
									<img src={selectedFlag} alt={langText} className="img-fluid" />{langText}
								</span>
								<ul>
									<li><img onClick={() => changeLanguage('en', englishFlag, 'EN')} src={englishFlag} alt="English" className="img-fluid" />EN</li>
									<li><img onClick={() => changeLanguage('es', spanishFlag, 'ES')} src={spanishFlag} alt="Spanish" className="img-fluid" />ES</li>
									<li><img onClick={() => changeLanguage('tr', turkishFlag, 'TR')} src={turkishFlag} alt="Turkish" className="img-fluid" />TR</li>
								</ul>	
							</div>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default NavBar