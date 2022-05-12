import NavCard from "./NavCard";

import sampleImage1 from "../public/images/fullsize/cherry-blossoms.jpg";

import photography1 from "../public/images/thumbnail/photography-1.jpg";
import photography2 from "../public/images/thumbnail/photography-2.jpg";
import photography3 from "../public/images/thumbnail/photography-3.jpg";
import photography4 from "../public/images/thumbnail/photography-4.jpg";

import keith1 from "../public/images/thumbnail/keith-1.jpg";
import keith2 from "../public/images/thumbnail/keith-2.jpg";
import keith3 from "../public/images/thumbnail/keith-3.jpg";

export default function NavCards() {
	const webDevImages = [sampleImage1, sampleImage1, sampleImage1];
	const photographyImages = [photography1, photography2, photography3, photography4];
	const aboutImages = [keith1, keith2, keith3];

	const webDevContent = "Employed at award winning company, Brandlive. Front-end specialist with a knack for problem solving.";
	const photographyContent = "14 years of experience, began freelance in 2020. Specialize in portraits.";
	const aboutMeContent = "Born and raised in Portland, Oregon. Read the journey of Keith Billings. From firefighting, to building maintenance, and now thriving in tech.";

	return (
		<div className="nav-cards">
			<h2 className="nav-cards__title">Categories</h2>
			<NavCard title={"Web Development"} images={webDevImages} content={webDevContent} path={"/portfolio/webdevelopment"} buttonText={`Say "Hello" to my "World"`} />
			<NavCard title={"Photography"} images={photographyImages} content={photographyContent} path={"/portfolio/photography"} buttonText={"Peer through the lens"} />
			<NavCard title={"About"} images={aboutImages} content={aboutMeContent} path={"/about"} buttonText={"Learn more"} />
		</div>
	);
}
