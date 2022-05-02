import Navbar from "./Nav";
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
