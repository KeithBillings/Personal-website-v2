import Image from "next/image";
import Link from "next/link";
import Keith from "../public/images/small/keith.jpg";

export default function HomePageContactBlade() {
	return (
		<div className="home-page-contact-blade">
			<Image className="home-page-contact-blade__portrait" src={Keith} alt="Keith" />
			<div className="home-page-contact-blade__content">
				<h2>Contact</h2>
				<p>
					<strong>Email: </strong>
					<a href="mailto:keithbillingsbusiness@gmail.com">keithbillingsbusiness@gmail.com</a>
				</p>
				<p>
					<strong>Github: </strong>
					<a href="https://github.com/keithbillings">github.com/keithbillings</a>
				</p>
				<p>
					<strong>Instagram: </strong>
					<a href="https://www.instagram.com/keithbillingsphotography/">instagram.com/keithbillingsphotography</a>
				</p>
				{/* <Link href={"/contact"}>
					<a className="home-page-contact-blade__content__button">Fill out contact form</a>
				</Link> */}
			</div>
		</div>
	);
}
