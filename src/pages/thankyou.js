import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import ThankYouContent from "../components/thankyou/ThankYouContent"; 
import FooterOne from "@/common/footer/FooterOne";

export default function ThankYou() {
	return (
		<>
			<SEO pageTitle={"Thank You Page"} />
			<HeaderOne />
			<ThankYouContent />
			<FooterOne />
		</>
	);
}