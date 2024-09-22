import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbTwo from "../common/breadcrumb/BreadcrumbTwo";
import BlogGrid from "../components/blog/BlogGrid";
import FooterThree from "../common/footer/FooterThree";
import FooterOne from "@/common/footer/FooterOne";

export default function BlogPage() {
	return (
		<>
			<SEO pageTitle={"Blog Page"} />
			<HeaderOne />
			<BreadcrumbTwo 
                heading="The SEO Ranking Blog"
                currentPage="Stay Updated with the Latest News and Best Strategies" 
            />
			<BlogGrid />
			<FooterOne />
		</>
	);
}