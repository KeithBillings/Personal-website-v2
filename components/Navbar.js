import Link from "next/link";

import { useRef } from "react";

export default function Navbar() {
	const dropdownTitle = useRef(null);
	const dropdownMenu = useRef(null);

	function handleClick() {
		dropdownTitle.current.classList.toggle("title--active");
		dropdownMenu.current.classList.toggle("dropdown-menu--active");
	}

	return (
		<nav className="navbar">
			<h1 className="logo">Keith Billings</h1>

			<div className="menu">
				<Link href={"/"}>
					<a className="menu-item">Home</a>
				</Link>

				<div className="dropdown">
					<p className="title menu-item" onClick={handleClick} ref={dropdownTitle}>
						<span>Portfolio</span>
						<svg height={10} width={10}>
							<polygon points="5,10 0,0 10,0" fill="rgba(255,255,255,.5)" />
						</svg>
					</p>

					<div className="dropdown-menu" ref={dropdownMenu}>
						<Link href={"/portfolio/webdevelopment"}>
							<a className="menu-item">Web Development</a>
						</Link>
						<Link href={"/portfolio/photography"}>
							<a className="menu-item">Photography</a>
						</Link>
					</div>
				</div>

				<Link href={"/about"}>
					<a className="menu-item">About</a>
				</Link>
			</div>
		</nav>
	);
}
