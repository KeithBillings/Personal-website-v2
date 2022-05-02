import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="navbar">
			<h6>Keith Billings</h6>
			<Link href={"/"}>Home</Link>
			<div className="navbar__dropdown">
				<Link href={"/portfolio/webdevelopment"}>Web Development</Link>
				<Link href={"/portfolio/photography"}>Photography</Link>
			</div>
			<Link href={"/about"}>About</Link>
		</nav>
	);
}
