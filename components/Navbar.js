import Link from "next/link";

import { useRef } from "react";

export default function Navbar() {
	const logo = useRef(null);
	const desktopDropdownTitle = useRef(null);
	const desktopDropdownMenu = useRef(null);
	const mobileHamburger = useRef(null);
	const mobileDropdownMenu = useRef(null);

	function handleDesktopClick() {
		desktopDropdownTitle.current.classList.toggle("desktop-menu__dropdown__title--active");
		desktopDropdownMenu.current.classList.toggle("desktop-menu__dropdown__menu--active");
	}

	function handleMobileClick() {
		logo.current.classList.toggle("logo--mobile-menu-active");
		mobileHamburger.current.classList.toggle("mobile-menu__hamburger--active");
		mobileDropdownMenu.current.classList.toggle("mobile-menu__dropdown--active");
	}

	return (
		<nav className="navbar">
			<h1 className="logo" ref={logo}>
				Keith Billings
			</h1>

			<div className="desktop-menu">
				<Link href={"/"}>
					<a className="desktop-menu__menu-item">Home</a>
				</Link>

				<div className="desktop-menu__dropdown">
					<div className="desktop-menu__dropdown__title" onClick={handleDesktopClick} ref={desktopDropdownTitle}>
						<p className="desktop-menu__menu-item">Portfolio</p>
						<svg height={10} width={10}>
							<polygon points="5,10 0,0 10,0" fill="rgba(255,255,255,.5)" />
						</svg>
					</div>

					<div className="desktop-menu__dropdown__menu" ref={desktopDropdownMenu}>
						<Link href={"/portfolio/webdevelopment"}>
							<a className="desktop-menu__menu-item">Web Development</a>
						</Link>
						<Link href={"/portfolio/photography"}>
							<a className="desktop-menu__menu-item">Photography</a>
						</Link>
					</div>
				</div>

				<Link href={"/about"}>
					<a className="desktop-menu__menu-item">About</a>
				</Link>
			</div>

			<div className="mobile-menu">
				<div className="mobile-menu__hamburger" onClick={handleMobileClick} ref={mobileHamburger}>
					<div className="top-bun"></div>
					<div className="patty"></div>
					<div className="bottom-bun"></div>
				</div>
				<div className="mobile-menu__dropdown" ref={mobileDropdownMenu}>
					<div className="mobile-menu__dropdown__links">
						<Link href={"/"}>
							<a className="mobile-menu__dropdown__links__menu-item" onClick={handleMobileClick}>
								Home
							</a>
						</Link>
						<Link href={"/portfolio/webdevelopment"}>
							<a className="mobile-menu__dropdown__links__menu-item" onClick={handleMobileClick}>
								Web Development
							</a>
						</Link>
						<Link href={"/portfolio/photography"}>
							<a className="mobile-menu__dropdown__links__menu-item" onClick={handleMobileClick}>
								Photography
							</a>
						</Link>
						<Link href={"/about"}>
							<a className="mobile-menu__dropdown__links__menu-item" onClick={handleMobileClick}>
								About
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
