import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavCard({ title, images, content, path, buttonText }) {
	const [activeSlide, setActiveSlide] = useState(1);

	useEffect(() => {
		setInterval(() => {
			setActiveSlide((slide) => {
				return Math.floor(Math.random() * images.length);
			});
		}, 8000);
	}, []);

	return (
		<div className="nav-card">
			<div className="nav-card__slides">
				{images.map((image, index) => {
					return (
						<div className={activeSlide === index ? `nav-card__slides__slide nav-card__slides__slide--active` : `nav-card__slides__slide`} key={index}>
							<Image src={image} alt="slide" />
						</div>
					);
				})}
			</div>

			<div className="nav-card__content">
				<h2 className="nav-card__title">{title}</h2>
				<p>{content}</p>
				<Link href={path}>
					<a className="nav-card__link">{buttonText}</a>
				</Link>
			</div>
		</div>
	);
}
