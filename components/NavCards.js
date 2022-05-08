import NavCard from "./NavCard";

import sampleImage1 from "../public/sample/sample-image-1.jpg";
import sampleImage2 from "../public/sample/sample-image-2.jpg";
import sampleImage3 from "../public/sample/sample-image-3.jpg";

export default function NavCards() {
	const webDevImages = [sampleImage1, sampleImage2, sampleImage3];

	const webDevContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit, esse ad dolorem odit autem.";
	const photographyContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit, esse ad dolorem odit autem.";
	const aboutMeContent = "Born and raised in Portland, Oregon. Read the journey of Keith Billings. From firefighting, to building maintenance, and now thriving in tech.";

	return (
		<div className="nav-cards">
			<h2 className="nav-cards__title">Categories</h2>
			<NavCard title={"Web Development"} images={webDevImages} content={webDevContent} path={"/portfolio/webdevelopment"} buttonText={`Say "Hello" to my "World"`} />
			<NavCard title={"Photography"} images={webDevImages} content={photographyContent} path={"/portfolio/photography"} buttonText={"Peer through the lens"} />
			<NavCard title={"About Me"} images={webDevImages} content={aboutMeContent} path={"/about"} buttonText={"Learn more"} />
		</div>
	);
}