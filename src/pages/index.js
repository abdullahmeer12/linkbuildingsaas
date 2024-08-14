import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
// import AboutOne from "../components/about/AboutOne";
import AboutThree from "../components/about/HowWeWork.js";
// import AboutTwo from "../components/about/AboutTwo";
import BrandOne from "../components/brand/BrandOne";
// import FaqTwo from "../components/faq/FaqTwo";
import FaqThree from "../components/faq/FaqThree";
import IntegrationsOne from "../components/integrations/IntegrationsOne";
// import BlogTwo from "../components/blog/BlogTwo";
// import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import ServiceTwo from "@/components/service/ServiceTwo";
import ServiceThree from "@/components/service/ServiceThree";
import FaqOne from "@/components/faq/FaqOne"; 
import QuoteFormTwo from "@/components/quote-form/QuoteFormTwo";


export default function Home() {
	
	
	return (
		<>
			<SEO pageTitle={"Home"} />
			<HeaderOne />
      		<HeroOne />
			{/* <AboutOne /> */}
			<BrandOne />
			<AboutThree/> 
			<IntegrationsOne />
			<TestimonialTwo/>
			<ServiceTwo/>
			<FaqThree />
			<ServiceThree/>
			<FaqOne />
			{/* <BlogTwo /> */}
			{/* <CtaOne /> */}
			<QuoteFormTwo/>
			<FooterOne />
		</>
	);
}