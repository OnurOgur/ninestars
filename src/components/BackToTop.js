import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect } from 'react';

function BackToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})

		window.scrollTo({top: 0})
	}, []);

	return (
		<>
		{showTopBtn && 
		<div className="back-to-top" onClick={() => window.scrollTo({top: 0})}>
			<BsArrowUp />
		</div>}
		</>
		
	)
}

export default BackToTop