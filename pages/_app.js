import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

// This component wraps around the other page components 
// Here you can add layouts, global styles, etc