import AdidasLogo from "./svgs/AdidasLogo";
import AvedaLogo from "./svgs/AvedaLogo";
import ColumbiaSportswearLogo from "./svgs/ColumbiaSportswearLogo";
import GoogleLogo from "./svgs/GoogleLogo";
import HyundaiLogo from "./svgs/HyundaiLogo";
import MaryKayLogo from "./svgs/MaryKayLogo";
import NikeLogo from "./svgs/NikeLogo";
import NintendoLogo from "./svgs/NintendoLogo";
import NorthFaceLogo from "./svgs/NorthFaceLogo";
import TheBWordLogo from "./svgs/TheBWordLogo";

export default function CompaniesWorkedWith() {
	return (
		<div className="companies-worked-with">
			<h2 className="companies-worked-with__title">Companies I&apos;ve Worked With</h2>
			<div className="companies-worked-with__logos">
				<AdidasLogo />
				<AvedaLogo />
				<ColumbiaSportswearLogo />
				<GoogleLogo />
				<HyundaiLogo />
				<MaryKayLogo />
				<NikeLogo />
				<NintendoLogo />
				<NorthFaceLogo />
				<TheBWordLogo />
			</div>
		</div>
	);
}
