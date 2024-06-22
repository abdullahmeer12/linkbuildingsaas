import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import QuoteFormOne from "../components/quote-form/QuoteFormOne";
import ContactMap from "../components/contact/ContactMap";
import FooterThree from "../common/footer/FooterThree";
import IntegrationsOne from "@/components/integrations/IntegrationsOne";
import QuoteFormTwo from "@/components/quote-form/QuoteFormTwo";
import FooterOne from "@/common/footer/FooterOne";

export default function ContactPage() {
	return (
		<>
			<SEO pageTitle={"Contact Us"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Contact Us"
                currentPage="Contact Us" 
            />
			<div className="mt-80">
				<QuoteFormTwo/>
			</div>
			{/* <ContactMap /> */}

			<IntegrationsOne />
			
			<FooterOne />
		</>
	);
}