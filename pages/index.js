import Hero from "../components/Hero";
import NavCards from "../components/NavCards";
import HomePageContactBlade from "../components/HomePageContactBlade";
import CompaniesWorkedWith from "../components/CompaniesWorkedWith";

export default function Home() {
	return (
		<div className="home-page">
			<Hero />
			<NavCards />
			<HomePageContactBlade />
			<CompaniesWorkedWith />
		</div>
	);
}
