import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<main className="layout">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
