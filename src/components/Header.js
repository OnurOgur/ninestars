import { Container, Row, Col } from 'react-bootstrap'
import { BsList, BsChevronDown, BsX } from "react-icons/bs";
import { useState } from 'react';

function NavBar() {
	const [isActive, setActive] = useState(false);
	const [dropdownActive, setDropdownActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive)
	}
	const toggleDropdown = () => {
		setDropdownActive(!dropdownActive)
	}

	return (
		<header>
			<Container>
				<Row>
					<Col xs={6} md={3}>
						<div className="logo"><a href="/">Ninestars</a></div>						
					</Col>
					<Col xs={6} className="d-block d-md-none">
						<div className="menu-toggler" onClick={toggleClass}>
							<BsList />
						</div>
					</Col>
					<Col md={9}>
						<nav className={isActive ? "active" : null}>
							<BsX className="menu-close d-block d-md-none" onClick={toggleClass} />
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="#aboutUs">About Us</a></li>
								<li><a href="#services">Services</a></li>
								<li><a href="#portfolio">Portfolio</a></li>
								<li><a href="#team">Team</a></li>
								<li>
									<span onClick={toggleDropdown}>Dropdown <BsChevronDown /></span>
									<ul className={dropdownActive ? "active dropdown-list" : "dropdown-list"}>
										<li><a href="/">Subdropdown</a></li>
										<li><a href="/">Subdropdown</a></li>
										<li><a href="/">Subdropdown</a></li>
										<li><a href="/">Subdropdown</a></li>
										<li><a href="/">Subdropdown</a></li>
									</ul>
								</li>
								<li><a href="#contact">Contact</a></li>
								<li><a href="getStarted" className='btn rounded-pill'>Get Started</a></li>
							</ul>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default NavBar