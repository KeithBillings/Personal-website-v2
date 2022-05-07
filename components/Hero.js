import { useState, useEffect, useRef, useMemo } from "react";

export default function Hero() {
	const [carouselSlide, setCarouselSlide] = useState(0);

	const slide1 = useRef(null);
	const slide2 = useRef(null);
	const slide3 = useRef(null);
	const slide4 = useRef(null);

	const allSlides = useMemo(() => [slide1, slide2, slide3, slide4], []);

	useEffect(() => {
		allSlides.map((slide, index) => {
			if (index === carouselSlide) {
				slide.current.classList.add("hero__carousel__item--active");
			} else {
				slide.current.classList.remove("hero__carousel__item--active");
			}
		});
	}, [allSlides, carouselSlide]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCarouselSlide((slide) => {
				if (slide < allSlides.length - 1) {
					return slide + 1;
				} else {
					return (slide = 0);
				}
			});
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	function handleHeroScrollClick() {
		const elementToScrollTo = document.querySelector(".nav-cards");
		elementToScrollTo.scrollIntoView();
	}

	return (
		<div className="hero">
			<div className="hero__card">
				<h1 className="hero__title">Keith Billings</h1>
				<div className="hero__carousel">
					<p className="hero__carousel__item" ref={slide1}>
						Web Development
					</p>
					<p className="hero__carousel__item" ref={slide2}>
						Photography
					</p>
					<p className="hero__carousel__item" ref={slide3}>
						Software Engineering
					</p>
					<p className="hero__carousel__item" ref={slide4}>
						Consulting
					</p>
				</div>
			</div>
			<div className="hero__scroll-down" onClick={handleHeroScrollClick}>
				<svg height={15} width={15}>
					<polygon points="7.5,15 0,0 15,0" fill="rgba(255,255,255,.5)" />
				</svg>
			</div>
		</div>
	);
}
