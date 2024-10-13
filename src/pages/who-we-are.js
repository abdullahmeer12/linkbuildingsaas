import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import AboutThree from "../components/about/AboutThree";
import SkillsOne from "../components/skills/SkillsOne";
import TestimonialSix from "../components/testimonial/TestimonialSix";
import IntegrationsOne from "../components/integrations/IntegrationsOne";
import FooterThree from "../common/footer/FooterThree";
import AboutTwo from "@/components/about/AboutTwo";
import FooterOne from "@/common/footer/FooterOne";
import TeamOne from "@/components/team/TeamOne";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About Us"} />
			<HeaderOne />
			<AboutThree />  
			<TeamOne/>
			<FooterOne />
		</>
	);
}