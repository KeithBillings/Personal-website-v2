import Head from "next/head";
import Layout from "../components/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Keith Billings</title>
				<meta name="keywords" content="Keith Billings, web development, programming, software, developer, html, scss, css, React, Next.js, front end" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;

// This component wraps around the other page components
// Here you can add layouts, global styles, etc
