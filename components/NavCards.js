import NavCard from "./NavCard";

import sampleImage1 from "../public/sample/sample-image-1.jpg";
import sampleImage2 from "../public/sample/sample-image-2.jpg";
import sampleImage3 from "../public/sample/sample-image-3.jpg";

export default function NavCards() {
	const webDevImages = [sampleImage1, sampleImage2, sampleImage3];

	const content =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impeditsum rem, deserunnima aliquid earum aut, molestiae voluptatum. Suscipit, aut facere? Eveniet distinctio voluptate consequuntur possimus ratione quasi. Vero qui consequatur odio explicabo. Fugit quo ex adipisci at inventore porro blanditiis, assumenda quos suscipit, nemo neque animi pariatur illum, esse ad dolorem odit autem.";

	return (
		<div className="nav-cards">
			<NavCard title={"Web Development"} images={webDevImages} content={content} path={"/portfolio/webdevelopment"} buttonText={`Say "Hello" to my "World"`} />
			<NavCard title={"Photography"} images={webDevImages} content={content} path={"/portfolio/photography"} buttonText={"Peer through the lens"} />
			<NavCard title={"About Me"} images={webDevImages} content={content} path={"/about"} buttonText={"Learn more"} />
		</div>
	);
}
