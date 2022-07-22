import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Faq from './components/Faq';
import Team from './components/Team';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './components/i18n';

function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Services />
			<Portfolio />
			<Faq />	
			<Team />	
			<Brands />
			<Contact />
			<Newsletter />
			<Footer />
			<BackToTop />
		</>
	);
}

export default App;
