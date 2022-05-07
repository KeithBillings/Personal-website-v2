import NavCard from "./NavCard";

import sampleImage1 from "../public/sample-image-1.jpg";
import sampleImage2 from "../public/sample-image-2.jpg";
import sampleImage3 from "../public/sample-image-3.jpg";

export default function NavCards() {
	const webDevImages = [sampleImage1, sampleImage2, sampleImage3];

	const content =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur impedit, nemo unde ipsa, dolorum ex illo autem porro quo earum laborum nam atque. Laudantium unde dolorum facilis fugiat. Omnis cum sapiente nesciunt impedit sequi at? Tempora maxime nulla pariatur dolores dolorum obcaecati ad debitis accusamus fuga officia perspiciatis, repellendus ex necessitatibus deserunt ea optio quis sed nisi vel, praesentium unde consequatur tempore totam? Ipsum rem, deserunt hic unde ducimus, obcaecati natus nostrum dolorem aspernatur temporibus dolor tempore minima aliquid earum aut, molestiae voluptatum. Suscipit, aut facere? Eveniet distinctio voluptate consequuntur possimus ratione quasi. Vero qui consequatur odio explicabo. Fugit quo ex adipisci at inventore porro blanditiis, assumenda quos suscipit, nemo neque animi pariatur illum, esse ad dolorem odit autem."; ;

	return (
		<div className="nav-cards">
			<NavCard title={"card 1"} images={webDevImages} content={content} />
			<NavCard title={"card 2"} images={webDevImages} content={content} />
			<NavCard title={"card 3"} images={webDevImages} content={content} />
		</div>
	);
}
