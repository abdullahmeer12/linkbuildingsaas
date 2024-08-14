import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbTwo from "../common/breadcrumb/BreadcrumbTwo";
import BlogGrid from "../components/blog/BlogGrid";
// import FooterThree from "../common/footer/FooterThree";
import Link from "next/link";
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

      {/* <section className="blog_pg-sec pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="blog-grid__single mb-30">
                <div className="blog-grid__single-img">
                  <Link href="/blog-details">
                    <img src="/assets/img/blog/1.jpg" alt="Blog Img" />
                  </Link>
                </div>
                <div className="blog-grid__single-content">
                  <div className="postbox__meta">
                    <span>
                      <i className="fa-light fa-calendar-lines"></i>March
                      24,2023
                    </span>
                  </div>
                  <h2>
                    <Link href="/blog-details">
                      Trends to Watch Staying Ahead in the Ever-Changing Digital
                      Landscape.
                    </Link>
                  </h2>
                  <div className="btn-box postbox__read-more">
                    <Link
                      href="/blog-details"
                      className="tp-btn postbox__more-btn"
                    >
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <FooterOne />
    </>
  );
}
